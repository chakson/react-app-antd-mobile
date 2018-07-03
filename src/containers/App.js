import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import { Button } from 'antd-mobile';
import Count from './Count';
import Plus from './Plus';

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
        </p>
        <Button>hello</Button>
        <Count />
        <Plus />
      </div>
    );
  }
}

export default App;
