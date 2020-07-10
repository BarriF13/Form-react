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

    render() {
        return (
            <div className="container">
                <form action="">
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
                </form>
            </div>
        )
    }
}

export default Controlled;