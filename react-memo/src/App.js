import React, { useEffect, useState } from "react";
import { MemoizedMovie } from "./MemoizedMovie";
function App() {
  const [, setToggle] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setToggle(toggle => !toggle);
    }, 2000);
    return () => clearInterval(id);
  })
  return (
    <div className="App">
      <MemoizedMovie
        movieName={"Movie 1"}
        releaseDate={"12/12/2002"}
      />
    </div>
  );
}

export default App;
