import React, { useState } from 'react';
import './Auth.css';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log("Signup data:", { name, email, password });

    
    navigate("/login");
  };

  return (
    <div className="auth-container signup-container">
      <div className='auth-card'>
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button">SIGN UP</button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? <Link to="/log_in">LOG IN</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;