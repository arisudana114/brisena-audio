import Image from "next/image";

export default function WhyUsPage() {
  const sections = [
    {
      title: "Standar Studio Profesional",
      text: `Dengan pengalaman mendalam di bidang recording, mixing, dan mastering, kami menghadirkan hasil berstandar profesional — jernih, seimbang, dan siap tayang di berbagai platform digital maupun media komersial.`,
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.1.0",
    },
    {
      title: "Tepat Waktu & Andal",
      text: `Kami menghargai setiap detik waktu dan kepercayaan klien. Proses produksi dijalankan dengan timeline yang jelas, terstruktur, dan hasil akhir yang konsisten berkualitas tinggi.`,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.1.0",
    },
    {
      title: "Kolaboratif & Transparan",
      text: `Kami percaya musik terbaik lahir dari komunikasi yang terbuka. Setiap tahap produksi selalu dibangun melalui diskusi bersama, agar setiap detail mencerminkan visi dan karakter kamu sepenuhnya.`,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.1.0",
    },
  ];

  return (
    <main className="w-full max-w-6xl mx-auto text-white py-20 px-6 md:px-10">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Why Us
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Alasan mengapa Brisena Audio menjadi pilihan utama dalam produksi dan
          kolaborasi musik profesional.
        </p>
      </section>

      {/* Sections */}
      <section className="flex flex-col gap-20">
        {sections.map((s, i) => (
          <div
            key={s.title}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/60 transition-all duration-500 hover:shadow-[0_0_25px_6px_rgba(59,130,246,0.5)]">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover brightness-90 group-hover:brightness-75 transition-all"
                priority
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
                {s.title}
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
