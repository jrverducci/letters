import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar} from 'react-bootstrap';
import * as letterServices from '../services/lettersServices';
import * as moment from 'moment';
import {connect} from 'react-redux';

class ViewLetter extends Component {
    constructor(props){
        super(props)
        this.state = {
          letter: []
        }
        this.onHome = this.onHome.bind(this);
    }

    componentDidMount(){
        debugger;
      let id = this.state.id
      letterServices.readById(id)
        .then((response) => {
          this.setState({
            letters: response.items
          })
        })
        .catch(console.log)
    }


  render() {
    const letter = this.state.letter.map((item) => {
      return(
            <div key={item.id}>
              <p>{item.childName}</p>
              <p>{moment(item.dateModified).utc().format('MMMM Do YYYY')}</p>
            </div>
      )
    })
    return (
      <div className="Home-free">
      <Button bsStyle="danger" bsSize="small" onClick={this.onHome}>Go Home</Button>
        <div className="Home-header">
        <h1>
            Letter
          </h1>
          {letter}
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(ViewLetter);