import React from "react";

export default function StrategicSEO() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Manish Kumar",
        "jobTitle": "Product-Focused Software Engineer",
        "url": "https://manishkumar.dev",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gurugram",
            "addressRegion": "Haryana",
            "addressCountry": "India"
        },
        "sameAs": [
            "https://github.com/ManishGit93",
            "https://linkedin.com/in/manish",
            "https://x.com/Manishkuma63058",
            "https://instagram.com/i_amerkumar"
        ],
        "description": "Product-focused Software Engineer specializing in scalable SaaS and real-time applications.",
        "email": "mkmanishkumar7366@gmail.com",
        "telephone": "+91 8860281526"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
