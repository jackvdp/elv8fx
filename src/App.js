import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Safeguarding from './components/Safeguarding';
import Complaints from './components/Complaints';
import Error404 from './components/404'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100
        });
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/safeguarding" element={<Safeguarding />} />
                    <Route path="/complaints" element={<Complaints />} />
                    <Route path="/404" element={<Error404 />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Router>
        </I18nextProvider>
    );
}

export default App;