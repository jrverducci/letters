import React, { Component } from 'react';
import './Home.css';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, InputGroup, Glyphicon, ButtonToolbar } from 'react-bootstrap';
import * as validation from '../utils/validation';
import * as userServices from '../services/usersServices';
import swal from 'sweetalert2';
import { connect } from 'react-redux';
import {setUser} from '../actions/users';


class LogIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: {
                input: false,
                value: ''
            },
            password: {
                input: false,
                value: ''
            },
            passwordType: "password",
        }
    
        this.handleChange = this.handleChange.bind(this); 
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.goBack = this.goBack.bind(this);
        this.login = this.login.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }

    handleChange(e) {
        this.setState({ 
            [e.target.name]: {value:e.target.value, input: true}});
      }

      show(){
          this.setState({
              passwordType: "text"
          })
      }

      hide(){
          this.setState({
              passwordType: "password"
          })
      }

      goBack(){
        this.props.history.goBack()
    }

    keyPressed(event) {
        let code = event.keyCode || event.which;
        if (code === 13) {
          this.onLogin();
        }
      }

    onLogin(){
        if(this.state.password.value === ''){
            swal({
                title: 'Missing Password',
                text: "Please enter your password.",
                type: 'error',
                showCancelButton: false,
                confirmButtonColor: 'green',
                confirmButtonText: 'Close',
                background: '#050f35'
            })
        }
        else if(this.state.email.value === ''){
            swal({
                title: 'Missing Email',
                text: "Please enter your email address.",
                type: 'error',
                showCancelButton: false,
                confirmButtonColor: 'green',
                confirmButtonText: 'Close',
                background: '#050f35'
            })
        }
        else{
        const email =this.state.email.value
        userServices.emailCheck(email)
        .then((response) => {
            console.log(response)
        })
        .then(() => {
            this.login()
        })
        .catch((error) => {
            if(error.response.status === 500){
                swal({
                    title: 'Incorrect Email',
                    text: "Email not found. Please go to Registration page to sign up with this email.",
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonColor: 'green',
                    confirmButtonText: 'Close',
                    background: '#050f35'
                }) 
            }})
    }
}

    login(){
        const data = {
            email: this.state.email.value,
            password: this.state.password.value
        }
        userServices.login(data)
        .then((response) => {
            this.props.setUser(response.item[0])
            return response
        })
        .then((response) => {
            var now = new Date();
               now.setMonth( now.getMonth() + 2 );
                document.cookie = "user="+ response.item[0].id + ";expires="  + now.toUTCString() + ";"
            this.props.history.push('/home')
        })
        .catch((error) => {
            if(error.response.status === 500){
                swal({
                    title: 'Incorrect Password',
                    text: "Password entered does not match email",
                    type: 'error',
                    showCancelButton: false,
                    confirmButtonColor: 'green',
                    confirmButtonText: 'Close',
                    background: '#050f35'
                }) 
            }})

    }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
        <h1>
            Log In
          </h1>
          <form>
        <FormGroup validationState={this.state.email.input && (validation.email(this.state.email.value) ? "success" : "error")}>
          <ControlLabel>PARENT Email</ControlLabel>
          <FormControl
            type="text"
            name="email"
            value={this.state.email.value}
            placeholder="Enter Parent's Email"
            onChange={this.handleChange}
            onKeyPress={this.keyPressed}
          />
          {this.state.email.input && !validation.email(this.state.email.value) ? <HelpBlock style={{fontSize: '10px'}}>Enter Valid Email.</HelpBlock> : null}
        </FormGroup>
        
        <FormGroup validationState={this.state.password.input && (validation.password(this.state.password.value) ? "success" : "error")}>
        <ControlLabel>Password 
          </ControlLabel>
          <InputGroup>

          <FormControl
            type={this.state.passwordType}
            name="password"
            value={this.state.password.value}
            placeholder="Enter Password"
            onChange={this.handleChange}
            onKeyPress={this.keyPressed}
            
          />
          <InputGroup.Addon>
          {this.state.passwordType === "password" ? <Glyphicon glyph="eye-open" bsStyle="success" bsSize="xsmall" onClick={this.show} /> : <Glyphicon glyph="eye-close" bsStyle="danger" bsSize="xsmall" onClick={this.hide} /> }
      </InputGroup.Addon>
      </InputGroup>
          {this.state.password.input && !validation.password(this.state.password.value) ? <HelpBlock style={{fontSize: '10px'}}>Must contain at least 1 number and 1 symbol</HelpBlock> : null}
        
        </FormGroup>
      </form>
      <div className="row">
      <ButtonToolbar>
            <Button bsStyle="success" bsSize="large" onClick={this.onLogin}>Login</Button>
            <Button bsStyle="danger" bsSize="large" onClick={this.goBack}>Go Back</Button>
    </ButtonToolbar>
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUser(user))
})

export default connect(null, mapDispatchToProps)(LogIn);