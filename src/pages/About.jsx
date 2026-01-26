import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import './About.css';
import leadArchitectImg from '../assets/lead-architect.jpg';

const About = () => {
    return (
        <div className="about-page">
            <Section className="about-hero">
                <h1 className="page-title">About Qyvorin</h1>
                <p className="page-subtitle">
                    We are a team of systems architects and engineers dedicated to building
                    intelligent digital infrastructure. We believe in structure, clarity, and performance.
                </p>
            </Section>

            <Section className="founder-section">
                <div className="founder-container">
                    <div className="founder-image-wrapper">
                        <img src={leadArchitectImg} alt="Lead Architect" className="founder-image" />
                        <div className="founder-border"></div>
                    </div>
                    <div className="founder-info">
                        <span className="founder-role">Lead Architect & Founder</span>
                        <h2>Engineering Trust Through Design</h2>
                        <p>
                            "We don't just write code; we solve business problems. Every pixel and every line of code
                            has a purpose. Our goal is to remove friction and build trust."
                        </p>
                        <div className="founder-socials">
                            <Button variant="outline" onClick={() => window.open('https://github.com/advaitkhangar01/', '_blank')}>GitHub</Button>
                            <Button variant="outline" onClick={() => window.open('https://www.linkedin.com/in/advait-khangar-3ba96223b/', '_blank')}>LinkedIn</Button>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="about-purpose">
                <div className="purpose-grid">
                    <div className="purpose-content">
                        <h2>Our Purpose</h2>
                        <p>
                            In a world of chaotic templates and bloated frameworks, Qyvorin stands for precision.
                            We build systems that are not just visually engaging but are engineered for
                            scalability and long-term growth.
                        </p>
                        <p>
                            Our approach is rooted in the belief that a website is not a brochure—it is a
                            business tool. It must be performant, accessible, and designed to convert.
                        </p>
                    </div>
                    <div className="purpose-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Enterprise Systems</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">99%</span>
                            <span className="stat-label">Client Retention</span>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
