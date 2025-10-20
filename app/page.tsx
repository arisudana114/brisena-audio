"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [fastTransition, setFastTransition] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 100);
    const speedUpTimer = setTimeout(() => setFastTransition(true), 2500);
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(speedUpTimer);
    };
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        src="https://cdn.pixabay.com/video/2021/08/08/84278-586657542_large.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mounted ? "opacity-40" : "opacity-0"
        }`}
      />

      {/* Hero Section */}
      <section
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showProjects
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        <h1
          className={`text-5xl tracking-tighter md:text-7xl font-bold mb-6 transform transition-all duration-[2500ms] delay-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-center ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          BRISENA AUDIO PRODUCTION
        </h1>

        <button
          onClick={() => setShowProjects(true)}
          className={`text-lg inline-block px-8 py-5 rounded-full text-white font-semibold cursor-pointer tracking-widest 
    origin-center ease-[cubic-bezier(0.4,0,0.2,1)] 
    transition-all
    ${fastTransition ? "duration-500" : "duration-[2500ms] delay-900"}
    ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-110"}
    border border-white hover:border-blue-400 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)]
    hover:scale-105`}
        >
          LISTEN TO OUR PROJECT
        </button>
      </section>

      {/* Project Grid */}
      <section
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showProjects
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 pt-10 px-6 md:p-8 w-full max-w-6xl mx-auto">
          {[
            "https://www.youtube.com/embed/uqwkjhU2R8E?si=rOMkTMakdkz3vmgL",
            "https://www.youtube.com/embed/jqah-XRLT3M?si=ddAXL6DssvD1Xfqy",
            "https://www.youtube.com/embed/0eJwyKg7uFk?si=w5DFT8lM1vKuoNvk",
            "https://www.youtube.com/embed/j4i4NYWXXCE?si=bwxWHlgKosoVM5Le",
            "https://www.youtube.com/embed/IEyOYYoVrSc?si=ahm9473qx2ywoP1g",
            "https://www.youtube.com/embed/SiHQU6OXVYA?si=UJvLN6XujcTWuVbC",
            "https://www.youtube.com/embed/wWAdBZGJX5g?si=QwN3lkWOMCzJL3DP",
            "https://www.youtube.com/embed/Jp_yhIptkC4?si=QClK32aG4JYqAI6U",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-full h-[18vh] md:h-64 bg-white/5 rounded-2xl overflow-hidden group transition-all duration-700 hover:scale-[1.03] hover:border-blue-400 border border-transparent hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.65)]"
            >
              <iframe
                src={src}
                title={`YouTube video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                <p className="text-lg font-semibold tracking-wider">
                  PROJECT {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SEE ALL Button */}
        <a
          href="/projects"
          className="relative mt-6 md:mt-10 px-10 py-4 text-sm md:text-lg tracking-widest font-semibold 
       text-white rounded-full border border-white
       transition-all duration-700 ease-out
       hover:border-blue-400 hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.75)]
       hover:animate-pulse"
        >
          SEE ALL
        </a>
      </section>
    </main>
  );
}
