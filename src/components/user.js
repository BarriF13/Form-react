import React, { Component } from 'react';
import FormFields from '../widgets/forms/formFields';
import {firebaseDB} from '../Firebase';
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
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastName:{
                element:'input',
                value:'',
                label:true,
                labelText:'lastName',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder: 'Enter your  Last name'
                },
                validation:{
                    required:true,
                    
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            message:{
                element:'textarea',
                value:'',
                label:true,
                labelText:'write your msg',
                config:{
                    name:'message_input',
                    rows:4,
                    cols:36
                },
                validation:{
                    required:false,
                    
                },
                valid:true
               
            },
            age:{
                element:'select',
                value:'',
                label:true,
                labelText:'Age',
                config:{
                    name:'age_input',
                    option:[
                        { val:'1', text:'10-20'},
                        { val:'2', text:'20-30'},
                        { val:'3', text:'+30'},
                    ]
                },
                validation:{
                    required:false,
                    
                },
                valid:true
            }
        }
    }
    updateForm = (newState) => {
        this.setState({
            formData:newState
        })
    }
    submitForm =(e) =>{
        e.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }
        for(let key in this.state.formData){
          formIsValid = this.state.formData[key].valid && formIsValid; 
        }

        if(formIsValid){
            // console.log(dataToSubmit);
            firebaseDB.ref('users').push(dataToSubmit)
            .then(()=>{
                console.log('new user added');
            })
            .catch(e => {
                console.log(e);
            })
                
        }
   
        // console.log(dataToSubmit);
        //now data is ready to submit anywhere
        //for example we can do :
        //axios.post(url, dataToSubmit)
    }
    render(){
        return(
            <div className="container">
              <form onSubmit={this.submitForm}>

                <FormFields
                    formData={this.state.formData}
                    onBlur={(newState)=> this.updateForm(newState)}
                    change={(newState)=> this.updateForm(newState)}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
        )
    }
}

export default User;