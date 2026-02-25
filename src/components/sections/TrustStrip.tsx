"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Years Experience", value: "5+", prefix: "" },
    { label: "Production SaaS Systems", value: "8", prefix: "+" },
    { label: "Real-Time Systems", value: "3", prefix: "+" },
    { label: "Architecture Expert", value: "99", prefix: "%" },
];

export default function TrustStrip() {
    return (
        <div className="py-12 border-y border-slate-800 bg-slate-900/30 backdrop-blur-sm relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center justify-center md:border-r border-slate-800 last:border-0"
                        >
                            <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 glow-text">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-semibold">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
