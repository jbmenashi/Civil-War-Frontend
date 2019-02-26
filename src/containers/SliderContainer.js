import React from 'react';
import Slider from '../components/Slider'

const SliderContainer = () => {
  return (
    <div id="sliderContainer" className="container">
      <div className="row">
        <div className="col-1">
          <button className="btn-sm btn-info">Play</button>
        </div>
        <div className="col-1">
          <button className="btn-sm btn-info">Pause</button>
        </div>
        <div className="col-10">
          <Slider/>
        </div>
      </div>
    </div>
  );
}

export default SliderContainer;
