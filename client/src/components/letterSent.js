import React, { Component } from 'react';
import './Home.css';
import {Button} from 'react-bootstrap';
import santa from '../components/Santa.png';
import letterLogo from '../components/lettersLogo2.png';
import mailbox from '../components/mailbox.png';
import {Animated} from 'react-animated-css';
import {withCookies} from 'react-cookie';

class LetterSent extends Component {
    constructor(props){
        super(props)
        this.state ={
            visable: false,
            santa: false
        }
        this.onSend = this.onSend.bind(this);
        this.onHome = this.onHome.bind(this);
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
        setTimeout(function() { 
            this.setState({santa: true}) 
        }.bind(this), 2000)
    }

    onHome() {
        this.props.history.push('/home')
    }

  render() {
    return (
      <div className="Home">
            {this.state.santa && <React.Fragment><img src={santa} style={{height: '200px', width:'200px', position: 'relative', zIndex: '10'}}></img>
        <h2 className="candy-cane small">Santa has received your letter</h2><Button bsStyle="success" bsSize="large" onClick={this.onHome}>Go Home</Button></React.Fragment>}
      <div className="Home-header">
      {!this.state.santa && <img src={mailbox} style={{height: '200px', width:'200px'}}></img>}
      <Animated animationIn="lightSpeedIn" animationOut="zoomOutUp" isVisible={this.state.visable}>
    <img src={letterLogo} style={{height: '180px', width:'320px'}}></img>
        </Animated> 
          {this.state.visable && <Button bsStyle="success" bsSize="large" onClick={this.onSend}>Send Letter</Button>}
        </div>
      </div>
    );
  }
}

export default withCookies(LetterSent);