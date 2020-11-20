import React from 'react'
import {RecoilRoot} from 'recoil'
import CharacterCounter from './CharacterCounter'
export default function App() {
  return (
    <RecoilRoot>
      <CharacterCounter/>
    </RecoilRoot>
  )
}
