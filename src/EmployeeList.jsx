import React from 'react';

function EmployeeList() {
  const employees = [
    { name: "James King", imgSrc: "./pic.png" },
    { name: "Julie Taylor", imgSrc: "./pic.png" },
    { name: "Eugene Lee", imgSrc: "./pic.png" },
    { name: "John Williams", imgSrc: "./pic.png" },
    { name: "Ray Moore", imgSrc: "./pic.png" },
    { name: "Paul Jones", imgSrc: "./pic.png" }
  ];

  return (
    <div className="employee-list">
      {employees.map((emp, index) => (
        <div key={index} className="employee-item">
          <img src={emp.imgSrc} alt="Profile" className="profile-icon" />
          <span>{emp.name}</span>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
