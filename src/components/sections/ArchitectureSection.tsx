"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, GitBranch, Share2, ShieldCheck, Box, Workflow } from "lucide-react";

const pillars = [
    {
        title: "Modular Feature-First",
        icon: <Box className="text-accent-blue" />,
        description: "Organizing code by feature rather than type. Each module is self-contained with its own components, logic, and types, reducing cross-cutting dependency hell."
    },
    {
        title: "Predictable State Management",
        icon: <Share2 className="text-accent-blue" />,
        description: "Utilizing Redux Toolkit or Zustand for global state, paired with React Query for server state. Ensuring a single source of truth with immutable updates."
    },
    {
        title: "Performance First",
        icon: <Workflow className="text-accent-blue" />,
        description: "Aggressive code splitting, partial hydration strategies with Next.js, and meticulous memoization of expensive computations to maintain 60fps."
    },
    {
        title: "Type Safety & Quality",
        icon: <ShieldCheck className="text-accent-blue" />,
        description: "Strict TypeScript configurations, rigorous ESLint rules, and automated unit testing to catch bugs before they reach production."
    }
];

export default function ArchitectureSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">The Methodology</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Architecting for <span className="text-white brightness-125">Scale</span></h3>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            I don&apos;t just write code; I design systems. My architecture focuses on long-term maintainability, developer productivity, and uncompromising performance.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {pillars.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6"
                                >
                                    <div className="shrink-0 w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent-blue">
                                        {pillar.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">{pillar.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="aspect-square glass border border-white/10 rounded-[3rem] p-8 relative overflow-hidden flex items-center justify-center">
                            {/* Decorative Architecture Diagram Mockup */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-50" />

                            <div className="relative w-full space-y-4">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 ml-12 border-l-4 border-l-accent-blue"
                                >
                                    <Code2 size={24} className="text-accent-blue" />
                                    <div className="text-sm font-bold">Feature Modules</div>
                                </motion.div>

                                <div className="h-8 w-px bg-white/10 ml-20" />

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 mr-12 border-r-4 border-r-purple-500"
                                >
                                    <Share2 size={24} className="text-purple-500" />
                                    <div className="text-sm font-bold">Centralized Store</div>
                                </motion.div>

                                <div className="h-8 w-px bg-white/10 ml-20" />

                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 ml-12 border-l-4 border-l-emerald-500"
                                >
                                    <ShieldCheck size={24} className="text-emerald-500" />
                                    <div className="text-sm font-bold">Security & Auth Layer</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
