import React from 'react';
import Section from '../components/Section';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page" style={{ paddingTop: 'var(--header-height)' }}>
            <Section>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Privacy Policy</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <section>
                            <h3>1. Introduction</h3>
                            <p>
                                Qyvorin ("we", "our", or "us") respects your privacy and is committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h3>2. The Data We Collect</h3>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '10px', color: 'var(--text-secondary)' }}>
                                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                            </ul>
                        </section>

                        <section>
                            <h3>3. How We Use Your Data</h3>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '10px', color: 'var(--text-secondary)' }}>
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h3>4. Data Security</h3>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h3>5. Contact Us</h3>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:support@qyvorin.online" style={{ color: 'var(--accent)' }}>support@qyvorin.online</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default PrivacyPolicy;
