import { Outfit, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "UniRide",
  description: "Ride for students, by students.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-outfit)]">
        <Navbar />
        <Hero />
        {children}
      </body>
    </html>
  );
}