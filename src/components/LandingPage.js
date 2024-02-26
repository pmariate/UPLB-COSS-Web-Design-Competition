import React from 'react';
import '../App.css'; // Import CSS file

const LandingPage = () => {
  return (
    <div className="container">
      <nav>
        <ul className="navbar-list">
          <li><a href="#about">About Us</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="welcome-section" className="section welcome-section">
        <div className="container">
          <div className="row">
            <div className="header-text">
              <h2 style={{ color: 'white', fontSize: '55px', marginBottom : '12px' }}>Get out and explore</h2>
              <h2 style={{ color: '#ADDFAD', fontSize: '22px', fontFamily: 'Helvetica' }}>Lorem ipsum dolor sit amet. At doloribus deleniti sed facere nostrum quo nulla pariatur ut voluptatibus amet ut galisum dolores non dignissimos reiciendis qui minus obcaecati.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
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
