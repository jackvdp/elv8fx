import React, { useEffect } from "react";
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import Footer from "./resuables/Footer";
import { useTranslation } from "react-i18next";
import Header from "./resuables/Header";

export default function Security() {
    const { t } = useTranslation('security');
    return (
        <div className="page-template page-template-template-landing page-template-template-landing-php page page-id-180 unknown preloader-true header-container header-light header-logo-left header-space-false right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
            <MouseCursor />
            <Preloader />
            <NavBar />

            <div className="header-space"></div>
            <main className="main-container">
                <div className="container">

                    <div className="wpb-content-wrapper">
                        <Header title={t('title')} subtitle='Security' image="/wp/images/security.jpeg" />
                        <div className="vc_row wpb_row vc_row-fluid vc_row-5c99cd717f62c vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                <div className="vc_column-inner vc_custom_1707296244897" >
                                    <div className="wpb_wrapper">

                                        <div className="wpb_text_column wpb_content_element">
                                            <div className="wpb_wrapper">
                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>{t('sections.securityComplianceTitle')}</strong></p>
                                                    <p>{t('sections.securityComplianceText')}</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>{t('sections.regulatoryStandardsTitle')}</strong></p>
                                                    <p>{t('sections.regulatoryStandardsText')}</p>
                                                    <p>{t('sections.liquidityProvidersText')}</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>{t('sections.safeguardingFundsTitle')}</strong></p>
                                                    <p>{t('sections.safeguardingFundsText')}</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>{t('sections.accessControlTitle')}</strong></p>
                                                    <p>{t('sections.accessControlText')}</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>{t('sections.privacyCommitmentTitle')}</strong></p>
                                                    <p >{t('sections.privacyCommitmentText')}</p>
                                                </div>
                                                <div className="p-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}