"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls, PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { useInView } from "framer-motion";

const technologies = [
    "React", "Next.js", "TypeScript", "Node.js",
    "MongoDB", "WebRTC", "Docker", "Tailwind",
    "GSAP", "Three.js", "Redux", "Express",
    "Git", "Postman", "AWS", "Vercel"
];

function TechWord({ word, position }: { word: string; position: THREE.Vector3 }) {
    const textRef = useRef<THREE.Mesh>(null!);

    useFrame(({ camera }) => {
        // Make text always face the camera
        if (textRef.current) {
            textRef.current.quaternion.copy(camera.quaternion);
        }
    });

    return (
        <Text
            ref={textRef}
            position={position}
            fontSize={0.4}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
        >
            {word}
        </Text>
    );
}

function Cloud({ radius = 5 }) {
    const words = useMemo(() => {
        const temp = [];
        const phiSpan = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < technologies.length; i++) {
            const y = 1 - (i / (technologies.length - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y) * radius;
            const phi = i * phiSpan;
            const x = Math.cos(phi) * radiusAtY;
            const z = Math.sin(phi) * radiusAtY;
            temp.push([new THREE.Vector3(x, y * radius, z), technologies[i]]);
        }
        return temp;
    }, [radius]);

    const groupRef = useRef<THREE.Group>(null!);
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={groupRef}>
            {words.map(([pos, word], i) => (
                <TechWord key={i} word={word as string} position={pos as THREE.Vector3} />
            ))}
        </group>
    );
}

export default function TechSphere() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.1 });
    const [dpr, setDpr] = useState(1);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setIsMobile(window.innerWidth < 768);
    }, []);

    if (!isMounted) return <div className="h-[600px]" />;

    return (
        <section ref={containerRef} className="py-24 relative h-[650px] flex flex-col items-center bg-slate-900/10">
            <div className="container mx-auto px-6 text-center mb-8 shrink-0">
                <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">The Stack</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold">Interactive <span className="text-white brightness-125">Technology Globe</span></h3>
                <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
                    A visualization of my core technical stack and language expertise.
                </p>
            </div>

            <div className="flex-1 w-full cursor-grab active:cursor-grabbing relative">
                {isInView ? (
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center text-slate-500 font-medium">
                            Initialising Core...
                        </div>
                    }>
                        <Canvas
                            camera={{ position: [0, 0, 10], fov: 60 }}
                            dpr={dpr}
                            gl={{ antialias: false, alpha: true }}
                        >
                            <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <Cloud radius={isMobile ? 4.5 : 6} />
                            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                        </Canvas>
                    </Suspense>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-700">
                        {/* More visible placeholder */}
                        <div className="grid grid-cols-4 gap-8 opacity-40">
                            {technologies.slice(0, 16).map((t, i) => (
                                <span key={i} className="text-sm font-bold uppercase tracking-widest">{t}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="shrink-0 mt-8 text-slate-500 text-xs tracking-widest uppercase flex items-center gap-4">
                <span className="w-8 h-px bg-slate-800" />
                Drag to rotate stack
                <span className="w-8 h-px bg-slate-800" />
            </div>
        </section>
    );
}
