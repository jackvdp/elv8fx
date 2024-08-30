import React, { useEffect } from "react";
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import '../assets/css/owl.carousel.css'

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

                $('.banner-area-5c9cadf8f745e').find('.video').each(function () {
                    $(this)[0].play();
                });

                $('.banner-area-65bfe324f043e').find('.video').each(function () {
                    $(this)[0].play();
                });

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
                            margin: 1,
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
                            <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
                                className="vc_row wpb_row vc_row-fluid vc_row-5c9cae5cf4b50 vc_row-no-padding">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
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
                                                                <div className="heading-block tal">
                                                                    <div className="sub-h">about us</div>
                                                                    <h2 className="h">We believe that our<br />
                                                                        work creates shared<br />
                                                                        value for <span>Customers</span>
                                                                    </h2>
                                                                </div>
                                                                <a className="button-style1" href="/services" target="_self"><span
                                                                    className="d"><span></span></span><span>Our Services</span></a>
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
                            <div data-vc-full-width="true" data-vc-full-width-init="false"
                                className="vc_row wpb_row vc_row-fluid vc_custom_1553772863458 vc_row-5c9cb13b848ff vc_row-has-fill">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="num-box-items num-box-5c91ed9126cc3 row no-gutters">
                                                <div className="num-box-item num-box-item-5c91e1c4c5adb  col-lg-3 col-md-6 col-12">
                                                    <i className="interview-hiring"></i>
                                                    <div className="line"></div>
                                                    <div className="content">
                                                        <div className="num">21</div>
                                                        <h6 className="h">Our partners are fully regulated in 21 Countries</h6>
                                                    </div>
                                                </div>
                                                <div className="num-box-item num-box-item-5c91e1e58e473  col-lg-3 col-md-6 col-12">
                                                    <i className="interview-handshake"></i>
                                                    <div className="line"></div>
                                                    <div className="content">
                                                        <div className="num">32</div>
                                                        <h6 className="h">Transacted $32bn in the last year</h6>
                                                    </div>
                                                </div>
                                                <div className="num-box-item num-box-item-5c91e1f330db2  col-lg-3 col-md-6 col-12">
                                                    <i className="interview-interview-3"></i>
                                                    <div className="line"></div>
                                                    <div className="content">
                                                        <div className="num">150</div>
                                                        <h6 className="h">Payments to over 150 countries</h6>
                                                    </div>
                                                </div>
                                                <div className="num-box-item num-box-item-5c91e208be426  col-lg-3 col-md-6 col-12">
                                                    <i className="base-icon-piggy-bank"></i>
                                                    <div className="line"></div>
                                                    <div className="content">
                                                        <div className="num">41</div>
                                                        <h6 className="h">Support 41 Currencies</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix"></div>
                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1553174725991 vc_row-">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="vertical-tabs vertical-tabs-5c9381c4295a1 ">
                                                <div className="tabs-items">
                                                    <div className="tab-item">
                                                        <div className="tab-m-button">
                                                            <div className="num">01</div>
                                                            <div className="label">Our Purpose</div>
                                                        </div>
                                                        <div className="inner" style={{ display: "block" }}>
                                                            <div className="inner-content">
                                                                <div className="image"
                                                                    style={{ backgroundImage: "url(/wp/images/AdobeStock_269555184-copy-1.jpeg)" }}>
                                                                </div>
                                                                <div className="content">
                                                                    <div className="heading-block">
                                                                        <div className="sub-h">Our Purpose</div>
                                                                        <h2 className="h">
                                                                            <em className="num">01</em>
                                                                        </h2>
                                                                    </div>
                                                                    <div className="text">Embark on a journey with Elev8, where your foreign exchange experience
                                                                        is as unique as your financial goals. Our seasoned expertise is the cornerstone of our
                                                                        identity, not merely as a financial entity but as your trusted ally in global finance.
                                                                        Our sustained presence in the marketplace reflects our dedication to service excellence
                                                                        and the enduring bonds we forge with each of our clients.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-item">
                                                        <div className="tab-m-button">
                                                            <div className="num">02</div>
                                                            <div className="label">Building Success Together</div>
                                                        </div>
                                                        <div className="inner">
                                                            <div className="inner-content">
                                                                <div className="image"
                                                                    style={{ backgroundImage: "url(/wp/images/AdobeStock_357174150-copy-1.jpeg)" }}>
                                                                </div>
                                                                <div className="content">
                                                                    <div className="heading-block">
                                                                        <div className="sub-h">Building Success Together</div>
                                                                        <h2 className="h">
                                                                            <em className="num">02</em>
                                                                        </h2>
                                                                    </div>
                                                                    <div className="text">Elev8 is built on unwavering integrity, an essential principle in all
                                                                        our endeavours. Led by our Senior Partners, we infuse every service with both
                                                                        professionalism and a personal touch, striving for the finest outcomes to ensure your
                                                                        continued success alongside us. This balance of expertise and individualised care is our
                                                                        pledge to your financial journey.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-item">
                                                        <div className="tab-m-button">
                                                            <div className="num">03</div>
                                                            <div className="label">Efficient &amp; Secure FX</div>
                                                        </div>
                                                        <div className="inner">
                                                            <div className="inner-content">
                                                                <div className="image"
                                                                    style={{ backgroundImage: "url(/wp/images/AdobeStock_225710687-copy-1.jpeg)" }}>
                                                                </div>
                                                                <div className="content">
                                                                    <div className="heading-block">
                                                                        <div className="sub-h">Efficient &amp; Secure FX</div>
                                                                        <h2 className="h">
                                                                            <em className="num">03</em>
                                                                        </h2>
                                                                    </div>
                                                                    <div className="text">We partner with payment service providers, to ensure that your funds are
                                                                        handled with the utmost care. Our partners employ robust security measures, including
                                                                        holding client funds in segregated accounts separate from their own operating accounts,
                                                                        to enhance the safety and efficiency of your transactions.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="tabs-buttons">
                                                    <li className="current">
                                                        <div className="num">01</div>
                                                        <div className="label">Our Purpose</div>
                                                    </li>
                                                    <li>
                                                        <div className="num">02</div>
                                                        <div className="label">Building Success Together</div>
                                                    </li>
                                                    <li>
                                                        <div className="num">03</div>
                                                        <div className="label">Efficient &amp; Secure FX</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <div className="vc_row-full-width vc_clearfix"></div>
                            <div className="vc_row wpb_row vc_row-fluid vc_row-">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="heading-block heading-5c938e92cc7c9 tac h-h3 vc_custom_1553174332094">
                                                <div className="sub-h">get to know us</div>
                                                <h3 className="h">Our Team</h3>
                                            </div>
                                            <div className="team-carousel team-carousel-5c938618203d9">
                                                <div className="team-item team-item-5c938bd714bd3">
                                                    <div className="image"
                                                        style={{ backgroundImage: "url(/wp/images/PHOTO-2024-02-04-19-05-34-1024x683.jpg)" }}>
                                                        <div className="social-links"><a href="https://www.linkedin.com/in/josh-jewson-33a6b8142/"><i
                                                            className="fab fa-linkedin-in"></i></a></div>
                                                    </div>
                                                    <div className="bottom">
                                                        <div className="name">Josh Jewson</div>
                                                        <div className="post">Founder</div>
                                                    </div>
                                                </div>
                                                <div className="team-item team-item-5c938be6d5fab">
                                                    <div className="image"
                                                        style={{ backgroundImage: "url(/wp/images/PHOTO-2024-02-04-19-05-32-1024x683.jpg)" }}>
                                                        <div className="social-links"><a href="https://www.linkedin.com/in/terry-lovell-690084121/"><i
                                                            className="fab fa-linkedin-in"></i></a></div>
                                                    </div>
                                                    <div className="bottom">
                                                        <div className="name">Terry Lovell</div>
                                                        <div className="post">Founder</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-6">
                                <div className="site-logo"><a href="/"><img className="light" src="/assets/images/logo.webp" alt="Elev8 FX" /><img
                                    className="dark" src="/assets/images/logo.webp" alt="Elev8 FX" /></a></div>
                                <div id="black-studio-tinymce-3" className="widget widget_black_studio_tinymce">
                                    <div className="textwidget">
                                        <p style={{ marginTop: "0", fontSize: "8px", lineHeight: "12px" }}><span
                                            style={{ fontSize: "8pt", color: "#808080" }}>Elev8 Group has carefully selected industry leading fintech
                                            and foreign exchange partners to provide our clients with regulated services and
                                            products:</span><br />
                                            <span style={{ fontSize: "8pt", color: "#808080" }}>Elev8 Group work with leading fintech companies and
                                                foreign exchange partners to provide regulated services for our customers. Payment services for
                                                Elev8 Group are provided by Sciopay Ltd. Sciopay Ltd is a company incorporated in England &amp;
                                                Wales. Registration No: 12352935. Sciopay Ltd is licensed and regulated by HMRC as a Money Service
                                                Business (MSB). License No: XCML00000151326. Sciopay Ltd is authorised by the Financial Conduct
                                                Authority as an Authorised Payment Institution. Firm Reference Number: 927951</span><br />
                                            <span style={{ fontSize: "8pt", color: "#808080" }}>Elev8 Group Limited’s Payment and Foreign Currency
                                                Exchange Services are provided by Ebury Partners UK Limited. Elev8 Group Limited is partnered with
                                                Ebury Partners UK Limited as a Programme Manager. Ebury Partners UK Limited is authorised and
                                                regulated by the Financial Conduct Authority as an Electronic Money Institution (Financial Services
                                                Register No. 900797). Ebury Partners UK Ltd is registered with the Information Commissioner’s
                                                Office, with registration number: ZA345828</span><br />
                                            <span style={{ fontSize: "8pt", color: "#808080" }}>Ebury Partners UK Limited (EPUK) is an Authorised
                                                Electronic Money Institution and is a licensed entity that is permitted to offer spots and forwards
                                                for commercial purposes of facilitating payment for identifiable goods or services and direct
                                                investments, as per the applicable Markets in Financial Instruments Directive II (MiFID) exemption.
                                                Regulated investment products, as defined in MiFID II, fall out of the scope of this licence and are
                                                not permitted to be traded under EPUK.</span><br />
                                            <span style={{ fontSize: "8pt", color: "#808080" }}>For clients based in the United Kingdom and rest of the
                                                world, payment services for Elev8 Group Ltd are provided by The Currency Cloud Limited. Registered
                                                in England and Wales No. 06323311. Registered Office: Stewardship Building 1st Floor, 12 Steward
                                                Street London E1 6FQ. The Currency Cloud Limited is authorised by the Financial Conduct Authority
                                                under the Electronic Money Regulations 2011 for the issuing of electronic money (FRN:
                                                900199).</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="hide">
                            </div>
                            <div className="col-12 col-sm-2">
                            </div>
                            <div className="col-12 col-sm-4">
                                <div id="custom_html-1" className="widget_text widget widget_custom_html">
                                    <h6 className="widget-title">Contacts</h6>
                                    <div className="textwidget custom-html-widget">
                                        <div className="contact-row">
                                            <i className="base-icon-phone-call"></i>
                                            <a href="tel:+442045801415"><span>+44 (0) 20 4580 1415</span></a>
                                        </div>
                                        <div className="contact-row">
                                            <i className="base-icon-envelope"></i>
                                            <a href="mailto:info@elev8exchange.com"><span>info@elev8exchange.com</span></a>
                                        </div>
                                        <div className="contact-row">
                                            <i className="base-icon-placeholder"></i>
                                            <span>1 Moor Place, 1 Fore Street Avenue, London EC2Y 9DT</span>
                                        </div>
                                        <div className="contact-row">
                                            <a href="/complaints"><span>Complaints</span></a>
                                        </div>
                                        <div className="contact-row">
                                            <a href="/safeguar"><span>Safeguarding Funds</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default About