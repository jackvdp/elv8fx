import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Security from './components/Security';
import Contact from './components/Contact';
import Safeguarding from './components/Safeguarding';
import Complaints from './components/Complaints';
import Error404 from './components/404';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const usePageTitle = (getTitle) => {
    const defaultTitle = 'Elev8 FX - Empowering Your Global Financial Strategy';
    const location = useLocation();

    useEffect(() => {
        const title = getTitle(location);
        document.title = title || defaultTitle;
    }, [location, getTitle]);
};

const routeTitles = {
    '/': 'Elev8 FX - Empowering Your Global Financial Strategy',
    '/about': 'About Us – Elev8 FX',
    '/contact': 'Contact – Elev8 FX',
    '/services': 'Services – Elev8 FX',
    '/security': 'Security – Elev8 FX',
    '/safeguarding': 'Safeguarding – Elev8 FX',
    '/complaints': 'Complaints – Elev8 FX'
};

function AppContent() {
    usePageTitle((location) => routeTitles[location.pathname]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100
        });
    }, []);

    return (
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
    );
}

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <AppContent />
            </Router>
        </I18nextProvider>
    );
}

export default App;