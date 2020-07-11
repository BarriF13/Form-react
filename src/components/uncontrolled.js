import React, { Component } from 'react';
//uncontrolled didn't use state --and it's more js like
class Uncontrolled extends Component {

   
    handleSubmit = (e) => {
        e.preventDefault();

        const values = {
            name: this.name.value,
            lastName: this.lastName.value
        }
        console.log(values);
    }
   
    render() {
        return (
            <div className="container">
                <form >
                    <div className="form_element">
                        <label htmlFor="">Enter name</label>
                        <input
                         type="text"
                         ref={input => this.name = input}
                    />
                    </div>

                    <div className="form_element">
                        <label htmlFor="">Enter Lastname</label>
                        <input 
                        type="text"
                        ref={input => this.lastName = input}
                    />
                    </div>
                    <button onClick={this.handleSubmit}>Sign in</button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;