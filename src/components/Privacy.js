import React, { useEffect } from "react";
import NavBar from './resuables/NavBar';
import MouseCursor from './resuables/MouseCursor';
import Preloader from './resuables/Preloader';
import Footer from "./resuables/Footer";
import { useTranslation } from "react-i18next";
import Header from "./resuables/Header";

export default function Privacy() {
    const { t } = useTranslation('privacy');
    
    return (
        <div className="page-template page-template-template-landing page-template-template-landing-php page page-id-180 unknown preloader-true header-container header-light header-logo-left header-space-false right-click-disable-false mobile-images-false custom-cursor-true hide-popup-download-link wpb-js-composer js-comp-ver-7.4 vc_responsive">
            <MouseCursor />
            <Preloader />
            <NavBar />

            <div className="header-space"></div>
            <main className="main-container">
                <div className="container">
                    <div className="wpb-content-wrapper">
                        <Header title="Privacy Policy" subtitle='Privacy' image="/wp/images/security.jpeg" />
                        <div className="vc_row wpb_row vc_row-fluid vc_row-5c99cd717f62c vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                                <div className="vc_column-inner vc_custom_1707296244897">
                                    <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element">
                                            <div className="wpb_wrapper">
                                                
                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>Privacy Policy – Elev8 Group</strong></p>
                                                    <p>Company Number: 15422926</p>
                                                    <p>Registered Office: Moor Place, 1 Fore Street Avenue, London, England, EC2Y 9DT</p>
                                                    <p>Elev8 Group is committed to protecting the privacy of any personal information that you may choose to provide to us ("Personal Information"). Elev8 Group will ensure that the use of your Personal Information is compliant with the General Data Protection Regulation (GDPR), (Regulation (EU) 2016/679). Accordingly, this policy outlines our approach to handling your Personal Information.</p>
                                                    <p>Elev8 Group is committed to providing a safe, responsible, and secure environment.</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>1. Introduction</strong></p>
                                                    <p>1.1 This Privacy Policy sets out how Elev8 Group ("we" or "us") collects and processes Personal Information, and the steps we take to protect it.</p>
                                                    <p>1.2 By using our Services, you acknowledge that you have read and agree to the terms of this Privacy Policy, and you consent to the use of your Personal Information as outlined herein. If you do not wish to provide Personal Information, you may be unable to use all the features of our Services.</p>
                                                    <p>1.3 Capitalised terms not defined in this Privacy Policy shall be as defined in our Terms & Conditions.</p>
                                                    <p>1.4 This website (www.elev8exchange.com) is operated by Elev8 Group, a UK limited company with registration number 15422926 and registered office at Moor Place, 1 Fore Street Avenue, London, EC2Y 9DT.</p>
                                                    <p>1.5 Definitions:</p>
                                                    <p>"You" means the user of Elev8 Group services.</p>
                                                    <p>"Personal Data" means information that identifies or relates to a specific individual.</p>
                                                    <p>"Visitor" means someone who accesses the public areas of the website but does not access the restricted areas or services.</p>
                                                    <p>1.6 Principles: This policy adheres to the following data protection principles:</p>
                                                    <p>Personal data shall be processed lawfully, fairly, and transparently.</p>
                                                    <p>It shall be collected for specified, legitimate purposes and not further processed in an incompatible manner.</p>
                                                    <p>It shall be adequate, relevant, and limited to what is necessary.</p>
                                                    <p>It shall be accurate and kept up to date.</p>
                                                    <p>It shall not be kept longer than necessary.</p>
                                                    <p>It shall be processed securely and kept confidential.</p>
                                                    <p>It shall not be shared without necessity or consent.</p>
                                                    <p>Data subjects shall have full rights over their data (access, rectification, erasure, objection, etc.).</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>2. The Information We Collect</strong></p>
                                                    <p>2.1 When registering or interacting with Elev8 Group, we may collect and process:</p>
                                                    <p>Technical and usage data (IP address, browser type, visit duration, navigation behavior, etc.)</p>
                                                    <p>Identity verification documents (e.g., passport, proof of address, shareholder/director info)</p>
                                                    <p>Contact details (email, name, phone number)</p>
                                                    <p>Transactional information with our FX partners</p>
                                                    <p>Data from third-party tools (e.g., Google Analytics, Hubspot, Pipedrive, Slack, etc.)</p>
                                                    <p>Information from third-party providers and publicly available platforms (e.g., LinkedIn)</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>3. How We Use Your Personal Information</strong></p>
                                                    <p>3.1 Your Personal Information is processed in accordance with GDPR to:</p>
                                                    <p>Provide you with FX and multi-currency account services</p>
                                                    <p>Help our banking and FX partners deliver services</p>
                                                    <p>Administer your client account and our platform</p>
                                                    <p>Send updates, alerts, marketing communications, and newsletters</p>
                                                    <p>Improve user experience through analysis and feedback</p>
                                                    <p>Handle complaints, disputes, or regulatory compliance</p>
                                                    <p>Provide anonymised statistics to third parties</p>
                                                    <p>Monitor and record communications for training and service improvement</p>
                                                    <p>3.2 If you wish for us to stop processing your Personal Information, please email: admin@elev8exchange.com</p>
                                                    <p>3.3 Communications may be recorded for compliance, quality assurance, and staff training.</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>4. Disclosure of Personal Information</strong></p>
                                                    <p>4.1 We do not disclose your Personal Data to third parties without your consent, unless legally required or necessary to provide services.</p>
                                                    <p>4.2 We share your data only with FX partners who help fulfil your transactions and services.</p>
                                                    <p>4.3 Where necessary, we ensure these partners are GDPR-compliant.</p>
                                                    <p>4.4 You permit our partners to share your transaction data with us to:</p>
                                                    <p>Reconcile commissions</p>
                                                    <p>Collect feedback</p>
                                                    <p>Tailor our services to you</p>
                                                    <p>4.5 If Elev8 Group is ever sold or merged, your data may be disclosed to buyers as part of the business transfer.</p>
                                                    <p>4.6 We may share your data when legally required, such as fraud prevention or enforcement of our agreements.</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>5. Your Rights under GDPR</strong></p>
                                                    <p>You have the right to:</p>
                                                    <p>Be informed about our data collection and use</p>
                                                    <p>Access the data we hold on you (we may charge £10 for this)</p>
                                                    <p>Rectify inaccurate or incomplete data</p>
                                                    <p>Request erasure of your data (right to be forgotten)</p>
                                                    <p>Restrict or object to processing</p>
                                                    <p>Data portability</p>
                                                    <p>Withdraw consent at any time</p>
                                                    <p>File a complaint with the Information Commissioner's Office (ICO)</p>
                                                    <p>To exercise any of the above rights, contact admin@elev8exchange.com</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>6. Data Retention & Security</strong></p>
                                                    <p>We retain your data for as long as required to provide services, meet legal obligations, and resolve disputes. You can update or delete your information by accessing your client account or contacting us directly.</p>
                                                    <p>We reserve the right to withhold data if releasing it would affect others' rights and freedoms or if a request is manifestly excessive. Reasonable admin fees may apply.</p>
                                                    <p>We may use automated decision-making in some instances (e.g., personalising content), and you have the right to opt out.</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>7. Cookies & Web Tracking</strong></p>
                                                    <p>We use cookies and web tracking tools (e.g., Google Analytics) to:</p>
                                                    <p>Improve functionality and user experience</p>
                                                    <p>Monitor website performance</p>
                                                    <p>Personalise content and offers</p>
                                                    <p>You can control cookie use via your browser settings. Blocking cookies may impact the full functionality of our website. Learn more at: www.allaboutcookies.org</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <p><strong>8. Contact Us</strong></p>
                                                    <p>For questions, complaints, or data requests, contact:</p>
                                                    <p>Elev8 Group  Email: admin@elev8exchange.com  Address: Moor Place, 1 Fore Street Avenue, London, England, EC2Y 9DT Phone: +44 (0)20 4580 1415</p>
                                                </div>

                                                <div className="p-2"></div>
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
    )
}
