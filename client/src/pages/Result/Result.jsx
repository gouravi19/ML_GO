import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './result.css'; // keeping your styling intact

export default function Result() {
  const location = useLocation();
  const result = location.state?.result;

  console.log("🧪 Result page received:", result);

  if (!result) {
    return (
      <div className="result-container">
        <h2>No result data found. Please upload an image first.</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="result-container">
        <h2>Prediction Result</h2>
        <div className="result-card">
          <p><strong>WBC Count:</strong> {result.WBC}</p>
          <p><strong>RBC Count:</strong> {result.RBC}</p>
          <p><strong>Platelet Count:</strong> {result.platelets}</p>
        </div>
      </div>
    </>
  );
}
