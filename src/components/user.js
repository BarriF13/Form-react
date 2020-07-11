import React, { Component } from 'react';
import FormFields from '../widgets/forms/formFields'
class User extends Component {

    state = {
        formData: {
            name:{
                element:'input',
                value:'',
                label:true,
                labelText:'Name',
                config:{
                    name:'name_input',
                    text:'text',
                    placeholder:  'Enter your name'
                }
            },
            lastName:{
                element:'input',
                value:'',
                label:true,
                labelText:'lastName',
                config:{
                    name:'name_input',
                    text:'text',
                    placeholder:  'Enter your  Last name'
                }
            }
        }
    }

    render(){
        return(
            <div className="container">
              <form onSubmit="{this.submitForm}">

                <FormFields
                    formData={this.state.formData}
                />


                  <button type="submit">Submit</button>
              </form>
            </div>
        )
    }
}

export default User;