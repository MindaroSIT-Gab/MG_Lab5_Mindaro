
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'; 
import BookRequest from './pages/BookRequest';
import EventFeedback from './pages/EventFeedback';


function App() {
  return (
  
    <Router>
      <div className="vh-100 d-flex flex-column align-items-center bg-light">
        
        <nav className="navbar navbar-dark bg-primary w-100 mb-5 shadow-sm">
          <header className="container d-flex justify-content-between">
            <Link className="navbar-brand fw-bold" to="/">UNI-PORTAL</Link>
            <nav className="d-flex gap-3 pt-2">
              <Link className="text-white text-decoration-none" to="/">Home</Link>
              <Link className="text-white text-decoration-none" to="/about">About</Link>
              <Link className="text-white text-decoration-none" to="/services">Services</Link>
              <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
              <Link className="text-white text-decoration-none" to="/book-request">Book Request</Link>
              <Link className="text-white text-decoration-none" to="/event-feedback">Event Feedback</Link>
            </nav>
          </header>
        </nav>

        <div className="container text-center flex-grow-1 d-flex flex-column justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-request" element={<BookRequest />} />
            <Route path="/event-feedback" element={<EventFeedback />} />
            
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </Router>
  
  );
}

export default App;
