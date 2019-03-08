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

class Map extends Component {

  render() {
    return (
      <div>
        {this.props.dailyEvents.map(e => <p key={e.id}>{e.title}</p>)}
        {this.props.activeCircles.map(circle => <p key={circle.id}>{circle.lat}</p>)}
        {this.props.subjects.map(subject => <p key={subject.id}>{subject.title}</p>)}
        {this.props.activePinpoints.map(pinpoint => <p key={pinpoint.id}>{pinpoint.lat}</p>)}
      </div>
    );
  }

}

export default connect(mapStateToProps)(Map);
