"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import HeroCanvas from "../canvas/HeroCanvas";
import { ArrowRight, Download, Github } from "lucide-react";
import Magnetic from "../ui/Magnetic";
import ResumeModal from "../ui/ResumeModal";

export default function Hero() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const words = [
        "SaaS Platforms",
        "Multi-tenant Systems",
        "E-Commerce Marketplaces",
        "Real-Time Collaboration Apps",
        "Enterprise Dashboards",
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <HeroCanvas />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for New Opportunities
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-[1.1] mb-6">
                        Engineering <span className="text-accent-blue glow-text">Scalable</span> Digital Products
                    </h1>

                    <div className="text-xl md:text-2xl font-body text-slate-400 mb-8 h-16">
                        Expert in {" "}
                        <span className="text-white font-semibold">
                            <Typewriter
                                words={words}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>

                    <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
                        I build intuitive, high-performance interfaces and scalable web applications with a focus on seamless digital experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Magnetic>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Explore my work and case studies"
                                className="px-8 py-4 rounded-full bg-accent-blue text-white font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50"
                            >
                                Let&apos;s Build Your Product <ArrowRight size={20} />
                            </motion.a>
                        </Magnetic>
                        <Magnetic>
                            <motion.button
                                onClick={() => setIsResumeOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label="Download Manish's Resume"
                                className="px-8 py-4 rounded-full border border-slate-700 bg-slate-800/50 text-white font-bold flex items-center gap-2 hover:bg-slate-800 transition-all outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                            >
                                Download Resume <Download size={20} />
                            </motion.button>
                        </Magnetic>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <a
                            href="https://github.com/ManishGit93"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my GitHub profile"
                            className="text-slate-500 hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-blue p-2 rounded-lg"
                        >
                            <Github size={24} />
                        </a>
                        <div className="h-px w-12 bg-slate-800" />
                        <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                            SCROLL TO EXPLORE
                        </div>
                    </div>
                </motion.div>

                {/* Right side extra visual element for desktop */}
                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute top-0 right-0 glass px-6 py-4 rounded-2xl animate-float">
                            <div className="text-accent-blue font-bold text-2xl">5+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-tight">Years Exp.</div>
                        </div>
                        <div className="absolute bottom-10 left-0 glass px-6 py-4 rounded-2xl animate-float [animation-delay:1s]">
                            <div className="text-accent-purple font-bold text-2xl">5+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-tight">Products built</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isResumeOpen && (
                    <ResumeModal onClose={() => setIsResumeOpen(false)} />
                )}
            </AnimatePresence>
        </section>
    );
}
