import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FrontPage.css';

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="front-page">
      <h1>QR-Based Billing System</h1>
      <p>"Effortless billing with real-time QR scanning and inventory management."</p>

      <div className="buttons">
        <button onClick={() => navigate('/scan-qr')}>📷 Scan QR</button>
        <button onClick={() => navigate('/cart')}>🛒 Cart Preview</button>
        <button onClick={() => navigate('/bills')}>📑 Download Previous Bills</button>  {/* ✅ This now works! */}
      </div>

      <footer>© 2025 QR Billing System. All Rights Reserved.</footer>
    </div>
  );
};

export default FrontPage;
