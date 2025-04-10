import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [services, setServices] = useState('');

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/profile/update',
        { industry, location, services },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Profile update failed!');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <input
        type="text"
        placeholder="Industry"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setIndustry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Services (for providers)"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setServices(e.target.value)}
      />
      <button
        onClick={handleUpdateProfile}
        className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
      >
        Update Profile
      </button>
    </div>
  );
}

export default Profile;