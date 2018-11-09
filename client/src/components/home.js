import React, { Component } from 'react';
import './Home.css';
import Snowstorm from 'react-snowstorm';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Home extends Component {
    constructor(props){
        super(props)
        this.onWrite = this.onWrite.bind(this);
        this.onFind = this.onFind.bind(this);
    }

    onWrite() {
        this.props.history.push('/letter')
    }

    onFind() {
        this.props.history.push('/letter/list')
    }

  render() {
    return (
      <div className="Home">
      <Snowstorm></Snowstorm>
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
