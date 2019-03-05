import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    currentDay: state.day.currentDay
  }
}

class Log extends PureComponent {

  render() {
    return (
      <div>
      <h4>{this.props.currentDay.log_string}</h4>
      Log
      </div>
    );
  }

}

export default connect(mapStateToProps)(Log);


// for each event in state.events, print out an LogEvent
