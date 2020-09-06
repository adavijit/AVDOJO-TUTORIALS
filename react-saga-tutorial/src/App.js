import React, { Component } from 'react'

import {connect, connet} from 'react-redux'

import {fetchData} from './redux/actions'
export class App extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleFetchData =this.handleFetchData.bind(this)
  }
  
  handleFetchData() {
    this.props.fetchData(2);
  }
  render() {
    return (
      <div>
        <button
        onClick={this.handleFetchData}
        className="btn btn-primary"
        >Fetch</button>

        <div>
          {
            this.props.user
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchData:(id)=>{
      dispatch(fetchData(id))
    }
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(App)
