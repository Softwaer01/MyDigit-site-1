import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Back Button */}
        <div className="back-btn">
          <i className="fas fa-chevron-left"></i>
        </div>

        {/* Title & Subtitle */}
        <h2 className="login-title">Create an account</h2>
        <p className="login-subtitle">Enter your email and password to log in</p>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="thompson@gmail.com" 
              className="form-input" 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                defaultValue="123456" 
                className="form-input" 
              />
              <i 
                className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} eye-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          {/* Remember me & Forgot Password */}
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot" className="forgot-link">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn-login">Log in</button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Social Buttons */}
        <button className="btn-social">
          <i className="fab fa-google" style={{ color: "#4285F4" }}></i> Continue with Google
        </button>
        <button className="btn-social">
          <i className="fab fa-facebook" style={{ color: "#1877F2" }}></i> Continue with Facebook
        </button>

        {/* Footer */}
        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;