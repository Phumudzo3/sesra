import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Services from './component/pages/Services';
import Contact from './component/pages/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
