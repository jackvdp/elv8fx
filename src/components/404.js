import { Trans, useTranslation } from 'react-i18next';
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import SocialLinks from './resuables/SocialLinks';

export default function Error404() {
    const { t } = useTranslation('error404');

    return (
        <div
            className="error404 unknown preloader-true header-container header-light header-logo-left header-space-false right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
            <div id="page">

                <MouseCursor />
                <Preloader />
                <NavBar />

                <div className="header-space"></div>
                <main className="block-404 light-color bsl-right"
                    style={{backgroundImage: "url(/wp/images/AdobeStock_563050869-copy-2.jpeg)"}}>
                    <SocialLinks />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col">
                                <div className="heading-block">
                                    <div className="sub-h">{t('subHeading')}</div>
                                    <h2 className="h">
                                        <Trans i18nKey="title" ns='error404'>
                                            404 Error. You are on<br />a non existing page!
                                        </Trans>
                                    </h2>
                                </div>
                                <a className="button-style1" href="/"><span className="d"><span></span></span><span>{t('buttonText')}</span></a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}