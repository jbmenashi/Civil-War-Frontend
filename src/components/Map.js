import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    currentDay: state.day.currentDay,
    subjects: state.subject.subjects,
    activeCircles: state.circle.activeCircles,
    activePinpoints: state.pinpoint.activePinpoints,
    dailyEvents: state.event.dailyEvents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

class Map extends Component {

  render() {
    return (
      <div>
      Map
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
