import React, { useState } from 'react';
import { Navigation } from 'lucide-react';
import axios from 'axios';
import RouteMap from './RouteMap';

const RouteForm = () => {
  const [startCoords, setStartCoords] = useState('51.505, -0.09');
  const [endCoords, setEndCoords] = useState('51.515, -0.1');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formatCoords = (coords) => coords.split(',').map(c => parseFloat(c.trim()));
      const response = await axios.post('http://127.0.0.1:5000/optimize_route', {
        start_coords: formatCoords(startCoords),
        end_coords: formatCoords(endCoords),
        vehicle_data: { fuel_efficiency: 10, emission_factor: 2.31 }
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center gap-3 mb-6 bg-white p-4 rounded-lg shadow-sm">
          <Navigation size={32} className="text-[#44318b]" />
          <h1 className="text-3xl font-bold text-[#44318b]">
            Navi<span className="text-[#f57624]">Go</span>
          </h1>
        </header>

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Start Point</label>
                  <input
                    type="text"
                    value={startCoords}
                    onChange={(e) => setStartCoords(e.target.value)}
                    className="w-full p-2 border-2 rounded-md focus:border-[#44318b] outline-none"
                    placeholder="51.505, -0.09"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">End Point</label>
                  <input
                    type="text"
                    value={endCoords}
                    onChange={(e) => setEndCoords(e.target.value)}
                    className="w-full p-2 border-2 rounded-md focus:border-[#44318b] outline-none"
                    placeholder="51.515, -0.1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 px-4 rounded-md text-white font-medium shadow-sm transition-opacity"
                  style={{ background: loading ? '#ccc' : 'linear-gradient(135deg, #44318b, #f57624)' }}
                >
                  {loading ? 'Calculating...' : 'Find Route'}
                </button>
              </form>
            </div>

            {result && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#44318b]">Route Details</h2>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <span className="text-sm text-gray-600">Distance</span>
                    <p className="text-lg font-medium text-[#f57624]">
                      {result.route_distance?.toFixed(2)} km
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <span className="text-sm text-gray-600">Duration</span>
                    <p className="text-lg font-medium text-[#f57624]">
                      {result.estimated_travel_time?.display_text}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <span className="text-sm text-gray-600">Emissions</span>
                    <p className="text-lg font-medium text-[#f57624]">
                      {result.total_emissions?.toFixed(2)} g CO₂
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-8 bg-white p-4 rounded-lg shadow-sm">
            <RouteMap routeData={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteForm;