import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ soilReportData, droneBookingCount, farmerDetails, accessToKVC, guide }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const soilTestStatus = getSoilTestStatus(soilReportData);

  function getSoilTestStatus(soilReportData) {
    // Placeholder function, replace with actual logic
    return "Completed";
  }

  const cards = [
    { title: "Farmer Details", content: `Name: ${'farmerDetails.name'}\nFarm Size: ${'farmerDetails.farmSize'} acres` },
    { title: "Drone", content: `Bookings: ${'droneBookingCount'}\nNext Available: 05/15/2024` },
    { title: "Crops", content: "Wheat: 30 acres\nCorn: 20 acres" },
    { title: "Soil Test", content: `Status: ${soilTestStatus}\npH: 6.5\nNitrogen: High` },
    { title: "Land Details", content: "Location: Midwest\nTerrain: Flat" },
    
    { title: "Access To KVC", content: accessToKVC ? "Granted" : "Not Granted" },
    { title: "Guide", content: guide }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="outtside">
    <div className="dashboard">
      {cards.map((card, index) => (
        <div key={index} className={`dashboard-card ${expandedCard === index ? 'expanded' : ''}`}>
          <h2 onClick={() => toggleCard(index)}>{card.title}</h2>
          {expandedCard === index && (
            <div className="card-content">
              <pre>{card.content}</pre>
            </div>
          )}
        </div>
      ))}
      <div className="dashboard-card">
        <h2>Overall Farm Health</h2>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '75%' }}></div>
        </div>
        <p>75% - Good</p>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;