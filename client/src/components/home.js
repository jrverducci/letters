import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Home extends Component {
    constructor(props){
        super(props)
        this.onWrite = this.onWrite.bind(this);
        this.onFind = this.onFind.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onWrite() {
        this.props.history.push('/letter')
    }

    onFind() {
        this.props.history.push('/letter/list')
    }

    onUpdate() {
      this.props.history.push('/account')
    }

  render() {
    return (
      <div className="Home-free">
      <Button bsStyle="info" bsSize="xsmall" onClick={this.onUpdate}>Update Account</Button>
        <div className="Home-header">
        <h1>
            (Letters To Santa) need font ideas
          </h1>
          <ButtonToolbar>
          <Button bsStyle="success" bsSize="large" onClick={this.onWrite}>Write New Letter</Button>
          <Button bsStyle="danger" bsSize="large" onClick={this.onFind}>Find Old Letter</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Home;
