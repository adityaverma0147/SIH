import React from 'react';
import './SoilTesting.css';

const SoilTestReport = ({ reportData }) => {
  // if (!reportData) {
  //   return <p>Loading report...</p>; // Show loading message if no data
  // }

  // const {
  //   location,
  //   date,
  //   pH,
  //   organicMatter,
  //   nitrogen,
  //   phosphorus,
  //   potassium,
  //   recommendedCrops = []
  // } = reportData;

  return (
    <div className="soil-test-report">
      <h2 className="heading">Soil Test Report</h2>
      <div className="location-date">
        <p><strong>Location:</strong> {'location'}</p>
        <p><strong>Date:</strong> {'date'}</p>
      </div>

      <div className="soil-properties">
        <h3 className="subheading">Soil Properties</h3>
        <ul>
          <li><strong>pH:</strong> {'pH'}</li>
          <li><strong>Organic Matter:</strong> {'organicMatter'}%</li>
          <li><strong>Nitrogen (N):</strong> {'nitrogen'} ppm</li>
          <li><strong>Phosphorus (P):</strong> {'phosphorus'} ppm</li>
          <li><strong>Potassium (K):</strong> {'potassium'} ppm</li>
        </ul>
      </div>

      <div className="crop-recommendations">
        <h3 className="subheading">Crop Recommendations</h3>
        {/* {recommendedCrops.length > 0 ? (
          <ul>
            {recommendedCrops.map((crop, index) => (
              <li key={index}>{'crop'}</li>
            ))}
          </ul>
        ) : (
          <p>No crop recommendations available</p>
        )} */}
      </div>
    </div>
  );
};

export default SoilTestReport;