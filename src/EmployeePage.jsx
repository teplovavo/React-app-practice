import React from 'react';
import Header from './Header';

function EmployeePage() {
  return (
    <div>
      <Header title="Employee" />
      <div className="employee-details">
        <img src="./pic.png" alt="Profile" className="large-profile" />
        <div className="employee-info">
          <h3>Julie Taylor</h3>
          <p>VP of Marketing</p>
        </div>
      </div>
      <div className="contact-info">
        <div>
          <strong>Call Office:</strong>
          <span>781-000-0002</span>
        </div>
        <div>
          <strong>Call Mobile:</strong>
          <span>617-000-0002</span>
        </div>
        <div>
          <strong>SMS:</strong>
          <span>617-000-0002</span>
        </div>
        <div>
          <strong>Email:</strong>
          <span>jtailor@fakemail.com</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;
