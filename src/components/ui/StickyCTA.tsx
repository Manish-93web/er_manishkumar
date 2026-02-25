"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-8 right-8 z-[60] hidden md:block"
                >
                    <a
                        href="#contact"
                        aria-label="Let's build your product - Contact Manish"
                        className="group flex items-center gap-3 bg-accent-blue hover:bg-blue-600 text-white px-6 py-4 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all"
                    >
                        <div className="relative">
                            <MessageSquare size={20} />
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-accent-blue animate-pulse" />
                        </div>
                        <span className="font-bold whitespace-nowrap">Let&apos;s Build Your Product</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
