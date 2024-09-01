import React, { useEffect } from "react"
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import Footer from "./resuables/Footer";
import ContactForm from "./resuables/ContactForm";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation('contact');

    useEffect(() => {
        jQuery(document).ready(function (jQuery) {
            jQuery('#map-5ca2fd861224f').each(function () {
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
                    var map = new google.maps.Map(document.getElementById('map-5ca2fd861224f'), mapOptions);

                    var myLatLng = new google.maps.LatLng(51.518421, -0.088690);
                    var beachMarker = new google.maps.Marker({
                        position: myLatLng,
                        map: map
                    });
                    google.maps.event.addDomListener(window, 'resize', function () {
                        var center = map.getCenter();
                        google.maps.event.trigger(map, 'resize');
                        map.setCenter(center);
                    })
                }
                google.maps.event.addDomListener(window, 'load', initialize);
            })
        })
    }, [])

    return (
        <div
            className="page-template page-template-template-landing page-template-template-landing-php page page-id-178 unknown preloader-true header-container header-light header-logo-left header-space-true right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
            <div id="page">

                <MouseCursor />
                <Preloader />
                <NavBar />

                <div className="header-space"></div>
                <main className="main-container">
                    <div className="container">

                        <div className="wpb-content-wrapper">
                            <div className="vc_row wpb_row vc_row-fluid vc_custom_1554186257608 vc_row-5ca2f9c637616">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner " >
                                        <div className="wpb_wrapper">
                                            <div className="heading-block heading-5ca2f90bb768f tal h-h2 vc_custom_1554185717393">
                                                <h2 className="h">{t('title')}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-img wpb_column vc_column_container vc_col-sm-4 vc_col-has-fill">
                                    <div className="vc_column-inner vc_custom_1707237899435" >
                                        <div className="wpb_wrapper"></div>
                                    </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                    <div className="vc_column-inner vc_custom_1554186194062" >
                                        <div className="wpb_wrapper">
                                            <div className="contact-row contact-row-5ca2fb3313f0b with-h">
                                                <i className="base-icon-envelope"></i>
                                                <div className="content">
                                                    <div className="h">{t('emailLabel')}:</div>
                                                    <a href="mailto:info@elev8exchange.com">info@elev8exchange.com</a>
                                                </div>
                                            </div>
                                            <div className="contact-row contact-row-5ca2fb7230dec with-h">
                                                <i className="base-icon-phone-call"></i>
                                                <div className="content">
                                                    <div className="h">{t('phoneLabel')}:</div>
                                                    <a href="tel:+442045801415">+44 (0) 20 4580 1415</a>
                                                </div>
                                            </div>
                                            <div className="contact-row contact-row-5ca2fb605f3f5 with-h">
                                                <i className="base-icon-placeholder"></i>
                                                <div className="content">
                                                    <div className="h">{t('locationLabel')}:</div>
                                                    <span>1 Moor Place<br/>1 Fore Street Avenuee<br/>Londone<br/>EC2Y 9DT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpb_column vc_column_container vc_col-sm-4">
                                    <div className="vc_column-inner vc_custom_1554186206437" >
                                        <div className="wpb_wrapper">
                                            <div className="wpb_text_column wpb_content_element  vc_custom_1707213467286">
                                                <div className="wpb_wrapper">

                                                    <div className="wpcf7 no-js" id="wpcf7-f774-p178-o1" lang="ru-RU" dir="ltr">
                                                        <div className="screen-reader-response">
                                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                            <ul></ul>
                                                        </div>
                                                        <ContactForm />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
                                className="vc_row wpb_row vc_row-fluid vc_row-5ca2fdc069e92 vc_row-no-padding">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner " >
                                        <div className="wpb_wrapper">
                                            <div className="map-block map-5ca2fd861224f">
                                                <div className="map" id="map-5ca2fd861224f" style={{ width: "100%", height: "360px" }}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vc_row-full-width vc_clearfix"></div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}