import React, { Component } from 'react'

export class NormalComponent extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("From Normal component", prevProps, this.props.value)
  }
  render() {
    return (
        <div>
        <p>Normal Component</p>
        <div>
          {this.props.value}
        </div>
      </div>
    )
  }
}

export default NormalComponent