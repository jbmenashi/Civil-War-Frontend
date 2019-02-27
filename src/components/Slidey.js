import React, { Component } from 'react';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import Handle from './Handle'
import Track from './Track'

class Slidey extends Component {

  render() {
    return (
      <div className="slider">
        <Slider className="sliderStyle" domain={[0, 1000]} step={1} mode={2} values={[0]}>
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

export default Slidey;
