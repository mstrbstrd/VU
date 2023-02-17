import "./Map.css";

import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[50.25972, -119.27554]} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
      />
    </MapContainer>
  );
}
