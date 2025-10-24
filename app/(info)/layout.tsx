import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${bebas.className} relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1478"
        alt="Background"
        fill
        priority
        className="object-cover object-center opacity-75 absolute inset-0 -z-10"
      />

      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Page content */}
      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white">
        {children}
        <WhatsappButton />
      </main>
    </div>
  );
}
