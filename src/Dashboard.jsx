import React from 'react';
import './Dashboard.css'; 

function Dashboard() {
  return (
    <>
    <div className="header">
      <h2>HelpDesk</h2>
    </div>
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>New Ticket</li>
          <li>My Ticket</li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Dashboard</h2>
        <div className="cards">
          <div className="card" style={{ backgroundColor: '#007bff' }}>
            <p>Total Tickets</p>
            <h3>12</h3>
          </div>
          <div className="card" style={{ backgroundColor: '#28a745' }}>
            <p>Total Solved</p>
            <h3>8</h3>
          </div>
          <div className="card" style={{ backgroundColor: '#dc3545' }}>
            <p>Total Awaiting Approval</p>
            <h3>2</h3>
          </div>
          <div className="card" style={{ backgroundColor: '#ffc107' }}>
            <p>Total In Progress</p>
            <h3>2</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
