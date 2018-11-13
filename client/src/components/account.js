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
        this.deleteAccount = this.deleteAccount.bind(this);  
    }

    componentDidMount() {
        let id = 3
        usersServices.getById(3)
        .then((response) => {
            this.setState({
                userInfo: response.items
            })
        })
    }

    goBack(){
        this.props.history.goBack()
    }

    onUpdate(){
        this.props.history.push('/account/update')   
    }

    deleteAccount() {
        let id = 3
        usersServices.del(id)
        .then(()=> {
            this.props.history.push('/')
        })
    }

  render() {
      const account = this.state.userInfo.map(item => {
          return(
              <div>
              <p>Name: {item.firstName + '' + item.lastName}</p>
              <p>Email: {item.email}</p>
              </div>
          )
      })
    return (
      <div className="Home">
      <div className="Home-header">
        <h1>
            Account Information
          </h1>
          {account}
      <div className="row">
      <ButtonToolbar>
            <Button bsStyle="success" bsSize="large" onClick={this.onUpdate}>Update Account</Button>
            <Button bsStyle="danger" bsSize="large" onClick={this.deleteAccount}>Delete Account</Button>
            <Button bsStyle="info" bsSize="large" onClick={this.goBack}>Go Back</Button>
    </ButtonToolbar>
      </div>
      </div>
        </div>
    );
  }
}

export default Account;