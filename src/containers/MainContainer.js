import React from 'react';
import LogContainer from './LogContainer'
import MapContainer from './MapContainer'

const MainContainer = () => {
  return (
    <div className="container-fluid" id="mainContainer">
      <div className="row">
        <div className="col-3">
          <LogContainer/>
        </div>
        <div className="col-9">
          <MapContainer/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
