"use client";

import Link from "next/link";
import { useState } from "react";

const allVideos = [
  // You can add as many YouTube URLs as you like here
  "https://www.youtube.com/embed/uqwkjhU2R8E?si=rOMkTMakdkz3vmgL",
  "https://www.youtube.com/embed/jqah-XRLT3M?si=ddAXL6DssvD1Xfqy",
  "https://www.youtube.com/embed/0eJwyKg7uFk?si=w5DFT8lM1vKuoNvk",
  "https://www.youtube.com/embed/j4i4NYWXXCE?si=bwxWHlgKosoVM5Le",
  "https://www.youtube.com/embed/IEyOYYoVrSc?si=ahm9473qx2ywoP1g",
  "https://www.youtube.com/embed/SiHQU6OXVYA?si=UJvLN6XujcTWuVbC",
  "https://www.youtube.com/embed/wWAdBZGJX5g?si=QwN3lkWOMCzJL3DP",
  "https://www.youtube.com/embed/Jp_yhIptkC4?si=QClK32aG4JYqAI6U",
  "https://www.youtube.com/embed/bKtOqzI6PnA?si=-w6UkuKmQ9VCrj2-",
  "https://www.youtube.com/embed/lXGiTXNT8BA?si=NAeG6zUwSfmNmYhw",
  "https://www.youtube.com/embed/Be74FPJvwS8?si=rY-p6yQOOsKvsUhT",
  "https://www.youtube.com/embed/sBA64CXaFRA?si=j6pf9HwZ7cUqJdZJ",
  "https://www.youtube.com/embed/rCNC-fxY0oE?si=AR5HGfxtFfcnntqo",
  "https://www.youtube.com/embed/H0lerHJKS0o?si=gnamNDsq3yocFeXc",
  "https://www.youtube.com/embed/tx_kewGOhZc?si=v74SnfmCd9PlFI31",
];

const ITEMS_PER_PAGE = 8;

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allVideos.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVideos = allVideos.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center">
        OUR PROJECTS
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 w-full max-w-6xl">
        {currentVideos.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-[18vh] md:h-64 bg-white/5 rounded-2xl overflow-hidden group transition-all duration-700 hover:scale-[1.03] hover:border-blue-400 border border-transparent hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.65)]"
          >
            <iframe
              src={src}
              title={`Project ${startIndex + i + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
              <p className="text-lg font-semibold tracking-wider">
                PROJECT {startIndex + i + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`px-6 py-2 rounded-full border border-white font-semibold tracking-widest transition-all duration-300 ${
            currentPage === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:border-blue-400 hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)]"
          }`}
        >
          PREV
        </button>

        <span className="text-lg font-medium tracking-wide">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-6 py-2 rounded-full border border-white font-semibold tracking-widest transition-all duration-300 ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:border-blue-400 hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)]"
          }`}
        >
          NEXT
        </button>
      </div>

      {/* Back to Landing Page */}
      <Link
        href="/"
        className="mt-16 text-sm md:text-lg px-10 py-4 border border-white rounded-full tracking-widest font-semibold hover:border-blue-400 hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.75)] transition-all duration-500"
      >
        BACK TO HOME
      </Link>
    </main>
  );
}
