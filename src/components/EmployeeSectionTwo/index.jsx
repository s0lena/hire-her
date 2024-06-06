import './style.css';
import '../../global.css';

export const EmployeeSectionTwo = () => {
  return (
    <>
      <div className="container-employeeSection">
        <div className="container-employeeSection__text">
          <h2>
            Returning from maternity leave can be challenging, but with our
            support, you'll overcome it
          </h2>
          <p>
            Discover your true value in the market and how to leverage it.
            Prepare yourself to succeed in interviews. Navigate the job market
            and explore companies where you can pursue an ideal career path
            while remaining a caring parent.
          </p>
          <button>Find out more</button>
        </div>
        <div className="container-employeeSection__image">
          <img src="/woman-with-dog.png" alt="WomanAndDog" />
        </div>
      </div>
    </>
  );
};
