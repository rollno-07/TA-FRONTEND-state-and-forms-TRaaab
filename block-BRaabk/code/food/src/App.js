import logo from './logo.svg';
import Header from './Header'
import Menu from './Menu'
import React, { Component } from 'react'

import './App.css';
import data from './data.json'

class App extends Component {
  render(){
  return (
    <div className="App">
            <Header/>
        <Menu/>
    </div>
  );
}
}

export default App;
