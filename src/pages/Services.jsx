import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import './Services.css';

const servicesList = [
    {
        title: 'Web Systems',
        description: 'Websites & Web Applications That Work Smoothly. We create websites and web applications that load fast, work reliably, and grow with your business. Whether you need a simple website or a complete system, we build solutions that are easy to use and built to last.',
        tags: ['React', 'Next.js', 'Node.js']
    },
    {
        title: 'AI & Automation',
        description: 'Automate Tasks and Save Time. We help businesses reduce manual work by using automation and AI. This includes chatbots, automated processes, and smart systems that handle repetitive tasks so your team can focus on important work.',
        tags: ['LLMs', 'Python', 'Workflow Automation']
    },
    {
        title: 'CRM Infrastructure',
        description: 'Manage Leads and Customers in One Place. We build custom systems to help you manage leads, customers, and business data. You can track follow-ups, store information, and understand your sales performance clearly and easily.',
        tags: ['Custom CRM', 'Integrations', 'Data Analytics']
    },
    {
        title: 'Google Business & Ads',
        description: 'Get Found Online and Attract More Customers. We improve your online visibility so people can easily find your business on Google. We help with search results, business listings, and ads that bring real customers to you.',
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
