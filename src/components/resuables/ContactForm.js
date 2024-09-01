import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';

function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);
    const { t } = useTranslation('contactForm');

    if (state.succeeded) {
        return <p>{t('thankYouMessage')}</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="wpcf7-form init contact-form" aria-label="Contact form">
            <div className="input-row">
                <span className="wpcf7-form-control-wrap" data-name="f-name">
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="wpcf7-form-control wpcf7-text style1"
                        placeholder={t('placeholders.fullName')}
                        required
                    />
                </span>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="input-row">
                <span className="wpcf7-form-control-wrap" data-name="email">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="wpcf7-form-control wpcf7-text style1"
                        placeholder={t('placeholders.email')}
                        required
                    />
                </span>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="input-row">
                <label>{t('messageLabel')}</label>
                <span className="wpcf7-form-control-wrap" data-name="message">
                    <textarea
                        id="message"
                        name="message"
                        className="wpcf7-form-control wpcf7-textarea style1"
                        cols="40"
                        rows="6"
                        required
                    ></textarea>
                </span>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button className="button-style1" type="submit" disabled={state.submitting}>
                <span className="d"><span></span></span>
                <span>{t('sendButton')}</span>
            </button>

            {state.errors && (
                <div className="wpcf7-response-output" aria-hidden="true">
                    {t('error')}
                </div>
            )}
        </form>
    );
}

export default ContactForm;