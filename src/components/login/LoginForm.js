import React from 'react';
import './login.form.css';
import { FaEnvelope, FaLock, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(true);
  const navigateTo = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigateTo('/shopping');
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <div className="email-box">
            <FaEnvelope className="icon envelope-icon" />
            <input
              type="email"
              placeholder="Email"
              className="input input-email "
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-box">
            <FaLock className="icon lock-icon" />
            <input
              type="password"
              placeholder="Password"
              className="input input-password"
              autoComplete="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="rem-for-box">
            <div
              className="flex-center"
              onClick={() => setRememberMe(!rememberMe)}
            >
              <FaCheckCircle
                className={`check-icon ${rememberMe ? 'check' : ''}`}
              />
              <label>Remember me</label>
            </div>
            <div>Forgot Password?</div>
          </div>
          <input type="submit" value="Login" className="login-btn" />
          <div className="signup-msg">
            Don't have an account?
            <label>Sign up</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
