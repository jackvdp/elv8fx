import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Safeguarding from './components/Safeguarding';
import Complaints from './components/Complaints';

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
                <Route path="/complaints" element={<Complaints />} />
            </Routes>
        </Router>
    );
}

export default App;