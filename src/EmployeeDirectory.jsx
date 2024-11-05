import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

function EmployeeDirectory() {
  return (
    <div>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default EmployeeDirectory;
