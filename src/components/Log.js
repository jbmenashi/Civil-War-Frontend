import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import LogEvent from './LogEvent'

const mapStateToProps = state => {
  return {
    currentDay: state.day.currentDay,
    sliderValue: state.slider.sliderValue,
    allEvents: state.event.allEvents,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadEvents: (events) => dispatch({type: 'LOAD_EVENTS', payload: events}),
  }
}

class Log extends PureComponent {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/events')
    .then(res => res.json())
    .then(data => this.props.loadEvents(data))
  }

  logEvents = events => {
    return events.filter(event => event.days.every(day => day.slider_id <= this.props.sliderValue)).reverse()
  }

  render() {
    return (
      <div>
      <h4>{this.props.currentDay.log_string}</h4>
      {this.logEvents(this.props.allEvents).map(event => {
        if (event.days.map(day => day.slider_id).includes(this.props.sliderValue)) {
          return <div className="firstLogEvent" key={event.id}><LogEvent {...event} /></div>
        } else {
          return <div key={event.id}><LogEvent {...event}/></div>
        }
      })}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Log);
