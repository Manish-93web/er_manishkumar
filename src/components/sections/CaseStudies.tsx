"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";

const projects = [
    {
        id: "salon-saas",
        title: "Salon & Wellness SaaS",
        category: "SaaS Platform",
        description: "A comprehensive management system for the beauty and wellness industry, featuring appointment booking, POS billing, and staff dashboards.",
        problem: "Inefficient manual booking and fragmented operational data for salon owners.",
        solution: "Architected a multi-tenant SaaS with role-based UI workflows and optimized API integrations using caching.",
        impact: "Streamlined operational workflows across Admin, Staff, and Front Desk roles.",
        tech: ["Next.js", "Redux", "Tailwind", "Node.js", "MongoDB"],
        link: "#",
        highlights: ["POS Billing", "CRM Intelligence", "Role-Based UI"]
    },
    {
        id: "saintshop",
        title: "SaintShop Marketplace",
        category: "E-Commerce",
        description: "A beauty-focused multi-vendor marketplace enabling seamless buyer-seller trading with dynamic content rendering.",
        problem: "Need for a fast-loading, dynamic marketplace for salon products with smart filtering.",
        solution: "Implemented product listings, cart, and payment gateway integrations with enhanced performance optimization.",
        impact: "High-performance interface with optimized product rendering and checkout flows.",
        tech: ["React", "Next.js", "Tailwind", "REST APIs", "Payment Gateway"],
        link: "#",
        highlights: ["Multi-vendor Setup", "Smart Filtering", "Performance First"]
    },
    {
        id: "easycampus",
        title: "EasyCampus Portal",
        category: "Hiring Platform",
        description: "A comprehensive recruitment portal with specialized Student, Corporate, and Campus modules.",
        problem: "Disconnected hiring processes between students, colleges, and corporate recruiters.",
        solution: "Built a full-cycle hiring process enabling presentations, skill tests, and interview management.",
        impact: "Digitized end-to-end recruitment for educational institutions.",
        tech: ["React.js", "Redux", "Node.js", "Tailwind CSS"],
        link: "#",
        highlights: ["Full-Cycle Hiring", "Modular Architecture", "Recruitment Analytics"]
    },
    {
        id: "meeting-app",
        title: "WebRTC Meeting Application",
        category: "Collaboration",
        description: "A real-time tool featuring screen sharing, file sharing, and collaborative whiteboards with E2E encryption.",
        problem: "Need for secure, low-latency collaboration without relying on 3rd party video services.",
        solution: "Utilized WebRTC for P2P communication and implemented secure end-to-end encryption.",
        impact: "Secure, low-latency real-time collaboration for distributed teams.",
        tech: ["React.js", "Node.js", "WebRTC", "Socket.io"],
        link: "#",
        highlights: ["Screen Sharing", "Whiteboard Sync", "E2E Encryption"]
    },
    {
        id: "mojoboxx",
        title: "MojoBoxx (IFE)",
        category: "Entertainment",
        description: "Inflight entertainment system (IFE) supporting offline media, shopping, and travel booking.",
        problem: "Delivering high-quality streaming and shopping experiences in no-internet environments.",
        solution: "Developed offline-first frontend modules and integrated REST APIs for local media management.",
        impact: "Seamless IFE experience for air travelers in offline settings.",
        tech: ["React.js", "API Integration", "Offline-First", "CSS"],
        link: "#",
        highlights: ["Offline Streaming", "Shopping Logic", "REST Integration"]
    }
];

export default function CaseStudies() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4"
                        >
                            Featured Work
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-heading font-bold"
                        >
                            Strategic <span className="text-white brightness-125">Case Studies</span>
                        </motion.h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <p className="text-slate-500 mb-2">Want to see more?</p>
                        <a
                            href="https://github.com/ManishGit93"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View more projects on Manish's GitHub profile"
                            className="text-accent-blue font-bold flex items-center gap-2 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-accent-blue p-1 rounded"
                        >
                            Visit GitHub <Github size={18} />
                        </a>
                    </motion.div>
                </div>

                <div className="space-y-32">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20`}
                        >
                            {/* Project Preview (Left/Right) */}
                            <div className="lg:w-1/2 group">
                                <div className="aspect-[16/10] glass rounded-3xl overflow-hidden relative border border-white/5 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-40 group-hover:opacity-60 transition-opacity" />
                                    {/* Placeholder for project image/animation */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-heading text-xl">
                                        {project.title} Preview
                                    </div>

                                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                        <div className="flex gap-4">
                                            <button
                                                aria-label={`View live demo of ${project.title}`}
                                                className="px-5 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none"
                                            >
                                                Demo
                                            </button>
                                            <button
                                                aria-label={`View details of ${project.title}`}
                                                className="px-5 py-2 glass rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none"
                                            >
                                                Details
                                            </button>
                                        </div>
                                        <div className="flex gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-[10px] bg-white/10 px-2 py-1 rounded-md text-slate-300">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info (Right/Left) */}
                            <div className="lg:w-1/2 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue rounded-full text-xs font-bold uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <div className="h-px flex-1 bg-slate-800" />
                                </div>

                                <h4 className="text-3xl md:text-4xl font-heading font-bold mb-6 hover:text-accent-blue transition-colors cursor-default">
                                    {project.title}
                                </h4>

                                <p className="text-slate-400 text-lg mb-8 leading-relaxed italic">
                                    &quot;{project.description}&quot;
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="text-accent-blue">#</span> Problem
                                        </h5>
                                        <p className="text-slate-500 text-sm leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="text-accent-purple">#</span> Business Impact
                                        </h5>
                                        <p className="text-slate-500 text-sm leading-relaxed">{project.impact}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-10">
                                    {project.highlights.map(h => (
                                        <div key={h} className="flex items-center gap-3 text-slate-300">
                                            <CheckCircle2 size={18} className="text-emerald-500" />
                                            <span className="text-sm font-medium">{h}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6">
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        aria-label={`Read full case study for ${project.title}`}
                                        className="text-white font-bold flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-accent-blue p-1 rounded"
                                    >
                                        Case Study <ArrowRight size={20} className="text-accent-blue group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.link}
                                            aria-label={`${project.title} GitHub Repository`}
                                            className="p-2 glass rounded-full text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue outline-none"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.link}
                                            aria-label={`${project.title} Live Site`}
                                            className="p-2 glass rounded-full text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue outline-none"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
