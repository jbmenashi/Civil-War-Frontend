import React from 'react';
import Slidey from '../components/Slidey'

const SliderContainer = () => {
  return (
    <div id="sliderContainer" className="container">
      <div className="row">
        <div className="col-1">
          <button className="btn-lg">Play</button>
        </div>
        <div className="col-1">
          <button className="btn-lg">Pause</button>
        </div>
        <div className="col-10">
          <Slidey/>
        </div>
      </div>
    </div>
  );
}

export default SliderContainer;
