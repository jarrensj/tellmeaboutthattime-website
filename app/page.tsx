"use client";

import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay"></div>
      
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in relative z-10">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
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

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 text-center">
        <p className="text-sm text-muted">
          <a 
            href="mailto:contact@tellmeaboutthattime.com" 
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
}
