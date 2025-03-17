import { useState, useEffect } from 'react';
import './StaffManagement.css';

const StaffManagement = () => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    role: '',
    gender: '',
    email: '',
    mobile: '',
    address: '',
    nic: '',
    dob: '',
    password: '',
    confirmPassword: ''
  });

  const [topDoctors, setTopDoctors] = useState([]);
  const [topNurses, setTopNurses] = useState([]);
  const [emergencyDoctors, setEmergencyDoctors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStaffData();
  }, []);

  const fetchStaffData = async () => {
    try {
      const response = await fetch('http://your-backend-url/api/staff');
      const data = await response.json();
      
      // Get top 5 doctors by experience
      const doctors = data
        .filter(staff => staff.role === 'Doctor')
        .sort((a, b) => b.yearsOfExperience - a.yearsOfExperience)
        .slice(0, 5);
      
      // Get top 5 nurses by experience
      const nurses = data
        .filter(staff => staff.role === 'Nurse')
        .sort((a, b) => b.yearsOfExperience - a.yearsOfExperience)
        .slice(0, 5);
      
      // Group emergency doctors by specialization
      const emergencyDocs = data
        .filter(staff => staff.role === 'Doctor' && staff.isEmergencyDoctor)
        .reduce((acc, doctor) => {
          if (!acc[doctor.specialization]) {
            acc[doctor.specialization] = [];
          }
          acc[doctor.specialization].push(doctor);
          return acc;
        }, {});

      setTopDoctors(doctors);
      setTopNurses(nurses);
      setEmergencyDoctors(emergencyDocs);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch staff data');
      setLoading(false);
    }
  };

  return (
    <div className="staff-page">
      <h2 className="page-title">Staff Management</h2>
      
      <div className="staff-form-container">
        <div className="header-section">
            <div className="search-box">
            <input type="text" placeholder="ID" />
            <button className="search-btn">Search</button>
          </div>
        </div>

        <div className="input-grid">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          
          <select defaultValue="">
            <option value="" disabled>Role</option>
            <option>Doctor</option>
            <option>Nurse</option>
          </select>
          
          <select defaultValue="">
            <option value="" disabled>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Mobile Number" />
          
          <textarea placeholder="Address" className="full-width"></textarea>
          
          <input type="text" placeholder="NIC" />
          <input type="date" placeholder="Date of Birth" />
          
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <div className="button-group">
            <button className="register-btn">Register</button>
            <button className="update-btn">Update</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      </div>

      <div className="staff-lists">
        {/* Top Doctors Section */}
        <div className="top-doctors">
          <h3>Top Doctors</h3>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Specialization</th>
                  <th>Experience (Years)</th>
                  <th>Rating</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {topDoctors.map((doctor) => (
                  <tr key={doctor.id}>
                    <td>{doctor.firstName} {doctor.lastName}</td>
                    <td>{doctor.specialization}</td>
                    <td>{doctor.yearsOfExperience}</td>
                    <td>{doctor.rating}/5</td>
                    <td>{doctor.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Top Nurses Section */}
        <div className="top-nurses">
          <h3>Top Nurses</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Experience (Years)</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {topNurses.map((nurse) => (
                <tr key={nurse.id}>
                  <td>{nurse.firstName} {nurse.lastName}</td>
                  <td>{nurse.department}</td>
                  <td>{nurse.yearsOfExperience}</td>
                  <td>{nurse.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Emergency Doctors by Specialization */}
        <div className="emergency-doctors">
          <h3>Emergency Doctors</h3>
          {Object.entries(emergencyDoctors).map(([specialization, doctors]) => (
            <div key={specialization} className="specialization-group">
              <h4>{specialization}</h4>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Experience</th>
                    <th>Contact</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => (
                    <tr key={doctor.id}>
                      <td>{doctor.firstName} {doctor.lastName}</td>
                      <td>{doctor.yearsOfExperience} years</td>
                      <td>{doctor.mobile}</td>
                      <td>
                        <span className={`status ${doctor.status.toLowerCase()}`}>
                          {doctor.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffManagement; 