import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import * as usersServices from "../services/usersServices";
import {connect} from 'react-redux';


class Account extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo : []
        } 
        this.onUpdate = this.onUpdate.bind(this);
        this.goHome = this.goHome.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);  
    }

    componentDidMount() {
        let id = this.props.user.id
        usersServices.getById(id)
        .then((response) => {
            this.setState({
                userInfo: response.item
            })
        })
    }

    goHome(){
        this.props.history.push('/home')
    }

    onUpdate(){
        this.props.history.push('/account/update')   
    }

    deleteAccount() {
        let id = this.props.user.id
        usersServices.del(id)
        .then(()=> {
            this.props.history.push('/')
        })
    }

  render() {
      const account = this.state.userInfo.map(item => {
          return(
              <div>
              <p>Name: {item.firstName + ' ' + item.lastName}</p>
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
            <Button bsStyle="info" bsSize="large" onClick={this.goHome}>Go Home</Button>
    </ButtonToolbar>
      </div>
      </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    user: state.user
  })

export default connect(mapStateToProps)(Account);