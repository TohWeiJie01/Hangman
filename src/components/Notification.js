import React from 'react';

const Notification = ({showNotification}) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You can only enter a letter once per game!</p>
    </div>
  );
}
  
export default Notification;
