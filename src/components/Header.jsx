import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/qyvorin-logo.png';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = ['Home', 'About', 'Services', 'Projects', 'Why Us', 'Contact'];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src={logoImg} alt="Qyvorin" className="logo-image" />
                    <span>QYVORIN</span>
                </Link>

                {/* Mobile Menu Toggle (2-line Burger) */}
                <button
                    className={`mobile-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className="line top"></span>
                    <span className="line bottom"></span>
                </button>

                {/* Navigation */}
                <AnimatePresence>
                    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {item}
                                                {isActive && (
                                                    <motion.div
                                                        className="active-indicator"
                                                        layoutId="activeIndicator"
                                                    />
                                                )}
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
