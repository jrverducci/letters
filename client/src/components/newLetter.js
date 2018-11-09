import React, { Component } from 'react';
import './Home.css';
import { FormGroup, Form, FormControl, Button, Col, ButtonToolbar } from 'react-bootstrap';

class NewLetter extends Component {
    constructor(props){
        super(props)
        this.state = {
            childName: '',
            letter: ''
        }
    
        this.handleChange = this.handleChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    handleChange(e) {
        this.setState({ 
            [e.target.name]: e.target.value
        });
      }

      goBack(){
        this.props.history.goBack()
    }

    onSubmit(){
        this.props.history.push('/letter/sent')
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
            <Button bsStyle="success" bsSize="large" onClick={this.onSubmit}>Send Letter to Santa</Button>
            <Button bsStyle="danger" bsSize="large" onClick={this.goBack}>Go Back</Button>
    </ButtonToolbar>
        </div>
      </div>
      </div>
    );
  }
}

export default NewLetter;