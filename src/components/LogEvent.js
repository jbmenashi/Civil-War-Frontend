import React, { Component } from 'react';

class LogEvent extends Component {



  render() {
    return (
      <>
      <div className="logEvent" data-toggle="modal" data-target="#infoModal">
        {this.props.title}
      </div>

      <div className="modal fade" id="infoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.info}</p>
              <p><a href={this.props.link}>Click Here to Learn More</a></p>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

}

export default LogEvent;
