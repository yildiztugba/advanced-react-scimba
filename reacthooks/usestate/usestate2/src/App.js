import React, {useState} from "react"
import ReactDom from "react-dom"
function App() {

  const [inputData, setInputData] = useState({firstName: "",lastName:"" })
  const [contactInfo, setContactInfo] = useState([])

  function handleSubmit(event){

  }

  function handleClick(event){
      const {name,value}= event.target

      setInputData((prev)=>
        ({...prev,
        [name]: value})
      )
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleClick}
        />
          <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleClick}
        />
        <br />
        <button>Add contact</button>

      </form>
    </div>
  );
}

export default App;
