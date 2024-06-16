import "./style.css";
import proressbar1 from "./progressbar-1.svg";
import proressbar2 from "./progressbar-2.svg";
import proressbar3 from "./progressbar-3.svg";

export const EmployerSectionTwo = () => {
  return (
    <>
      <div className="container-employers-two" id="employersection_two">
        <div className="container-employers-two__text">
          <h2>
            Evolution of Work: Embracing Flexibility, Digitalization, and
            Personalization
          </h2>
          <p>
            According to the Deloitte survey, the future of work includes
            flexible and hybrid arrangements, digitalized and automated
            workplaces, and individualized working conditions. By implementing
            accommodating work conditions, companies can boost employee
            performance, leading to improved business outcomes.
          </p>
        </div>
        <img src="/woman-with-man.svg" alt="happy-parents" />
      </div>

      <div className="container-employers-two__pink">
        <h2>Evaluate your company</h2>
        <p>
          Assess the Family Supportiveness of Your Organization and Uncover
          Strategies for Improvement
        </p>
        <a href="/test-your-company">
          <button>Take a quick test</button>
        </a>
      </div>

      <div className="container-employers-two__white">
        <h2>Why to use the strategy of including parents in your company?</h2>
        <div className="columns-3">
          <div className="columns-3_item">
            <img src="/high-five.svg" alt="cooperation" />
            <h3>
              Helps you achieve your business goals and provides positive PR
            </h3>
            <p>
              The nature of work is changing and the needs of employees are
              changing with it. Support them in what matters to them and
              increase their productivity. Good PR is a bonus.
            </p>
            <img src={proressbar1} className="progressbar-purple" />
          </div>
          <div className="columns-3_item">
            <img src="/rocket.svg" alt="rocket" />
            <h3>A small investment with big results</h3>
            <p>
              We'll show you how to incorporate it into a functional career
              path.
            </p>
            <img src={proressbar2} className="progressbar-purple" />
          </div>
          <div className="columns-3_item">
            <img src="/globe.svg" alt="globe" />
            <h3>It is long-term sustainable</h3>
            <p>
              Your company will no longer lose qualified employees due to
              something as common as parenthood.
            </p>
            <img src={proressbar3} className="progressbar-purple" />
          </div>
        </div>
      </div>

      <div className="container-employers-two__pink">
        <h2>Be the employer of the future</h2>

        <p></p>
        <a href="/test-your-company">
          <button>Test your company</button>
        </a>
      </div>
    </>
  );
};
