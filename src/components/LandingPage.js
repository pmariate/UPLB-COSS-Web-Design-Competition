import React from 'react';
import '../App.css'; // Import CSS file
import CommontActions from './CommonActions';
import Preview from './Preview';
import Recents from './Recents';
import { motion } from "framer-motion"
import { FaFlag } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

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
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 1, delay: 0.25 }}
              >
                  <h1 style={{ color: 'white', fontSize: '55px', fontFamily: 'PT Serif', marginBottom : '12px' }}>Get out and explore</h1>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 1, delay: 0.5 }}
              >
                  <h3 style={{ color: '#ADDFAD', fontSize: '22px', fontFamily: 'Helvetica' }}>Lorem ipsum dolor sit amet. At doloribus deleniti sed facere nostrum quo nulla pariatur ut voluptatibus amet ut galisum dolores non dignissimos reiciendis qui minus obcaecati.</h3>
              </motion.div>
            
            </div>
          </div>
        </div>
      </section>

      {/* Common Actions */}
      <CommontActions />

      {/* Preview */}
      <Preview />

      {/* Recent */}
      <Recents />

      {/* Success */}
      <section id="success" className="flexCol">
        <h2 style={{ margin: '0 0 20px 0', fontSize: '40px'}}>Objectives</h2>
        <div id="success-container" className="flexRow">
          <div className="success-info flexCol">
            <FaFlag style={{ color: 'white', fontSize: '120px', margin: '30px' }}/>
            <h3>100,000 +</h3>
            <h6>People lives' changed</h6>
          </div>

          <div className="success-info flexCol">
            <FaBullseye style={{ color: 'white', fontSize: '120px', margin: '30px' }}/>
            <h3>1 Million</h3>
            <h6>More stories to finish with a happy ending</h6>
          </div>

          <div className="success-info flexCol">
            <FaTrophy style={{ color: 'white', fontSize: '120px', margin: '30px' }}/>
            <h3>7 Billion</h3>
            <h6>People all over the world to participate and help</h6>
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
