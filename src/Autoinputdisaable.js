
// If you have two separate arrays or objects containing application numbers and names respectively, 
// you can use them to match the values entered in the input fields. 
// Below is an example of how you can achieve this:
//adding disable feature to it

import React, { useState } from 'react';


function MyApplications() {
  // Application numbers and names data
  const applicationNumbers = ['123', '456', '789'];
  const applicationNames = ['Roronoa zoro', 'Monkey d luffy', 'Vinsmoke sanji'];

  // State with object containing application number and application name
  const [applications, setApplications] = useState({
    applicationNumber: '',
    applicationName: ''
  });

  // Function to handle changes in application number input
  const handleApplicationNumberChange = (event) => {
    const value = event.target.value;
    const nameIndex = applicationNumbers.indexOf(value);
    console.log(nameIndex)
    if (nameIndex !== -1) {
      setApplications(prevState => ({
        ...prevState,
        applicationNumber: value,
        applicationName: applicationNames[nameIndex]
      }));
    } else {
      setApplications(prevState => ({
        ...prevState,
        applicationNumber: value,
        applicationName: ''
      }));
    }
  };

  // Function to handle changes in application name input
  const handleApplicationNameChange = (event) => {
    const value = event.target.value;
    const numberIndex = applicationNames.indexOf(value);

    if (numberIndex !== -1) {
      setApplications(prevState => ({
        ...prevState,
        applicationName: value,
        applicationNumber: applicationNumbers[numberIndex]
      }));
    } else {
      setApplications(prevState => ({
        ...prevState,
        applicationName: value,
        applicationNumber: ''
      }));
    }
  };

  return (
    <div>
      <label>Application Number:</label>
      <input
        type="text"
        value={applications.applicationNumber}
        onChange={handleApplicationNumberChange}
        disabled={applications.applicationName !== ''}
      />
      <br />
      <label>Application Name:</label>
      <input
        type="text"
        value={applications.applicationName}
        onChange={handleApplicationNameChange}
        disabled={applications.applicationNumber !== ''}
      />
      <br />
    </div>
  );
}

export default MyApplications;
