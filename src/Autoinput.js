import React, { useState } from 'react';

function MyApplications() {
  // Application numbers and names data
  const applicationNumbers = ['123', '456', '789'];
  const applicationNames = ['Application A', 'Application B', 'Application C'];

  // State with object containing application number and application name
  const [applications, setApplications] = useState({
    applicationNumber: '',
    applicationName: ''
  });

  // Function to handle changes in application number input
  const handleApplicationNumberChange = (event) => {
    const value = event.target.value;
    setApplications(prevState => ({
      ...prevState,
      applicationNumber: value,
      // Automatically fill the application name if a matching number is found
      applicationName: applicationNames[applicationNumbers.indexOf(value)] || ''
    }));
  };

  // Function to handle changes in application name input
  const handleApplicationNameChange = (event) => {
    const value = event.target.value;
    setApplications(prevState => ({
      ...prevState,
      applicationName: value,
      // Automatically fill the application number if a matching name is found
      applicationNumber: applicationNumbers[applicationNames.indexOf(value)] || ''
    }));
  };

  return (
    <div>
      <label>Application Number:</label>
      <input
        type="text"
        value={applications.applicationNumber}
        onChange={handleApplicationNumberChange}
      />
      <br />
      <label>Application Name:</label>
      <input
        type="text"
        value={applications.applicationName}
        onChange={handleApplicationNameChange}
      />
      <br />
    </div>
  );
}

export default MyApplications;
