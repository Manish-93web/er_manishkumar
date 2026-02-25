"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
    useReportWebVitals((metric) => {
        // In a real production app, you would send this to your analytics endpoint
        // (e.g., Google Analytics, Vercel Analytics, or a custom backend)
        if (process.env.NODE_ENV === "development") {
            console.log(`[Web Vitals] ${metric.name}:`, Math.round(metric.value * 100) / 100);
        }
    });

    return null;
}
