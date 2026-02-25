import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manish Kumar | Product Engineering & SaaS Architect",
  description: "Specializing in high-performance SaaS, Real-time systems, and scalable product engineering.",
  keywords: ["Software Engineer", "React specialist", "Next.js", "SaaS", "Product Engineer", "Manish Kumar", "Gurugram", "WebRTC"],
  authors: [{ name: "Manish Kumar" }],
  metadataBase: new URL("https://manishkumar.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Manish Kumar | Product-Focused Software Engineer",
    description: "Specializing in scalable SaaS, real-time applications, and high-performance React.js systems.",
    type: "website",
    locale: "en_US",
    url: "https://manishkumar.dev",
    siteName: "Manish Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Kumar | Product Engineering",
    description: "Specializing in high-performance SaaS and scalable product engineering.",
    creator: "@Manishkuma63058",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-accent-blue/30 overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
