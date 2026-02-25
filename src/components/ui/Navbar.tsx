"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glass border-b border-white/10" : "py-6 bg-transparent"
                }`}
        >
            <nav role="navigation" aria-label="Main Navigation">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl md:text-2xl font-heading font-bold glow-text tracking-tighter flex items-center gap-2"
                    >
                        <a
                            href="#home"
                            aria-label="MK - Manish Kumar Portfolio Home"
                            className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-lg"
                        >
                            <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center border border-accent-blue/30 group-hover:bg-accent-blue/30 transition-colors">
                                <span className="text-accent-blue text-sm">MK</span>
                            </div>
                            <span>MANISH <span className="text-accent-blue">KUMAR</span></span>
                        </a>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                aria-label={`Go to ${link.name} section`}
                                className="text-sm font-medium hover:text-accent-blue transition-colors relative group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue px-2 py-1 rounded-md"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full" />
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            aria-label="Hire me for your next project"
                            className="px-5 py-2 rounded-full border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white transition-all text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                        >
                            Hire Me
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-accent-blue outline-none"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "100vh" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl flex flex-col items-center pt-20 gap-8"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    aria-label={`Go to ${link.name} section`}
                                    className="text-2xl font-heading hover:text-accent-blue p-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
