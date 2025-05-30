import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Log_in() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login attempt:", { username, password });

    navigate("/for_you");
  };

  return (
    <div className="auth-container login-container">
      <div className="auth-card">
        <h2>LOG IN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit" className="auth-button">
            LOG IN
          </button>
        </form>
        <div className="auth-footer">
          <a href="#">Forgot Password?</a>
          <p>
            Don’t have an account? <Link to="/sign_up">SIGN UP</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Log_in;