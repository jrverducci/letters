import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import sleigh from './sleigh.png';

class TrackSanta extends Component {
  constructor(props){
    super(props)

    this.onHome = this.onHome.bind(this)
  }
    
  onHome(){
    this.props.history.push('/home')
  }

  render() {
    return (
      <div className="Home-free">
      <Button bsStyle="danger" bsSize="small" onClick={this.onHome}>Go Home</Button>
        <header className="Home-header">
        <h1>
            Merry Christmas
          </h1>
          <img src={sleigh} className="Home-logo" alt="logo" />
          <div className="row">
          <ButtonToolbar>
          <Button bsStyle="success" bsSize="large" href='https://santatracker.google.com/'>TRACK SANTA</Button>
          </ButtonToolbar>
          </div>
        </header>
      </div>
    );
  }
}

export default TrackSanta;