import '../../styles/home.css';
import '../../styles/gallery.css';
import React, { useState, useEffect } from 'react';
import Contact from './Contact';

// ✅ Moved outside to prevent ESLint warning and unnecessary re-renders
const images = [
  "https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=",
  "https://media.istockphoto.com/id/611772630/photo/electric-fence.jpg?s=612x612&w=0&k=20&c=JowXhXQdkYMYmK9wRdH_o2qEYmAIjN-XRq3Z5ZoPztc=",
  "https://media.istockphoto.com/id/1262875380/photo/maintenance-and-repairing-automatic-gate.jpg?s=612x612&w=0&k=20&c=FSf_lIraUcj3JKLVaIjtLjhDwtuTFv2Y7XbLEaEMUjQ=",
  "https://pascalipumps.co.za/wp-content/uploads/2021/09/Screenshot-2021-09-20-at-10.01.58-1024x542.png"
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []); // no warning now

  

  return (
    <div id='home' className="home">
      {/* Hero Section */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Reliable Electrical Services</h1>
          <p className="hero-subtitle">Powering Homes & Businesses with Excellence</p><br></br>
          <a href="#contact" className="hero-btn">Get a Quote</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>SESRA Holdings</strong>, where we specialize in providing <strong>top-tier electrical services</strong> 
          tailored to residential, commercial, and industrial clients. With a <strong>team of certified electricians</strong> 
          and years of industry experience, we ensure safety, efficiency, and high-quality workmanship in every project.
        </p>
        <p>Our expertise includes:</p>
        <ul className="about-list">
          <li>✔ Electrical maintenance and wiring</li>
          <li>✔ Solar panel and backup power installations</li>
          <li>✔ Security system setups (CCTV, electric fences, gate motors)</li>
          <li>✔ Water pump and borehole electrical installations</li>
          <li>✔ Custom energy and electrical solutions</li>
        </ul>
        <p>
          We take pride in our commitment to <strong>customer satisfaction, reliability, and innovation.</strong> Whether you 
          need a <strong>quick repair, full installation, or customized electrical solutions</strong>, we’re here to help.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Residential Electrical Work</h3>
            <p>Expert wiring, repairs, and installations for homes.</p>
          </div>
          <div className="service-card">
            <h3>Commercial Electrical Solutions</h3>
            <p>Reliable electrical systems for offices, businesses, and industries.</p>
          </div>
          <div className="service-card">
            <h3>Solar & Backup Power</h3>
            <p>Energy-efficient solar and backup power installations.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title">Our Work</h2>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src="https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=" alt="Solar Installation" />
            <div className="gallery-text">Solar System Installation</div>
          </div>
          <div className="gallery-item">
            <img src="https://media.istockphoto.com/id/611772630/photo/electric-fence.jpg?s=612x612&w=0&k=20&c=JowXhXQdkYMYmK9wRdH_o2qEYmAIjN-XRq3Z5ZoPztc=" alt="Electric Fence" />
            <div className="gallery-text">Electric Fence Installation</div>
          </div>
          <div className="gallery-item">
            <img src="https://media.istockphoto.com/id/1262875380/photo/maintenance-and-repairing-automatic-gate.jpg?s=612x612&w=0&k=20&c=FSf_lIraUcj3JKLVaIjtLjhDwtuTFv2Y7XbLEaEMUjQ=" alt="Gate Motor" />
            <div className="gallery-text">Gate Motor Installation</div>
          </div>
          <div className="gallery-item">
            <img src="https://cdn.prod.website-files.com/62fe0a8c073fc77f4e1bb4e7/67e137005193d761c3a24ebd_pexels-pixabay-257736.jpg" alt="Electrical Maintenance" />
            <div className="gallery-text">Electrical Maintenance & Wiring</div>
          </div>
          <div className="gallery-item">
            <img src="https://pascalipumps.co.za/wp-content/uploads/2021/09/Screenshot-2021-09-20-at-10.01.58-1024x542.png" alt="Water Pump" />
            <div className="gallery-text">Water Pump Installation</div>
          </div>
          <div className="gallery-item">
            <img src="https://media.istockphoto.com/id/1456699734/photo/the-engineer-talks-to-the-contractor-to-supervise-and-plan-the-work.jpg?s=612x612&w=0&k=20&c=DCdd8ZpB6A2y6u4mHtvVO9XOfkpS-TqwFaJKq_4Eos4=" alt="Civil Work" />
            <div className="gallery-text">Civil Work</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     <Contact/>
    </div>
  );
}

export default Home;
