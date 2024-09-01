import { useTranslation, Trans } from "react-i18next";

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
    const { t } = useTranslation('footer');

    return (
        <div id="custom_html-1" className="widget_text widget widget_custom_html">
            <h6 className="widget-title">{t('siteMap.title')}</h6>
            <div className="textwidget custom-html-widget">
                <div className="contact-row-no-margin">
                    <a href="/"><span>{t('siteMap.home')}</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/about"><span>{t('siteMap.about')}</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/services"><span>{t('siteMap.services')}</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/security"><span>{t('siteMap.security')}</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/contact"><span>{t('siteMap.contact')}</span></a>
                </div>
            </div>
        </div>
    )
}

function Complaints() {
    const { t } = useTranslation('footer');

    return (
        <div id="custom_html-1" className="widget_text widget widget_custom_html">
            <div className="text-widget-light-color custom-html-widget">
                <div className="contact-row-no-margin">
                    <a href="/complaints"><span>{t('complaints.complaints')}</span></a>
                </div>
                <div className="contact-row-no-margin">
                    <a href="/safeguarding"><span>{t('complaints.safeguarding')}</span></a>
                </div>
            </div>
        </div>
    )
}

function Contacts() {
    const { t } = useTranslation('footer');

    return (
        <div id="custom_html-1" className="widget_text widget widget_custom_html">
            <h6 className="widget-title">{t('contacts.title')}</h6>
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
    );
}

function DisclaimerText() {
    const { t } = useTranslation('footer');

    return (
        <div id="black-studio-tinymce-3" className="widget widget_black_studio_tinymce">
            <div className="textwidget-center-widget">
                <p style={{ marginTop: "0", fontSize: "8px", lineHeight: "12px" }}>
                    <span style={{ fontSize: "8pt", color: "#808080" }}>
                        <Trans i18nKey="disclaimer" ns="footer" />
                    </span>
                </p>
            </div>
        </div>
    );
}