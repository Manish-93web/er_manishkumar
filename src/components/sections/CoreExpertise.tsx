"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, ShoppingCart, Video, Zap, Box } from "lucide-react";

const expertises = [
    {
        title: "SaaS Architecture",
        description: "Designing multi-tenant systems with robust role-based access control and high availability.",
        icon: <Server className="w-8 h-8 text-blue-400" />,
    },
    {
        title: "Scalable UI Systems",
        description: "Building production-grade component libraries focusing on performance and atomic design.",
        icon: <Layout className="w-8 h-8 text-purple-400" />,
    },
    {
        title: "E-Commerce Marketplaces",
        description: "Developing complex multi-vendor platforms with secure payment gateways and smart logistics.",
        icon: <ShoppingCart className="w-8 h-8 text-emerald-400" />,
    },
    {
        title: "Real-Time WebRTC",
        description: "Implementing low-latency collaboration tools, screen sharing, and secure WebRTC connections.",
        icon: <Video className="w-8 h-8 text-orange-400" />,
    },
    {
        title: "Performance Tuning",
        description: "Optimizing frontend vitals to achieve Lighthouse scores of 90+ and seamless UX.",
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {
        title: "Enterprise Dashboards",
        description: "Creating data-intensive analytical dashboards with real-time updates and interactive charts.",
        icon: <Box className="w-8 h-8 text-pink-400" />,
    },
];

export default function CoreExpertise() {
    return (
        <section id="expertise" className="py-24 bg-slate-900/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4"
                    >
                        Core Capabilities
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-heading font-bold"
                    >
                        More Than Just <span className="text-accent-blue">Code</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 mt-6 max-w-2xl mx-auto"
                    >
                        I specialize in architecting scalable solutions that solve real business problems, focusing on performance, security, and developer experience.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertises.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{
                                rotateX: 5,
                                rotateY: 5,
                                translateZ: 20,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="glass p-8 rounded-3xl hover:border-accent-blue/50 transition-all duration-300 group relative"
                        >
                            <div className="mb-6 p-3 bg-slate-800/50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-accent-blue transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-slate-400 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Decorative corner accent */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-accent-blue/30 transition-all" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-accent-blue/30 transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
