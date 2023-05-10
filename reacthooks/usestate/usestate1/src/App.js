
import './App.css';
import React ,{useState} from "react"

function App() {

  const [count, setCount] = useState(0)

  function increment(){
    setCount(prev=>prev+1)
  }
  return (
    <div className="App">
     <h1>{count}</h1>
     <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
