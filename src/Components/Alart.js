import React, { useState } from 'react';

const Alart = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="alert-v2" role="alert">
      <span className="alert-v2-icon">⚡</span>
      <span className="alert-v2-text">
        <strong>Synergize:</strong> Seamlessly visualize quality intellectual capital without superior collaboration!
      </span>
      <button
        className="alert-v2-close"
        onClick={() => setVisible(false)}
        aria-label="Dismiss alert"
      >
        ×
      </button>
    </div>
  );
};

export default Alart;