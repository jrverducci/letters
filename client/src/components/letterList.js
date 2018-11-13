import React, { Component } from 'react';
import './Home.css';
import {Button} from 'react-bootstrap';

class LetterList extends Component {
    constructor(props){
        super(props)
        this.onHome = this.onHome.bind(this);
    }

    onHome() {
      this.props.history.push('/home')
  }


  render() {
    return (
      <div className="Home-free">
      <Button bsStyle="danger" bsSize="small" onClick={this.onHome}>Go Home</Button>
        <div className="Home-header">
        <h1>
            (Letters Written To Santa) need font ideas
          </h1>
        
        </div>
      </div>
    );
  }
}

export default LetterList;