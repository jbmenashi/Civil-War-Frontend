import React, { Component } from 'react';
import {connect} from 'react-redux'
import Slidey from '../components/Slidey'

const mapStateToProps = state => {
  return {
    sliderValue: state.slider.sliderValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    advance: () => dispatch({type: "ADVANCE"}),
    retreat: () => dispatch({type: "RETREAT"}),
  }
}

let intervalId

class SliderContainer extends Component {

  play = () => intervalId = setInterval(this.props.advance, 1000);

  pause = () => clearInterval(intervalId);

  advance = () => {
    clearInterval(intervalId);
    this.props.advance()
  }

  retreat = () => {
    clearInterval(intervalId);
    this.props.retreat()
  }

  render() {
    return (
      <div id="sliderContainer" className="container">
        <div className="row">
          <div className="col-2">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button className="btn-sm" onClick={() => this.play()}>PLAY</button>
              <button className="btn-sm" onClick={() => this.pause()}>PAUSE</button>
              <button className="btn-sm" onClick={() => this.advance()}>ADVANCE</button>
              <button className="btn-sm" onClick={() => this.retreat()}>RETREAT</button>
            </div>
          </div>
          <div className="col-10">
            <Slidey/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderContainer);
