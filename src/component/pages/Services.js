import '../../styles/services.css';

function Services() {
  return (
    <div className="services">
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        <div className="service-card">
          <h2>Residential Electrical Work</h2>
          <p>We provide electrical wiring, repairs, and installations for homes.</p>
        </div>
        <div className="service-card">
          <h2>Commercial Electrical Solutions</h2>
          <p>Expert electrical solutions for offices, shops, and industrial buildings.</p>
        </div>
        <div className="service-card">
          <h2>Solar & Backup Power</h2>
          <p>Installation of solar systems and backup power solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
