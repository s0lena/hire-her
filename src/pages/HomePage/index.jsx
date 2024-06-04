import { Hero } from '../../components/Hero';
import { HeroAssessmentTest } from '../../components/HeroAssessmentTest';
import { HeroGrowTogether } from '../../components/HeroGrowTogether';
import { HeroSplit } from '../../components/HeroSplit';
import { Footer } from '../../components/Footer';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <HeroAssessmentTest />
      <HeroGrowTogether />
      <HeroSplit />
      <Footer />
    </div>
  );
};
