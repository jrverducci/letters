import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, ButtonToolbar } from 'react-bootstrap';
import * as validation from "../utils/validation";
import * as usersServices from "../services/usersServices";
import {connect} from "react-redux";
import {setUser} from '../actions/users';

class UpdateAccount extends Component {
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
            }
        }
        this.handleChange = this.handleChange.bind(this); 
        this.onUpdate = this.onUpdate.bind(this);
        this.goBack = this.goBack.bind(this); 
        this.updateProps = this.updateProps.bind(this); 
    }

    componentDidMount(){
      let id = this.props.user.id
      usersServices.getById(id)
      .then((response) => {
        response.item.map(item => {
          return (
           this.setState({
            firstName: {
              input: true,
              value: item.firstName
          },
          lastName: {
              input: true,
              value: item.lastName
          },
          email: {
              input: true,
              value: item.email
          }
        }))
        })  
      })
      .catch(console.log)
    }
    
      handleChange(e) {
        this.setState({ 
            [e.target.name]: {value:e.target.value, input: true}});
      }

    goBack(){
        this.props.history.goBack()
    }

    onUpdate(){
        const id = this.props.user.id
        const data = {
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            email: this.state.email.value,
            id: id
        }
        usersServices.update(id, data)
        .then(() => 
            this.updateProps())
        .then(() => {
          this.props.history.push('/account')
        })
        .catch(console.log)    
    }

    updateProps(){
      let id = this.props.user.id
      usersServices.getById(id)
        .then((response) => {
          this.props.setUser(response.item[0])
        })
        .catch(console.log)
    }

  render() {
    return (
      <div className="Home">
      <div className="Home-header">
        <h1>
            Update Account
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
          {this.state.firstName.input && !validation.name(this.state.firstName.value) ? <HelpBlock style={{fontSize: '10px'}}>Name must be between 3-50 characters.</HelpBlock> : null}
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
          {this.state.lastName.input && !validation.name(this.state.lastName.value) ? <HelpBlock style={{fontSize: '10px'}}>Name must be between 3-50 characters.</HelpBlock> : null}
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
          {this.state.email.input && !validation.email(this.state.email.value) ? <HelpBlock style={{fontSize: '10px'}}>Enter Valid Email.</HelpBlock> : null}
        </FormGroup>
      </form>
      <div className="row">
      <ButtonToolbar>
            <Button bsStyle="success" bsSize="large" onClick={this.onUpdate}>Update</Button>
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAccount);