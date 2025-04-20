import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>React Counter App</h1>
      <p>Current value of counter: {counter}</p>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
    </div>
  );
}

export default App;



