"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8"
                >
                    <h1 className="text-9xl font-heading font-black text-white/5 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Lost in <span className="text-accent-blue">Space?</span></h2>
                    </div>
                </motion.div>

                <p className="text-slate-400 text-lg mb-12">
                    The page you are looking for doesn&apos;t exist or has been moved to a different orbit.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 bg-accent-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20"
                    >
                        <Home size={20} />
                        Back to Earth
                    </Link>
                </div>
            </div>
        </div>
    );
}
