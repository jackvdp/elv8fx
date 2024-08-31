import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);

    if (state.succeeded) {
        return <p>Thank you for your message. We'll get back to you soon!</p>;
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
                        placeholder="Full Name"
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
                        placeholder="E-mail"
                        required
                    />
                </span>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="input-row">
                <label>Message</label>
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
                <span>Send</span>
            </button>

            {state.errors && (
                <div className="wpcf7-response-output" aria-hidden="true">
                    There was an error submitting the form. Please try again.
                </div>
            )}
        </form>
    );
}

export default ContactForm;