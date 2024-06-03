import './style.css';

export const Hero = () => {
  return (
    <>
      <div className="container">
        <h2>Creating Harmony between companies and women</h2>
        <img src="img/women.png" />
        <p>
          Helping companies and women find a common balance and efficient
          collaboration for a seamless return to the work environment.
        </p>
        <button>Find out more</button>
      </div>
      <div className="container-statistics">
        <p>
          <strong>56% </strong>
          <strong>of women </strong> find it hard to get back to work after
          maternity leave
        </p>
        <p>
          <strong>77% </strong>
          <strong>of women</strong> cant get back to their previous jobs
        </p>
      </div>
    </>
  );
};
