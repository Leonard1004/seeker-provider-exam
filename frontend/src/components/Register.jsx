import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seeker');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/auth/register', { email, password, role });
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="seeker">Seeker</option>
        <option value="provider">Provider</option>
      </select>
      <button
        onClick={handleRegister}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Register
      </button>
    </div>
  );
}

export default Register;