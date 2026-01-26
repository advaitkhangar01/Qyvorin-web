import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import './WhyUs.css';

const reasons = [
    {
        title: 'Strategy Before Technology',
        description: 'We don’t start with code. We start with your business goals. Every line of code we write is justified by a strategic objective.'
    },
    {
        title: 'Built for Scalability',
        description: 'Our systems are designed to handle growth. From database architecture to frontend performance, we engineer for the future.'
    },
    {
        title: 'Clean, Maintainable Systems',
        description: 'We hate spaghetti code. We deliver modular, well-documented systems that your internal team can actually work with.'
    },
    {
        title: 'Direct Founder Involvement',
        description: 'You are not handed off to a junior team. Our lead architects are involved in every project to ensure quality.'
    },
    {
        title: 'Transparent Communication',
        description: 'No jargon. No black boxes. We keep you informed with clear, honest updates throughout the development lifecycle.'
    }
];

const WhyUs = () => {
    return (
        <div className="why-us-page">
            <Section className="why-us-hero">
                <h1 className="page-title">Why Qyvorin?</h1>
                <p className="page-subtitle">
                    We are not an agency. We are your technical partners.
                </p>
            </Section>

            <Section className="reasons-section">
                <div className="reasons-list">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="reason-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="reason-marker">
                                <span className="reason-number">0{index + 1}</span>
                                <div className="reason-line"></div>
                            </div>
                            <div className="reason-content">
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default WhyUs;
