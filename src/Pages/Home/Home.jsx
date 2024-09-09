import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: ''
        });
        const [latestNotice, setLatestNotice] = useState('');

    useEffect(() => {
        // Simulating fetching the latest notice
        setLatestNotice('New soil testing service available! Book now for a 10% discount.');
    }, []);

      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log('Form submitted:', formData);
          // Reset form after submission
          setFormData({ name: '', email: '', message: '' });
        };
  return (
    <div className="landing-page">
        
      <main>
     
        <section id="home" className="hero">
          <h1>Empowering Farmers with Technology</h1>
          <button className="cta-   button">Get Started</button>
        </section>
        <div className="continue-running-line">
                {latestNotice}
            </div>
        <section id="about" className="about">
            <div className="about-container">
          <h2>About Us</h2>
          <p>Krishi Saathi is your comprehensive partner in agriculture, dedicated to addressing your crop-related challenges. Whether you're looking for personalized crop analysis, precise soil health reports, or advanced drone services, we have you covered. Our platform is designed to empower farmers with cutting-edge solutions, ensuring optimal growth and yield for your crops. From planning to harvest, Krishi Saathi is here to support you every step of the way, making sure your fields thrive and your efforts bear the best results.</p>
          </div>
        </section>

        <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <div className="service-card-image1" ></div>
          <div className="service-card-content">
            <h3>Soil Report and Testing</h3>
            <p>Get comprehensive soil analysis to maximize your crop yield</p>
            <Link to="/soilreport" className="learn-more">Learn More</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-image2" ></div>
          <div className="service-card-content">
            <h3>Crop recomendation</h3>
            <p>Suggesting crops for your soil type and not in Government Surplus</p>
            <Link to="/dashboard" className="learn-more">Learn More</Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-image3"></div>
          <div className="service-card-content">
            <h3>Drone Booking</h3>
            <p>Schedule drone services for crop monitoring and analysis</p>
            <Link to="/dronebooking" className="learn-more">Learn More</Link>
          </div>
        </div>
      </div>
    </section>

        

    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have questions? We're here to help!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
      </main>

      
    </div>
  );
}

export default Home