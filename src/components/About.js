import React, { useEffect } from "react";
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import Footer from "./resuables/Footer";
import '../assets/css/owl.carousel.css'
import { useTranslation, Trans } from "react-i18next";

function About() {
    useEffect(() => {
        // Ensure jQuery is available
        if (window.jQuery) {
            const $ = window.jQuery;

            // Load pt-tabs.js script
            const script = document.createElement('script');
            script.src = '/wp/plugins/pt-luxa-addons/assets/js/pt-tabs.js';
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                // Initialize plugins after script is loaded
                $('.vertical-tabs-5c9381c4295a1').pt_tabs();

                $('.team-carousel-5c938618203d9').each(function () {
                    var $this = $(this);

                    if ($this.find('.team-item').length > 1) {
                        $this.addClass('owl-carousel').owlCarousel({
                            loop: false,
                            items: 1,
                            nav: false,
                            dots: false,
                            autoplay: false,
                            autoplayTimeout: 5000,
                            smartSpeed: 800,
                            autoplayHoverPause: true,
                            navClass: ['owl-prev free-basic-ui-elements-left-arrow', 'owl-next free-basic-ui-elements-right-arrow'],
                            navText: false,
                            margin: 10,
                            responsive: {
                                0: { items: 1 }, 576: { items: 2 }, 768: { items: 2 }, 992: { items: 2 }, 1200: { items: 2 },
                            }
                        });
                    }
                });
            };

            return () => {
                // Cleanup if necessary
                document.body.removeChild(script);
            };
        }
    }, []);

    return (
        <div
            className="page-template page-template-template-landing page-template-template-landing-php page page-id-165 unknown preloader-true header-container header-light header-logo-left header-space-false right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
            <div id="page">
                <MouseCursor />
                <Preloader />
                <NavBar />

                <div className="header-space"></div>
                <main className="main-container">
                    <div className="container">

                        <div className="wpb-content-wrapper">
                            <Header />
                            <Numbers />
                            <Tabs />
                            <ParallaxImage />
                            <div className="vc_row-full-width vc_clearfix"></div>
                            <Team />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default About

function Header() {
    const { t } = useTranslation('about');

    return (
        <>
            <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
                className="vc_row wpb_row vc_row-fluid vc_row-5c9cae5cf4b50 vc_row-no-padding">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <section className="banner-area banner-area-5c9cadf8f745e">
                                <div className="banner-item tal">
                                    <div className="bg-overlay">
                                        <div className="image" data-parallax="true"
                                            data-image-src="/wp/images/AdobeStock_459972711-copy.jpeg"></div>
                                        <div className="color"></div>
                                    </div>
                                    <div className="container">
                                        <div className="row align-items-center fixed-height" style={{ height: "575px" }}>
                                            <div className="col">
                                                <div data-aos="fade-right" className="heading-block tal">
                                                    <div className="sub-h">{t('header.subHeading')}</div>
                                                    <h2 className="h">
                                                        <Trans i18nKey="header.title" ns="about">
                                                            We believe that our<br />work creates shared<br />value for <span>customers</span>
                                                        </Trans>
                                                    </h2>
                                                </div>
                                                <a data-aos="fade-left" data-aos-delay="200" className="button-style1" href="/services" target="_self">
                                                    <span className="d"><span></span></span>
                                                    <span>{t('header.buttonText')}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vc_row-full-width vc_clearfix"></div>
        </>
    )
}

function Numbers() {
    const { t } = useTranslation('about');

    return (
        <>
            <div data-vc-full-width="true" data-vc-full-width-init="false"
                className="vc_row wpb_row vc_row-fluid vc_custom_1553772863458 vc_row-5c9cb13b848ff vc_row-has-fill">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="num-box-items num-box-5c91ed9126cc3 row no-gutters">
                                <div className="num-box-item num-box-item-5c91e1c4c5adb col-lg-3 col-md-6 col-12">
                                    <i className="interview-hiring"></i>
                                    <div className="line"></div>
                                    <div className="content">
                                        <div className="num">21</div>
                                        <h6 className="h">{t('numbers.regulated')}</h6>
                                    </div>
                                </div>
                                <div className="num-box-item num-box-item-5c91e1e58e473 col-lg-3 col-md-6 col-12">
                                    <i className="interview-handshake"></i>
                                    <div className="line"></div>
                                    <div className="content">
                                        <div className="num">32</div>
                                        <h6 className="h">{t('numbers.transacted')}</h6>
                                    </div>
                                </div>
                                <div className="num-box-item num-box-item-5c91e1f330db2 col-lg-3 col-md-6 col-12">
                                    <i className="interview-interview-3"></i>
                                    <div className="line"></div>
                                    <div className="content">
                                        <div className="num">150</div>
                                        <h6 className="h">{t('numbers.countries')}</h6>
                                    </div>
                                </div>
                                <div className="num-box-item num-box-item-5c91e208be426 col-lg-3 col-md-6 col-12">
                                    <i className="base-icon-piggy-bank"></i>
                                    <div className="line"></div>
                                    <div className="content">
                                        <div className="num">41</div>
                                        <h6 className="h">{t('numbers.currencies')}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vc_row-full-width vc_clearfix"></div>
        </>
    )
}

function Tabs() {
    const { t } = useTranslation('about');

    return (
        <div className="vc_row wpb_row vc_row-fluid vc_custom_1553174725991 vc_row-">
            <div className="wpb_column vc_column_container vc_col-sm-12 mb-5">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="vertical-tabs vertical-tabs-5c9381c4295a1">
                            <div className="tabs-items">
                                <div className="tab-item">
                                    <div className="tab-m-button">
                                        <div className="num">01</div>
                                        <div className="label">{t('tabs.purpose.title')}</div>
                                    </div>
                                    <div className="inner" style={{ display: "block" }}>
                                        <div className="inner-content">
                                            <div className="image"
                                                style={{ backgroundImage: "url(/wp/images/AdobeStock_269555184-copy-1.jpeg)" }}>
                                            </div>
                                            <div className="content">
                                                <div className="heading-block">
                                                    <div className="sub-h">{t('tabs.purpose.title')}</div>
                                                    <h2 className="h">
                                                        <em className="num">01</em>
                                                    </h2>
                                                </div>
                                                <div className="text">{t('tabs.purpose.description')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-item">
                                    <div className="tab-m-button">
                                        <div className="num">02</div>
                                        <div className="label">{t('tabs.success.title')}</div>
                                    </div>
                                    <div className="inner">
                                        <div className="inner-content">
                                            <div className="image"
                                                style={{ backgroundImage: "url(/wp/images/AdobeStock_357174150-copy-1.jpeg)" }}>
                                            </div>
                                            <div className="content">
                                                <div className="heading-block">
                                                    <div className="sub-h">{t('tabs.success.title')}</div>
                                                    <h2 className="h">
                                                        <em className="num">02</em>
                                                    </h2>
                                                </div>
                                                <div className="text">{t('tabs.success.description')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-item">
                                    <div className="tab-m-button">
                                        <div className="num">03</div>
                                        <div className="label">{t('tabs.fx.title')}</div>
                                    </div>
                                    <div className="inner">
                                        <div className="inner-content">
                                            <div className="image"
                                                style={{ backgroundImage: "url(/wp/images/AdobeStock_225710687-copy-1.jpeg)" }}>
                                            </div>
                                            <div className="content">
                                                <div className="heading-block">
                                                    <div className="sub-h">{t('tabs.fx.title')}</div>
                                                    <h2 className="h">
                                                        <em className="num">03</em>
                                                    </h2>
                                                </div>
                                                <div className="text">{t('tabs.fx.description')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="tabs-buttons">
                                <li className="current">
                                    <div className="num">01</div>
                                    <div className="label">{t('tabs.purpose.title')}</div>
                                </li>
                                <li>
                                    <div className="num">02</div>
                                    <div className="label">{t('tabs.success.title')}</div>
                                </li>
                                <li>
                                    <div className="num">03</div>
                                    <div className="label">{t('tabs.fx.title')}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ParallaxImage() {
    return (
        <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
            className="vc_row wpb_row vc_row-fluid vc_row- vc_row-no-padding">
            <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                        <section className="banner-area banner-area-65bfe324f043e">
                            <div className="banner-item tal">

                                <div className="bg-overlay">
                                    <div className="image" data-parallax="true"
                                        data-image-src="/wp/images/AdobeStock_141877838-copy.jpeg"></div>
                                    <div className="color"></div>
                                </div>

                                <div className="container">
                                    <div className="row align-items-center fixed-height" style={{ height: "450px" }}>
                                        <div className="col">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Team() {
    const { t } = useTranslation('about');

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 text-center">
                    <div className="heading-block heading-5c938e92cc7c9 vc_custom_1553174332094 d-flex flex-column align-items-center">
                        <div className="sub-h">{t('team.subHeading')}</div>
                        <h3 className="h">{t('team.title')}</h3>
                    </div>
                    <div className="team-carousel team-carousel-5c938618203d9 d-flex justify-content-center">
                        <div data-aos="zoom-in" className="team-item team-item-5c938bd714bd3 mx-3">
                            <div className="image"
                                style={{ backgroundImage: "url(/wp/images/PHOTO-2024-02-04-19-05-34-1024x683.jpg)" }}>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/josh-jewson-33a6b8142/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="name">{t('team.members.josh.name')}</div>
                                <div className="post">{t('team.members.josh.post')}</div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="team-item team-item-5c938be6d5fab mx-3">
                            <div className="image"
                                style={{ backgroundImage: "url(/wp/images/PHOTO-2024-02-04-19-05-32-1024x683.jpg)" }}>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/terry-lovell-690084121/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="name">{t('team.members.terry.name')}</div>
                                <div className="post">{t('team.members.terry.post')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
