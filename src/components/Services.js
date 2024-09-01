import React, { useEffect } from "react";
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import Footer from "./resuables/Footer";
import SocialLinks from "./resuables/SocialLinks";
import { useTranslation, Trans } from 'react-i18next';

export default function Services() {
    useEffect(() => {
        // Ensure jQuery is available
        if (window.jQuery) {
            const $ = window.jQuery;

            // Load pt-tabs.js script
            const script = document.createElement('script');
            script.src = '/wp/plugins/pt-luxa-addons/assets/js/pt-accordion.js';
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                // Initialize plugins after script is loaded
                jQuery(document).ready(function (jQuery) {
                    control_video(jQuery('.banner-area-5ca20673a9716').find('.video'), 'play')
                })
                jQuery(document).ready(function (jQuery) {
                    jQuery('.accordion-block-5ca2f2d9d1d66').pt_accordion()
                })
            };

            return () => {
                // Cleanup if necessary
                document.body.removeChild(script);
            };
        }
    }, []);

    return (
        <div
            className="page-template page-template-template-landing page-template-template-landing-php page page-id-180 unknown preloader-true header-container header-light header-logo-left header-space-false right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
            <div id="page">
                <MouseCursor />
                <Preloader />
                <NavBar />

                <div className="header-space"></div>
                <main className="main-container">
                    <div className="container">

                        <div className="wpb-content-wrapper">
                            <Header />
                            <div className="vc_row-full-width vc_clearfix"></div>
                            <OurServices />
                            <FAQ />
                            <div className="vc_row wpb_row vc_row-fluid vc_row-">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="vc_empty_space" style={{ height: "64px" }}><span className="vc_empty_space_inner"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

function Header() {
    const { t } = useTranslation('services');

    return (
        <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
            className="vc_row wpb_row vc_row-fluid vc_row-5ca206d07ca3b vc_row-no-padding">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <section className="banner-area banner-area-5ca20673a9716 bsl-right">
                            <SocialLinks />
                            <div className="banner-item tal"
                                style={{ backgroundImage: "url(/wp/images/AdobeStock_286776272-copy.jpeg)" }}>

                                <div className="bg-overlay">
                                </div>

                                <div className="container">
                                    <div className="row align-items-center fixed-height" style={{ height: "575px" }}>
                                        <div className="col">
                                            <div data-aos="fade-right" className="heading-block tal">
                                                <div className="sub-h">{t('header.subtitle')}</div>
                                                <h2 className="h">
                                                    <Trans i18nKey="header.title" ns="services">
                                                        Tailored FX Solutions - Navigating Your <span>Financial Horizons</span>
                                                    </Trans>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OurServices() {
    return (
        <div className="vc_row wpb_row vc_row-fluid vc_custom_1554125165485 vc_row-5ca2116508778">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <div className="heading-block heading-5ca21135cb1a9 tac h-h3">
                            <div className="sub-h">what we do</div>
                            <h3 className="h">Services</h3>
                        </div>
                        <div className="icon-box2-block icon-box2-block-5ca2117449703 row">
                            <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                <div data-aos="fade-up" className="icon-box-style2 icon-box-style2-5ca211c676c29 tal">
                                    <i className="free-basic-ui-elements-shield"></i>
                                    <h5 className="h">
                                        <span>Spot</span> Contracts
                                    </h5>
                                    <div className="desc">Secure today's exchange rate and complete payment within three business days
                                        for same-day processing. Every transaction comes with a confirmation, ensuring clarity and
                                        reliability in every exchange.</div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <div data-aos="fade-up" data-aos-delay="200" className="icon-box-style2 icon-box-style2-5ca211f9bfbca tal">
                                    <i className="free-basic-ui-elements-up-arrow"></i>
                                    <h5 className="h">
                                        <span>Forward</span> Contracts
                                    </h5>
                                    <div className="desc">Lock in today's rate for future payments, safeguarding against currency
                                        fluctuations. Ideal for budgeting and financial planning, forward contracts can be set up to
                                        three years ahead, providing stability and peace of mind.</div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                <div data-aos="fade-up" data-aos-delay="400" className="icon-box-style2 icon-box-style2-5ca2121a5a231 tal">
                                    <i className="base-icon-shopping-bag"></i>
                                    <h5 className="h">
                                        <span>Market</span> Orders
                                    </h5>
                                    <div className="desc">Our suite of solutions strategically reduces risk, ensures forward planning
                                        for payments, and capitalizes on favorable market rates.</div>
                                </div>
                            </div>
                            <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                <div data-aos="fade-up" data-aos-delay="200" className="icon-box-style2 icon-box-style2- tal">
                                    <i className="essential-set-hold"></i>
                                    <h5 className="h">
                                        <span>Stop-Loss</span> Order
                                    </h5>
                                    <div className="desc">Protect your investments with a predetermined minimum rate, preventing
                                        potential losses.</div>
                                </div>
                            </div>
                            <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                <div data-aos="fade-up" data-aos-delay="400" className="icon-box-style2 icon-box-style2-5ca212346cb4e tal">
                                    <i className="essential-set-flag-2"></i>
                                    <h5 className="h">
                                        <span>Limit</span> Order
                                    </h5>
                                    <div className="desc">Set your desired rate, and we execute the trade when the market aligns,
                                        maximizing your financial strategy.</div>
                                </div>
                            </div>
                            <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                <div data-aos="fade-up" data-aos-delay="600" className="icon-box-style2 icon-box-style2-5ca212538f84f tal">
                                    <i className="essential-set-exit-1"></i>
                                    <h5 className="h">Orders-<span>Cancels</span>-Order</h5>
                                    <div className="desc">Combine limit and stop-loss orders for comprehensive market engagement,
                                        ensuring you strike the best balance between ambition and security.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FAQ() {
    const { t } = useTranslation('services');

    return (
        <div className="vc_row wpb_row vc_row-fluid vc_custom_1554182511192 vc_row-5ca2f103b8eb1 vc_row-o-equal-height vc_row-flex">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="heading-block heading-5ca2f0f8df54b tac h-h3 vc_custom_1554182416474">
                            <div className="sub-h">{t('faq.subtitle')}</div>
                            <h3 className="h">{t('faq.title')}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-img wpb_column vc_column_container vc_col-sm-6 vc_col-has-fill">
                <div className="vc_column-inner vc_custom_1707237777518">
                    <div className="wpb_wrapper"></div>
                </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-6">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="accordion-block accordion-block-5ca2f2d9d1d66 vc_custom_1554183365427">
                            <div className="accordion-item accordion-item-5ca2f2f31580c">
                                <div className="top">{t('faq.questions.fees.question')}<div className="button"></div>
                                </div>
                                <div className="wrap">{t('faq.questions.fees.answer')}</div>
                            </div>
                            <div className="accordion-item accordion-item-5ca2f30ecd5c8">
                                <div className="top">{t('faq.questions.openAccount.question')}<div className="button"></div>
                                </div>
                                <div className="wrap">{t('faq.questions.openAccount.answer')}</div>
                            </div>
                            <div className="accordion-item accordion-item-5ca2f311a0d6f">
                                <div className="top">{t('faq.questions.safeguarding.question')}<div className="button"></div>
                                </div>
                                <div className="wrap">{t('faq.questions.safeguarding.answer')}</div>
                            </div>
                            <div className="accordion-item accordion-item-5ca2f31623c9c">
                                <div className="top">{t('faq.questions.trackPayments.question')}<div className="button"></div>
                                </div>
                                <div className="wrap">{t('faq.questions.trackPayments.answer')}</div>
                            </div>
                            <div className="accordion-item accordion-item-5ca2f31b6e091">
                                <div className="top">{t('faq.questions.fixRate.question')}<div className="button"></div>
                                </div>
                                <div className="wrap">{t('faq.questions.fixRate.answer')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}