import React, { useEffect } from 'react';
import { pure } from 'recompose';

function PureHOC(props) {
    useEffect(()=> {
        console.log("From PureHOC component", props.value)
    })
  return (
    <div>
        <p>PureHOC Component</p>
        <div>
          {props.value}
        </div>
      </div>
  )
}

// Wrap component using the `pure` HOC from recompose
export default pure(PureHOC);