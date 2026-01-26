import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">QYVORIN</Link>
                    <p className="footer-tagline">Intelligent Web Systems for Business Growth.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <Link to="/contact">Contact</Link>
                        <a href="https://www.linkedin.com/in/advait-khangar-3ba96223b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/qyvorin/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Qyvorin. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
