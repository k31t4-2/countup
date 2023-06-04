import React from "react";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(prevCount => prevCount + 1)
  }

  const countDown = () => {
    setCount(count => count - 1)
  }

  const reset = () => {
    setCount(0)
  }


  return (
    <div className="App">
      <h1>カウントアプリを作る</h1>
      <p>{count}</p>
      <button onClick={countUp}>Increment</button>
      <button onClick={countDown}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
