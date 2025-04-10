import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/match/providers', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMatches(response.data);
      } catch (error) {
        alert('Failed to fetch matches!');
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4">Matches</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index} className="mb-2">
            {match.industry} - {match.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Matches;