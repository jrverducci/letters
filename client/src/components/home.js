import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Home extends Component {
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
          <img src="http://res.freestockphotos.biz/pictures/17/17382-illustration-of-a-red-santa-hat-pv.png" className="Home-logo" alt="logo" />
          <div className="row">
          <ButtonToolbar>
          <Button bsStyle="danger" bsSize="large" onClick={this.onRegister}>Register</Button>
          <Button bsStyle="success" bsSize="large" onClick={this.onLogIn}>Log In</Button>
          </ButtonToolbar>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;