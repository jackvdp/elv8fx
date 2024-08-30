import Footer from "./resuables/Footer";
import MouseCursor from "./resuables/MouseCursor";
import NavBar from "./resuables/NavBar";
import Preloader from "./resuables/Preloader";

export default function Safeguarding() {
    return (
        <body
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
                                                <h5 className="h">Safeguarding Your Funds</h5>
                                            </div>

                                            <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                    <section>Ensuring the safety and security of your funds is our top priority. We understand the
                                                        importance of trust and reliability in managing your financial transactions. That&#8217;s why
                                                        we&#8217;ve partnered with an esteemed Electronic Money Institution, Currencycloud, to safeguard
                                                        your deposits. Here&#8217;s how it works:When funds are posted to your account, e-money is
                                                        issued in exchange for these funds, by Currencycloud, the Electronic Money Institution we work
                                                        with. In line with regulatory requirements, Currencycloud safeguards your funds. This means that
                                                        the money behind the balance you see in your account is held at a reputable bank, and most
                                                        importantly, is protected for you in the event of Currencycloud’s, or our, insolvency.
                                                        Currencycloud stops safeguarding your funds when the money has been paid out of your account to
                                                        your beneficiary’s account.
                                                    </section>
                                                    <br />
                                                    <section><strong>Why This Matters</strong><br />
                                                        This safeguarding process ensures that your funds are always secure and available, reflecting
                                                        our commitment to providing a reliable and transparent service. By partnering with
                                                        Currencycloud, we adhere to the highest regulatory standards, giving you peace of mind that your
                                                        money is in safe hands.</section>

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