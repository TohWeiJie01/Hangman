import React from 'react';

const Stickman = () => {
  return (
    <svg height="250" width="200" class="stickman-container">
      {/*Rod*/}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/*Head*/}
      <circle cx="140" cy="70" r="20" class="stickman-part" />
    
      {/*Body*/}
      <line x1="140" y1="90" x2="140" y2="150" class="stickman-part" />
    
      {/*Arms*/}
      <line x1="140" y1="120" x2="120" y2="100" class="stickman-part" />
      <line x1="140" y1="120" x2="160" y2="100" class="stickman-part" />
    
      {/*Legs*/}
      <line x1="140" y1="150" x2="120" y2="180" class="stickman-part" />
      <line x1="140" y1="150" x2="160" y2="180" class="stickman-part" />
    </svg>
  );
}

export default Stickman;
