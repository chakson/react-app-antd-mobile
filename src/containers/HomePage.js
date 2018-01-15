import React, { Component } from 'react';
import logo from '../static/images/demo.jpg';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <header>
          <img src={logo} alt="logo" />
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/HomePage.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HomePage;
