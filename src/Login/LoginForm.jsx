import React, { useState } from 'react';
import './Login.css'; // Ensure the CSS file is in the same directory
import supabase from '../Config/supabaseClient';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  //new changes
  const handleSubmit2 = async(event) => {
    event.preventDefault();
    try {
      const { data: users, error } = await supabase.from('Users').select().eq('Username', username).eq('Password', password).single()
      if (error || !users) {
        setLoginStatus('Login unsuccessful. Incorrect username or password.');
        setIsLoginSuccess(false);
      } else{
        //switch to handle the landing pages
        //access userRoles
        const userRoles = users.Roles;


        switch(userRoles){
          case 'Student':
            setLoginStatus('Login successful!');
            setIsLoginSuccess(true);
            window.location.href = '/LandingStudent';
            break;

          case 'Faculty':
            setLoginStatus('Login successful!');
            setIsLoginSuccess(true);
            window.location.href = '/LandingFaculty';
            break;
          case 'Administrator':
            setLoginStatus('Login successful!');
            setIsLoginSuccess(true);
            window.location.href = '/LandingAdmin';
            break;
          default:
              setLoginStatus('Login unsuccessful. Unknown cause.');
              setIsLoginSuccess(false);
              break;
        }         

      }
    }catch (error){
      console.error('Error signing in:', error.message);
      setLoginStatus('An error occurred. Please try again later.');
      setIsLoginSuccess(false);
    }
  }
  
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit2} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="loginButton">Login</button>
        <div className={isLoginSuccess ? 'login-status success' : 'login-status error'}>
          {loginStatus}
        </div>
      </form>
    </div>
  );
}

export default Login;

/*
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
      window.location.href = '/LandingAdmin';
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
        <button type="submit" className="loginButton">Login</button>
        <div className={isLoginSuccess ? 'login-status success' : 'login-status error'}>
          {loginStatus}
        </div>
      </form>
    </div>
  );
}

export default Login; */
