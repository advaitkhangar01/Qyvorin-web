import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Projects.css';

import designStudioImg from '../assets/design-studio-16.png';
import gaeaRealtyImg from '../assets/gaea-realty.png';
import concordFintechImg from '../assets/concord-fintech.png';
import jagmartImg from '../assets/jagmart.png';

const projects = [
    {
        title: 'Design Studio 16',
        category: 'Brand-Focused Business Website',
        description: 'A modern, design-led website for an architecture firm. Structured to showcase projects clearly while maintaining a strong visual hierarchy and creative character.',
        tags: ['Frontend Development', 'Responsive Design', 'UI Structuring'],
        color: '#007AFF',
        image: designStudioImg,
        link: 'https://designstudio16.co.in'
    },
    {
        title: 'Gaea Realty & Consultants',
        category: 'Custom CRM & Lead Management',
        description: 'A production-ready CRM platform for real estate sales operations. Features role-based access, lead tracking, and secure authentication.',
        tags: ['Full-Stack', 'PostgreSQL', 'Secure Auth', 'VPS Deployment'],
        color: '#10B981',
        image: gaeaRealtyImg,
        link: 'https://gaearealty.in'
    },
    {
        title: 'Concord Fintech Services',
        category: 'Enterprise Financial Advisory',
        description: 'A premium, enterprise-grade website for financial advisory services. Built for trust, clarity, and performance with SEO readiness.',
        tags: ['UI/UX Design', 'Frontend Engineering', 'Performance', 'SEO'],
        color: '#8B5CF6',
        image: concordFintechImg,
        link: 'https://concordfintech.com/'
    },
    {
        title: 'JagMart',
        category: 'Instant Commerce / E-commerce',
        description: 'A hyperlocal instant delivery platform for groceries and daily needs.',
        tags: ['E-Commerce', 'Web App', 'Quick Commerce'],
        color: '#FF6B00',
        image: jagmartImg,
        link: 'https://jagmart.co.in'
    }
];

const Projects = () => {
    return (
        <div className="projects-page">
            <Section className="projects-hero">
                <h1 className="page-title">Selected Works</h1>
                <p className="page-subtitle">
                    Case studies in precision engineering and system design.
                </p>
            </Section>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <Section key={index} className="project-section">
                        <div className="project-container">
                            <div className="project-info">
                                <span className="project-category" style={{ color: project.color }}>{project.category}</span>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <Button variant="outline" className="project-btn">View Website</Button>
                                </a>
                            </div>
                            <motion.div
                                className="project-visual"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="browser-mockup">
                                    <div className="browser-header">
                                        <div className="browser-dots">
                                            <span></span><span></span><span></span>
                                        </div>
                                        <div className="browser-bar"></div>
                                    </div>
                                    <div className="browser-content">
                                        <img src={project.image} alt={project.title} className="project-image" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Section>
                ))}
            </div>
        </div>
    );
};

export default Projects;
