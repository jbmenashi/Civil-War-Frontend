import React, { Component } from 'react';

class LogEvent extends Component {

  render() {
    return (
      <div>
      {this.props.title}
      </div>
    );
  }

}

export default LogEvent;

// click on LogEvent to activate Info modal
