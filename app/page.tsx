"use client";

import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay"></div>
      
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in relative z-10">
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          tellmeaboutthattime
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto font-light">
          A storytelling game designed to help you become closer to your friends, loved ones, or your coworkers.
        </p>

        {/* CTA section */}
        <div className="pt-4 space-y-4">
          <button 
            className="btn-primary cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "Coming soon" : "Download for iPhone"}
          </button>
        </div>
      </div>
    </main>
  );
}
