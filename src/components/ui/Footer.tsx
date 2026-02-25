"use client";

import React from "react";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-slate-800 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-2xl font-heading font-bold glow-text tracking-tighter">
                            MANISH <span className="text-accent-blue">KUMAR</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                            Building scalable SaaS and product-driven web applications with mission-critical performance.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <a
                            href="https://x.com/Manishkuma63058"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Manish's X (Twitter) profile"
                            className="text-slate-400 hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent-blue p-1 rounded"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" /></svg>
                        </a>
                        <a
                            href="https://instagram.com/i_amerkumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Manish's Instagram profile"
                            className="text-slate-400 hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent-blue p-1 rounded"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/manish"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Manish's LinkedIn profile"
                            className="text-slate-400 hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent-blue p-1 rounded"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/ManishGit93"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Manish's GitHub profile"
                            className="text-slate-400 hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent-blue p-1 rounded"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="mailto:mkmanishkumar7366@gmail.com"
                            aria-label="Send an email to Manish"
                            className="text-slate-400 hover:text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent-blue p-1 rounded"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    <div className="text-slate-500 text-sm flex items-center gap-2">
                        <span>Built with</span>
                        <Heart size={14} className="text-rose-500 fill-rose-500" />
                        <span>using Next.js 14</span>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs uppercase tracking-widest font-bold">
                        &copy; {new Date().getFullYear()} Manish Kumar. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" aria-label="Privacy Policy" className="text-slate-600 hover:text-slate-400 text-xs uppercase tracking-widest font-bold outline-none focus-visible:ring-2 focus-visible:ring-slate-500 p-1 rounded">Privacy</a>
                        <a href="#" aria-label="Terms of Service" className="text-slate-600 hover:text-slate-400 text-xs uppercase tracking-widest font-bold outline-none focus-visible:ring-2 focus-visible:ring-slate-500 p-1 rounded">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
