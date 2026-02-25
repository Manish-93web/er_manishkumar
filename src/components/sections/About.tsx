"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Layout } from "lucide-react";

const timeline = [
    {
        year: "2025 - Present",
        title: "Software Engineer",
        company: "Salon India Technologies",
        description: "Architecting the Salon & Wellness SaaS, SaintShop Marketplace, and HRMS. Focus on role-based CRM, POS billing, and marketplace scalability.",
        icon: <Briefcase className="text-accent-blue" />,
    },
    {
        year: "2023 - 2024",
        title: "Software Engineer",
        company: "GlobalAspirant Solutions",
        description: "Expanded the EasyCampus hiring portal and built a real-time WebRTC meeting application with E2E encryption.",
        icon: <Briefcase className="text-accent-purple" />,
    },
    {
        year: "2022 - 2023",
        title: "Software Engineer",
        company: "EnsoLogic E-Commerce",
        description: "Developed reusable UI systems for product catalogs and integrated complex API infrastructures for e-commerce.",
        icon: <Briefcase className="text-accent-blue" />,
    },
    {
        year: "2020 - 2022",
        title: "Software Engineer",
        company: "Mobisign Services",
        description: "Mastered React.js by building MojoBoxx (IFE), an inflight entertainment system with offline media and booking support.",
        icon: <Briefcase className="text-accent-purple" />,
    },
    {
        year: "2015 - 2020",
        title: "IT Executive",
        company: "Pacific Global Services",
        description: "Built a solid technical foundation in IT infrastructure, troubleshooting, and enterprise system maintenance.",
        icon: <Layout className="text-slate-500" />,
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left: Storytelling */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">
                            Our Journey
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                            A <span className="text-white brightness-125">10-Year Journey</span> from Infrastructure to Product Engineering
                        </h3>
                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                            <p>
                                My career spans a decade of technical evolution. Starting in 2015 as an IT Executive, I spent five years mastering the foundational aspects of enterprise infrastructure—troubleshooting, system maintenance, and network stability.
                            </p>
                            <p>
                                In 2020, I pivoted to Software Engineering, bringing that "infrastructure-first" mindset into the world of code. Over the last <strong>5+ years</strong>, I have specialized in building scalable, real-world SaaS platforms with clean architecture and performance-first engineering.
                            </p>
                            <p>
                                Today, I bridge the gap between complex backend logic and intuitive frontend systems, ensuring that every product I build is not only visually stunning but technically resilient.
                            </p>
                        </div>

                        <div className="mt-10 p-6 glass rounded-2xl border-l-4 border-accent-blue">
                            <p className="text-white font-medium italic">
                                &quot;I don&apos;t just write code; I build solutions that scale businesses.&quot;
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Timeline */}
                    <div className="relative">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-30" />

                        <div className="space-y-12">
                            {timeline.map((event, i) => (
                                <motion.div
                                    key={event.year}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative flex items-center ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                        }`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-blue shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"
                                        }`}>
                                        <div className="glass p-6 rounded-2xl hover:neon-border transition-all group cursor-default">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="text-2xl">{event.icon}</div>
                                                <div className="text-accent-blue font-heading font-bold text-lg">
                                                    {event.year}
                                                </div>
                                            </div>
                                            <h4 className="text-white font-bold text-xl mb-1 group-hover:text-accent-blue transition-colors">
                                                {event.title}
                                            </h4>
                                            <p className="text-accent-purple font-medium text-sm mb-4">
                                                {event.company}
                                            </p>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
