import React, { Component } from "react";
import Counter from "./Counter";
import './index.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <h1>Simple Counter App</h1>
        <h2>This is a react practice project</h2>
        <Counter />
        <a href="https://github.com/MeiMeiYS">- Mei's Github -</a>
      </div>
    );
  }
}

export default App;
