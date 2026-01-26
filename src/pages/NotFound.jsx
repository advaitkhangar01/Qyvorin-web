import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="not-found-page" style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: 'var(--header-height, 80px)'
        }}>
            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(4rem, 15vw, 10rem)',
                        fontWeight: '700',
                        lineHeight: '1',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to bottom, #fff, #666)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.05em'
                    }}>
                        404
                    </h1>
                    <h2 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        color: 'var(--color-text-primary, #fff)'
                    }}>
                        Page Not Found
                    </h2>
                    <p style={{
                        maxWidth: '400px',
                        margin: '0 auto 2.5rem',
                        color: 'var(--color-text-secondary, #888)',
                        lineHeight: '1.6'
                    }}>
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link to="/">
                        <Button variant="primary">Return Home</Button>
                    </Link>
                </motion.div>
            </Section>
        </div>
    );
};

export default NotFound;
