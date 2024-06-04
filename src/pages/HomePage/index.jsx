import { Hero } from '../../components/Hero';
import { HeroAssessmentTest } from '../../components/HeroAssessmentTest';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <HeroAssessmentTest />
    </div>
  );
};
