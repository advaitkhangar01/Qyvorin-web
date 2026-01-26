import React from 'react';
import Section from '../components/Section';

const TermsOfService = () => {
    return (
        <div className="legal-page" style={{ paddingTop: 'var(--header-height)' }}>
            <Section>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Terms of Service</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="legal-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <section>
                            <h3>1. Agreement to Terms</h3>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Qyvorin ("we," "us" or "our"), concerning your access to and use of the Qyvorin website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                            </p>
                        </section>

                        <section>
                            <h3>2. Intellectual Property Rights</h3>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                            </p>
                        </section>

                        <section>
                            <h3>3. User Representations</h3>
                            <p>
                                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
                            </p>
                        </section>

                        <section>
                            <h3>4. Prohibited Activities</h3>
                            <p>
                                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                            </p>
                        </section>

                        <section>
                            <h3>5. Limitations of Liability</h3>
                            <p>
                                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                            </p>
                        </section>

                        <section>
                            <h3>6. Contact Us</h3>
                            <p>
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:support@qyvorin.online" style={{ color: 'var(--accent)' }}>support@qyvorin.online</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default TermsOfService;
