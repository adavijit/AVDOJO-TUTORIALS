import React, { Component } from 'react'
import NormalComponent from './NormalComponent'
import PureComponent from './PureComponent'
import './App.css';
import PureHOC from './PureHOC';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: 0,
    }
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      value: this.state.text
    });
  }

  render() {
    return (
      <div>
        <div className='input-div'>
          <input type='text' onChange={e=> {
            this.setState({text: e.target.value})}}
             value={this.state.text}/>
          <button onClick={()=> this.handleClick()}>Submit</button>
        </div>
        
        <div className='comp-div'>
          <NormalComponent value={this.state.value}/>
          <PureComponent value={this.state.value}/>
          <PureHOC value={this.state.value}/>
        </div>
      </div>
    )
  }
}

export default App