import React from 'react'

const formFields = (props) => {

  const renderFields = () => {

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
          input
        </div>
      )
    })

  }

  //making the render template function
 const renderTemplates = (data) => {
    let formTemplate = '';
    let values = data.settings; //shortening= data.setting.config and bla 

    //we are creating a switch to check data.setting.element -(data.setting.'input'?)
    switch (values.element) {
      case ('input'):
        <div>
          input
        </div>
        break;
        default:
          formTemplate =null
    }
    return formTemplate;
  }



  return (
    <div>
      {renderFields()}
    </div>
  )
}

export default formFields;
