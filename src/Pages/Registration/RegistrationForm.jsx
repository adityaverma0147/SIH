import React, { useState } from 'react';
// import bgimg from '../../../public/assets/bbg1.jpg'
import './RegistrationForm.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? e.target.checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
  };

  return (
    <div className="outer">
    <div className="wrapper-registration">
      <h1>Registration</h1>
      <div className="input-box-registration">
        <input type="text" id="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <i className="fa fa-user"></i>
      </div>
      <div className="input-box-registration">
        <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <i className="fa fa-envelope"></i>
      </div>
      <div className="input-box-registration">
        <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <i className="fa fa-lock"></i>
      </div>
      <div className="remember-forgot-registration">
        <span>
          <label><input type="checkbox" checked={formData.rememberMe} onChange={handleChange} /> Remember me</label>
        </span>
      </div>
      <button className="btn-registration" type="submit" onClick={handleSubmit}>Register</button>
      <div className="register-link-registration">
        <p>Already have an account? <Link to='/login'>Login here</Link></p>
      </div>
    </div>
</div>
  );
};

export default RegistrationForm;