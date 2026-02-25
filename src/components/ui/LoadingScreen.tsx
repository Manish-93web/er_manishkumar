"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0B0F19] flex flex-col items-center justify-center p-6"
        >
            <div className="relative mb-12">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter uppercase"
                >
                    MANISH <span className="text-accent-blue">KUMAR</span>
                </motion.div>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute -bottom-2 left-0 h-1 bg-accent-blue"
                />
            </div>

            <div className="w-64 h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-accent-blue"
                    animate={{ width: `${progress}%` }}
                />
            </div>

            <div className="mt-4 text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
                Architecting Production SaaS {Math.round(progress)}%
            </div>
        </motion.div>
    );
}
