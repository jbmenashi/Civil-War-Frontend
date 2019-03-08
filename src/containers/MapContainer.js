import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


class MapContainer extends Component {

  render() {
    const position = [51.505, -0.09]
    const zoom = 4
    return (
      <div id="mapContainer">
        Help
      </div>
    );
  }

}

export default MapContainer;
