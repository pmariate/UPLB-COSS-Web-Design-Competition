import React from 'react';
import '../App.css'; // Import CSS file
import { FaFlag } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const LandingPage = () => {
  return (
    
    <div className="container">
      <nav>
        <ul className="navbar-list">
        <li><a href="#actions">Recent Activities</a></li>
        <li><a href="#success">Objectives</a></li>
          <li><a href="#about">SDGs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="welcome-section" className="section welcome-section">
        <div className="container">
          <div className="row">
            <div className="header-text">
              <h1 style={{ color: 'white', fontSize: '55px', fontFamily: 'PT Serif', marginBottom : '12px' }}>Get out and explore</h1>
              <h3 style={{ color: '#ADDFAD', fontSize: '18px', fontFamily: 'Helvetica' }}>The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Common Actions */}
      <section id="actions" className="flexRow">
        <div className="action flexCol active">
          <h4>Provide food and clean water for the children</h4>
          <a href="">READ MORE</a>
        </div>

        <div className="action flexCol">
          <h4>Contribute to renewable energy source</h4>
          <a href="">READ MORE</a>
        </div>

        <div className="action flexCol">
          <h4>Promote good health and quality education</h4>
          <a href="">READ MORE</a>
        </div>

        <div className="action flexCol">
          <h4>Restore habitats for the native animals</h4>
          <a href="">READ MORE</a>
        </div>
      </section>

      {/* Preview */}
      <section id="preview" className="flexRow">
        <div id="imageContainer" className="flexRow">
          <div id="image" className="flexRow">
          </div>
        </div>
        <div id="description" className="flexCol">
          <div>
            <h2 style={{ margin: '0', fontSize: '40px'}}>Children's Welfare</h2>
            <p>Efforts to enhance family planning services and childhood vaccinations also require immediate attention to ensure universal access to healthcare services.</p>
          </div>
          <button id="donate">Donate</button>
        </div>
      </section>

      {/* Recent */}
      <section id="recent-post" className="flexCol">
        <h2 style={{ margin: '0 0 20px 0', fontSize: '40px'}}>Recent Activities</h2>
        <div id="recent-container" className="flexRow">
          <div id="recent1" className="recent flexCol">
            <h4>Provide job opportunities to displaced workers</h4>
            <h6>Los Banos, Laguna</h6>
          </div>

          <div id="recent2" className="recent flexCol">
            <h4>Achieve quality education from less-priviliged students</h4>
            <h6>Gumaca, Quezon</h6>
          </div>

          <div id="recent3" className="recent flexCol">
            <h4>Donate medicine and supplement subsidies</h4>
            <h6>Bacoor, Cavite</h6>
          </div>

          <div id="recent4" className="recent flexCol">
            <h4>Build renewable sources of energy</h4>
            <h6>Metro Manila, Manila</h6>
          </div>
        </div>
      </section>

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
        <h2 style={{ margin: '30px 0 30px 55px', fontSize: '44px'}}>17 SDGs</h2>

        <img style={{ margin: '20px 0 80px 255px' }} src={require('../assets/board.png')} alt="Logo" />
      </section>
      

      <footer id="contact">
  <p>Email: pmariate@up.edu.ph || cgberana@up.edu.ph</p>
  <p>&copy; Copyright 2024; Designed by Ariate & Berana</p>
  <div className="social-icons">
    <a ><FontAwesomeIcon icon={faFacebookSquare} /></a>
    <a ><FontAwesomeIcon icon={faLinkedin} /></a>
    <a ><FontAwesomeIcon icon={faTwitter} /></a>
  </div>
</footer>
    </div>
  );
};

export default LandingPage;
