// app/projects/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  const handleBack = () => {
    // Force a full reload to reset states
    window.location.href = "/";
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <h1 className="text-[10vw] font-bold mb-10 tracking-tighter">
        BELOM JADI H3H3H3
      </h1>

      <button
        onClick={handleBack}
        className="mt-4 px-10 py-4 text-lg tracking-widest font-semibold cursor-pointer 
                   text-white rounded-full border border-white
                   transition-all duration-700 ease-out
                   hover:border-blue-400 hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.75)]
                   hover:animate-pulse"
      >
        BACK TO HOME
      </button>
    </main>
  );
}
