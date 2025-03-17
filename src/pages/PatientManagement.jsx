import React, { useState } from 'react';
import '../styles/management.css';
import './PatientManagement.css';

const PatientManagement = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      firstName: 'Sam',
      lastName: 'Sapooth',
      nic: '616262624V',
      email: 'hao@email',
      mobileNumber: '0774596005',
      dateOfBirth: '2022-01-13',
      gender: 'Male',
      address: 'Galle'
    }
  ]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    nic: '',
    dateOfBirth: '',
    address: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdd = () => {
    // Add validation and API call here
    console.log('Adding patient:', formData);
  };

  const handleUpdate = () => {
    // Add update logic here
    console.log('Updating patient');
  };

  const handleDelete = () => {
    // Add delete logic here
    console.log('Deleting patient');
  };

  const handleSearch = () => {
    // Add search logic here
    console.log('Searching patient');
  };

  return (
    <div className="management-page">
      <h2>Patient Management</h2>
      
      <div className="search-section">
        <button className="generate-report-btn">Generate Report</button>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Patient ID"
            className="search-input"
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="form-container">
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="nic"
            placeholder="NIC"
            value={formData.nic}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <div className="form-row">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <div className="button-group">
          <button className="add-btn" onClick={handleAdd}>Add</button>
          <button className="update-btn" onClick={handleUpdate}>Update</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <div className="table-container">
        <h3>Recent patients</h3>
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>NIC</th>
              <th>Email</th>
              <th>Mobile number</th>
              <th>Date of birth</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.nic}</td>
                <td>{patient.email}</td>
                <td>{patient.mobileNumber}</td>
                <td>{patient.dateOfBirth}</td>
                <td>{patient.gender}</td>
                <td>{patient.address}</td>
                <td>
                  <button className="edit-btn">✎</button>
                  <button className="delete-btn">✖</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientManagement; 