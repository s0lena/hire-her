import React from "react";
import "./style.css";

export const CompanyAssesementHero = () => {
  return (
    <>
      <div className="container-hero-test">
        <div className="container-hero__text">
          <h2>Test your company</h2>
          <p>
            Evaluate how supportive and work-life balance-friendly your company
            is, and learn how to improve it. This assessment will help you
            review your workplace policies and culture to better support
            employees managing work and family commitments.
          </p>

          <a href="#test">
            <button className="container-hero__button">Start the test</button>
          </a>
        </div>
        <img src="/magnify.svg" alt="test" />
      </div>
    </>
  );
};
