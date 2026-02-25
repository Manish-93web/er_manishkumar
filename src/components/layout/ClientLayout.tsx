"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <LoadingScreen key="loader" onFinish={() => setIsLoading(false)} />
            ) : (
                <React.Fragment key="main-content">
                    <CustomCursor />
                    <SmoothScroll>
                        {children}
                    </SmoothScroll>
                </React.Fragment>
            )}
        </AnimatePresence>
    );
}
