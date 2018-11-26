import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import santaLogo from '../components/santa-logo.png';

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.onRegister = this.onRegister.bind(this);
        this.onLogIn = this.onLogIn.bind(this);
    }

    onRegister(){
        this.props.history.push("/register")
    }

    onLogIn(){
        this.props.history.push("/login")
    }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
        <h1>
            Letters To Santa
          </h1>
          <div className="container-fluid">
          <img src={santaLogo} className="Home-logo" alt="logo" />
          </div>
          <div className="row">
          <ButtonToolbar>
          <Button bsStyle="success" bsSize="large" onClick={this.onRegister}>Register</Button>
          <Button bsStyle="danger" bsSize="large" onClick={this.onLogIn}>Log In</Button>
          </ButtonToolbar>
          </div>
        </header>
      </div>
    );
  }
}

export default LandingPage;