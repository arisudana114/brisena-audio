"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside of the oval modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent text-white">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          className="text-lg md:text-xl font-semibold tracking-wide hover:text-blue-400 transition-colors duration-300"
        >
          BRISENA AUDIO
        </a>

        {/* Oval "burger" button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex flex-col cursor-pointer justify-between w-10 h-7 relative group focus:outline-none"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-[6px] w-full bg-white/90 rounded-full transition-all duration-300 group-hover:scale-x-95"
            />
          ))}
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setOpen(false)}
        />
      )}

      {/* WIDER OVAL MODAL */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <div
          ref={modalRef}
          className="relative bg-black text-white w-[85vw] max-w-[1100px] aspect-[5/3]
                     border border-white/20 shadow-2xl flex flex-col justify-center items-center
                     transition-all duration-700 ease-out"
          style={{
            borderRadius: "50% / 50%", // horizontally wider oval shape
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-8 text-2xl leading-none font-light hover:opacity-80"
          >
            ×
          </button>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-around items-center md:justify-between gap-5 md:gap-20 px-8">
            {["News", "Media", "Discography", "Services", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-xl md:text-2xl tracking-wide hover:opacity-80 transition-opacity"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
