import React, { Component } from 'react';
import './App.css';
import SliderContainer from './containers/SliderContainer'
import MainContainer from './containers/MainContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="titleDiv">
          <h1 id="title">Glory, Glory, Hallelujah!</h1>
          <h6 id="bio">An Interactive Historical Timeline of the American Civil War</h6>
          </div>
        <div><SliderContainer/></div>
        <div><MainContainer/></div>
      </div>
    );
  }
}

export default App;
