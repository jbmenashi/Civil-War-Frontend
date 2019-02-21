import React, { Component } from 'react';
import './App.css';
import SliderContainer from './containers/SliderContainer'
import MainContainer from './containers/MainContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="titleDiv"><h1 id="title">The Civil War</h1></div>
        <div><SliderContainer/></div>
        <div><MainContainer/></div>
      </div>
    );
  }
}

export default App;
