import React from "react";
import "./style.css";
import "../../global.css";

export const Hero = () => {
  return (
    <>
      <div className="container-hero">
        <div className="container-hero__text">
          <h2>Creating Harmony between companies and women</h2>
          <p>
            Helping companies and women find a common balance and efficient
            collaboration for a seamless return to the work environment.
          </p>
          <a href="#heroAssesmentTest">
            <button>Find out more</button>
          </a>
        </div>
        <div className="container-hero__image">
          <img src="/women.svg" alt="women" />
        </div>
      </div>

      <div className="container-statistics">
        <div className="statistic">
          <p className="percentage">56%</p>
          <p className="percentage-text">
            <strong>of women </strong> find it hard to get back to work <br />{" "}
            after maternity leave
          </p>
        </div>

        <div className="statistic">
          <p className="percentage">77%</p>
          <p className="percentage-text">
            <strong>of women</strong> can not get back to their <br /> previous
            jobs
          </p>
        </div>
      </div>
    </>
  );
};
