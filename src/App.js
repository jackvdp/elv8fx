import React, { useEffect } from 'react';

function App() {
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
                                                <div className="banner-social-links">
                                                    <div className="social-links">
                                                        <a href="https://www.instagram.com/elev8group_/">
                                                            <span>in</span><span>Instagram</span>
                                                        </a>
                                                        <a href="https://www.linkedin.com/company/elev8-groupuk/about/">
                                                            <span>li</span><span>LinkedIn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="navigation-block">
                                                    <div className="prev free-basic-ui-elements-down-arrow"></div>
                                                    <div className="pagination"></div>
                                                    <div className="next free-basic-ui-elements-down-arrow"></div>
                                                </div>
                                                <div className="items">
                                                    <div className="screen-item ops-screen-5c9b51791da07 white">
                                                        <div className="item item-left">
                                                            <div className="content">
                                                                <div className="heading-block heading-5c9b51bdc7708 tal h-h2">
                                                                    <h2 className="h">
                                                                        <span>Elev8</span> – the Pinnacle of Fintech &amp;
                                                                        Consultancy, Forging a Path Beyond
                                                                        the Ordinary
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
                                                                        <span>Elevated</span>
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
                                                                        <span>+44 (0) 20 4580 1415</span>
                                                                    </div>
                                                                </div>
                                                                <div className="contact-row contact-row-5c9b68f2ca8cf medium">
                                                                    <i className="base-icon-envelope"></i>
                                                                    <div className="content">
                                                                        <a
                                                                            href="mailto:info@elev8exchange.com">info@elev8exchange.com</a>
                                                                    </div>
                                                                </div>
                                                                <div className="contact-row contact-row-5c9b68ffab193 medium">
                                                                    <i className="base-icon-placeholder"></i>
                                                                    <div className="content">
                                                                        <span>1 Moor Place, 1 Fore Street Avenue, London
                                                                            EC2Y
                                                                            9DT</span>
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

export default App;

function Preloader() {
    return (
        <div className="preloader-area">
            <div className="preloader-folding-cube">
                <div className="preloader-cube1 preloader-cube"></div>
                <div className="preloader-cube2 preloader-cube"></div>
                <div className="preloader-cube4 preloader-cube"></div>
                <div className="preloader-cube3 preloader-cube"></div>
            </div>
        </div>
    )
}

function MouseCursor() {
    return (
        <div className="mouse-cursor" id="mouse-cursor">
            <div className="mc-b">
                <svg className="mc-loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                    <path
                        d="m51.6 96.7c11 0 21-3.9 28.8-10.5l35 35c0.8 0.8 1.8 1.2 2.9 1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-35-35c6.5-7.8 10.5-17.9 10.5-28.8 0-24.9-20.2-45.1-45.1-45.1-24.8 0-45.1 20.3-45.1 45.1 0 24.9 20.3 45.1 45.1 45.1zm0-82c20.4 0 36.9 16.6 36.9 36.9 0 20.4-16.5 36.9-36.9 36.9s-36.9-16.6-36.9-36.9 16.6-36.9 36.9-36.9z">
                    </path>
                </svg>
                <svg className="mc-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                    <path
                        d="m10.7 99.5h4.8c-3.3 5.9-2.5 13.5 2.5 18.5 2.9 2.9 6.8 4.5 11 4.5s8-1.6 11-4.5c2.9-2.9 4.5-6.8 4.5-11 0-2.7-0.7-5.2-2-7.5h19.3c-3.3 5.9-2.5 13.5 2.5 18.5 2.9 2.9 6.8 4.5 11 4.5s8-1.6 11-4.5c2.9-2.9 4.5-6.8 4.5-11 0-2.7-0.7-5.2-2-7.5h5.2c2.3 0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-79.2v-8h90c1.8 0 3.4-1.2 3.9-3l13.6-49.7c0.3-1.2 0.1-2.5-0.7-3.5-0.8-1-2-1.6-3.2-1.6h-103.6v-14.9c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v18.9 49.7 16.1c0 2.4 1.8 4.2 4.1 4.2zm59.3 2.3c1.4-1.4 3.2-2.2 5.2-2.2 2 0 3.8 0.8 5.2 2.2 1.4 1.4 2.2 3.2 2.2 5.2 0 2-0.8 3.8-2.2 5.2-2.8 2.8-7.6 2.8-10.4 0-2.9-2.9-2.9-7.5 0-10.4zm-46.2 0c1.4-1.4 3.2-2.2 5.2-2.2 2 0 3.8 0.8 5.2 2.2 1.4 1.4 2.2 3.2 2.2 5.2 0 2-0.8 3.8-2.2 5.2-2.8 2.8-7.6 2.8-10.4 0-2.9-2.9-2.9-7.5 0-10.4zm-9-68.2h98.2l-11.4 41.6h-86.8v-41.6z">
                    </path>
                </svg>
                <svg className="mc-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                    <path
                        d="M7.6 121.4c0.8 0.8 1.8 1.2 2.9 1.2s2.1-0.4 2.9-1.2l51.1-51.1 51.1 51.1c0.8 0.8 1.8 1.2 2.9 1.2 1 0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8L70.3 64.5l51.1-51.1c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0L64.5 58.7 13.4 7.6C11.8 6 9.2 6 7.6 7.6s-1.6 4.2 0 5.8l51.1 51.1L7.6 115.6C6 117.2 6 119.8 7.6 121.4z">
                    </path>
                </svg>
                <svg className="mc-next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                    <path
                        d="m40.4 121.3c-0.8 0.8-1.8 1.2-2.9 1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z">
                    </path>
                </svg>
                <svg className="mc-prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
                    <path
                        d="m88.6 121.3c0.8 0.8 1.8 1.2 2.9 1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0l-54 53.9c-1.6 1.6-1.6 4.2 0 5.8l54 53.9z">
                    </path>
                </svg>
                <svg className="mc-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                    <path
                        d="M36.1 20.2l-29-20C6.8 0 6.4-0.1 6 0.1 5.7 0.3 5.5 0.6 5.5 1v40c0 0.4 0.2 0.7 0.5 0.9 0.1 0.1 0.3 0.1 0.5 0.1 0.2 0 0.4-0.1 0.6-0.2l29-20c0.3-0.2 0.4-0.5 0.4-0.8S36.3 20.4 36.1 20.2zM7.5 39.1V2.9l26.2 18.1L7.5 39.1z">
                    </path>
                </svg>
            </div>
        </div>
    )
}

function NavBar() {
    return (
        <div className="site-header light-color">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="site-logo"><a href="/"><img className="light" src="/assets/images/logo.webp"
                            alt="Elev8 FX" /><img className="dark" src="/assets/images/logo.webp"
                                alt="Elev8 FX" /></a>
                        </div>
                    </div>
                    <div className="right col-auto">
                        <nav className="navigation visible_menu">
                            <ul id="menu-menu-1" className="menu">
                                <li id="menu-item-811"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-811">
                                    <a href="/about/"><span>About</span></a></li>
                                <li id="menu-item-814"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-814">
                                    <a href="/services/"><span>Services</span></a></li>
                                <li id="menu-item-815"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-815"><a
                                        href="https://elev8exchange.sciopay.co/login"><span>Log In</span></a></li>
                                <li id="menu-item-813"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-813">
                                    <a href="/security/"><span>Security</span></a></li>
                                <li id="menu-item-812"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-812">
                                    <a href="/contact/"><span>Contact</span></a></li>
                            </ul>
                        </nav>
                        <div className="nav-butter visible_menu">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}