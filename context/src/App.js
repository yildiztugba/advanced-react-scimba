import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Header"
class App extends React.Component {
  render(){
      return (
          <div className="App">
            <Header />
          </div>
        );
  }
}

export default App;
