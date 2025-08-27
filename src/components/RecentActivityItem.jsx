import React from 'react';

function RecentActivityItem({ item }) {
  return (
    <div className="activity-item d-flex">
      <div className="activate-label">{item.time}</div>
      <i className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}></i>
      {item.hightlight === '' ? (
        <div className="activity-content">{item.content}</div>
      ) : (
        <div className="activity-content">
          {item.content.substring(0, item.content.indexOf(item.hightlight))}
          <a href="#" className="fw-bold text-dark">
            {item.hightlight}
          </a>
          {item.content.slice(item.content.indexOf(item.hightlight) + item.hightlight.length, -1)}
        </div>
      )}
    </div>
  );
}

export default RecentActivityItem;
