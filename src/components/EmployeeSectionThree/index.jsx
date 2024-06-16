import "./style.css";
import "../../global.css";

export const EmployeeSectionThree = () => {
  return (
    <>
      <div className="container-employeeSection__partThree">
        <div className="container-employeeSection__textPartThree">
          <h2>Explore how we can assist you</h2>
          <p>
            Are you going through professional or work- related changes? Are you
            interested in working and utilizing your skills and experiences in a
            family context? We will help you reintegrate into the job market and
            fully prepare for job interviews.
          </p>
          <a href="#footer">
            <button>Contact us</button>
          </a>
        </div>
        <div className="container-employeeSection__image">
          <img src="/woman-with-man.png" alt="WomanWithMan" />
        </div>
      </div>
    </>
  );
};
