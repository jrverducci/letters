import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {clearState} from '../actions/logout';
import {withCookies} from 'react-cookie';
import letterLogo from '../components/lettersLogo2.png';

class Home extends Component {
    constructor(props){
        super(props)
        this.onWrite = this.onWrite.bind(this);
        this.onFind = this.onFind.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onLogOut = this.onLogOut.bind(this);
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

    onLogOut() {
      let now = new Date();
          now.setMonth( now.getMonth() - 2 );
          document.cookie = "user=;expires="  + now.toUTCString() + ";"
      this.props.clearState()
      this.props.history.push('/')
    }

  render() {
    return (
      <div className="Home-free">
      <Button bsStyle="info" bsSize="xsmall" className="pull-left" onClick={this.onUpdate}>Update Account</Button>
      <Button bsStyle="danger" className="pull-right" bsSize="xsmall" onClick={this.onLogOut}>Log Out</Button>
        <div className="Home-header">
        <img className="Home-logo" src={letterLogo} style={{height: '180px', width:'320px'}}></img>
        <br></br>
          <ButtonToolbar>
          <Button bsStyle="success" bsSize="large" onClick={this.onWrite}>Write New Letter</Button>
          <Button bsStyle="danger" bsSize="large" onClick={this.onFind}>Find Old Letter</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  clearState: (val) => dispatch(clearState(val))
})

export default withCookies(connect(mapStateToProps, mapDispatchToProps)(Home));
