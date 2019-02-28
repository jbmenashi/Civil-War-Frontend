import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import Handle from './Handle'
import Track from './Track'

const mapStateToProps = state => {
  return {
    sliderValue: state.slider.sliderValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    slide: (value) => dispatch({type: "SLIDE", payload: value})
  }
}

class Slidey extends Component {

  onUpdate = values => {
    this.props.slide(values[0])
  }

  render() {
    return (
      <div className="slider">
        <Slider className="sliderStyle" domain={[1, 5]} step={1} mode={2} values={[this.props.sliderValue]} onUpdate={this.onUpdate}>
          <Rail>
           {({ getRailProps }) => (
             <div className="railStyle" {...getRailProps()} />
           )}
         </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (<Handle key={handle.id} handle={handle} getHandleProps={getHandleProps}/>))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (<Track key={id} source={source} target={target} getTrackProps={getTrackProps}/>))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Slidey);
