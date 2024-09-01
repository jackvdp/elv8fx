export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <Logo />
                        <Complaints />
                    </div>
                    <div className="col-12 col-sm-3">
                        <SiteMap />
                    </div>
                    <div className="col-12 col-sm-3">
                        <Contacts />
                    </div>
                </div>
                <div className="row">
                    <DisclaimerText />
                </div>
            </div>
        </footer>
    )
}

function Logo() {
    return (
        <div className="site-logo"><a href="/"><img className="light" src="/assets/images/logo.webp" alt="Elev8 FX" /><img
            className="dark" src="/assets/images/logo.webp" alt="Elev8 FX" /></a></div>
    )
}

function SiteMap() {
    return (
        <div id="custom_html-1" className="widget_text widget widget_custom_html">
            <h6 className="widget-title">Links</h6>
            <div className="textwidget custom-html-widget">
                <div className="contact-row-no-margin">
                    <a href="/"><span>Home</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/about"><span>About</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/services"><span>Services</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/security"><span>Security</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/contact"><span>Contact Us</span></a>
                </div>
            </div>
        </div>
    )
}

function Complaints() {
    return (
        <div id="custom_html-1" className="widget_text widget widget_custom_html">
            <div className="text-widget-light-color custom-html-widget">
                <div className="contact-row-no-margin">
                    <a href="/complaints"><span>Complaints</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/safeguarding"><span>Safeguarding Funds</span></a>
                </div>
            </div>
        </div>
    )
}

function Contacts() {
    return (
        <div id="custom_html-1" className="widget_text widget widget_custom_html">
            <h6 className="widget-title">Contacts</h6>
            <div className="textwidget custom-html-widget">
                <div className="contact-row">
                    <i className="base-icon-phone-call"></i>
                    <a href="tel:+442045801415"><span>+44 (0) 20 4580 1415</span></a>
                </div>
                <div className="contact-row">
                    <i className="base-icon-envelope"></i>
                    <a href="mailto:info@elev8exchange.com"><span>info@elev8exchange.com</span></a>
                </div>
                <div className="contact-row">
                    <i className="base-icon-placeholder"></i>
                    <span>1 Moor Place<br />1 Fore Street Avenue<br />London<br />EC2Y 9DT</span>
                </div>
            </div>
        </div>
    )
}

function DisclaimerText() {
    return (
        <div id="black-studio-tinymce-3" className="widget widget_black_studio_tinymce">
            <div className="textwidget-center-widget">
                <p style={{ marginTop: "0", fontSize: "8px", lineHeight: "12px" }}><span
                    style={{ fontSize: "8pt", color: "#808080" }}>Elev8 Group has carefully selected industry leading fintech
                    and foreign exchange partners to provide our clients with regulated services and
                    products:<br />
                    Elev8 Group work with leading fintech companies and
                    foreign exchange partners to provide regulated services for our customers. Payment services for
                    Elev8 Group are provided by Sciopay Ltd. Sciopay Ltd is a company incorporated in England &amp;
                    Wales. Registration No: 12352935. Sciopay Ltd is licensed and regulated by HMRC as a Money Service
                    Business (MSB). License No: XCML00000151326. Sciopay Ltd is authorised by the Financial Conduct
                    Authority as an Authorised Payment Institution. Firm Reference Number: 927951<br />
                    Elev8 Group Limited’s Payment and Foreign Currency
                    Exchange Services are provided by Ebury Partners UK Limited. Elev8 Group Limited is partnered with
                    Ebury Partners UK Limited as a Programme Manager. Ebury Partners UK Limited is authorised and
                    regulated by the Financial Conduct Authority as an Electronic Money Institution (Financial Services
                    Register No. 900797). Ebury Partners UK Ltd is registered with the Information Commissioner’s
                    Office, with registration number: ZA345828<br />
                    Ebury Partners UK Limited (EPUK) is an Authorised
                    Electronic Money Institution and is a licensed entity that is permitted to offer spots and forwards
                    for commercial purposes of facilitating payment for identifiable goods or services and direct
                    investments, as per the applicable Markets in Financial Instruments Directive II (MiFID) exemption.
                    Regulated investment products, as defined in MiFID II, fall out of the scope of this licence and are
                    not permitted to be traded under EPUK.<br />
                    For clients based in the United Kingdom and rest of the
                    world, payment services for Elev8 Group Ltd are provided by The Currency Cloud Limited. Registered
                    in England and Wales No. 06323311. Registered Office: Stewardship Building 1st Floor, 12 Steward
                    Street London E1 6FQ. The Currency Cloud Limited is authorised by the Financial Conduct Authority
                    under the Electronic Money Regulations 2011 for the issuing of electronic money (FRN:
                    900199).</span>
                </p>
            </div>
        </div>
    )
}