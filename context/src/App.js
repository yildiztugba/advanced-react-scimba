import './App.css';
import React from 'react';
import Header from "./Header"
import {Consumer} from "./userContext"
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
          <Consumer>
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
                        {console.log(username)}
                          <button onClick={()=>handleClick(this.state.newUsername)}>Change username </button>

                          </main>
              )}
                      
                      </Consumer>
          </div>
        );
  }
}

export default App;
