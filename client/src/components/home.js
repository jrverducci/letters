import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {connect} from 'react-redux';

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
      this.props.history.push('/logout')
    }

  render() {
    return (
      <div className="Home-free">
      <Button bsStyle="info" bsSize="xsmall" className="pull-left" onClick={this.onUpdate}>Update Account</Button>
      <Button bsStyle="danger" className="pull-right" bsSize="xsmall" onClick={this.onLogOut}>Log Out</Button>
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Home);
