import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')
      .then(res => {
        if (!res.data.status) {
            console.log(res.data)
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        navigate('/');
      });
  }, [navigate]);

  return (
    <div>
      Dashboard
    </div>
  );
}

export default Dashboard;
