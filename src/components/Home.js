import React, { useEffect } from 'react';
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import SocialLinks from './resuables/SocialLinks';

function Home() {
    useEffect(() => {
        jQuery(document).ready(function (jQuery) {
            jQuery('.split-screen-5c9b3b8dd6e32').pt_split_screen()
        })
        jQuery(document).ready(function (jQuery) {
            jQuery('#ops-screen-5c9b6842a1157').each(function () {
                function initialize() {
                    var myLatlng = new google.maps.LatLng(51.518421, -0.088690);
                    var mapOptions = {
                        zoom: 16,
                        center: myLatlng,
                        disableDefaultUI: true,
                        scrollwheel: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        styles: [{
                            'featureType': 'all',
                            'elementType': 'all',
                            'stylers': [{
                                'saturation': -100
                            }, {
                                'gamma': .5
                            }]
                        }]
                    }
                    var map = new google.maps.Map(document.getElementById('ops-screen-5c9b6842a1157'), mapOptions);

                    google.maps.event.addDomListener(window, 'resize', function () {
                        var center = map.getCenter();
                        google.maps.event.trigger(map, 'resize');
                        map.setCenter(center);
                    });
                }
                google.maps.event.addDomListener(window, 'load', initialize);
            })
        })
    }, []);

    return (
        <div className="home page-template page-template-template-landing page-template-template-landing-php page page-id-626 unknown preloader-true header-container header-light header-logo-left header-space-false right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
            <div id="page">
                <MouseCursor />
                <Preloader />
                <NavBar />

                <div className="header-space"></div>
                <main className="main-container">
                    <div className="container">

                        <div className="wpb-content-wrapper">
                            <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
                                className="vc_row wpb_row vc_row-fluid vc_row-5c9b3b9301a76 vc_row-no-padding">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner ">
                                        <div className="wpb_wrapper">
                                            <div className="split-screen split-screen-5c9b3b8dd6e32">
                                                <div className="mouse-button"><span></span></div>
                                                <SocialLinks />
                                                <div className="navigation-block">
                                                    <div className="prev free-basic-ui-elements-down-arrow"></div>
                                                    <div className="pagination"></div>
                                                    <div className="next free-basic-ui-elements-down-arrow"></div>
                                                </div>
                                                <div className="items">
                                                    <div className="screen-item ops-screen-5c9b51791da07 white">
                                                        <div className="item item-left">
                                                            <div className="content">
                                                                <div className="heading-block tal h-h2">
                                                                    <h2 className="h">
                                                                        <span>Elev8</span> – blending fintech &amp;
                                                                        consultancy<br /><span>Best of both worlds</span>
                                                                    </h2>
                                                                </div>

                                                                <div className="wpb_text_column wpb_content_element ">
                                                                    <div className="wpb_wrapper">
                                                                        <p
                                                                            style={{ color: "#b1b0b0", maxWidth: "465px", margin: "30px 0" }}>
                                                                            At Elev8, we redefine
                                                                            foreign exchange with transparency, personalised
                                                                            service, and a commitment to your
                                                                            success. Discover seamless, worry-free
                                                                            transactions
                                                                            tailored to your unique story.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                                    <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                        <div className="vc_column-inner">
                                                                            <div className="wpb_wrapper">
                                                                                <div
                                                                                    className="button-container button-65c2184f6d6c6 left">
                                                                                    <a className="button-style1"
                                                                                        href="https://onboarding.paydirect.io/elev8_group/forms/corporate"
                                                                                        target="_blank">
                                                                                        <span className="d"><span></span></span>
                                                                                        <span>Business</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                        <div className="vc_column-inner">
                                                                            <div className="wpb_wrapper">
                                                                                <div
                                                                                    className="button-container button-65c273a2b9912 left">
                                                                                    <a className="button-style1"
                                                                                        href="https://onboarding.paydirect.io/elev8_group/forms/individual"
                                                                                        target="_blank">
                                                                                        <span className="d"><span></span></span>
                                                                                        <span>Personal</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item item-right type-image"
                                                            style={{ backgroundImage: "url(/assets/images/lion.webp)" }}>
                                                        </div>
                                                    </div>
                                                    <div className="screen-item ops-screen-5c9b51f283545">
                                                        <img src="/assets/images/london.webp" alt="London"
                                                            className="item item-left type-image"
                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                        <div className="item item-right">
                                                            <div className="content">
                                                                <div className="heading-block heading-5c9b520683d0e tal h-h2">
                                                                    <div className="sub-h">SPECIALISED FX SERVICES</div>
                                                                    <h2 className="h">Your Global <span>FX</span> Strategy,
                                                                        <span> Elevated</span>
                                                                    </h2>
                                                                </div>
                                                                <div
                                                                    className="icon-box2-block icon-box2-block-5c9b529cc0158 row">
                                                                    <div className=" col-12 col-md-6">
                                                                        <div
                                                                            className="icon-box-style2 icon-box-style2-5c9b55f12b856 tal">
                                                                            <i className="base-icon-piggy-bank"></i>
                                                                            <h5 className="h">Strategic <span>Insights</span>
                                                                            </h5>
                                                                            <div className="desc">Navigate currency markets with
                                                                                confidence. Our in-depth analysis and
                                                                                strategic foresight position you for
                                                                                success.
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className=" col-12 col-md-6">
                                                                        <div
                                                                            className="icon-box-style2 icon-box-style2-5c9b5623802b8 tal">
                                                                            <i className="essential-set-diamond"></i>
                                                                            <h5 className="h">Tailored <span>Solutions</span>
                                                                            </h5>
                                                                            <div className="desc">Customised FX strategies that
                                                                                align with your unique objectives. We
                                                                                provide the tools and expertise for you to
                                                                                thrive.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className=" col-12 col-md-6">
                                                                        <div
                                                                            className="icon-box-style2 icon-box-style2-5c9b56905e1bf tal">
                                                                            <i className="base-icon-padlock"></i>
                                                                            <h5 className="h">
                                                                                <span>Secure</span> Transactions
                                                                            </h5>
                                                                            <div className="desc">Your peace of mind is
                                                                                paramount.
                                                                                Benefit from our robust security
                                                                                measures ensuring safe and efficient FX
                                                                                transactions.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className=" col-12 col-md-6">
                                                                        <div
                                                                            className="icon-box-style2 icon-box-style2-5c9b56a2b7f7b tal">
                                                                            <i className="base-icon-avatar"></i>
                                                                            <h5 className="h">Client-Centric
                                                                                <span>Support</span>
                                                                            </h5>
                                                                            <div className="desc">Your vision is our mission.
                                                                                Expect
                                                                                unparalleled support and guidance
                                                                                every step of the way.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="screen-item ops-screen-5c9b57b074e80">
                                                        <div className="item item-left">
                                                            <div className="content">
                                                                <div className="heading-block heading-5c9b58c1d62ad tal h-h2">
                                                                    <div className="sub-h">FX Focused Expertise</div>
                                                                    <h2 className="h">
                                                                        <span>Precision</span> solutions at the core of the
                                                                        service.
                                                                    </h2>
                                                                </div>
                                                                <div
                                                                    className="num-box-items num-box-65bf87f03cdfa row no-gutters">
                                                                    <div
                                                                        className="num-box-item num-box-item-65bf87fbe7d1c  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                                        <i className="interview-handshake"></i>
                                                                        <div className="line"></div>
                                                                        <div className="content">
                                                                            <div className="num">32</div>
                                                                            <h6 className="h">Transacted $32bn in the last year
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="num-box-item num-box-item-65bf890ce7788  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                                        <i className="interview-hiring"></i>
                                                                        <div className="line"></div>
                                                                        <div className="content">
                                                                            <div className="num">21</div>
                                                                            <h6 className="h">Our partners are fully regulated
                                                                                in 21
                                                                                Countries</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="num-box-item num-box-item-65bf8c7f686bb  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                                        <i className="base-icon-piggy-bank"></i>
                                                                        <div className="line"></div>
                                                                        <div className="content">
                                                                            <div className="num">41</div>
                                                                            <h6 className="h">Support 41 currencies</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="num-box-item num-box-item-65bf8ebae9b72  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                                        <i className="base-icon-avatar"></i>
                                                                        <div className="line"></div>
                                                                        <div className="content">
                                                                            <div className="num">150</div>
                                                                            <h6 className="h">Payments to over 150 countries
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="/assets/images/satellite.webp" alt="satellite"
                                                            className="item item-right type-image"
                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                    </div>
                                                    <div className="screen-item ops-screen-5c9b6842a1157">
                                                        <div className="item item-left type-map">
                                                            <div className="map-block">
                                                                <div className="map" id="ops-screen-5c9b6842a1157"></div>
                                                            </div>
                                                        </div>
                                                        <div className="item item-right">
                                                            <div className="content">
                                                                <div
                                                                    className="heading-block heading-5c9b68b12e575 tal h-h2 vc_custom_1707222417639">
                                                                    <div className="sub-h">Contact Us</div>
                                                                    <h2 className="h">Let's <span>Talk!</span>
                                                                    </h2>
                                                                </div>
                                                                <div className="contact-row contact-row-5c9b68e143866 medium">
                                                                    <i className="base-icon-phone-call"></i>
                                                                    <div className="content">
                                                                        <a href="tel:+442045801415">+44 (0) 20 4580 1415</a>
                                                                    </div>
                                                                </div>
                                                                <div className="contact-row contact-row-5c9b68f2ca8cf medium">
                                                                    <i className="base-icon-envelope"></i>
                                                                    <div className="content">
                                                                        <a href="mailto:info@elev8exchange.com">info@elev8exchange.com</a>
                                                                    </div>
                                                                </div>
                                                                <div className="contact-row contact-row-5c9b68ffab193 medium">
                                                                    <i className="base-icon-placeholder"></i>
                                                                    <div className="content">
                                                                        <span>
                                                                            1 Moor Place<br />
                                                                            1 Fore Street Avenue<br />
                                                                            London<br />
                                                                            EC2Y 9DT</span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="button-container button-5c9b6916f934f left vc_custom_1707081983215">
                                                                    <a className="button-style1" href="/contact" target="_self">
                                                                        <span className="d"><span></span></span>
                                                                        <span>Contact Us</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix"></div>
                            <div className="vc_row wpb_row vc_row-fluid vc_row-">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                        <div className="wpb_wrapper"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );

}

export default Home;
