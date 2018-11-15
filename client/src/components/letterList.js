import React, { Component } from 'react';
import './Home.css';
import {Button, ButtonToolbar, Table} from 'react-bootstrap';
import * as letterServices from '../services/lettersServices';
import * as moment from 'moment';
import {connect} from 'react-redux';
import swal from 'sweetalert2';

class LetterList extends Component {
    constructor(props){
        super(props)
        this.state = {
          letters: []
        }
        this.onHome = this.onHome.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.newLetter = this.newLetter.bind(this);
        this.onView = this.onView.bind(this);
    }

    componentDidMount(){
      let id = this.props.user.id
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

  newLetter() {
    this.props.history.push('/letter')
  }

  onView(id, e) {
    debugger
    this.props.history.push({
      pathname: 'letter/view',
      state: { id: id }
    })
  }

  onDelete(id, e){
    const parentId = this.props.user.id
    swal({
      title: "Are you sure you want to delete this letter to Santa?",
      text: "You won't be able to get this letter back!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: 'green',
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it!",
      background: '#050f35'
    }).then(result => {
      if (result.value) {
        letterServices.del(id)
        .then(() => {
          return letterServices.readByParentId(parentId)})
        .then((response) => {
          this.setState({
            letters: response.items
          })
        })
        .catch(console.error);
        swal({
          title: "Deleted!",
          text: "The letter has been deleted.",
          type: "success",
          background: '#050f35',
          confirmButtonColor: 'green'
        });   
      }
    });
  }


  render() {
    const letters = this.state.letters.map((item, index) => {
      return(
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.childName}</td>
              <td>{moment(item.dateModified).utc().format('MMMM Do YYYY')}</td>
              <td><ButtonToolbar><Button bsStyle="danger" bsSize="small" onClick={e => this.onView(item.id, e)}>View</Button><Button bsStyle="danger" bsSize="small" onClick={e => this.onDelete(item.id, e)}>Delete</Button></ButtonToolbar></td>
            </tr>
      )
    })
    return (
      <div className="Home-free">
      <Button bsStyle="danger" bsSize="small" onClick={this.onHome}>Go Home</Button>
        <div className="Home-header">
        <h1>
            (Letters Written To Santa) need font ideas
          </h1>
          <Button bsStyle="success" bsSize="large" onClick={this.newLetter}>Write A New Letter</Button>
          <br></br>
          <Table responsive bordered={false}>
          <thead>
            <tr>
              <th>#</th>
              <th>Child</th>
              <th>Date Written</th>
            </tr>
          </thead>
          <tbody>
            {letters}
          </tbody>
        </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(LetterList);