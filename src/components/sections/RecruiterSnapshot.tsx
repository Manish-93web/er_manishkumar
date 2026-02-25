"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Laptop, GraduationCap, Layout, Cpu } from "lucide-react";
import ResumeModal from "../ui/ResumeModal";

const stats = [
    { icon: <Briefcase className="text-accent-blue" />, label: "Experience", value: "5+ Years" },
    { icon: <MapPin className="text-accent-blue" />, label: "Location", value: "Gurugram, India" },
    { icon: <Laptop className="text-accent-blue" />, label: "Availability", value: "Remote / Hybrid" },
    { icon: <Layout className="text-accent-blue" />, label: "Focus", value: "Product Engineering" },
    { icon: <Cpu className="text-accent-blue" />, label: "Core Stack", value: "React & Node.js" },
    { icon: <GraduationCap className="text-accent-blue" />, label: "Education", value: "B.Tech CSE" },
];

export default function RecruiterSnapshot() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto glass border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Decorative Gradient */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[100px] -z-10" />

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">Quick Snapshot</h2>
                            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Recruiter-Friendly <span className="text-white brightness-125">Overview</span></h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                Engineering high-performance products with a focus on scalability, maintainability, and exceptional user experiences. Currently seeking senior-level opportunities in product-centric organizations.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 rounded-xl bg-accent-blue text-white font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
                                >
                                    Get In Touch
                                </a>
                                <button
                                    className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/30 text-white font-bold text-sm hover:bg-slate-800 transition-all"
                                    onClick={() => setIsResumeOpen(true)}
                                >
                                    Quick Resume
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:neon-border transition-all group"
                                >
                                    <div className="mb-3 transform group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                                    <p className="text-white font-bold text-sm">{stat.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {isResumeOpen && (
                    <ResumeModal onClose={() => setIsResumeOpen(false)} />
                )}
            </AnimatePresence>
        </section>
    );
}
