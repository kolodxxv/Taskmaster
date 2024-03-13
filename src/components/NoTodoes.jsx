import React from 'react';

export default function NoTodoes() {
  return (
    <div className="not-todoes-container">
      <img
        src="https://th.bing.com/th/id/OIP.0bj3LefwiwG2j-fuG76gbAAAAA?rs=1&pid=ImgDetMain"
        alt="empty"
        style={{
          height: '300px',
          width: '300px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      />
      <p>All Set!</p>
    </div>
  );
}
