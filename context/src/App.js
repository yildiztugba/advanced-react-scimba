import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Header"
class App extends React.Component {
  render(){
      return (
          <div className="App">
            <Header />

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
          </div>
        );
  }
}

export default App;
