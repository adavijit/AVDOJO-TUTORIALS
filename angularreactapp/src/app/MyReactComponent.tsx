import * as React from 'react'

import { useState } from 'react'

const MyReactComponent = () =>{
    const [text , setText] = useState('First text')

    const onClick = ()=>{
        setText('Button clicked');
    }

    return (
        <div>
            {text}
            <br />
            <button
            onClick={onClick}
            >Change text</button>
        </div>
    )
}

export default MyReactComponent;