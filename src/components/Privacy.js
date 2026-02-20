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
                                                    <h2 style={{color: '#666', fontWeight: '300', marginBottom: '1rem'}}>Privacy Policy – Elev8 Group</h2>
                                                    <div style={{backgroundColor: '#2c2c2c', color: '#fff', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem'}}>
                                                        <p style={{margin: '0.5rem 0'}}><strong>Company Number:</strong> 15422926</p>
                                                        <p style={{margin: '0.5rem 0'}}><strong>Registered Office:</strong>111 Finsbury Pavement, London, EC2A 1RS</p>
                                                    </div>
                                                    <p>Elev8 Group is committed to protecting the privacy of any personal information that you may choose to provide to us ("Personal Information"). Elev8 Group will ensure that the use of your Personal Information is compliant with the General Data Protection Regulation (GDPR), (Regulation (EU) 2016/679). Accordingly, this policy outlines our approach to handling your Personal Information.</p>
                                                    <p><em>Elev8 Group is committed to providing a safe, responsible, and secure environment.</em></p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <h3 style={{color: '#666', fontWeight: '300', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem', marginBottom: '1rem'}}>1. Introduction</h3>
                                                    <p><strong>1.1</strong> This Privacy Policy sets out how Elev8 Group ("we" or "us") collects and processes Personal Information, and the steps we take to protect it.</p>
                                                    <p><strong>1.2</strong> By using our Services, you acknowledge that you have read and agree to the terms of this Privacy Policy, and you consent to the use of your Personal Information as outlined herein. If you do not wish to provide Personal Information, you may be unable to use all the features of our Services.</p>
                                                    <p><strong>1.3</strong> Capitalised terms not defined in this Privacy Policy shall be as defined in our Terms & Conditions.</p>
                                                    <p><strong>1.4</strong> This website (www.elev8exchange.com) is operated by Elev8 Group, a UK limited company with registration number 15422926 and registered office at 111 Finsbury Pavement, London, EC2A 1RS.</p>
                                                    
                                                    <div style={{marginTop: '1.5rem'}}>
                                                        <p><strong>1.5 Definitions:</strong></p>
                                                        <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                                                            <li style={{marginBottom: '0.5rem'}}><strong>"You"</strong> means the user of Elev8 Group services.</li>
                                                            <li style={{marginBottom: '0.5rem'}}><strong>"Personal Data"</strong> means information that identifies or relates to a specific individual.</li>
                                                            <li style={{marginBottom: '0.5rem'}}><strong>"Visitor"</strong> means someone who accesses the public areas of the website but does not access the restricted areas or services.</li>
                                                        </ul>
                                                    </div>
                                                    
                                                    <div style={{marginTop: '1.5rem'}}>
                                                        <p><strong>1.6 Principles:</strong> This policy adheres to the following data protection principles:</p>
                                                        <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                                                            <li style={{marginBottom: '0.5rem'}}>Personal data shall be processed lawfully, fairly, and transparently</li>
                                                            <li style={{marginBottom: '0.5rem'}}>It shall be collected for specified, legitimate purposes and not further processed in an incompatible manner</li>
                                                            <li style={{marginBottom: '0.5rem'}}>It shall be adequate, relevant, and limited to what is necessary</li>
                                                            <li style={{marginBottom: '0.5rem'}}>It shall be accurate and kept up to date</li>
                                                            <li style={{marginBottom: '0.5rem'}}>It shall not be kept longer than necessary</li>
                                                            <li style={{marginBottom: '0.5rem'}}>It shall be processed securely and kept confidential</li>
                                                            <li style={{marginBottom: '0.5rem'}}>It shall not be shared without necessity or consent</li>
                                                            <li style={{marginBottom: '0.5rem'}}>Data subjects shall have full rights over their data (access, rectification, erasure, objection, etc.)</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <h3 style={{color: '#666', fontWeight: '300', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem', marginBottom: '1rem'}}>2. The Information We Collect</h3>
                                                    <p><strong>2.1</strong> When registering or interacting with Elev8 Group, we may collect and process:</p>
                                                    <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                                                        <li style={{marginBottom: '0.5rem'}}>Technical and usage data (IP address, browser type, visit duration, navigation behavior, etc.)</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Identity verification documents (e.g., passport, proof of address, shareholder/director info)</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Contact details (email, name, phone number)</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Transactional information with our FX partners</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Data from third-party tools (e.g., Google Analytics, Hubspot, Pipedrive, Slack, etc.)</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Information from third-party providers and publicly available platforms (e.g., LinkedIn)</li>
                                                    </ul>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <h3 style={{color: '#666', fontWeight: '300', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem', marginBottom: '1rem'}}>3. How We Use Your Personal Information</h3>
                                                    <p><strong>3.1</strong> Your Personal Information is processed in accordance with GDPR to:</p>
                                                    <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                                                        <li style={{marginBottom: '0.5rem'}}>Provide you with FX and multi-currency account services</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Help our banking and FX partners deliver services</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Administer your client account and our platform</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Send updates, alerts, marketing communications, and newsletters</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Improve user experience through analysis and feedback</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Handle complaints, disputes, or regulatory compliance</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Provide anonymised statistics to third parties</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Monitor and record communications for training and service improvement</li>
                                                    </ul>
                                                    <div style={{backgroundColor: '#2c2c2c', color: '#fff', border: '1px solid #444', borderRadius: '6px', padding: '1rem', marginTop: '1rem'}}>
                                                        <p style={{margin: '0'}}><strong>3.2</strong> If you wish for us to stop processing your Personal Information, please email: <a href="mailto:admin@elev8exchange.com" style={{color: '#D4AF37'}}>admin@elev8exchange.com</a></p>
                                                    </div>
                                                    <p style={{marginTop: '1rem'}}><strong>3.3</strong> Communications may be recorded for compliance, quality assurance, and staff training.</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <h3 style={{color: '#666', fontWeight: '300', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem', marginBottom: '1rem'}}>4. Disclosure of Personal Information</h3>
                                                    <p><strong>4.1</strong> We do not disclose your Personal Data to third parties without your consent, unless legally required or necessary to provide services.</p>
                                                    <p><strong>4.2</strong> We share your data only with FX partners who help fulfil your transactions and services.</p>
                                                    <p><strong>4.3</strong> Where necessary, we ensure these partners are GDPR-compliant.</p>
                                                    <p><strong>4.4</strong> You permit our partners to share your transaction data with us to:</p>
                                                    <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                                                        <li style={{marginBottom: '0.5rem'}}>Reconcile commissions</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Collect feedback</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Tailor our services to you</li>
                                                    </ul>
                                                    <p><strong>4.5</strong> If Elev8 Group is ever sold or merged, your data may be disclosed to buyers as part of the business transfer.</p>
                                                    <p><strong>4.6</strong> We may share your data when legally required, such as fraud prevention or enforcement of our agreements.</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <h3 style={{color: '#666', fontWeight: '300', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem', marginBottom: '1rem'}}>5. Your Rights under GDPR</h3>
                                                    <p>You have the right to:</p>
                                                    <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                                                        <li style={{marginBottom: '0.5rem'}}>Be informed about our data collection and use</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Access the data we hold on you (we may charge £10 for this)</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Rectify inaccurate or incomplete data</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Request erasure of your data (right to be forgotten)</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Restrict or object to processing</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Data portability</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Withdraw consent at any time</li>
                                                        <li style={{marginBottom: '0.5rem'}}>File a complaint with the Information Commissioner's Office (ICO)</li>
                                                    </ul>
                                                    <div style={{backgroundColor: '#2c2c2c', color: '#fff', border: '1px solid #444', borderRadius: '6px', padding: '1rem', marginTop: '1rem'}}>
                                                        <p style={{margin: '0'}}>To exercise any of the above rights, contact <a href="mailto:admin@elev8exchange.com" style={{color: '#D4AF37'}}>admin@elev8exchange.com</a></p>
                                                    </div>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <h3 style={{color: '#666', fontWeight: '300', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem', marginBottom: '1rem'}}>6. Data Retention & Security</h3>
                                                    <p>We retain your data for as long as required to provide services, meet legal obligations, and resolve disputes. You can update or delete your information by accessing your client account or contacting us directly.</p>
                                                    <p>In accordance with our regulatory obligations, including those required by our payment and e-money institution partners, we retain your personal data for a minimum of 5 years following the end of our business relationship or the closure of your account. This retention period is required to comply with applicable anti-money laundering regulations, payment services regulations, and other legal requirements.</p>
                                                    <p>We reserve the right to withhold data if releasing it would affect others' rights and freedoms or if a request is manifestly excessive. Reasonable admin fees may apply.</p>
                                                    <p>We may use automated decision-making in some instances (e.g., personalising content), and you have the right to opt out.</p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <h3 style={{color: '#666', fontWeight: '300', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem', marginBottom: '1rem'}}>7. Cookies & Web Tracking</h3>
                                                    <p>We use cookies and web tracking tools (e.g., Google Analytics) to:</p>
                                                    <ul style={{paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                                                        <li style={{marginBottom: '0.5rem'}}>Improve functionality and user experience</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Monitor website performance</li>
                                                        <li style={{marginBottom: '0.5rem'}}>Personalise content and offers</li>
                                                    </ul>
                                                    <p style={{marginTop: '1rem'}}>You can control cookie use via your browser settings. Blocking cookies may impact the full functionality of our website. Learn more at: <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" style={{color: '#007bff'}}>www.allaboutcookies.org</a></p>
                                                </div>

                                                <div data-aos="fade-up" className="mb-5">
                                                    <h3 style={{color: '#666', fontWeight: '300', borderBottom: '2px solid #D4AF37', paddingBottom: '0.5rem', marginBottom: '1rem'}}>8. Contact Us</h3>
                                                    <p>For questions, complaints, or data requests, contact:</p>
                                                    <div style={{backgroundColor: '#2c2c2c', color: '#fff', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem'}}>
                                                        <p style={{margin: '0.5rem 0'}}><strong>Elev8 Group</strong></p>
                                                        <p style={{margin: '0.5rem 0'}}><strong>Email:</strong> <a href="mailto:admin@elev8exchange.com" style={{color: '#D4AF37'}}>admin@elev8exchange.com</a></p>
                                                        <p style={{margin: '0.5rem 0'}}><strong>Address:</strong>111 Finsbury Pavement, London, EC2A 1RS</p>
                                                        <p style={{margin: '0.5rem 0'}}><strong>Phone:</strong> <a href="tel:+442045801415" style={{color: '#D4AF37'}}>+44 (0)20 4580 1415</a></p>
                                                    </div>
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
