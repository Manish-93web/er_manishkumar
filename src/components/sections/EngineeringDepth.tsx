"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Zap, Shield, Repeat, Users, Code2 } from "lucide-react";

const expertise = [
    {
        title: "Frontend Architecture",
        icon: <Layers className="text-accent-blue" />,
        description: "Designing modular, feature-based folder structures that scale with hundreds of components while maintaining strict data isolation and clean abstractions."
    },
    {
        title: "Performance Profiling",
        icon: <Zap className="text-accent-blue" />,
        description: "Diagnosing and fixing LCP/CLS issues using Chrome DevTools. Implementing memoization strategies, custom hooks, and efficient bundle splitting."
    },
    {
        title: "Real-Time Systems",
        icon: <Shield className="text-accent-blue" />,
        description: "Deep experience with WebRTC and WebSockets for low-latency synchronization, end-to-end encryption, and robust ICE candidate handling."
    },
    {
        title: "System Design",
        icon: <Code2 className="text-accent-blue" />,
        description: "Collaborating on API design, database schemas, and multi-tenant security layers to ensure frontend-to-backend alignment."
    },
    {
        title: "Mentorship & Lead",
        icon: <Users className="text-accent-blue" />,
        description: "Guiding junior engineers, conducting thorough code reviews, and establishing engineering standards across frontend teams."
    },
    {
        title: "Scalable SaaS",
        icon: <Repeat className="text-accent-blue" />,
        description: "Building multi-tenant dashboards with dynamic role-based rendering and complex state transitions using Redux and Next.js."
    },
];

export default function EngineeringDepth() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">Core Competencies</h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold">The Engineering <span className="text-white brightness-125">Depth</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertise.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 glass border border-white/10 rounded-3xl hover:neon-border transition-all group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
