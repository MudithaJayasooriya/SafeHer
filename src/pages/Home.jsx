import React, { useState } from "react";
import "./Home.css";
import Footer from "../components/Footer";
import { FaSeedling, FaBookOpen, FaHandshake, FaUtensils } from "react-icons/fa";
import { FaSchool, FaLaptop, FaStreetView, FaHandsHelping } from "react-icons/fa";

const keyFeatures = [
  {
    title: "Online Safety",
    description: "Protect girls from cyber threats with awareness and tools for safer internet use.",
    image: "/images/img10.jpg",
  },
  {
    title: "Safe Education",
    description: "We ensure schools and colleges are secure spaces for girls to learn and grow.",
    image: "/images/img5.jpeg",
  },
  
  {
    title: "Public Safety",
    description: "Making public places safer through community engagement and tech-based solutions.",
    image: "/images/img7.jpg",
  },
  {
    title: "Empowerment",
    description: "Encourage self-confidence, leadership, and awareness in every girl.",
    image: "/images/img12.jpg",
  },
];

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(keyFeatures[0]);

  return (
    <>
      <section className="our-story">
        <div className="our-story-content">
          <div className="text-content">
            <h1 className="section-heading">SafeHer</h1>
            <h2>Welcome to the Centre for Girls' Safety</h2>
            <p className="description">
              We create safe spaces for every girl — in school, online, and beyond...
            </p>
          </div>
          <div className="image-content">
            <img src="/images/img2.jpeg" alt="Girl safety illustration" />
          </div>
        </div>
      </section>

      <section className="extra-info">
        <div className="extra-info-content">
          <div className="image-content">
            <img src="/images/img31.jpeg" alt="Empowered girls" />
          </div>
          <div className="text-content">
            <h3 className="section-heading">What is SafeHer</h3>
            <p className="description">
              SafeHer is more than a platform—it's a movement. We provide tools,
              stories, and resources that empower every girl to feel secure,
              heard, and supported no matter where she is.
            </p>
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <div className="features">
          <div className="feature">
            <div className="icon">
              <FaSchool size={60} />
            </div>
            <h3>Safe Education</h3>
            <p>
              We work to create secure and inclusive environments in schools and colleges
              where every girl can thrive without fear.
            </p>
          </div>
          <div className="feature">
            <div className="icon">
              <FaLaptop size={60} />
            </div>
            <h3>Online Safety</h3>
            <p>
              SafeHer provides tools, resources, and education to promote
              safe digital behavior and protect against cyberbullying and harassment.
            </p>
          </div>
          <div className="feature">
            <div className="icon">
              <FaStreetView size={60} />
            </div>
            <h3>Public Safety</h3>
            <p>
              We support initiatives for safer public spaces through awareness campaigns,
              emergency support, and mapping safe zones.
            </p>
          </div>
          <div className="feature">
            <div className="icon">
              <FaHandsHelping size={60} />
            </div>
            <h3>Empowerment</h3>
            <p>
              Through stories, workshops, and mentorship, we empower girls to speak up, stay safe,
              and lead change in their communities.
            </p>
          </div>
        </div>
      </section>

      <section
        className="key-features-section"
        style={{ backgroundImage: `url(${activeFeature.image})` }}
      >
        <div className="features-container">
          <h2 className="main-heading">Key Features of SafeHer</h2>
          <div className="feature-buttons">
            {keyFeatures.map((feature, index) => (
              <button
                key={index}
                className={`feature-btn ${activeFeature.title === feature.title ? "active" : ""}`}
                onClick={() => setActiveFeature(feature)}
              >
                {feature.title}
              </button>
            ))}
          </div>
          <div className="feature-description">
            <h3>{activeFeature.title}</h3>
            <p>{activeFeature.description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
