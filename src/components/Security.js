import React, { useEffect } from "react";
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import Footer from "./resuables/Footer";

export default function Security() {
    return (
        <body
            className="page-template page-template-template-landing page-template-template-landing-php page page-id-783 unknown preloader-true header-container header-light header-logo-left header-space-true right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
            <div id="page">
                <MouseCursor />
                <Preloader />
                <NavBar />

                <div className="header-space"></div>
                <main className="main-container">
                    <div className="container">

                        <div className="wpb-content-wrapper">
                            <div
                                className="vc_row wpb_row vc_row-fluid vc_row-5c99cd717f62c vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner vc_custom_1707296244897" >
                                        <div className="wpb_wrapper">
                                            <div className="heading-block heading-5c99cd7d59d6e tal h-h5">
                                                <h5 className="h">Security &amp; Regulation</h5>
                                            </div>

                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <p><strong>Security &amp; Compliance</strong></p>
                                                    <p>We take the security of your data and finances seriously, ensuring our processes and systems
                                                        are rigorously reviewed and updated to maintain a secure environment.</p>
                                                    <p><strong>Regulatory Standards</strong></p>
                                                    <p>Our operations adhere to high regulatory standards, ensuring that all financial activities are
                                                        conducted with integrity and transparency.</p>
                                                    <p>All of our liquidity providers are FCA regulated as e-money institutions.</p>
                                                    <p><strong>Safeguarding Funds</strong></p>
                                                    <p>We prioritize the protection of customer funds, holding them in separate accounts with trusted
                                                        financial institutions to ensure they are secure.</p>
                                                    <p><strong>Robust Access Control</strong></p>
                                                    <p>Our advanced security architecture includes permission-based access and multi-factor
                                                        authentication, providing secure and monitored entry into our systems.</p>
                                                    <p><strong>Commitment to Privacy</strong></p>
                                                    <p>We adhere to strict data protection protocols, aligning our practices with leading data
                                                        security regulations to safeguard personal information.</p>

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
        </body>
    )
}