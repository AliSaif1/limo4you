import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import AirportTransportation from './components/Services/AirportTransportation';
import CorporateEvents from './components/Services/CorporateEvents';
import Weddings from './components/Services/Weddings';
import SpecialEvents from './components/Services/SpecialEvents';
import BachelorParties from './components/Services/BachelorParties';
import SportingEvents from './components/Services/SportingEvents';
import GraduationsProms from './components/Services/GraduationsProms';
import CasinoTrips from './components/Services/CasinoTrips';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/airport-transportation" element={<AirportTransportation />} />
          <Route path="/services/corporate-events" element={<CorporateEvents />} />
          <Route path="/services/weddings" element={<Weddings />} />
          <Route path="/services/special-events" element={<SpecialEvents />} />
          <Route path="/services/bachelor-parties" element={<BachelorParties />} />
          <Route path="/services/sporting-events" element={<SportingEvents />} />
          <Route path="/services/graduations-proms" element={<GraduationsProms />} />
          <Route path="/services/casino-trips" element={<CasinoTrips />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;