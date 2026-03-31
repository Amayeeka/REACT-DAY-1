// src/components/Greeting.jsx

import './Greeting.css';

function Greeting() {
  return (
    <div className="greeting-card">
      <div className="greeting-emoji">👋</div>
      <h2>Hello from the Greeting Component!</h2>
      <p>
        I live in the <code className="greeting-code">components/</code> folder, nice and organized.
      </p>
    </div>
  );
}

export default Greeting;