// app/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); // slight delay for smoother start
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Fullscreen background image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621976975813-10e88ae6e450?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljJTIwc3R1ZGlvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500')",
        }}
      />

      {/* Optional dark overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[1500ms] ease-out ${
          mounted ? "opacity-40" : "opacity-0"
        }`}
      />

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Brisena Audio
        </h1>
        <p
          className={`text-lg md:text-2xl max-w-2xl mb-10 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Turning ideas into music.
        </p>
        <a
          href="#work"
          className={`inline-block px-8 py-3 border border-white text-white font-medium transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } hover:bg-white hover:text-black`}
        >
          Explore Our Work
        </a>
      </section>
    </main>
  );
}
