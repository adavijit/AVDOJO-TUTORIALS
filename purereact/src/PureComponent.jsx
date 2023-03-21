import React from 'react'

export class PureComponent extends React.PureComponent {
  componentDidUpdate(prevProps, prevState) {
    console.log("From Pure component", prevProps, this.props.value)
  }
  render() {
    return (
      <div>
        <p>PureComponent</p>
        <div>
          {this.props.value}
        </div>
      </div>
    )
  }
}

export default PureComponent