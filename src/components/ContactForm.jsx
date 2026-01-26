import React from 'react';
import Button from './Button';
import './ContactForm.css';

const ContactForm = () => {
    const [status, setStatus] = React.useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/advaitkhangar@qyvorin.online", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                const data = await response.json().catch(() => ({}));
                console.error("Form submission failed:", response.status, data);
                setStatus('error');
                // Optional: Store error message in state if we want to show it
                if (data.message) {
                    alert(`Error: ${data.message}`); // Simple way to show error to user for now
                }
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('error');
            alert("Network error or ad blocker preventing submission.");
        }
    };

    if (status === 'success') {
        return (
            <div className="contact-form-success">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setStatus('idle')} style={{ marginTop: '20px' }}>Send Another Message</Button>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Project Inquiry from Qyvorin Website" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Fill in your name" required disabled={status === 'submitting'} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="name@company.com" required disabled={status === 'submitting'} />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Fill in your phone number" disabled={status === 'submitting'} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your system requirements..." required disabled={status === 'submitting'}></textarea>
            </div>

            {status === 'error' && (
                <div className="form-message error">
                    Something went wrong. Please try again.
                </div>
            )}

            <Button variant="primary" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
};

export default ContactForm;
