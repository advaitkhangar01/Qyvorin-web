import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import LivingSculpture from './LivingSculpture';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        className="hero-label"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        SYSTEMS ARCHITECTURE
                    </motion.div>
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Building Intelligent <br />
                        <span className="text-accent">Web, AI & CRM Systems</span> <br />
                        for Business Growth
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        We design and engineer scalable digital infrastructure for forward-thinking enterprises.
                        No templates. No gimmicks. Just precision-built software.
                    </motion.p>
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button variant="primary">Start a Project</Button>
                        <Button variant="secondary">View Our Work</Button>
                    </motion.div>
                </div>

                <div className="hero-visual">
                    <LivingSculpture />
                </div>
            </div>
            <div className="hero-grid-bg"></div>
        </section>
    );
};

export default Hero;
