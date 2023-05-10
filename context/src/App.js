import './App.css';
import React from 'react';
import Header from "./Header"
import {userContextConsumer} from "./userContext"
class App extends React.Component {
  
  state={
      newUsername: ""
    }
  handleChange =(e)=>{
      const {name,value} = e.target
      this.setState({[name]: value})

    }
  render(){
    
      return (
          <div >
            <Header />
          <userContextConsumer>
              { ({username, handleClick})=>(
                        <main>
                          <p>No new notification, {username}</p>
                          <input 
                          type="text"
                          name="newUsername"
                          placeholder="New username"
                          value={this.state.newUsername}
                          onChange={this.handleChange}
                        />
                          <button onClick={()=>handleClick(this.state.newUsername)}>Change username </button>

                          </main>
              )}
                      
                      </userContextConsumer>
          </div>
        );
  }
}

export default App;
