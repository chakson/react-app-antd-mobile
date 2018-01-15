import React, { Component } from 'react';
import logo from '../static/images/demo.jpg';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <header className="HomePage-header">
          <img src={logo} className="HomePage-logo" alt="logo" />
          <h1 className="HomePage-title">Welcome to React</h1>
        </header>
        <p className="HomePage-intro">
          To get started, edit <code>src/HomePage.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HomePage;
