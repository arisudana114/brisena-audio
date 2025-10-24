"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Music Production",
    description:
      "Kami bantu wujudkan ide musik anda dari konsep awal hingga siap rilis — dengan kualitas audio terbaik.",
    image:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&q=80&w=1472",
  },
  {
    title: "Music Arrangement",
    description:
      "Kami menyusun aransemen musik yang selaras dengan karakter dan visi karya anda — menghadirkan komposisi yang kaya, dinamis, dan serta berkelas secara artistik maupun teknis.",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80&w=1472",
  },
  {
    title: "Mixing and Mastering",
    description:
      "Kami memastikan setiap frekuensi suara terdengar jernih dan harmonis. Hasil akhir kami memiliki kedalaman, dinamika, dan kualitas suara yang siap tayang di platform mana pun.",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&q=80&w=1472",
  },
  {
    title: "Sound Design",
    description:
      "Kami menghadirkan desain suara yang imersif dan sinematik — cocok untuk film, iklan, hingga proyek multimedia.",
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=1472",
  },
  {
    title: "Recording Studio",
    description:
      "Fasilitas studio dengan perlengkapan profesional untuk rekaman vokal, instrumen, atau voice over dengan kualitas terbaik.",
    image:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=1472",
  },
  {
    title: "Sound System",
    description:
      "Kami menyediakan sistem audio berkualitas tinggi dengan tim teknisi andal, memastikan pengalaman suara yang optimal untuk setiap acara",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1472",
  },
];

export default function OurServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleText = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="w-full max-w-6xl mx-auto text-white py-20 px-6 md:px-10">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold">Our Services</h1>
        <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
          From production to performance, Brisena Audio brings sound to life.
        </p>
      </section>

      {/* Service Grid */}
      <section className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-20">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group border border-white/10 hover:border-blue-400/60 transition-all duration-500 hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.5)] cursor-pointer"
            onClick={() => toggleText(i)}
          >
            {/* Background image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover brightness-75 group-hover:brightness-50 transition-all duration-500"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <p
                className={`text-center font-semibold tracking-wide transition-all duration-500 ${
                  activeIndex === i
                    ? "text-lg md:text-xl" // description font size
                    : "text-2xl md:text-4xl" // title font size
                }`}
              >
                {activeIndex === i ? service.description : service.title}
              </p>
            </div>

            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
          </div>
        ))}
      </section>

      {/* Back Button */}
      <div className="flex justify-center">
        <Link
          href="/"
          className="px-8 py-4 border border-white rounded-full font-semibold tracking-wide hover:border-blue-400 hover:text-blue-400 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
