import React, { Component } from 'react';
import {firebase, googleAuth } from '../Firebase';
export class Login extends Component {
  state ={
    status:false
  }
  //method for calling firebase Auth
  signIn =()=>{
    firebase.auth().signInWithPopup(googleAuth)
  }

  signOut=()=>{
    firebase.auth().signOut()
  }

  render() {
    return (
      <div>
        <button onClick={this.signIn}>Login</button>
        <button onClick={this.signOut}>Logout</button>
      </div>
    )
  }
}

export default Login;