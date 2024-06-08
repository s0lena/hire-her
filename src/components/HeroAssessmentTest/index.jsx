import { Link } from 'react-router-dom';
import './style.css';
import '../../global.css';

export const HeroAssessmentTest = () => {
  return (
    <>
      <div className="container-heroAssessmentTest">
        <h3>
          We are here to prepare you <br></br>
          for your next amazing job
        </h3>
        <div className="container-heroAssessmentTest__linked">
          <Link to="/test-your-company" style={{ color: 'white' }}>
            {' '}
            Company assesment test{' '}
          </Link>
          <Link to="/interview" style={{ color: 'white' }}>
            {' '}
            Interview simulator
          </Link>
        </div>

        <div
          id="heroAssesmentTest"
          className="container-heroAssessmentTest__text"
        >
          <img src="/magnify.png" alt="magnify" />
          <div className="container-heroAssessmentTest__text-content">
            <h3>Company assesment test</h3>
            <p>
              Evaluate how supportive and work-life balance-friendly your
              company is, and learn how to improve it. This assessment will help
              you review your workplace policies and culture to better support
              employees managing work and family commitments. Discover effective
              strategies to create a more inclusive and equitable environment
              for everyone.
            </p>
            <a href="/test-your-company">
              <button>Start the test</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
