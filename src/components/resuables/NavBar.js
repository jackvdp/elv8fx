import React from 'react';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
    const { t, i18n } = useTranslation('navbar');
    const languages = ['en', 'es', 'fr', 'de', 'it', 'nl'];

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
    };

    const currentLanguage = typeof i18n.language === 'string' ? i18n.language.toUpperCase() : 'EN';

    return (
        <div className="site-header light-color">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="site-logo">
                            <a href="/">
                                <img className="light" src="/assets/images/logo.webp" alt="Elev8 FX" />
                                <img className="dark" src="/assets/images/logo.webp" alt="Elev8 FX" />
                            </a>
                        </div>
                    </div>
                    <div className="right col-auto">
                        <nav className="navigation visible_menu">
                            <ul id="menu-menu-1" className="menu">
                                <li id="menu-item-811" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-811">
                                    <a href="/about"><span>{t('about')}</span></a>
                                </li>
                                <li id="menu-item-814" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-814">
                                    <a href="/services"><span>{t('services')}</span></a>
                                </li>
                                <li id="menu-item-815" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-815">
                                    <a href="https://elev8exchange.sciopay.co/login" target="_blank" rel="noopener noreferrer"><span>{t('login')}</span></a>
                                </li>
                                <li id="menu-item-813" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-813">
                                    <a href="/security"><span>{t('security')}</span></a>
                                </li>
                                <li id="menu-item-812" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-812">
                                    <a href="/contact"><span>{t('contact')}</span></a>
                                </li>
                                <li className="language-selector">
                                    <span>{currentLanguage} <ChevronDown /></span>
                                    <ul className="language-dropdown">
                                        {languages.map((lang) => (
                                            <li
                                                key={lang}
                                                onClick={() => changeLanguage(lang)}
                                                className={lang.toUpperCase() === currentLanguage ? 'selected' : ''}
                                            >
                                                {lang.toUpperCase()}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="nav-butter visible_menu">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ChevronDown = () => (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="chevron">
        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);