import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import '../../global.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h3>Get involved and support experts on maternity leave!</h3>
        <div className="footer-container">
          <section className="social-media">
            <h4>Social Media</h4>
            <div className="social-media__row">
              <img
                className="icon"
                src="icons/facebook.svg"
                alt="facebook logo"
                width="20"
              />
              <span>facebook.com/hireher</span>
            </div>
            <div className="social-media__row">
              <img
                className="icon"
                src="icons/instagram.svg"
                alt="instagram logo"
                width="20"
              />
              <span>@hireher</span>
            </div>
            <div className="social-media__row">
              <img
                className="icon"
                src="icons/linkedin.svg"
                alt="linkedin logo"
                width="20"
              />
              <span>Hire her</span>
            </div>
          </section>
          <section className="contact" id="contact">
            <h4>Contact</h4>
            <div className="contact__row">
              <span className="contact__detail">hi@hireher.cz</span>
            </div>
          </section>
          <section className="get-involved">
            <h4>Get involved</h4>
            <Link to="/employee-section" className="get-involved__employee">
              I am employee
            </Link>
            <Link to="/employer-section" className="get-involved__employer">
              I am employer
            </Link>
          </section>
        </div>
        <p className="footer-note">@2024 by Hire Her.</p>
      </footer>
    </>
  );
};
