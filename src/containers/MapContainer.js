import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiamJtZW5hc2hpIiwiYSI6ImNqcWZxc2tpaDJ2MGc0M3FxdWxrdTF2eGUifQ.FVh60f1zW4orYek2_IjsKA"
});

class mapContainer extends Component {

  render() {
    const center = [-65, 35]
    const zoom = [4]
    return (
      <div>
        <Map
          style='mapbox://styles/jbmenashi/cjsm7lutw4v0f1fqdq35gcbfe'
          center={center}
          zoom={zoom}
          containerStyle={{
            height: "77vh",
            width: "143vw",
            left: "-72vw",
            margin: "1vw",
          }}>
          <ZoomControl />
        </Map>
      </div>
    );
  }

}

export default mapContainer;
