import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import './Home.css';

// Import images for projects preview (reusing existing assets)
import designStudioImg from '../assets/design-studio-16.png';
import gaeaRealtyImg from '../assets/gaea-realty.png';
import concordFintechImg from '../assets/concord-fintech.png';


import jagmartImg from '../assets/jagmart.png';
import qyvorinOfficeImg from '../assets/qyvorin-office-interior.jpg';

const Home = () => {
    return (
        <div className="home-page">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. About Us Preview (Landscape: Text Left, Image Right) */}
            <Section className="home-about">
                <div className="about-grid">
                    <div className="about-content">
                        <span className="section-label">WHO WE ARE</span>
                        <h2>Architects of the Digital Future</h2>
                        <p>
                            Qyvorin is more than a development agency. We are strategic partners for businesses
                            looking to scale. We combine systems thinking with high-end design to build
                            infrastructure that lasts.
                        </p>
                        <Link to="/about">
                            <Button variant="outline">Read Our Story</Button>
                        </Link>
                    </div>
                    <div className="about-image">
                        <img src={qyvorinOfficeImg} alt="Modern Workspace" />
                    </div>
                </div>
            </Section>

            {/* 3. Our Projects (Preview Top 3) */}
            <Section className="home-projects">
                <div className="section-header">
                    <span className="section-label">SELECTED WORKS</span>
                    <h2>Our Creations</h2>
                    <Link to="/projects" className="view-all-link">View All Projects →</Link>
                </div>
                <div className="projects-preview-grid">
                    <a href="https://jagmart.co.in" target="_blank" rel="noopener noreferrer" className="project-preview-card">
                        <div className="preview-image-wrapper">
                            <img src={jagmartImg} alt="JagMart" />
                        </div>
                        <div className="preview-info">
                            <h3>JagMart</h3>
                            <p>Instant Commerce</p>
                        </div>
                    </a>
                    <a href="https://designstudio16.co.in" target="_blank" rel="noopener noreferrer" className="project-preview-card">
                        <div className="preview-image-wrapper">
                            <img src={designStudioImg} alt="Design Studio 16" />
                        </div>
                        <div className="preview-info">
                            <h3>Design Studio 16</h3>
                            <p>Architecture & Design</p>
                        </div>
                    </a>
                    <a href="https://gaearealty.in" target="_blank" rel="noopener noreferrer" className="project-preview-card">
                        <div className="preview-image-wrapper">
                            <img src={gaeaRealtyImg} alt="Gaea Realty" />
                        </div>
                        <div className="preview-info">
                            <h3>Gaea Realty</h3>
                            <p>Real Estate CRM</p>
                        </div>
                    </a>
                    <a href="https://concordfintech.com/" target="_blank" rel="noopener noreferrer" className="project-preview-card">
                        <div className="preview-image-wrapper">
                            <img src={concordFintechImg} alt="Concord Fintech" />
                        </div>
                        <div className="preview-info">
                            <h3>Concord Fintech</h3>
                            <p>Financial Advisory</p>
                        </div>
                    </a>
                </div>
            </Section>

            {/* 4. Services Section */}
            <Section className="home-services">
                <div className="section-header center">
                    <span className="section-label">OUR EXPERTISE</span>
                    <h2>Comprehensive Digital Solutions</h2>
                </div>
                <div className="services-preview-grid">
                    <div className="service-preview-item">
                        <h3>Web Systems</h3>
                        <p>Websites & Web Applications That Work Smoothly.</p>
                    </div>
                    <div className="service-preview-item">
                        <h3>AI & Automation</h3>
                        <p>Automate Tasks and Save Time.</p>
                    </div>
                    <div className="service-preview-item">
                        <h3>CRM Infrastructure</h3>
                        <p>Manage Leads and Customers in One Place.</p>
                    </div>
                    <div className="service-preview-item">
                        <h3>Google Business & Ads</h3>
                        <p>Get Found Online and Attract More Customers.</p>
                    </div>
                </div>
                <div className="center-btn">
                    <Link to="/services">
                        <Button variant="secondary">Explore Services</Button>
                    </Link>
                </div>
            </Section>



            {/* 6. Contact Us Form */}
            <Section className="home-contact">
                <div className="contact-split">
                    <div className="contact-text">
                        <h2>Ready to Start?</h2>
                        <p>
                            Let's discuss your project requirements. We are ready to build the system
                            that will power your next phase of growth.
                        </p>
                        <div className="contact-details-mini">
                            <p><strong>Email:</strong> support@qyvorin.online</p>
                            <p><strong>Phone:</strong> +91 7798647265</p>
                        </div>
                        <div className="map-container" style={{ marginTop: '30px', borderRadius: '8px', overflow: 'hidden' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.26919918910477!2d79.06581853793088!3d21.1064418669962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf77bf2bb581%3A0x1c31992e64c4f5f8!2s1%2F3%2C%20New%20Sneh%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440015!5e0!3m2!1sen!2sin!4v1769432981480!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Qyvorin Location"
                            ></iframe>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;
