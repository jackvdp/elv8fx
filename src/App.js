import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Safeguarding from './components/Safeguarding';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/security" element={<Security />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/safeguarding" element={<Safeguarding />} />
            </Routes>
        </Router>
    );
}

export default App;