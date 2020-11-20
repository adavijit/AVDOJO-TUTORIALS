import React from 'react'
import {useRecoilState} from 'recoil' 
import { textState } from './atom'
export default function TextInput() {
    const [text, setText] = useRecoilState(textState)
    const onChange =(event)=>{
        setText(event.target.value)
    }
    return (
        <div>
           <input type={"text"} value={text}
           onChange={onChange}
           ></input>
           <br/>
           Echo: {text}
        </div>
    )
}
