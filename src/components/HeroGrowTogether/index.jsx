import './style.css';
import '../../global.css';

export const HeroGrowTogether = () => {
  return (
    <>
      <div className="container-heroGrowTogether">
        <div className="container-hero__main">
          <h2>Companies and families can grow together</h2>
          <p>
            Approximately 51% of Czech men and women of working age are parents.
            Strategically chosen processes will enable them to be more
            productive and efficient at work in any position. We're not just
            talking about moms. The opportunity to combine work and family is
            equally important for fathers.
          </p>
          <a href="/employer-section">
            <button>See how you can include them</button>
          </a>
        </div>
        <img src="/growTogether.png" alt="women" />
      </div>
    </>
  );
};
