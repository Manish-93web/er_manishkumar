"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { RefreshCcw, AlertCircle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center border border-red-500/20">
                        <AlertCircle className="text-red-500" size={40} />
                    </div>
                </motion.div>

                <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Something Went <span className="text-red-500">Skewed</span></h1>
                <p className="text-slate-400 text-lg mb-12 italic">
                    &quot;{error.message || "An unexpected system fault occurred. Our engineering team has been notified."}&quot;
                </p>

                <button
                    onClick={() => reset()}
                    className="flex items-center gap-2 mx-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold transition-all border border-slate-700"
                >
                    <RefreshCcw size={20} />
                    Attempt Recovery
                </button>
            </div>
        </div>
    );
}
