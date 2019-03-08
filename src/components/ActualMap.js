import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class ActualMap extends Component {

  componentDidMount() {
    this.map = L.map("map", {
      center: [51.505, -0.09],
      zoom: 4
    })

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map)
  }

  render() {
    return (
      <div id="map"></div>
    );
  }

}

export default ActualMap;
