import React, { Component } from 'react';
import './Home.css';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, InputGroup, Glyphicon, ButtonToolbar } from 'react-bootstrap';
import * as validation from '../utils/validation';

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

    onLogin(){
        this.props.history.push('/home')
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
          />
          {this.state.email.input && !validation.email(this.state.email.value) ? <HelpBlock>Enter Valid Email.</HelpBlock> : null}
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
          {this.state.password.input && !validation.password(this.state.password.value) ? <HelpBlock>Must contain at least 1 number and 1 symbol</HelpBlock> : null}
        
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

export default LogIn;