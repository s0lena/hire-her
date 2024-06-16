import "./style.css";
import "../../global.css";
import { EmployeeSectionTwo } from "../../components/EmployeeSectionTwo";
import { EmployeeSectionThree } from "../../components/EmployeeSectionThree";

export const EmployeeSection = () => {
  return (
    <>
      <div className="container-employeeSection">
        <div className="container-employeeSection__text">
          <h2>Family and Work</h2>
          <p>We will help you find balance</p>
          <a href="#employee_section">
            <button>Find out more</button>
          </a>
        </div>
        <div className="container-employeeSection__image">
          <img src="/blue-icon-woman.png" alt="Woman Icon" />
        </div>
      </div>
      <EmployeeSectionTwo />
      <EmployeeSectionThree />
    </>
  );
};
