import React, { Component } from 'react';
import './Home.css';
import {Button} from 'react-bootstrap';
import * as letterServices from '../services/lettersServices';
import * as moment from 'moment';

class LetterList extends Component {
    constructor(props){
        super(props)
        this.state = {
          letters: []
        }
        this.onHome = this.onHome.bind(this);
    }

    componentDidMount(){
      let id = 2
      letterServices.readByParentId(id)
        .then((response) => {
          this.setState({
            letters: response.items
          })
        })
        .catch(console.log)
    }

    onHome() {
      this.props.history.push('/home')
  }


  render() {
    const letters = this.state.letters.map(item => {
      return(
        <div>
          <p>Child: {item.childName}</p>
          <p>Date Sent: {moment(item.dateModified).utc().format('MMMM Do YYYY')}</p>
        </div>
      )
    })
    return (
      <div className="Home-free">
      <Button bsStyle="danger" bsSize="small" onClick={this.onHome}>Go Home</Button>
        <div className="Home-header">
        <h1>
            (Letters Written To Santa) need font ideas
          </h1>
        {letters}
        </div>
      </div>
    );
  }
}

export default LetterList;