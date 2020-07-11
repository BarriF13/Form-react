import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastName: ''
    }
    handleNameChange =(e)=>{
       this.setState({
           name:e.target.value
       })
    }
    handleLastNameChange=(e)=>{
        this.setState({
            lastName:e.target.value
        })
    }
    //main job is stopping the form to be submited
    onSubmitHandler =(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form_element">
                        <label htmlFor="">Enter name</label>
                        <input type="text"
                        onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </div>

                    <div className="form_element">
                        <label htmlFor="">Enter Lastname</label>
                        <input type="text"
                        onChange={this.handleLastNameChange}
                        value={this.state.lastName}
                    />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Controlled;