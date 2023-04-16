import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App" onClick={()=> { console.log("from background") }}>
      <button onClick={()=> setOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} />      
    </div>
  );
}

export default App;