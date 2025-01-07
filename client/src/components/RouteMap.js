import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const RouteMap = ({ routeData }) => {
  const MapContent = () => {
    const map = useMap();

    useEffect(() => {
      if (routeData?.route_geometry) {
        const latLngs = routeData.route_geometry.map(coord => L.latLng(coord[1], coord[0]));
        
        map.eachLayer(layer => {
          if (layer instanceof L.Polyline || layer instanceof L.Marker) {
            map.removeLayer(layer);
          }
        });

        const routeLine = L.polyline(latLngs, {
          color: '#44318b',
          weight: 5,
          opacity: 0.8,
        }).addTo(map);

        if (latLngs.length > 0) {
          const customIcon = (color) => L.divIcon({
            html: `<div style="background: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`
          });

          L.marker(latLngs[0], { icon: customIcon('#44318b') }).addTo(map);
          L.marker(latLngs[latLngs.length - 1], { icon: customIcon('#f57624') }).addTo(map);
          map.fitBounds(L.latLngBounds(latLngs));
        }
      }
    }, [map, routeData]);

    return null;
  };

  const defaultCenter = [51.505, -0.09];

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapContent />
      </MapContainer>
    </div>
  );
};

export default RouteMap;