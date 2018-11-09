import React, { Component } from 'react';
import './Home.css';
import Snowstorm from 'react-snowstorm';

class LetterList extends Component {
    constructor(props){
        super(props)
        
    }


  render() {
    return (
      <div className="Home">
      <Snowstorm></Snowstorm>
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