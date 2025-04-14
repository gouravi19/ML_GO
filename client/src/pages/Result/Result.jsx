import React from 'react';
import './result.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    return (
      <div className="result-container">
        <h2>No results found</h2>
        <button onClick={() => navigate('/upload')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="result-container">
      <h2>Prediction Result</h2>
      <div className="result-card">
        <p><strong>WBC Count:</strong> {result.WBC_count}</p>
        <p><strong>RBC Count:</strong> {result.RBC_count}</p>
        <p><strong>Status:</strong> {result.status}</p>
      </div>
      <button onClick={() => navigate('/upload')}>Analyze Another</button>
    </div>
  );
}
