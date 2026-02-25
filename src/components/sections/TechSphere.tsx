"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense, lazy } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, OrbitControls, PerformanceMonitor } from "@react-three/drei";
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
        textRef.current.quaternion.copy(camera.quaternion);
    });

    return (
        <Text
            ref={textRef}
            position={position}
            fontSize={0.4}
            color="white"
            font="/fonts/SpaceGrotesk-Bold.ttf"
            anchorX="center"
            anchorY="middle"
        >
            {word}
        </Text>
    );
}

function Cloud({ count = 20, radius = 5 }) {
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
    useFrame((state) => {
        groupRef.current.rotation.y += 0.005;
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <section ref={containerRef} className="py-24 relative h-[600px] flex flex-col items-center">
            <div className="container mx-auto px-6 text-center mb-12">
                <h2 className="text-sm font-semibold text-accent-blue uppercase tracking-[0.2em] mb-4">The Stack</h2>
                <h3 className="text-4xl font-heading font-bold">Interactive <span className="text-white brightness-125">Technology Globe</span></h3>
            </div>

            <div className="w-full h-full cursor-grab active:cursor-grabbing">
                {isInView ? (
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center text-slate-500 font-medium">
                            Initialising Core...
                        </div>
                    }>
                        <Canvas
                            camera={{ position: [0, 0, 10], fov: 60 }}
                            dpr={dpr}
                            gl={{ antialias: !isMobile }}
                        >
                            <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(2)} />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} />
                            <Cloud radius={isMobile ? 4 : 6} />
                            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                        </Canvas>
                    </Suspense>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-700">
                        {/* Static Placeholder for Performance */}
                        <div className="grid grid-cols-4 gap-4 opacity-20 filter blur-sm">
                            {technologies.slice(0, 12).map((t, i) => (
                                <span key={i} className="text-xl font-bold">{t}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute bottom-10 text-slate-500 text-sm animate-pulse">
                Drag to rotate and explore the stack
            </div>
        </section>
    );
}
