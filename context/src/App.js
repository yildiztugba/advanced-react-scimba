import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Header"
import {userContextConsumer} from "./userContext"
class App extends React.Component {
  render(){
      return (
          <div className="App">
            <Header />
          <userContextConsumer>
               { (context)=>{
                        <main>
                          <input 
                          type="text"
                          name="username"
                          placeholder="New username"
                          value=""
                          onChange=""
                        />
                          <button onClick="">Change username </button>

                          </main>
                }}
                      
                      </userContextConsumer>
          </div>
        );
  }
}

export default App;
