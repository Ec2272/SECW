import React, { useState } from 'react';
import './Login.css'; // Ensure the CSS file is in the same directory

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
      setLoginStatus('Login successful!');
      setIsLoginSuccess(true);
    }
    else if (username === 'student' && password === 'password') {
      setLoginStatus('Login successful!');
      setIsLoginSuccess(true);
      window.location.href = '/LandingStudent';
    }
    else if (username === 'faculty' && password === 'password') {
      setLoginStatus('Login successful!');
      setIsLoginSuccess(true);
      window.location.href = '/LandingFaculty';
    }
    
    else {
      setLoginStatus('Login unsuccessful. Incorrect username or password.');
      setIsLoginSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        <div className={isLoginSuccess ? 'login-status success' : 'login-status error'}>
          {loginStatus}
        </div>
      </form>
    </div>
  );
}

export default Login;
