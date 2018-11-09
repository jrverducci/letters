import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Snowstorm from 'react-snowstorm';


class TrackSanta extends Component {
    constructor(props){
        super(props)

    }


  render() {
    return (
      <div className="Home">
      <Snowstorm />
        <header className="Home-header">
        <h1>
            Merry Christmas
          </h1>
          <img src="http://res.freestockphotos.biz/pictures/17/17382-illustration-of-a-red-santa-hat-pv.png" className="Home-logo" alt="logo" />
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
