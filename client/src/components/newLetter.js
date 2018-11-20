import React, { Component } from 'react';
import './Home.css';
import { FormGroup, Form, FormControl, Button, Col, ButtonToolbar } from 'react-bootstrap';
import * as letterServices from "../services/lettersServices";
import * as emailService from "../services/emailServices";
import * as userService from "../services/usersServices";
import {connect} from "react-redux";
import swal from 'sweetalert2';
import {withCookies} from 'react-cookie';

class NewLetter extends Component {
    constructor(props){
        super(props)
        this.state = {
            childName: '',
            letter: '',
            parentId: '',
            parentEmail: ''
        }
    
        this.handleChange = this.handleChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        this.submitCheck = this.submitCheck.bind(this);
    }

    componentDidMount(){
      const {cookies} = this.props
      let cookieValue = cookies.get("user")
      let parentId = this.props.user.id || cookieValue
      userService.getById(parentId)
      .then((response) => {
        let items = response.item[0]
        this.setState({
          parentId: items.id,
          parentEmail: items.email
        })
      })
    }

    handleChange(e) {
        this.setState({ 
            [e.target.name]: e.target.value
        });
      }

      goBack(){
        this.props.history.goBack()
    }

    keyPressed(event) {
      let code = event.keyCode || event.which;
      if (code === 13) {
        this.submitCheck();
      }
    }

    submitCheck(){
      swal({
        title: "Are you ready to send this letter to Santa?",
        text: "Did you check it twice?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: 'red',
        confirmButtonText: "Yes, send it!",
        cancelButtonText: "No, I need to check it twice!",
        background: '#050f35'
      }).then(result => {
        if (result.value) {
          swal({
            title: "Sent!",
            text: "The letter is on it's way to the North Pole.",
            type: "success",
            background: '#050f35',
            confirmButtonColor: 'green'
          })
          .then(()=>{
            this.onSubmit()
          })  
          .catch(console.log)
        }
      })
      .catch(console.log)

    }

    onSubmit(){
        const data = {
          parentId: this.state.parentId,
          childName: this.state.childName,
          letter: this.state.letter
        }

        const emailData = {
          parentEmail: this.state.parentEmail,
          childName: this.state.childName,
          letter: this.state.letter
        }
        letterServices.newLetter(data)
        .then(() => {
          this.props.history.push('/letter/sent')
        })
        .catch(console.log)
        emailService.email(emailData)
        .then(() => {
          console.log("email sent")
        })
        .catch(console.log)
    }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
        <h1>
            My Letter to Santa
          </h1>

          
              Dear Santa,
              <Form>
        <FormGroup>
            <Col sm={12}>
          <FormControl
            componentClass="textarea"
            name="letter"
            value={this.state.letter}
            placeholder="Write your letter to Santa here..."
            onChange={this.handleChange}
            style={{height: '250px', width: '100%'}}
            onKeyPress={this.keyPressed}
          /></Col>
        </FormGroup> 
        <FormGroup>
        From:
         <Col sm={12}>
         <FormControl
            type='text'
            name="childName"
            value={this.state.childName}
            placeholder="Enter your name"
            onChange={this.handleChange}
            style={{width: '100%'}}
          />
          </Col>
        </FormGroup>
        </Form>
        <br></br> 
      <div className="row">
      <ButtonToolbar>
            <Button bsStyle="success" bsSize="large" onClick={this.submitCheck}>Send Letter to Santa</Button>
            <Button bsStyle="danger" bsSize="large" onClick={this.goBack}>Go Back</Button>
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

export default withCookies(connect(mapStateToProps)(NewLetter));