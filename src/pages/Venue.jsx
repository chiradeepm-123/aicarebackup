import React from 'react';
import '../styles/page.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet default marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
});

export default function Venue() {
  const position = [22.5603099, 88.490665];

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=22.5603099,88.490665";

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">Venue</span>
          <h1>Conference Venue</h1>
          <p>UEM Campus, Kolkata — a world-class facility in the heart of New Town.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="venue-layout">

          {/* LEFT INFO CARD */}
          <div className="page-card venue-info">
            <h2>UEM Kolkata</h2>
            <p>
              The University of Engineering & Management (UEM) is a leading 
              institution located in the New Town smart city hub, known for its 
              state-of-the-art infrastructure and academic excellence.
            </p>

            <div className="venue-detail-list">

              <div className="venue-detail">
                <span>📍</span>
                <div>
                  <strong>Address</strong><br />
                  University Area, Plot No. III - B/5, New Town, Action Area III, Kolkata, 700156
                </div>
              </div>

              <div className="venue-detail">
                <span>✈️</span>
                <div>
                  <strong>Nearest Airport</strong><br />
                  Netaji Subhas Chandra Bose Int'l Airport — approx. 12 km (25 min by taxi)
                </div>
              </div>

              <div className="venue-detail">
                <span>🚇</span>
                <div>
                  <strong>Key Landmarks</strong><br />
                  Near Rosedale Plaza and Uniworld City Gate No. 1
                </div>
              </div>

              <div className="venue-detail">
                <span>🏨</span>
                <div>
                  <strong>Nearby Stays</strong><br />
                  The Westin, Fairfield by Marriott, Lemon Tree (New Town)
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT MAP CARD */}
          <div className="page-card map-card">
            <h2>Location Map</h2>

            <div
              className="map-container"
              style={{
                marginTop: '15px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #eee',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
            >
              <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: '340px', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={position}>
                  <Popup>
                    UEM Kolkata <br /> Conference Venue
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="page-btn"
                style={{
                  flex: 1,
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                Get Directions
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}