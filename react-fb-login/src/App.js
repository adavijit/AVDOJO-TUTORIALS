import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
export class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoggedin : false
    }
  }
  responseFacebook=(response)=>{
    console.log(response);
    this.setState({
      isLoggedin : true
    })
  }
  render() {
    return (
      this.state.isLoggedin ? 'Home' : 
      (<div>
        <FacebookLogin
    appId="2329606420682017"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={this.responseFacebook} />
      </div>)
    )
  }
}

export default App

