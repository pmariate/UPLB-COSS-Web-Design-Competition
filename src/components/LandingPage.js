import React from 'react';
import '../App.css'; // Import CSS file
import { FaSearch } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="container">
      <nav>
        <ul class = "navbar-list">
          <li><a href="#about">About Us</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
          <FaSearch />
        </ul>
      </nav>
      <header>
        <h1 class = "welcome-section">Welcome to Our Landing Page!</h1>
      </header>

 


      <section id="about">
        <h2>About Us</h2>
        <p>This is where you can describe your company or product.</p>
      </section>
      <section id="gallery">
        <h2>Gallery</h2>
        {/* Your gallery component here */}
      </section>
      <footer id="contact">
        <p>Contact us: email@example.com</p>
      </footer>
    </div>
  );
};

export default LandingPage;
