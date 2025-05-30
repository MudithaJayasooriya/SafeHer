import React from 'react'
import './Help.css'
import Footer from '../components/Footer'
import { FaSeedling, FaBookOpen, FaHandshake, FaUtensils } from "react-icons/fa";


const Help = () => {
  return (
    <div className="help-page">
      <header className="help-header">
        <h1>Need Help? We're Here for You.</h1>
        <p>
          Whether you're seeking support, want to report something, or get involved — SafeHer has your back.
        </p>
      </header>

      <section className="report-section">
        <h2>Report an Incident</h2>
        <p>You can report anonymously or leave your contact if you want a follow-up.</p>
        <form className="report-form">
          <textarea placeholder="Describe the incident..." required />
          <input type="text" placeholder="Your Name (Optional)" />
          <input type="email" placeholder="Your Email (Optional)" />
          <button type="submit">Submit Report</button>
        </form>
      </section>

      <section className="resources">
        <h2>Support Resources</h2>
        <div className="resource-grid">
          <div className="resource-card">
            <img src="/images/img26.jpg" alt="Self-defense" />
            <h3>Self-Defense Workshops</h3>
            <p>Learn how to protect yourself with certified instructors. Online & in-person sessions.</p>
            <a href="#" className="resource-link">View Workshops</a>
          </div>

          <div className="resource-card">
            <img src="/images/img27.jpg" alt="Mental Health Support" />
            <h3>Mental Health Support</h3>
            <p>Access counseling, therapy, and safe conversations with trained professionals.</p>
            <a href="#" className="resource-link">Find Support</a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="join-movement">
        <h2>Join the Movement</h2>
        <div className="movement-options">
          <div className="option">
            <img src="/images/img28.jpg" alt="Volunteer" />
            <h3>Volunteer</h3>
            <p>Help us organize events and campaigns in your local area.</p>
          </div>
          <div className="option">
            <img src="/images/img29.jpg" alt="Start a Club" />
            <h3>Start a Club</h3>
            <p>Create a SafeHer club in your school or university to spread awareness.</p>
          </div>
          <div className="option">
            <img src="/images/img30.jpg" alt="Donate" />
            <h3>Donate</h3>
            <p>Support our mission with a one-time or monthly contribution.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;

