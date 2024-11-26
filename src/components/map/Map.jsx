import { MapContainer, TileLayer } from "react-leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items=[] }) {
  return (
    <MapContainer
      center={[19.076090, 72.877426]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;