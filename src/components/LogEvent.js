import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    selectedTitle: state.log.selectedTitle,
    selectedInfo: state.log.selectedInfo,
    selectedLink: state.log.selectedLink
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectLogEvent: (title, info, link) => dispatch({type: "SELECT_LOG_EVENT", title: title, info: info, link: link})
  }
}

class LogEvent extends Component {


  render() {
    return (
      <>
      <div className="logEvent" data-toggle="modal" data-target="#infoModal" onClick={() => this.props.selectLogEvent(this.props.title, this.props.info, this.props.link)}>
        {this.props.title}
      </div>

      <div className="modal fade" id="infoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.selectedTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.selectedInfo}</p>
              <p><a href={this.props.selectedLink}>Click Here to Learn More</a></p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LogEvent);
