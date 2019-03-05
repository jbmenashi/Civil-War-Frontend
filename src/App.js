import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import SliderContainer from './containers/SliderContainer'
import MainContainer from './containers/MainContainer'

const mapStateToProps = state => {
  return {
    days: state.day.days,
    sliderValue: state.slider.sliderValue,
    currentDay: state.day.currentDay,
    activeCircles: state.circle.activeCircles,
    activePinpoints: state.pinpoint.activePinpoints,
    dailyEvents: state.event.dailyEvents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadDays: (days) => dispatch({type: 'LOAD_DAYS', payload: days}),
    setCurrentDay: (day) => dispatch({type: 'SET_CURRENT_DAY', payload: day}),
    setActiveCircles: (circles) => dispatch({type: 'SET_ACTIVE_CIRCLES', payload: circles}),
    setActivePinpoints: (pinpoints) => dispatch({type: 'SET_ACTIVE_PINPOINTS', payload: pinpoints})
  }
}

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/days')
    .then(res => res.json())
    .then(data => {
      this.props.loadDays(data)
      let foundDay = this.props.days.find(day => day.slider_id === this.props.sliderValue)
      this.props.setCurrentDay(foundDay)
      this.props.setActiveCircles(foundDay.circles)
      this.props.setActivePinpoints(foundDay.pinpoints)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sliderValue !== this.props.sliderValue) {
      this.props.setCurrentDay(this.props.days.find(day => day.slider_id === this.props.sliderValue))
    }
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
