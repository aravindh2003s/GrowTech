import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/Hero';
import ChoosePath from '../components/Home/ChoosePath';
import Metrics from '../components/Home/Metrics';
import ArchitectureVisualizer from '../components/Home/ArchitectureVisualizer';
import TechnologyExplorer from '../components/Home/TechnologyExplorer';
import ReadinessDashboard from '../components/Home/ReadinessDashboard';
import CallToAction from '../components/Home/CallToAction';

export default function Home() {
  return (
    <>
      <SEO 
        title="GrowTech | Interactive Software Studio" 
        description="We don't just build software, we engineer experiences. Explore our interactive studio to see how we create modern digital solutions."
      />
      <main>
        <Hero />
        <ChoosePath />
        
        <Metrics />

        <section className="section-padding bg-darker">
          <div className="container">
            <ArchitectureVisualizer />
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <TechnologyExplorer />
          </div>
        </section>

        <section className="section-padding bg-darker">
          <div className="container">
            <ReadinessDashboard />
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
}
