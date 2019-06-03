import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiamJtZW5hc2hpIiwiYSI6ImNqcWZyYXFvZTU1ejg0MmxnNXQxaHZwYTMifQ.Uvhck3cxhndzZdytkylSPw"
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
            height: "575px",
            width: "2197px",
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
