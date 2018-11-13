import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, InputGroup, Glyphicon, ButtonToolbar } from 'react-bootstrap';
import * as validation from "../utils/validation";
import * as usersServices from "../services/usersServices";

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: {
                input: false,
                value: ''
            },
            lastName: {
                input: false,
                value: ''
            },
            email: {
                input: false,
                value: ''
            },
            password: {
                input: false,
                value: ''
            },
            passwordConfirm: {
                input: false,
                value: ''
            },
            passwordType: "password",
            passwordConfirmType: "password"
        }
        this.handleChange = this.handleChange.bind(this); 
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
        this.hideConfirm = this.hideConfirm.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.goBack = this.goBack.bind(this);  
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

      showConfirm(){
        this.setState({
            passwordConfirmType: "text"
        })
    }

    hideConfirm(){
        this.setState({
            passwordConfirmType: "password"
        })
    }

    goBack(){
        this.props.history.goBack()
    }

    onRegister(){
        const data = {
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            email: this.state.email.value,
            password: this.state.password.value
        }
        usersServices.create(data)
        .then((response) => 
            console.log(response))
        .then(()=>{
            this.props.history.push('/login')
        })
        .catch(console.log)    
    }

  render() {
    return (
      <div className="Home">
      <div className="Home-header">
        <h1>
            Register
          </h1>
          <form>
        <FormGroup validationState={this.state.firstName.input && (validation.name(this.state.firstName.value) ? "success" : "error")}>
          <ControlLabel>PARENT First Name</ControlLabel>
          <FormControl
            type="text"
            name="firstName"
            value={this.state.firstName.value}
            placeholder="Enter Parent's First Name"
            onChange={this.handleChange}
          />
          {this.state.firstName.input && !validation.name(this.state.firstName.value) ? <HelpBlock style={{fontSize: '12px'}}>Name must be between 3-50 characters.</HelpBlock> : null}
        </FormGroup>
        <FormGroup validationState={this.state.lastName.input && (validation.name(this.state.lastName.value) ? "success" : "error")}>          
        <ControlLabel>PARENT Last Name</ControlLabel>
          <FormControl
            type="text"
            name="lastName"
            value={this.state.lastName.value}
            placeholder="Enter Parent's Last Name"
            onChange={this.handleChange}
          />
          {this.state.lastName.input && !validation.name(this.state.lastName.value) ? <HelpBlock style={{fontSize: '12px'}}>Name must be between 3-50 characters.</HelpBlock> : null}
        </FormGroup>
        <FormGroup validationState={this.state.email.input && (validation.email(this.state.email.value) ? "success" : "error")}>
          <ControlLabel>PARENT Email</ControlLabel>
          <FormControl
            type="text"
            name="email"
            value={this.state.email.value}
            placeholder="Enter Parent's Email"
            onChange={this.handleChange}
          />
          {this.state.email.input && !validation.email(this.state.email.value) ? <HelpBlock style={{fontSize: '12px'}}>Enter Valid Email.</HelpBlock> : null}
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
            
          />
          <InputGroup.Addon>
          {this.state.passwordType === "password" ? <Glyphicon glyph="eye-open" bsStyle="success" bsSize="xsmall" onClick={this.show} /> : <Glyphicon glyph="eye-close" bsStyle="danger" bsSize="xsmall" onClick={this.hide} /> }
      </InputGroup.Addon>
      </InputGroup>
          {this.state.password.input && !validation.password(this.state.password.value) ? <HelpBlock style={{fontSize: '10px'}}>Must contain at least 1 number and 1 symbol</HelpBlock> : null}
        
        </FormGroup>
        <FormGroup validationState={this.state.passwordConfirm.input && (validation.passwordConfirm(this.state.password.value, this.state.passwordConfirm.value) ? "success" : "error")}>
          <ControlLabel>Confirm Password
          </ControlLabel>
          <InputGroup>
          <FormControl
            type={this.state.passwordConfirmType}
            name="passwordConfirm"
            value={this.state.passwordConfirm.value}
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />
          <InputGroup.Addon>
          {this.state.passwordConfirmType === "password" ? <Glyphicon glyph="eye-open" bsStyle="success" bsSize="xsmall" onClick={this.showConfirm} /> : <Glyphicon glyph="eye-close" bsStyle="danger" bsSize="xsmall" onClick={this.hideConfirm} /> }
      </InputGroup.Addon>
       </InputGroup> 
       {this.state.passwordConfirm.input && !validation.passwordConfirm(this.state.password.value, this.state.passwordConfirm.value) ? <HelpBlock style={{fontSize: '12px'}}>Must match password</HelpBlock> : null}  
       </FormGroup>
      </form>
      <div className="row">
      <ButtonToolbar>
            <Button bsStyle="success" bsSize="large" onClick={this.onRegister}>Register</Button>
            <Button bsStyle="danger" bsSize="large" onClick={this.goBack}>Go Back</Button>
    </ButtonToolbar>
      </div>
      </div>
        </div>
    );
  }
}

export default Register;

