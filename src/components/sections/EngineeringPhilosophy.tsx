"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Puzzle, Code2, Users2, ShieldCheck, TrendingUp } from "lucide-react";

const principles = [
    {
        icon: <Zap className="text-accent-blue" />,
        title: "Performance First",
        description: "Optimizing for under 2s LCP and 60fps animations. Speed isn't just a feature; it's the foundation of user trust."
    },
    {
        icon: <Puzzle className="text-accent-purple" />,
        title: "Product Thinking",
        description: "I build with the business goal in mind. Code is a tool to solve user problems and drive business growth."
    },
    {
        icon: <Code2 className="text-accent-blue" />,
        title: "Clean Architecture",
        description: "Modular, testable, and maintainable. I write code that other engineers love to work on and scale."
    },
    {
        icon: <Users2 className="text-accent-purple" />,
        title: "User-Centered",
        description: "Accessibility and intuitive UX are non-negotiables. If a user can't use it easily, the code doesn't matter."
    },
    {
        icon: <ShieldCheck className="text-accent-blue" />,
        title: "Security & Resilience",
        description: "Implementing robust error handling and secure-by-default patterns to ensure system integrity."
    },
    {
        icon: <TrendingUp className="text-accent-purple" />,
        title: "Growth Mindset",
        description: "Continuous learning and adaptation. I leverage modern tools to solve tomorrow's challenges."
    }
];

export default function EngineeringPhilosophy() {
    return (
        <section id="philosophy" className="py-24 relative overflow-hidden bg-slate-900/20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4"
                    >
                        The Philosophy
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-8"
                    >
                        Thinking in <span className="text-white brightness-125">Systems</span>, Not Just Components
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg leading-relaxed"
                    >
                        My engineering approach is rooted in the belief that great software is the intersection of rigorous technical discipline and deep empathy for the end user.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {principles.map((principle, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 glass rounded-[2rem] border border-white/5 hover:neon-border transition-all group"
                        >
                            <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {principle.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4">{principle.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {principle.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Differentiator Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 glass rounded-[2.5rem] border border-accent-blue/20 bg-accent-blue/5 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-transparent pointer-events-none" />
                    <h4 className="text-2xl font-bold mb-4">Why hire me?</h4>
                    <p className="text-slate-400 max-w-2xl mx-auto italic">
                        &quot;I bring the reliability of infrastructure engineering to the agility of product development. I don&apos;t just ship features; I scale digital ecosystems.&quot;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
