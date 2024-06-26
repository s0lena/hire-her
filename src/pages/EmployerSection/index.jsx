import './style.css';
import '../../global.css';
import { EmployerSectionTwo } from '../../components/EmployerSectionTwo';

export const EmployerSection = () => {
  return (
    <>
      <div className="container-employerSection">
        <div className="container-employerSection__text">
          <h2>Hiring parents</h2>
          <p>
            Effective inclusion will bring you measurable and positive impacts
            on the culture, finances and performance of your company.
          </p>
          <a href="#employersection_two"><button>Find out more</button></a>
        </div>
        <div className="container-employerSection__image">
          <img src="/blue-icon-woman.png" alt="Woman Icon" />
        </div>
      </div>
      <EmployerSectionTwo />
    </>
  );
};
