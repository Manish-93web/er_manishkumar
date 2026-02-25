"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Alex Thompson",
        role: "Founder, Stealth Startup",
        content: "Manish didn't just build our MVP; he architected it for scale. His understanding of multi-tenant SaaS is what truly sets him apart from other developers we interviewed.",
    },
    {
        name: "Sarah Chen",
        role: "CTO, FinTech Solutions",
        content: "The WebRTC implementation Manish delivered was flawless. Low latency, secure, and incredibly well-documented. He is a Product Engineer in the truest sense.",
    },
    {
        name: "David Miller",
        role: "Product Manager, SaintShop",
        content: "Manish's focus on performance optimization helped us achieve a sub-2s load time on our marketplace, directly impacting our conversion rates positively.",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="py-24 bg-slate-900/10 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <Quote className="w-12 h-12 text-accent-blue/40 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-heading font-bold">Trusted by <span className="text-accent-blue">Industry Leaders</span></h2>
                </div>

                <div className="max-w-4xl mx-auto relative px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="glass p-10 md:p-16 rounded-[2rem] text-center border-white/5"
                        >
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 italic">
                                &quot;{testimonials[current].content}&quot;
                            </p>
                            <div>
                                <h4 className="text-white font-bold text-lg">{testimonials[current].name}</h4>
                                <p className="text-accent-blue font-medium text-sm mt-1">{testimonials[current].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:bg-white/10 transition-colors text-white"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:bg-white/10 transition-colors text-white"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="flex justify-center gap-3 mt-10">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2 h-2 rounded-full transition-all ${current === i ? "w-8 bg-accent-blue" : "bg-slate-700"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
