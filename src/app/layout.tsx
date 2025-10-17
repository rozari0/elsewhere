import type { Metadata } from "next";
import {  Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});
 
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elsewhere - A List of Websites to Waste Time On",
  description: "A curated list of interesting websites to explore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${space.variable} antialiased`}
      >
        <div>
        <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
