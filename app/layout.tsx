import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsappButton from "@/components/WhatsappButton";
import { NavbarVisibilityProvider } from "./context/NavbarVisibilityContext";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue only has 400
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Brisena Audio",
  description: "Audio craftsmanship and precision sound design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas.className} antialiased`}>
        <NavbarVisibilityProvider>
          <Navbar />
          {children}
          <WhatsappButton />
        </NavbarVisibilityProvider>
      </body>
    </html>
  );
}
