// src/components/AlertBox.jsx

import './AlertBox.css';

function AlertBox() {
  const handleClick = () => {
    alert("👋 Hello! I am from the components folder.");
  };

  return (
    <div className="alertbox-card">
      <div className="alertbox-emoji">🔔</div>
      <h2>Alert Box Component</h2>
      <p>Click the button below to trigger an alert message.</p>
      <button className="alertbox-btn" onClick={handleClick}>
        Say Hello!
      </button>
    </div>
  );
}

export default AlertBox;