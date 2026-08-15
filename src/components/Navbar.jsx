'use client'
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Rides", href: "#" },
    { label: "Post a Ride", href: "#" },
    { label: "My Rides", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0b21]">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10">
            <Link href="/">
              <Image src="/logo.png" width={40} height={40} alt="UniRide logo" className="object-contain" />
            </Link>
          </div>
          <Link href="/"  className="hidden text-lg font-bold text-white sm:block hover:no-underline">UniRide</Link>
        </div>

        {/* Centered pill nav */}
        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="none"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 no-underline transition-colors hover:bg-white/10 hover:text-white hover:no-underline"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Right side auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            
            underline="none"
            className="px-8 py-2 text-center font-semibold text-white no-underline bg-white/10 hover:bg-white/20 hover:no-underline"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            
            underline="none"
            className="px-8 py-2 text-center font-semibold text-white no-underline bg-[#ff6a3d] hover:bg-[#ff7d52] hover:no-underline"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mx-4 mb-2 rounded-2xl border border-white/10 bg-[#0d0b21]/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  underline="none"
                  className="block rounded-lg px-3 py-2 text-white/90 no-underline hover:bg-white/10 hover:no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Button radius="full" className="w-full min-w-[104px] px-6 py-2.5 font-semibold text-white bg-white/10 hover:bg-white/20">
                Log in
              </Button>
              <Button radius="full" className="w-full min-w-[104px] px-6 py-2.5 font-semibold text-white bg-[#ff6a3d] hover:bg-[#ff7d52]">
                Sign up
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}