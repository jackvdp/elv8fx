import { Trans, useTranslation } from 'react-i18next';
import Footer from "./resuables/Footer";
import MouseCursor from "./resuables/MouseCursor";
import NavBar from "./resuables/NavBar";
import Preloader from "./resuables/Preloader";

export default function Complaints() {
    const { t } = useTranslation('complaints');

    return (
        <div
            className="page-template page-template-template-landing page-template-template-landing-php page page-id-911 unknown preloader-true header-container header-light header-logo-left header-space-true right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
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

                                            <div className="wpb_text_column wpb_content_element">
                                                <div className="wpb_wrapper">
                                                    <section>
                                                        {t('complaints.intro')}
                                                        <ul>
                                                            <li>
                                                                <strong>{t('complaints.howToSubmitTitle')}:</strong> {t('complaints.howToSubmitText')}
                                                            </li>
                                                            <li>
                                                                <strong>{t('complaints.timelinesTitle')}:</strong> {t('complaints.timelinesText')}
                                                            </li>
                                                            <li>
                                                                <strong>{t('complaints.infoRequiredTitle')}:</strong> {t('complaints.infoRequiredText')}
                                                            </li>
                                                        </ul>
                                                        <p className="p1">
                                                            <Trans i18nKey="complaints.financialOmbudsman" ns='complaints'>
                                                                <strong>Contacting the Financial Ombudsman Service (FOS)</strong>: If you are not satisfied with the resolution provided, you have the option to approach the FOS. The FOS offers an independent review service. Contact details for the FOS and more information can be found <a href="http://www.financial-ombudsman.org.uk/">here</a>.
                                                            </Trans>
                                                        </p>
                                                        <p className="p1">
                                                            <Trans i18nKey="complaints.additionalInfo" ns='complaints'>
                                                                <strong>Additional Information</strong>: We are your first port of call for any queries or concerns, including complaints. We handle these complaints in line with our complaints process, ensuring that Currencycloud, who provides you with regulated Payments and E-money services, is informed. They oversee our process to ensure compliance with regulatory standards. If your complaint has not been acknowledged or dealt with satisfactorily, you can find Currencycloud’s complaints information <a href="https://www.currencycloud.com/legal/complaints-procedure/">here</a>.
                                                            </Trans>
                                                        </p>
                                                        <p>
                                                            <Trans i18nKey="complaints.safeguarding" ns='complaints'>
                                                                This safeguarding process ensures that your funds are always secure and available, reflecting our commitment to providing a reliable and transparent service. By partnering with Currencycloud, we adhere to the highest regulatory standards, giving you peace of mind that your money is in safe hands.
                                                            </Trans>
                                                        </p>
                                                    </section>
                                                    <section>
                                                        <p>
                                                            <Trans i18nKey="complaints.partners" ns='complaints'>
                                                                We work with e-money and payments institution partners in providing you with our service, namely Currencycloud, Ebury, Equals Money, and Sciopay. Currencycloud ultimately provides you with regulated payments and e-money services in the UK, EU, and the US. Ebury, Equals Money, and Sciopay provide you with regulated payments and e-money services in the UK, EU, and the US.
                                                            </Trans>
                                                        </p>
                                                        <p>
                                                            <Trans i18nKey="complaints.obligations" ns='complaints'>
                                                                These partners have certain obligations as regulated financial services institutions, including around complaints. We keep them informed of the complaints we receive from you regarding the regulated payments and e-money services they ultimately provide to you. They oversee how we handle complaints to ensure we do this to the standard required under the regulations.
                                                            </Trans>
                                                        </p>
                                                        <p>
                                                            <Trans i18nKey="complaints.complaintHandling" ns='complaints'>
                                                                However, if for any reason your complaint regarding your payments and e-money services has not been acknowledged or dealt with by us, or if you have concerns about the way it has been handled, Currencycloud’s complaints information can be found <a href="https://www.currencycloud.com/legal/complaints-procedure/" target="_blank" rel="noopener">here</a>, and <a href="https://ebury.com/legal/complaints-policy/#:~:text=You%20can%20contact%20us%20by,with%20you%20to%20resolve%20it." target="_blank" rel="noopener">Ebury</a>, <a href="https://equalsmoney.com/complaints#:~:text=We%20will%20be%20in%20touch,provide%20our%20'final%20response'." target="_blank" rel="noopener">Equals Money</a>, and <a href="https://sciopay.us20.list-manage.com/track/click?u=ba357ca869368ddc0718fe214&amp;id=c9321c3183&amp;e=628a0928b0" target="_blank" rel="noopener">Sciopay</a> can be found here.
                                                            </Trans>
                                                        </p>
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