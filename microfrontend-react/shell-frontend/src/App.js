import React from 'react'
const Button = React.lazy(() => import('MicroFrontend/Button'))

export default function App() {
  return (
    <div>
      App 2
      <Button buttonName={"Hey there"} />
    </div>
  )
}
