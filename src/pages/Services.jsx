import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import './Services.css';

// Simple SVG Icons
const WebsiteIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
);

const AutomationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
        <path d="M10 9l2 2 2-2"></path>
    </svg>
);

const CRMIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const AdsIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
);

const servicesList = [
    {
        title: 'Websites & Web Systems',
        icon: <WebsiteIcon />,
        explanation: 'Professional digital platforms that run smoothly and help you grow.',
        benefits: [
            'A fast, modern website that looks great on all devices.',
            'Easy for your customers to use and navigate.',
            'Built to reliably handle your business needs.'
        ],
        tools: 'Includes: React, Next.js, Secure Hosting'
    },
    {
        title: 'AI & Automation',
        icon: <AutomationIcon />,
        explanation: 'Smart tools to do the repetitive work for you.',
        benefits: [
            'Save hours of manual work every week.',
            'Reduce mistakes with automated processes.',
            'Focus on your customers while systems do the rest.'
        ],
        tools: 'Includes: Chatbots, Workflow Automation, AI Agents'
    },
    {
        title: 'CRM & Business Systems',
        icon: <CRMIcon />,
        explanation: 'Keep all your customer info organized in one place.',
        benefits: [
            'Track every lead and sale without confusion.',
            'See exactly how your business is performing.',
            'Stop losing data in spreadsheets and notebooks.'
        ],
        tools: 'Includes: Custom Dashboards, Customer Databases, Analytics'
    },
    {
        title: 'Google Business & Ads',
        icon: <AdsIcon />,
        explanation: 'Get found by the people looking for what you offer.',
        benefits: [
            'Show up when customers search for your services.',
            'Attract more local buyers to your business.',
            'Run effective ads that bring in real results.'
        ],
        tools: 'Includes: SEO, Google Maps, Ad Management'
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <Section className="services-hero">
                <h1 className="page-title">Our Capabilities</h1>
                <p className="page-subtitle">
                    Helping your business work smarter, look better, and grow effectively.
                </p>
            </Section>

            <Section className="services-list">
                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'var(--accent)' }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <div className="service-explanation">
                                {service.explanation}
                            </div>
                            <ul className="service-benefits">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                            <div className="service-tools">
                                {service.tools}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
