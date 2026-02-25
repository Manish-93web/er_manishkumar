import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import CoreExpertise from "@/components/sections/CoreExpertise";
import CaseStudies from "@/components/sections/CaseStudies";
import TechSphere from "@/components/sections/TechSphere";
import GitHubSection from "@/components/sections/GitHubSection";
import BlogSection from "@/components/sections/BlogSection";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import StrategicSEO from "@/components/ui/StrategicSEO";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <StrategicSEO />
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <CoreExpertise />
      <CaseStudies />
      <TechSphere />
      <GitHubSection />
      <BlogSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
