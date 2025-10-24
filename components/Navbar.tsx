"use client";

import { useNavbarVisibility } from "@/app/context/NavbarVisibilityContext";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue only has 400, but you can leave it explicit
  variable: "--font-bebas",
});

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

  const { visible } = useNavbarVisibility();

  if (!visible) {
    return (
      <nav className="fixed top-0 left-0 w-full h-0 overflow-hidden opacity-0 pointer-events-none" />
    );
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent text-white">
        <Link
          href="/"
          className="text-xl md:text-2xl font-semibold tracking-wide"
        >
          BRISENA AUDIO
        </Link>
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
          className={`relative bg-black/60 text-white w-[85vw] max-w-[1100px] aspect-[5/3]
                border border-blue-400/50 shadow-[0_0_25px_8px_rgba(59,130,246,0.4)]
                flex flex-col justify-center items-center transition-all duration-700 ease-out
                backdrop-blur-md hover:shadow-[0_0_35px_12px_rgba(59,130,246,0.6)]`}
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
            {["Why Us", "Our Services", "Our Clients", "Contact"].map(
              (item) => {
                const path = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <a
                    key={item}
                    href={`/${path}`}
                    onClick={() => setOpen(false)}
                    className={`${bebas.className} relative text-xl md:text-5xl tracking-wide transition-all duration-700 group`}
                  >
                    {item.toUpperCase()}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-500 group-hover:w-full" />
                  </a>
                );
              }
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
