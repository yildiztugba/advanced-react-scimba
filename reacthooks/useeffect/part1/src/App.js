import './App.css';
import React ,{useEffect, useState} from "react"
import randomColor from 'randomcolor';


function App() {

    const [count, setCount] = useState(0)
    const [color, setColor]= useState("")

    function increment(){
      setCount(prev=>prev+1)
    }
    function decrement(){
      setCount(prev=>prev-1)
    }

    useEffect(()=>{
      setColor(randomColor())
    },[count])

  return (
    <div className="App">
      <h1 style={{color:color}}>{count}</h1>
      <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
