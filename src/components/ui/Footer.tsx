"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart, Twitter, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-20 border-t border-white/5 bg-slate-900/50 backdrop-blur-xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 lg:gap-24 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <div className="text-3xl font-heading font-extrabold tracking-tighter mb-4">
                                MANISH <span className="text-accent-blue">KUMAR</span>
                            </div>
                            <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
                                Engineering high-performance products with a focus on scalability, maintainability, and exceptional user experiences.
                            </p>
                        </motion.div>

                        {/* Signature Animation */}
                        <div className="relative h-20 w-48 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                            <svg viewBox="0 0 200 80" className="w-full h-full fill-none stroke-accent-blue stroke-[1.5]">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                    d="M20,50 C40,45 50,20 70,30 C80,35 75,60 90,55 C110,45 120,40 140,50 C150,55 160,20 180,30"
                                />
                                <text x="25" y="70" className="fill-slate-500 font-serif italic text-xs tracking-widest uppercase">
                                    Manish Kumar
                                </text>
                            </svg>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {["About", "Expertise", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-slate-400 hover:text-accent-blue transition-colors text-sm font-medium"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Connect</h4>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/ManishGit93", label: "GitHub" },
                                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/manish", label: "LinkedIn" },
                                { icon: <Twitter size={20} />, href: "https://x.com/Manishkuma63058", label: "X (Twitter)" },
                                { icon: <Instagram size={20} />, href: "https://instagram.com/i_amerkumar", label: "Instagram" },
                                { icon: <Mail size={20} />, href: "mailto:mkmanishkumar7366@gmail.com", label: "Email" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ y: -5 }}
                                    className="p-3 glass rounded-xl text-slate-400 hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                            &copy; {new Date().getFullYear()} Manish Kumar | All Rights Reserved
                        </p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
                            <span>Made with</span>
                            <Heart size={12} className="text-rose-500/50 fill-rose-500/20" />
                            <span>in India</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available for Global Collaboration
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="p-4 glass rounded-full hover:neon-border transition-all group"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
