import React from 'react';
import { connect } from 'react-redux'
import { clearState } from '../actions/logout'

class Logout extends React.Component {
    componentDidMount(){
        this.props.clearState()
        this.props.history.push('/')
    }
    render(){
        return null
    }
}

const mapDispatchToProps = dispatch => ({
    clearState: (val) => dispatch(clearState(val))
})

export default connect(null, mapDispatchToProps)(Logout);