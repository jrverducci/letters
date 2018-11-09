import React, { Component } from 'react';
import './Home.css';
import Snowstorm from 'react-snowstorm';
import {Button, ButtonToolbar} from 'react-bootstrap';
import santa from '../components/Santa.png';
import envelope from '../components/envelope.png';
import {Animated} from 'react-animated-css';

class LetterSent extends Component {
    constructor(props){
        super(props)
        this.state ={
            visable: false
        }
        this.onSend = this.onSend.bind(this);
    }

    componentDidMount() {
        this.setState({
            visable: true
        })
    }
    
    onSend() {
        this.setState({
            visable: false
        })
    }

  render() {
    return (
      <div className="Home">
      <Snowstorm></Snowstorm><div className="Home-header">
      <img src={santa} style={{height: '200px', width:'200px', position: 'relative', zIndex: '10'}}></img>
      <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" isVisible={this.state.visable}>
    <img src={envelope} style={{height: '200px', width:'200px'}}></img>
</Animated> 
          <ButtonToolbar>
          <Button bsStyle="success" bsSize="large" onClick={this.onSend}>Send Letter</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default LetterSent;