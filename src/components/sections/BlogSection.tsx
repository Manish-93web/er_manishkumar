"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const posts = [
    {
        title: "Building Scalable SaaS with Next.js 14",
        excerpt: "Exploring multi-tenant architecture, secure RBAC, and server-side state management for enterprise-scale systems.",
        date: "Feb 2024",
        readTime: "8 min read",
    },
    {
        title: "The Ultimate WebRTC Implementation Guide",
        excerpt: "Solving signaling resilience, turn/stun configurations, and low-latency P2P collaboration and screen sharing.",
        date: "Jan 2024",
        readTime: "12 min read",
    },
    {
        title: "Role-Based Architecture in Modern React",
        excerpt: "How to implement granular access control and component-level permissions in large-scale React applications.",
        date: "Dec 2023",
        readTime: "10 min read",
    },
];

export default function BlogSection() {
    return (
        <section id="blog" className="py-24 bg-slate-900/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">Thought Leadership</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">Engineering <span className="text-white brightness-125">Insights</span></h3>
                        <p className="text-slate-500">Sharing lessons learned while building mission-critical products.</p>
                    </div>
                    <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="hidden md:flex items-center gap-2 text-white font-bold group"
                    >
                        All Articles <ArrowRight size={20} className="text-accent-blue group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border-white/5 hover:neon-border transition-all flex flex-col h-full group"
                        >
                            <div className="flex items-center gap-3 text-slate-500 text-xs mb-6 uppercase tracking-widest font-bold">
                                <BookOpen size={14} />
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h4 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-accent-blue transition-colors leading-tight">
                                {post.title}
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                                {post.excerpt}
                            </p>
                            <a href="#" className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest hover:text-accent-blue transition-colors mt-auto">
                                Read Article <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
