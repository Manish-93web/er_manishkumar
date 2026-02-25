"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Code2, GitBranch, Star, GitFork } from "lucide-react";

const stats = [
    { label: "Contributions", value: "1,200+" },
    { label: "Repositories", value: "45" },
    { label: "Stars", value: "120" },
    { label: "Pull Requests", value: "85" },
];

export default function GitHubSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">Open Source</h2>
                        <h3 className="text-4xl font-heading font-bold mb-8">Engineering <span className="text-white brightness-125">Transparency</span></h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            I believe in building in public. My GitHub activity isn&apos;t just about green squares; it&apos;s about contributing to the ecosystem that empowers my work. From building internal tools for production SaaS to contributing to open-source libraries, transparency is core to my engineering philosophy.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="glass p-6 rounded-2xl border-white/5 group hover:neon-border transition-all">
                                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">{stat.value}</div>
                                    <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="https://github.com"
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full border border-slate-700 hover:bg-slate-800 text-white font-bold transition-all"
                        >
                            Follow on GitHub <Github size={20} />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-[2.5rem] border-white/5 relative bg-slate-900/40"
                    >
                        {/* Visual representation of contribution graph / featured repo */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-accent-blue/20 rounded-xl">
                                <Code2 className="text-accent-blue" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Featured Repository</h4>
                                <p className="text-slate-500 text-xs">saas-architecture-kit</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-4 bg-slate-800/30 rounded-xl border border-white/5">
                                <p className="text-slate-300 text-sm mb-4 font-mono">
                                    A comprehensive kit for building multi-tenant SaaS applications with Next.js 14 and RBAC.
                                </p>
                                <div className="flex gap-4 text-slate-500 text-xs">
                                    <span className="flex items-center gap-1"><Star size={14} /> 45 Stars</span>
                                    <span className="flex items-center gap-1"><GitFork size={14} /> 12 Forks</span>
                                    <span className="flex items-center gap-1"><GitBranch size={14} /> Main</span>
                                </div>
                            </div>

                            {/* Mock contribution dots */}
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Contribution Philosophy</p>
                                <div className="grid grid-cols-12 gap-2">
                                    {Array.from({ length: 48 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`aspect-square rounded-[2px] ${i % 7 === 0 ? "bg-accent-blue" :
                                                    i % 5 === 0 ? "bg-blue-900" :
                                                        "bg-slate-800"
                                                } opacity-60 hover:opacity-100 transition-opacity`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
