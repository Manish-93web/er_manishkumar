"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class GlobalErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[400px] w-full flex flex-col items-center justify-center p-8 text-center glass rounded-3xl border border-red-500/20">
                    <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                        <AlertCircle className="text-red-500" size={32} />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Component Crashed</h2>
                    <p className="text-slate-400 text-sm mb-6 max-w-md">
                        An isolated component error occurred. The rest of the page remains functional.
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-all text-sm border border-slate-700"
                    >
                        <RefreshCcw size={18} />
                        Reset Component
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default GlobalErrorBoundary;
