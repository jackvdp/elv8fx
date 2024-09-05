import Footer from "./resuables/Footer";
import MouseCursor from "./resuables/MouseCursor";
import NavBar from "./resuables/NavBar";
import Preloader from "./resuables/Preloader";
import { useTranslation, Trans } from "react-i18next";

export default function Safeguarding() {
    const { t } = useTranslation('safeguarding');

    return (
        <div
            className="page-template page-template-template-landing page-template-template-landing-php page page-id-897 unknown preloader-true header-container header-light header-logo-left header-space-true right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
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
                                    <div className="vc_column-inner vc_custom_1707296244897">
                                        <div className="wpb_wrapper">
                                            <div className="heading-block heading-5c99cd7d59d6e tal h-h5">
                                                <h5 className="h">{t('title')}</h5>
                                            </div>

                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <section>
                                                        <Trans i18nKey="section1" ns='safeguarding' />
                                                    </section>
                                                    <br />
                                                    <section>
                                                        <strong>{t('section2.title')}:</strong><br />
                                                        {t('section2.text')}
                                                    </section>
                                                    <br />
                                                    <section>
                                                        <strong>{t('section3.title')}:</strong><br />
                                                        {t('section3.text')}
                                                    </section>
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
        </div>
    )
}