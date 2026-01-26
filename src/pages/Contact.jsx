import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Section className="contact-hero">
                <h1 className="page-title">Start the Conversation</h1>
                <p className="page-subtitle">
                    Ready to engineer your growth? Let's discuss your system requirements.
                </p>
            </Section>

            <Section className="contact-content">
                <div className="contact-card">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p className="trust-copy">
                            Initial discussion is exploratory and obligation-free. We respect your time and privacy.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <span className="method-label">Email</span>
                                <a href="mailto:support@qyvorin.online" className="method-value">support@qyvorin.online</a>
                            </div>
                            <div className="method-item">
                                <span className="method-label">Phone</span>
                                <a href="tel:+917798647265" className="method-value">+91 7798647265</a>
                            </div>
                        </div>

                        <div className="map-container" style={{ marginTop: '30px', marginBottom: '30px', borderRadius: '8px', overflow: 'hidden' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.26919918910477!2d79.06581853793088!3d21.1064418669962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf77bf2bb581%3A0x1c31992e64c4f5f8!2s1%2F3%2C%20New%20Sneh%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440015!5e0!3m2!1sen!2sin!4v1769432981480!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Qyvorin Location"
                            ></iframe>
                        </div>

                        <div className="contact-actions">
                            <Button variant="primary" className="action-btn">Schedule Consultation</Button>
                            <Button variant="outline" className="action-btn" onClick={() => window.open('https://wa.me/7798647265', '_blank')}>Chat on WhatsApp</Button>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
