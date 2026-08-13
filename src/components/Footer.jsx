import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:hello@uniride.app', label: 'Email' },
];

const linkGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Browse Rides', href: '#' },
      { label: 'Post a Ride', href: '#' },
      { label: 'How it works', href: '#' },
      { label: 'Comfort-first matching', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About UniRide', href: '#' },
      { label: 'Campus partnership', href: '#' },
      { label: 'Safety', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of service', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Community guidelines', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0d0b21] px-8 pt-16 md:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 pb-12 md:flex-row md:justify-between">
          {/* Brand column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10">
                <Image
                  src="/logo.png"
                  width={40}
                  height={40}
                  alt="UniRide logo"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white">UniRide</span>
            </div>
            <p className="mt-4 leading-relaxed text-slate-400">
              Ride with verified AIUB classmates. Share a car or bike trip
              around Dhaka and make every campus commute feel simpler.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold tracking-wide text-white">
                  {group.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} UniRide. Built for AIUB students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;