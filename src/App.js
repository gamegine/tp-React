import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MonComposant from './MonComposant.js';
import Student from './Student.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
			<MonComposant maprop="texte"/>
			<Student name="toto"/>
		</p>
      </div>
    );
  }
}

export default App;
