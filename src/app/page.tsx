import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import CoreExpertise from "@/components/sections/CoreExpertise";
import CaseStudies from "@/components/sections/CaseStudies";
import GitHubSection from "@/components/sections/GitHubSection";
import BlogSection from "@/components/sections/BlogSection";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/ui/Footer";
import StrategicSEO from "@/components/ui/StrategicSEO";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const RecruiterSnapshot = dynamic(() => import("@/components/sections/RecruiterSnapshot"));
const EngineeringPhilosophy = dynamic(() => import("@/components/sections/EngineeringPhilosophy"));
const ArchitectureSection = dynamic(() => import("@/components/sections/ArchitectureSection"));
const TechSphere = dynamic(() => import("@/components/sections/TechSphere"));
const EngineeringDepth = dynamic(() => import("@/components/sections/EngineeringDepth"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const StickyCTA = dynamic(() => import("@/components/ui/StickyCTA"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <StrategicSEO />
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <CoreExpertise />
      <Suspense fallback={<div className="h-60 flex items-center justify-center text-slate-500">Loading Recruiter Snapshot...</div>}>
        <RecruiterSnapshot />
      </Suspense>
      <Suspense fallback={<div className="h-60 flex items-center justify-center text-slate-500">Loading Philosophy...</div>}>
        <EngineeringPhilosophy />
      </Suspense>
      <Suspense fallback={<div className="h-60 flex items-center justify-center text-slate-500">Loading Architecture...</div>}>
        <ArchitectureSection />
      </Suspense>
      <CaseStudies />
      <Suspense fallback={<div className="h-60 flex items-center justify-center text-slate-500">Loading Engineering Depth...</div>}>
        <EngineeringDepth />
      </Suspense>
      <Suspense fallback={<div className="h-60 flex items-center justify-center text-slate-500">Loading Tech Sphere...</div>}>
        <TechSphere />
      </Suspense>
      <GitHubSection />
      <BlogSection />
      <Testimonials />
      <Suspense fallback={<div className="h-60 flex items-center justify-center text-slate-500">Loading Contact Form...</div>}>
        <Contact />
      </Suspense>
      <Footer />
      <StickyCTA />
    </main>
  );
}
