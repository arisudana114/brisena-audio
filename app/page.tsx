// app/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); // small delay for smooth start
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Fullscreen background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621976975813-10e88ae6e450?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljJTIwc3R1ZGlvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500')",
        }}
      />

      {/* Optional dark overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mounted ? "opacity-40" : "opacity-0"
        }`}
      />

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-[2500ms] delay-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          Brisena Audio
        </h1>

        <p
          className={`text-lg md:text-2xl max-w-2xl mb-10 transition-all duration-[2500ms] delay-600 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          Turning ideas into music.
        </p>

        <a
          href="#work"
          className={`inline-block px-8 py-3 border border-white text-white font-medium transition-all duration-[2500ms] delay-900 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-110"
          } hover:bg-white hover:text-black`}
        >
          Explore Our Work
        </a>
      </section>
    </main>
  );
}
