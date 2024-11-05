import React from 'react';
import EmployeeDirectory from './EmployeeDirectory';
import EmployeePage from './EmployeePage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="column left-column">
        <EmployeeDirectory />
      </div>
      <div className="column right-column">
        <EmployeePage />
      </div>
    </div>
  );
}

export default App;
