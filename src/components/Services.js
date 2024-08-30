import React, { useEffect } from "react";
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import Footer from "./resuables/Footer";

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

                <div className="header-space"></div>
                <main className="main-container">
                    <div className="container">

                        <div className="wpb-content-wrapper">
                            <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
                                className="vc_row wpb_row vc_row-fluid vc_row-5ca206d07ca3b vc_row-no-padding">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <section className="banner-area banner-area-5ca20673a9716 bsl-right">
                                                <div className="banner-social-links">
                                                    <div className="social-links">
                                                        <a href="https://www.instagram.com/elev8group_/"><span>in</span><span>Instagram</span></a><a
                                                            href="https://www.linkedin.com/company/elev8-groupuk/about/"><span>li</span><span>LinkedIn</span></a>
                                                    </div>
                                                </div>
                                                <div className="banner-item tal"
                                                    style={{backgroundImage: "url(/wp/images/AdobeStock_286776272-copy.jpeg)"}}>

                                                    <div className="bg-overlay">
                                                    </div>

                                                    <div className="container">
                                                        <div className="row align-items-center fixed-height" style={{height: "575px"}}>
                                                            <div className="col">
                                                                <div className="heading-block tal">
                                                                    <div className="sub-h">services</div>
                                                                    <h2 className="h">Tailored FX Solutions - Navigating Your <span>Financial Horizons</span>
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
                            <div className="vc_row-full-width vc_clearfix"></div>
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
                                                    <div className="icon-box-style2 icon-box-style2-5ca211c676c29 tal">
                                                        <i className="free-basic-ui-elements-shield"></i>
                                                        <h5 className="h">
                                                            <span>Spot</span> Contracts
                                                        </h5>
                                                        <div className="desc">Secure today's exchange rate and complete payment within three business days
                                                            for same-day processing. Every transaction comes with a confirmation, ensuring clarity and
                                                            reliability in every exchange.</div>
                                                    </div>
                                                </div>
                                                <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                                    <div className="icon-box-style2 icon-box-style2-5ca211f9bfbca tal">
                                                        <i className="free-basic-ui-elements-up-arrow"></i>
                                                        <h5 className="h">
                                                            <span>Forward</span> Contracts
                                                        </h5>
                                                        <div className="desc">Lock in today's rate for future payments, safeguarding against currency
                                                            fluctuations. Ideal for budgeting and financial planning, forward contracts can be set up to
                                                            three years ahead, providing stability and peace of mind.</div>
                                                    </div>
                                                </div>
                                                <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                                    <div className="icon-box-style2 icon-box-style2-5ca2121a5a231 tal">
                                                        <i className="base-icon-shopping-bag"></i>
                                                        <h5 className="h">
                                                            <span>Market</span> Orders
                                                        </h5>
                                                        <div className="desc">Our suite of solutions strategically reduces risk, ensures forward planning
                                                            for payments, and capitalizes on favorable market rates.</div>
                                                    </div>
                                                </div>
                                                <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                                    <div className="icon-box-style2 icon-box-style2- tal">
                                                        <i className="essential-set-hold"></i>
                                                        <h5 className="h">
                                                            <span>Stop-Loss</span> Order
                                                        </h5>
                                                        <div className="desc">Protect your investments with a predetermined minimum rate, preventing
                                                            potential losses.</div>
                                                    </div>
                                                </div>
                                                <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                                    <div className="icon-box-style2 icon-box-style2-5ca212346cb4e tal">
                                                        <i className="essential-set-flag-2"></i>
                                                        <h5 className="h">
                                                            <span>Limit</span> Order
                                                        </h5>
                                                        <div className="desc">Set your desired rate, and we execute the trade when the market aligns,
                                                            maximizing your financial strategy.</div>
                                                    </div>
                                                </div>
                                                <div className=" col-12 col-sm-6 col-md-4 col-lg-4">
                                                    <div className="icon-box-style2 icon-box-style2-5ca212538f84f tal">
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
                            <div
                                className="vc_row wpb_row vc_row-fluid vc_custom_1554182511192 vc_row-5ca2f103b8eb1 vc_row-o-equal-height vc_row-flex">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="heading-block heading-5ca2f0f8df54b tac h-h3 vc_custom_1554182416474">
                                                <div className="sub-h">f.a.q.</div>
                                                <h3 className="h">Frequently Asking Questions</h3>
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
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="accordion-block accordion-block-5ca2f2d9d1d66 vc_custom_1554183365427">
                                                <div className="accordion-item accordion-item-5ca2f2f31580c">
                                                    <div className="top">What are the fees? <div className="button"></div>
                                                    </div>
                                                    <div className="wrap">We do not add on any fees, you will pay the agreed quote and we will forward the
                                                        payment on for you.</div>
                                                </div>
                                                <div className="accordion-item accordion-item-5ca2f30ecd5c8">
                                                    <div className="top">How to open an account? <div className="button"></div>
                                                    </div>
                                                    <div className="wrap">Opening an account is done via our online application form, this is free and
                                                        doesn’t tie you into using us.</div>
                                                </div>
                                                <div className="accordion-item accordion-item-5ca2f311a0d6f">
                                                    <div className="top">How is my money safeguarded? <div className="button"></div>
                                                    </div>
                                                    <div className="wrap">We partner with payment service providers, to ensure that your funds are handled
                                                        with the utmost care. Our partners employ robust security measures, including holding client
                                                        funds in segregated accounts separate from their own operating accounts, to enhance the safety
                                                        and efficiency of your transactions.</div>
                                                </div>
                                                <div className="accordion-item accordion-item-5ca2f31623c9c">
                                                    <div className="top">Can I track my payments? <div className="button"></div>
                                                    </div>
                                                    <div className="wrap">Yes, we have a real-time GPI Tracking function built into the system so if you
                                                        have sent your payment via SWIFT, we can see exactly where your funds are at from the second you
                                                        set up a payment.</div>
                                                </div>
                                                <div className="accordion-item accordion-item-5ca2f31b6e091">
                                                    <div className="top">Can I fix a rate to minimise potential losses? <div className="button"></div>
                                                    </div>
                                                    <div className="wrap">Yes, you will be assigned a dedicated trader with many years of experience who
                                                        will help manage your FX exposure with all the currency tools we have to offer. We use tools
                                                        such as Forwards, Limit Orders, Stop-Loss Orders, Order Cancels Orders and many more.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row wpb_row vc_row-fluid vc_row-">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="vc_empty_space" style={{height: "64px"}}><span className="vc_empty_space_inner"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}