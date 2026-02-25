"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#3B82F6", "#8B5CF6", "#ffffff"]
            });
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">Let&apos;s Connect</h2>
                        <h3 className="text-4xl md:text-6xl font-heading font-bold mb-8 italic">Let&apos;s Build Something <span className="text-accent-blue">Scalable</span></h3>
                        <p className="text-slate-400 text-lg mb-12 max-w-md">
                            I&apos;m currently open to new opportunities and collaborations on high-impact SaaS products and real-time systems.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 glass rounded-2xl group-hover:neon-border transition-all">
                                    <Mail className="text-accent-blue" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Email</p>
                                    <p className="text-white font-medium">mkmanishkumar7366@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 glass rounded-2xl group-hover:neon-border transition-all">
                                    <Phone className="text-accent-purple" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Phone</p>
                                    <p className="text-white font-medium">+91 8860281526</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 glass rounded-2xl group-hover:neon-border transition-all">
                                    <MapPin className="text-accent-purple" />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Location</p>
                                    <p className="text-white font-medium">Gurugram, Haryana, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 flex gap-6">
                            {[
                                { icon: <Github />, href: "https://github.com/ManishGit93", label: "GitHub Profile" },
                                { icon: <Linkedin />, href: "https://linkedin.com/in/manish", label: "LinkedIn Profile" },
                                {
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" /></svg>,
                                    href: "https://x.com/Manishkuma63058",
                                    label: "X (Twitter) Profile"
                                },
                                { icon: <Instagram />, href: "https://instagram.com/i_amerkumar", label: "Instagram Profile" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit Manish's ${social.label}`}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="p-4 glass rounded-2xl text-slate-400 hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative"
                    >
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                role="status"
                                aria-live="polite"
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-slate-900/90 backdrop-blur-md rounded-[2.5rem] z-20"
                            >
                                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                                    <Send size={40} />
                                </div>
                                <h4 className="text-3xl font-heading font-bold mb-4">Message Sent!</h4>
                                <p className="text-slate-400">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                            </motion.div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="full-name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        required
                                        id="full-name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all text-white placeholder:text-slate-600 outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        required
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all text-white placeholder:text-slate-600 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Project Brief / Message</label>
                                <textarea
                                    required
                                    id="message"
                                    rows={5}
                                    placeholder="Tell me about your product vision..."
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all text-white placeholder:text-slate-600 resize-none outline-none"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === "sending"}
                                aria-label={status === "sending" ? "Sending your message" : "Send message to Manish"}
                                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all outline-none focus:ring-4 focus:ring-blue-500/50 ${status === "sending" ? "bg-slate-700" : "bg-accent-blue hover:bg-blue-600 shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                                    }`}
                            >
                                {status === "sending" ? "Dispatching..." : "Send Message"} <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
