import React from 'react'
//we are restucturing all the data from form to render it 
const FormFields = (props) => {
  //getting data the data ---------------------------
  const renderFields = () => {
    //turn on formData to array
    const formArray = [];
    for (let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      })
    }
    // console.log(formArray);
    //returning each element sorted for viewing
    return formArray.map((item, i) => {
      return (
        <div key={i} className="form_element">
          {/* making a method to check elements type --item is all the info in name: for example */}
          {renderTemplates(item)}

        </div>
      )
    })

  }
  //checks if we have a label or not
  const showLabel = (show, label) => {
    return show ?
      <label >{label}</label>
      : null;
  }

  //changeHandler event----------------------
  const changeHandler = (e, id, blur) => {
    const newState = props.formData;
    newState[id].value = e.target.value;
    //use blur to stop validation while typing the word
    if (blur) {
      //form validation--valid func receiving data to check
      let validData = validate(newState[id])
      newState[id].valid = validData[0];
      newState[id].validationMessage = validData[1];
    }
    newState[id].touched = blur;

    props.change(newState)
  }
  const validate = (element) => {
    console.log(element);
    let error = [true, ''];

    //rule two min length
    if (element.validation.minLen) {
      const valid = element.value.length >= element.validation.minLen;
      const message = `${!valid ? 'Must be greater than' + element.validation.minLen : ''}`

      error = !valid ? [valid, message] : error
    }


    //rule one if there is any letter
    if (element.validation.required) {
      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required' : ''}`

      error = !valid ? [valid, message] : error
    }
    return error;
  }
  // show validation
  const showValidation = (data) => {
    let errorMessage = null;
    if (data.validation && !data.valid) {
      errorMessage = (
        <div className="label_error">
          {data.validationMessage}
        </div>
      )
    }
    return errorMessage;
  }

  //making the render template function
  const renderTemplates = (data) => {
    let formTemplate = '';
    let values = data.settings; //shortening= data.setting.config and bla 

    //we are creating a switch to check data.setting.element -(data.setting.'input'?)
    switch (values.element) {
      case ('input'):
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <input
              {...values.config}
              value={values.value}
              onBlur={
                (e) => changeHandler(e, data.id, true)
              }
              onChange={
                (e) => changeHandler(e, data.id)
              }
            />
            {showValidation(values)}
          </div>
        )
        break;
      case ('textarea'):
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <textarea
              {...values.config}
              value={values.value}
            
              onChange={
                (e) => changeHandler(e, data.id, false)
              }
            />

          </div>
        )
        break;
      case ('select'):
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <select
              value={values.value}
              name={values.config.name}
              onChange={
                (e) => changeHandler(e, data.id)
              }
            >
              {values.config.option.map((item, i) => {
                return (
                  <option key={i} value={item.val}>
                    {item.text}
                  </option>
                )
              })}
            </select>

          </div>
        )
        break;
      default:
        formTemplate = null
    }
    return formTemplate;
  }

  return (
    <div>
      {renderFields()}

    </div>
  )
}

export default FormFields;
