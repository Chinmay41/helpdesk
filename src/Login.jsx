import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './data.json';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = data.users.find((user) => user.username === username && user.password === password);
    if (user) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h2 className='helpdesk'>Helpdesk System</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="container1">
        <p className='forgot'>Forgot password</p>
        <p className='signup' onClick={() => navigate('/signup')}>Sign Up</p>
      </div>
    </div>
  );
}

export default Login;