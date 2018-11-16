import React, { Component } from 'react';
import './Home.css';
import {Button} from 'react-bootstrap';
import * as letterServices from '../services/lettersServices';
import {connect} from 'react-redux';

class ViewLetter extends Component {
    constructor(props){
        super(props)
        this.state = {
          letter: []
        }
        this.onHome = this.onHome.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount(){
      let id = this.props.location.state.id
      letterServices.readById(id)
        .then((response) => {
          this.setState({
            letter: response.item
          })
        })
        .catch(console.log)
    }

    onHome() {
        this.props.history.push('/home')
    }

    goBack(){
        this.props.history.goBack()
    }


  render() {
    const letter = this.state.letter.map((item) => {
      return(
            <div className="border" key={item.id}>
                <p>Dear Santa:</p>
                <p>{item.letter}</p>
                <p>From,</p>
              <p>{item.childName}</p>
            </div>
      )
    })
    return (
      <div className="Home-free">
      <Button bsStyle="danger" bsSize="small" onClick={this.onHome}>Go Home</Button>
        <div className="Home-header">
        <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10"> {letter}</div>
        <div className="col-sm-1"></div>
        </div>

          <br></br>
          <Button bsStyle="success" bsSize="small" onClick={this.goBack}>Go Back</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(ViewLetter);