import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import * as usersServices from "../services/usersServices";

class Account extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo : []
        } 
        this.onUpdate = this.onUpdate.bind(this);
        this.goBack = this.goBack.bind(this);  
    }

    goBack(){
        this.props.history.goBack()
    }

    onUpdate(){
        this.props.history.push('/account/update')   
    }

  render() {
    return (
      <div className="Home">
      <div className="Home-header">
        <h1>
            Account Information
          </h1>
          Name:
          Email:
      <div className="row">
      <ButtonToolbar>
            <Button bsStyle="success" bsSize="large" onClick={this.onUpdate}>Update Account</Button>
            <Button bsStyle="danger" bsSize="large" onClick={this.goBack}>Go Back</Button>
    </ButtonToolbar>
      </div>
      </div>
        </div>
    );
  }
}

export default Account;