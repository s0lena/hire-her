import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./style.css";
import "../../global.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <h3>Get involved and support experts on maternity leave!</h3>
        <div className="footer-container">
          <div className="footer-column">
            <section className="social-media">
              <h4>Social Media</h4>
              <div className="social-media__row">
                <a
                  href="https://www.facebook.com/hireher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src="/facebook.svg"
                    alt="facebook logo"
                    width="20"
                  />
                  <span>/hireher</span>
                </a>
              </div>
              <div className="social-media__row">
                <a
                  href="https://www.instagram.com/hireher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src="/instagram.svg"
                    alt="instagram logo"
                    width="20"
                  />
                  <span>@hireher</span>
                </a>
              </div>
              <div className="social-media__row">
                <a
                  href="https://www.linkedin.com/company/hireher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon"
                    src="/linkedin.svg"
                    alt="linkedin logo"
                    width="20"
                  />
                  <span>Hire her</span>
                </a>
              </div>
            </section>
          </div>
          <div className="footer-column">
            <section className="contact" id="contact">
              <h4>Contact</h4>
              <div className="contact__row">
                <a href="mailto:hi@hireher.cz" className="contact__detail">
                  hi@hireher.cz
                </a>
              </div>
            </section>
          </div>

          <div className="footer-column">
            <section className="get-involved">
              <h4>Get involved</h4>
              <a href="/employee-section" className="get-involved__employee">
                I am an employee
              </a>
              <a href="/employer-section" className="get-involved__employer">
                I am an employer
              </a>
            </section>
          </div>
        </div>
        <p className="footer-note">@2024 by Hire Her.</p>
      </footer>
    </>
  );
};
