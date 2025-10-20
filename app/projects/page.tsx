// app/projects/page.tsx
"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    // Full reload to reset all states
    window.location.href = "/";
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <h1 className="text-[10vw] font-bold mb-10 tracking-tighter">
        BELOM JADI H3H3H3
      </h1>

      <Link
        href="/"
        onClick={handleBack}
        className="mt-4 px-10 py-4 text-lg tracking-widest font-semibold 
                   text-white rounded-full border border-white
                   transition-all duration-700 ease-out
                   hover:border-blue-400 hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.75)]
                   hover:animate-pulse"
      >
        BACK TO HOME
      </Link>
    </main>
  );
}
