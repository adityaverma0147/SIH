import React from 'react';
import { Link } from 'react-router-dom';
import './LoginUp.css'; 




const LoginForm = () => {
  return (
    <div className="outside">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <div className="remember-forgot">
          <span>
            <input type="checkbox" /> Remember Me
          </span>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account?{' '}
            <Link to="/registration">Register</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;