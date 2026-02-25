"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

interface ResumeModalProps {
    onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl max-h-[90vh] glass rounded-[2.5rem] overflow-hidden flex flex-col border border-white/10 shadow-2xl"
            >
                {/* Header */}
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <div>
                        <h2 className="text-3xl font-heading font-bold glow-text">MANISH KUMAR</h2>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-2">
                            <span className="flex items-center gap-1"><MapPin size={12} /> Gurugram, Haryana</span>
                            <span className="flex items-center gap-1"><Phone size={12} /> 8860281526</span>
                            <span className="flex items-center gap-1"><Mail size={12} /> mkmanishkumar7366@gmail.com</span>
                            <span className="flex items-center gap-1"><Linkedin size={12} /> linkedin.com/in/manish</span>
                            <span className="flex items-center gap-1"><Github size={12} /> github.com/ManishGit93</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="p-3 glass rounded-full hover:bg-white/10 text-white transition-all"
                            onClick={() => window.print()}
                            title="Print/Download"
                        >
                            <Download size={20} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-3 glass rounded-full hover:bg-white/10 text-white transition-all shadow-lg"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 custom-scrollbar text-slate-300">
                    {/* Summary */}
                    <section>
                        <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-4 border-b border-accent-blue/30 pb-2">Summary</h3>
                        <p className="text-sm leading-relaxed">
                            Passionate Software Engineer with expertise in React.js, Next.js, and scalable web application development. Experienced in building intuitive, high-performance interfaces and integrating APIs. Strong problem-solving and collaboration skills, with a focus on crafting seamless digital experiences.
                        </p>
                    </section>

                    {/* Experience */}
                    <section>
                        <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 border-b border-accent-blue/30 pb-2">Experience</h3>

                        <div className="space-y-10">
                            {/* Salon India */}
                            <div>
                                <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="text-lg font-bold text-white">Salon India Technologies Pvt. Ltd</h4>
                                    <span className="text-accent-purple font-mono text-xs">Mar 2025 – Present</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-accent-blue font-medium text-sm italic">Software Engineer</p>
                                    <p className="text-slate-500 text-xs uppercase">Gurugram, HR</p>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-white text-xs font-bold mb-2 uppercase tracking-wider">— Project: Salon & Wellness Management SaaS</p>
                                        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                                            <li>Built responsive, modular interfaces for appointments, POS billing, memberships, CRM, and staff dashboards.</li>
                                            <li>Optimized API integration with caching and error handling to ensure smooth user experience.</li>
                                            <li>Developed role-based UI workflows (Admin, Manager, Staff, Front Desk) to streamline access control and operations.</li>
                                            <li>Created reusable design patterns and UI components to standardize visuals and accelerate development.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-bold mb-2 uppercase tracking-wider">— Project: SaintShop – Beauty & Salon E-Commerce Platform</p>
                                        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                                            <li>Built an e-commerce marketplace enabling buyers and sellers to trade salon and beauty products.</li>
                                            <li>Executed product listings, cart, checkout, order management, and payment gateway integrations.</li>
                                            <li>Enhanced UX with fast-loading product pages, smart filtering, and dynamic content rendering.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-bold mb-2 uppercase tracking-wider">— Project: HRMS – Human Resource Management System</p>
                                        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                                            <li>Enhanced modules for attendance tracking, leave requests, and employee dashboards.</li>
                                            <li>Built employer admin panels for leave approvals, attendance monitoring, and employee management.</li>
                                            <li>Applied responsive layouts and mobile-friendly dashboards for on-the-go HR access.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* GlobalAspirant */}
                            <div>
                                <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="text-lg font-bold text-white">GlobalAspirant Solutions Pvt. Ltd</h4>
                                    <span className="text-accent-purple font-mono text-xs">Nov 2023 – Oct 2024</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-accent-blue font-medium text-sm italic">Software Engineer</p>
                                    <p className="text-slate-500 text-xs uppercase">Gurugram, HR</p>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-white text-xs font-bold mb-2 uppercase tracking-wider">— Project: EasyCampus – Hiring Portal</p>
                                        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                                            <li>Expanded a comprehensive recruitment portal with Student, Corporate, and Campus modules.</li>
                                            <li>Enabled corporate end-to-end hiring: presentations, tests, and interviews.</li>
                                            <li>Built intuitive student interfaces for participation events and tests.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-bold mb-2 uppercase tracking-wider">— Project: Custom Meeting Application – Real-Time Collaboration Tool</p>
                                        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                                            <li>Designed a real-time meeting application with screen sharing, file sharing, and whiteboards.</li>
                                            <li>Executed secure authentication and end-to-end encryption for privacy.</li>
                                            <li>Utilized React, Node, WebRTC, and Tailwind for responsive design and smooth performance.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* EnsoLogic */}
                            <div>
                                <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="text-lg font-bold text-white">EnsoLogic E-Commerce Pvt. Ltd</h4>
                                    <span className="text-accent-purple font-mono text-xs">Apr 2022 – Oct 2023</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-accent-blue font-medium text-sm italic">Software Engineer</p>
                                    <p className="text-slate-500 text-xs uppercase">Gurugram, HR</p>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                                    <li>Enhanced responsive and dynamic web pages using React.js, Next.js, and Tailwind CSS.</li>
                                    <li>Collaborated with designers to translate concepts into reusable components.</li>
                                    <li>Integrated APIs and ensured data consistency across product catalogs.</li>
                                </ul>
                            </div>

                            {/* Mobisign */}
                            <div>
                                <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="text-lg font-bold text-white">Mobisign Services Pvt. Ltd</h4>
                                    <span className="text-accent-purple font-mono text-xs">Oct 2020 – Mar 2022</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-accent-blue font-medium text-sm italic">Software Engineer</p>
                                    <p className="text-slate-500 text-xs uppercase">Gurugram, HR</p>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                                    <li>Worked on MojoBoxx (IFE) system supporting offline media, shopping, and travel booking.</li>
                                    <li>Developed front-end modules, integrated REST APIs, and enhanced usability.</li>
                                </ul>
                            </div>

                            {/* Pacific Global */}
                            <div>
                                <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="text-lg font-bold text-white">Pacific Global Services</h4>
                                    <span className="text-accent-purple font-mono text-xs">Jan 2015 – Oct 2020</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-accent-blue font-medium text-sm italic">IT Executive</p>
                                    <p className="text-slate-500 text-xs uppercase">Noida, UP</p>
                                </div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-400">
                                    <li>Provided IT infrastructure support, troubleshooting, and system maintenance.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Skills & Education */}
                    <section className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-accent-blue/30 pb-2">Technical Skills</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-2 italic">Frontend</p>
                                    <p className="text-sm text-white">React.js, Next.js, Redux, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-2 italic">Backend & Databases</p>
                                    <p className="text-sm text-white">Node.js, Express.js, MySQL, MongoDB</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-2 italic">Tools</p>
                                    <p className="text-sm text-white">VS Code, Postman, MongoDB Compass, Git, Docker</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-accent-blue/30 pb-2">Education</h3>
                            <h4 className="text-white font-bold">B.Tech in Information Technology</h4>
                            <p className="text-sm text-accent-blue mt-1">Accurate Institute of Management and Technology</p>
                            <p className="text-xs text-slate-500 mt-1 uppercase">UPTU | Noida, UP</p>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="p-6 bg-white/5 border-t border-white/5 text-center text-[10px] text-slate-500 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Manish Kumar | Digital Portfolio v1.0
                </div>
            </motion.div>
        </div>
    );
}
