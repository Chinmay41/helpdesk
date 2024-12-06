import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User registered:', { username, password, email });
    navigate('/');
  };

  return (
    <div className="auth-container">
      <h2 className='helpdesk'>Helpdesk System</h2>
      <p>Sign up here</p>
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
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" id='signupbtn'>Sign Up</button>
      </form>
      <div className="container1">
        <p className='forgot'>Forgot password</p>
        <p className='signup' onClick={() => navigate('/')}>Sign In</p>
      </div>
    </div>
  );
}

export default Signup;