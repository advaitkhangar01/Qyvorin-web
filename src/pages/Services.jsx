import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import './Services.css';

const servicesList = [
    {
        title: 'Web Systems',
        description: 'High-performance web applications built on modern architectures. We prioritize speed, security, and scalability.',
        tags: ['React', 'Next.js', 'Node.js']
    },
    {
        title: 'AI & Automation',
        description: 'Intelligent workflows that reduce manual effort. From chatbots to data processing pipelines.',
        tags: ['LLMs', 'Python', 'Workflow Automation']
    },
    {
        title: 'CRM Infrastructure',
        description: 'Custom CRM solutions tailored to your business processes. Track leads, manage customers, and analyze data.',
        tags: ['Custom CRM', 'Integrations', 'Data Analytics']
    },
    {
        title: 'Google Business & Ads',
        description: 'Strategic visibility. We optimize your digital presence to capture high-intent traffic.',
        tags: ['SEO', 'SEM', 'GMB Optimization']
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <Section className="services-hero">
                <h1 className="page-title">Our Capabilities</h1>
                <p className="page-subtitle">
                    We build the engines that power modern businesses.
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
                            <div className="service-header">
                                <span className="service-index">0{index + 1}</span>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.description}</p>
                            <div className="service-tags">
                                {service.tags.map(tag => (
                                    <span key={tag} className="service-tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
