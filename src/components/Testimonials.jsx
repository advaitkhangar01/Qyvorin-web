import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Qyvorin transformed our fragmented workflow into a unified digital ecosystem. The CRM they built is now the backbone of our operations.",
        author: "Rajesh Kumar",
        role: "Director, Gaea Realty"
    },
    {
        quote: "Exceptional understanding of enterprise requirements. They didn't just build a website; they built a brand authority platform.",
        author: "Sarah Jenkins",
        role: "CTO, Concord Fintech"
    },
    {
        quote: "The attention to detail in the UI is unmatched. Our portfolio looks stunning, and the performance is incredible.",
        author: "Arjun Mehta",
        role: "Principal Architect, Design Studio 16"
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-grid">
            {testimonials.map((item, index) => (
                <motion.div
                    key={index}
                    className="testimonial-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="quote-icon">“</div>
                    <p className="testimonial-quote">{item.quote}</p>
                    <div className="testimonial-author">
                        <div className="author-avatar-placeholder">{item.author[0]}</div>
                        <div className="author-info">
                            <span className="author-name">{item.author}</span>
                            <span className="author-role">{item.role}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Testimonials;
