import SEO from '../components/SEO/SEO';
import DetailedServices from '../components/Services/DetailedServices';
import DevelopmentJourney from '../components/Services/DevelopmentJourney';

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Our Services | GrowTech" 
        description="Discover our premium software engineering services including Web Development, Mobile Apps, and Cloud Architecture."
      />
      <div className="pt-20">
        <DetailedServices />
        
        <section className="section-padding bg-darker">
          <div className="container">
            <DevelopmentJourney />
          </div>
        </section>
      </div>
    </>
  );
}
