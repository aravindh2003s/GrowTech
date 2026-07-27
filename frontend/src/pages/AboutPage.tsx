import SEO from '../components/SEO/SEO';
import About from '../components/About/About';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about GrowTech, our mission, and the team behind our digital excellence."
      />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <About />
      </div>
    </>
  );
}
