import React, { useEffect } from 'react';
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import SocialLinks from './resuables/SocialLinks';
import { useTranslation, Trans } from 'react-i18next';

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
                                                    <Lion />
                                                    <Services />
                                                    <Numbers />
                                                    <Contact />
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

function Lion() {
    const { t } = useTranslation('home');

    return (
        <div className="screen-item ops-screen-5c9b51791da07 white">
            <div className="item item-left">
                <div className="content">
                    <div className="heading-block tal h-h2">
                        <h2 className="h">
                            <Trans i18nKey="lion.heading" ns="home" components={[<span />, <span />]}>
                                <span>Elev8</span> – blending fintech & consultancy<br /><span>Best of both worlds</span>
                            </Trans>
                        </h2>
                    </div>

                    <div className="wpb_text_column wpb_content_element">
                        <div className="wpb_wrapper">
                            <p style={{ color: "#b1b0b0", maxWidth: "465px", margin: "30px 0" }}>
                                {t('lion.description')}
                            </p>
                        </div>
                    </div>
                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-6 mb-5">
                            <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                    <div className="button-container button-65c2184f6d6c6 left">
                                        <a className="button-style1"
                                            href="https://onboarding.paydirect.io/elev8_group/forms/corporate"
                                            target="_blank">
                                            <span className="d"><span></span></span>
                                            <span>{t('lion.business')}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-6">
                            <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                    <div className="button-container button-65c273a2b9912 left">
                                        <a className="button-style1"
                                            href="https://onboarding.paydirect.io/elev8_group/forms/individual"
                                            target="_blank">
                                            <span className="d"><span></span></span>
                                            <span>{t('lion.personal')}</span>
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
    )
}

function Services() {
    const { t } = useTranslation('home');

    return (
        <div className="screen-item ops-screen-5c9b51f283545">
            <img src="/assets/images/london.webp" alt={t('services.londonAlt')}
                className="item item-left type-image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div className="item item-right">
                <div className="content">
                    <div className="heading-block heading-5c9b520683d0e tal h-h2">
                        <div className="sub-h">{t('services.subHeading')}</div>
                        <h2 className="h">
                            <Trans i18nKey="services.heading" ns='home'>
                                Your Global <span>FX</span> Strategy,
                                <span> Elevated</span>
                            </Trans>
                        </h2>
                    </div>
                    <div className="icon-box2-block icon-box2-block-5c9b529cc0158 row">
                        <div className=" col-12 col-md-6">
                            <div className="icon-box-style2 icon-box-style2-5c9b55f12b856 tal">
                                <i className="base-icon-piggy-bank"></i>
                                <h5 className="h">
                                    <Trans i18nKey="services.strategicInsights.title" ns='home'>
                                        Strategic <span>Insights</span>
                                    </Trans>
                                </h5>
                                <div className="desc">{t('services.strategicInsights.description')}</div>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6">
                            <div className="icon-box-style2 icon-box-style2-5c9b5623802b8 tal">
                                <i className="essential-set-diamond"></i>
                                <h5 className="h">
                                    <Trans i18nKey="services.tailoredSolutions.title" ns='home'>
                                        Tailored <span>Solutions</span>
                                    </Trans>
                                </h5>
                                <div className="desc">{t('services.tailoredSolutions.description')}</div>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6">
                            <div className="icon-box-style2 icon-box-style2-5c9b56905e1bf tal">
                                <i className="base-icon-padlock"></i>
                                <h5 className="h">
                                    <Trans i18nKey="services.secureTransactions.title" ns='home'>
                                        <span>Secure</span> Transactions
                                    </Trans>
                                </h5>
                                <div className="desc">{t('services.secureTransactions.description')}</div>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6">
                            <div className="icon-box-style2 icon-box-style2-5c9b56a2b7f7b tal">
                                <i className="base-icon-avatar"></i>
                                <h5 className="h">
                                    <Trans i18nKey="services.clientCentricSupport.title" ns='home'>
                                        Client-Centric <span>Support</span>
                                    </Trans>
                                </h5>
                                <div className="desc">{t('services.clientCentricSupport.description')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function Numbers() {
    const { t } = useTranslation('home');

    return (
        <div className="screen-item ops-screen-5c9b57b074e80">
            <div className="item item-left">
                <div className="content">
                    <div className="heading-block heading-5c9b58c1d62ad tal h-h2">
                        <div className="sub-h">{t('numbers.subHeading')}</div>
                        <h2 className="h">
                            <Trans i18nKey="numbers.heading" ns='home'>
                                <span>Precision</span> solutions at the core of the
                                service.
                            </Trans>
                        </h2>
                    </div>
                    <div className="num-box-items num-box-65bf87f03cdfa row no-gutters">
                        <div className="num-box-item num-box-item-65bf87fbe7d1c  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <i className="interview-handshake"></i>
                            <div className="line"></div>
                            <div className="content">
                                <div className="num">32</div>
                                <h6 className="h">{t('numbers.transacted')}</h6>
                            </div>
                        </div>
                        <div className="num-box-item num-box-item-65bf890ce7788  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <i className="interview-hiring"></i>
                            <div className="line"></div>
                            <div className="content">
                                <div className="num">21</div>
                                <h6 className="h">{t('numbers.regulated')}</h6>
                            </div>
                        </div>
                        <div className="num-box-item num-box-item-65bf8c7f686bb  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <i className="base-icon-piggy-bank"></i>
                            <div className="line"></div>
                            <div className="content">
                                <div className="num">41</div>
                                <h6 className="h">{t('numbers.currencies')}</h6>
                            </div>
                        </div>
                        <div className="num-box-item num-box-item-65bf8ebae9b72  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <i className="base-icon-avatar"></i>
                            <div className="line"></div>
                            <div className="content">
                                <div className="num">150</div>
                                <h6 className="h">{t('numbers.countries')}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/assets/images/satellite.webp" alt={t('numbers.satelliteAlt')}
                className="item item-right type-image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
    )
}

function Contact() {
    const { t } = useTranslation('home');

    return (
        <div className="screen-item ops-screen-5c9b6842a1157">
            <div className="item item-left type-map">
                <div className="map-block">
                    <div className="map" id="ops-screen-5c9b6842a1157"></div>
                </div>
            </div>
            <div className="item item-right">
                <div className="content">
                    <div className="heading-block heading-5c9b68b12e575 tal h-h2 vc_custom_1707222417639">
                        <div className="sub-h">{t('contact.subHeading')}</div>
                        <h2 className="h">
                            <Trans i18nKey="contact.heading" ns='home'>
                                Let's <span>Talk!</span>
                            </Trans>
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
                                EC2Y 9DT
                            </span>
                        </div>
                    </div>
                    <div className="button-container button-5c9b6916f934f left vc_custom_1707081983215">
                        <a className="button-style1" href="/contact" target="_self">
                            <span className="d"><span></span></span>
                            <span>{t('contact.buttonText')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}