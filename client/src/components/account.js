import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import * as usersServices from "../services/usersServices";
import {connect} from 'react-redux';
import swal from 'sweetalert2';
import {clearState} from '../actions/logout';
import {withCookies} from 'react-cookie';


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
        const {cookies} = this.props
      let cookieValue = cookies.get("user")
        let id = this.props.user.id || cookieValue
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
        const { cookies } = this.props
        let cookieValue = cookies.get("user")
        let id = this.props.user.id || cookieValue
        swal({
            title: "Are you sure you want to delete this account?",
            text: "You won't be able to get this back and will lose all attached letters!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "red",
            cancelButtonColor: 'green',
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it!",
            background: '#050f35'
        }).then(result => {
            if (result.value) {
                usersServices.del(id)
                    .then(() => {
                        let now = new Date();
                        now.setMonth(now.getMonth() - 2);
                        document.cookie = "user=;expires=" + now.toUTCString() + ";"
                        this.props.clearState()
                        this.props.history.push('/')
                    })
                    .catch(console.log);
            }
        });
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

  const mapDispatchToProps = dispatch => ({
    clearState: (val) => dispatch(clearState(val))
  })
  

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Account));