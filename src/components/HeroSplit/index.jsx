import { Link } from 'react-router-dom';
import './style.css';
import '../../global.css';

export const HeroSplit = () => {
  return (
    <>
      <div className="container-heroSplit" id="herosplit">
        <div className="container-heroSplit__employee">
          <h3>
            Coming back to work after parental <br></br>
            leave ?
          </h3>
          <p>Do it confidently with us</p>
          <ol>
            <li>Prepare for the interviews with us</li>
            <li>Boost your CV</li>
            <li>Browsejobsfromfamily-friendly employers</li>
            <li>Refresh your skills with recommended courses</li>
          </ol>
          <br></br>
          <Link to="/employee-section"> Find out more →</Link>
        </div>

        <div className="container-heroSplit__employer">
          <h3>Solving the issue of parent inclusion in your company ?</h3>
          <p>Make it a priceless contribution to your business</p>
          <ol>
            <li>
              Create working conditions that help your employees balance family
              and work
            </li>
            <li>
              Identify key benefits for potential candidates and become their
              top choice
            </li>
            <li>
              Invest in effective processes that have a measurable impact on
              your business goals
            </li>
          </ol>
          <br></br>
          <Link to="/employer-section"> Find out more →</Link>
        </div>
      </div>
    </>
  );
};
