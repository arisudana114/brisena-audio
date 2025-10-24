import Image from "next/image";

const clients = [
  {
    src: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-500x281.png",
    alt: "Marshall Headphones",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-500x281.png",
    alt: "Focal JMlab",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-500x281.png",
    alt: "RME Audio",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-500x281.png",
    alt: "ART Pro Audio",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-500x281.png",
    alt: "PreSonus",
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-500x281.png",
    alt: "Akai Professional",
  },
];

export default function OurClientsPage() {
  return (
    <section className="flex items-center justify-center h-screen w-full overflow-hidden ">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-semibold text-center mb-10">
          Our Clients
        </h1>

        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee space-x-16">
            {clients.map((client, i) => (
              <Image
                key={i}
                src={client.src}
                alt={client.alt}
                width={140}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="absolute top-0 left-full flex animate-marquee space-x-16">
            {clients.map((client, i) => (
              <Image
                key={i + "-dup"}
                src={client.src}
                alt={client.alt}
                width={140}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
