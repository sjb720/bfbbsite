import React from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Button } from 'react-bootstrap'

export default class Index extends React.Component {

  getCoords = 'http://localhost:3001/taras/coordinates';


  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      login_response:{},
      login_message:""
    }

  }

  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
        this.login()
    } 
}

  login() {

    let data = { username: this.state.username, password: this.state.password }

    let options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3001/crash/login',options)
    .then(res => res.json())
    .then(data => {
      this.setState({ login_response: data })

      if(data.success==true){ // We logged in!
 
        this.setState({login_message:"Successfully logged in."})
        localStorage.setItem("auth", data.auth_key)
        localStorage.setItem("user", data.user)
         
        window.location.href = "/";


      } else {                // Failed to login, uh oh

        this.setState({login_message: data.error})

        // we need to block ips that fail to login too much
      }
    });

  }

  render() {
    return (
      <div>
        <div style={{ width: 300, height: 300, backgroundColor: "white", position: "fixed", borderRadius: 20, textAlign: "center", marginLeft:50,marginTop:50}}>
         <br/> Username<br/>
          <input style={{margin:5}} type="email" onChange={event => this.setState({ username: event.target.value })}></input>
          <br/>Password<br/>
          <input style={{margin:5}} type="password" onChange={event => this.setState({ password: event.target.value })} onKeyPress={this.enterPressed.bind(this)}></input>
          <br></br>
          <Button value="Login" onClick={() => this.login()}>Login</Button>
          <div>
            {this.state.login_message}
          </div>
        </div>
      </div>
    )
  }
}