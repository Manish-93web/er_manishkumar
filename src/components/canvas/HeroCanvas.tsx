"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Stars, Float, PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({ isMobile }: { isMobile: boolean }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const { clock } = state;
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, isMobile ? 32 : 100, isMobile ? 64 : 200]} scale={1.8}>
                <MeshDistortMaterial
                    color="#3B82F6"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    metalness={1}
                />
            </Sphere>
        </Float>
    );
}

function OrbitingLogos() {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((state) => {
        groupRef.current.rotation.y += 0.005;
        groupRef.current.rotation.z += 0.002;
    });

    const logos = useMemo(() => {
        const count = isMobile ? 6 : 12;
        return Array.from({ length: count }).map((_, i) => ({
            position: [
                Math.cos((i / count) * Math.PI * 2) * 3,
                Math.sin((i / count) * Math.PI * 2) * 3,
                (Math.random() - 0.5) * 2,
            ] as [number, number, number],
            color: i % 2 === 0 ? "#3B82F6" : "#8B5CF6",
        }));
    }, [isMobile]);

    return (
        <group ref={groupRef}>
            {logos.map((logo, i) => (
                <Float key={i} speed={5} rotationIntensity={2}>
                    <mesh position={logo.position}>
                        <boxGeometry args={[0.15, 0.15, 0.15]} />
                        <meshStandardMaterial
                            color={logo.color}
                            emissive={logo.color}
                            emissiveIntensity={4}
                            metalness={1}
                            roughness={0}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export default function HeroCanvas() {
    const [dpr, setDpr] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 bg-background">
            <Suspense fallback={<div className="w-full h-full bg-background" />}>
                <Canvas
                    camera={{ position: [0, 0, 6], fov: 45 }}
                    dpr={dpr}
                    gl={{ antialias: !isMobile, alpha: true }}
                >
                    <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(2)} />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                    <pointLight position={[-10, -10, -10]} intensity={2} color="#8B5CF6" />

                    <AnimatedSphere isMobile={isMobile} />
                    <OrbitingLogos isMobile={isMobile} />
                    <Stars
                        radius={100}
                        depth={50}
                        count={isMobile ? 1000 : 5000}
                        factor={4}
                        saturation={0}
                        fade
                        speed={1}
                    />

                    <fog attach="fog" args={["#0B0F19", 5, 15]} />
                </Canvas>
            </Suspense>
        </div>
    );
}
