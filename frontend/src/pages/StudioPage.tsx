import SEO from '../components/SEO/SEO';
import ProjectPlanner from '../components/Studio/ProjectPlanner';

export default function StudioPage() {
  return (
    <>
      <SEO 
        title="GrowTech Studio" 
        description="Experience software creation. Plan your project, select features, and instantly generate a blueprint and tech stack."
      />
      <div className="section-padding" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="hide-on-print">
            <h1 className="section-title">GrowTech <span className="text-gradient">Studio</span></h1>
            <p className="section-subtitle">
              Plan your project interactively. Tell us what you need, and we'll engineer the perfect blueprint.
            </p>
          </div>
          <ProjectPlanner />
        </div>
      </div>
    </>
  );
}
