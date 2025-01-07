# NAVIGO: Precision Route Optimization Technology

NAVIGO is a dynamic routing system that optimizes delivery routes while minimizing carbon footprint by integrating real-time traffic, weather, and emissions data.

## 🎯 Problem Statement
The logistics and transportation industry faces challenges in:
- Optimizing routes for timely deliveries
- Minimizing carbon footprint
- Managing real-time traffic conditions
- Adapting to weather impacts

## ⚡ Key Features
- **Real-time Traffic Integration**: Uses TomTom API to avoid congestion and reduce travel time
- **Weather Impact Analysis**: Integrates AQICN data for weather-aware routing
- **Emission Estimation**: Calculates CO2, NOx, and Particulate Matter emissions per route
- **Route Optimization**: Leverages OSRM for efficient route calculation
- **User-Friendly Interface**: Simple input for vehicle details and destinations

## 🛠️ Technology Stack
### Frontend
- React.js
- Interactive mapping interface
- Real-time route visualization

### Backend
- Flask (Python)
- Multi-threaded API processing
- Advanced routing algorithms

### APIs
- TomTom: Traffic data
- AQICN: Weather and air quality data
- OSRM: Route optimization

## 🚀 Getting Started

### Note:
Our current UI is minimal and serves as a basic interface for showcasing the system's functionality. We plan to improve the UI for a more polished and user-friendly experience. The backend functionality is complete, and the presentation has been submitted.

### Prerequisites
```bash
python 3.x
npm/yarn
```

### Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install backend dependencies
```bash
cd backend
pip install -r requirements.txt
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```


### Running the Application
1. Start the Flask backend
```bash
python app.py
```

2. Start the React frontend
```bash
npm start
```

## 🔄 System Flow
1. **User Input**: Vehicle details and destination
2. **Data Collection**: Parallel API requests for traffic and weather
3. **Route Calculation**: OSRM optimization considering all factors
4. **Emission Analysis**: Calculate environmental impact
5. **Results**: Display optimized route with emission metrics

## 🎯 Future Enhancements
- Machine Learning integration for predictive analytics
- Telematics integration for real-time vehicle data
- Mobile application development
- Enhanced emission prediction models

## 👥 Team
- Pranav Vuddagiri
- Vishnu Vamsith Yejju
  

## 🤝 Acknowledgments
- FedEx Smart Hackathon
- API Service Providers
