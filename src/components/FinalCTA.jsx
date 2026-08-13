import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="w-full bg-[#f2f1f8] px-8 py-16 md:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#0d0b21] px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Glow accents */}
          <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#ff6a3d]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            {/* Eyebrow */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono tracking-wide text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              JOIN NOW
            </div>

            {/* Headline */}
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Your next ride to campus
              <br />
              is one tap away.
            </h2>

            {/* Subcopy */}
            <p className="mx-auto mt-5 max-w-lg leading-relaxed text-slate-300">
              Join 1,200+ verified AIUB students already sharing car and bike
              rides across Dhaka. Sign up in minutes with your student ID.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-[#ff6a3d] px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(255,106,61,0.35)] transition hover:bg-[#ff7d52] cursor-pointer">
                Get started with AIUB ID
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                />
              </button>
              <button className="rounded-full bg-white/5 px-7 py-3.5 font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10 cursor-pointer">
                Browse rides
              </button>
            </div>

            {/* Footnote */}
            <p className="mt-6 font-mono text-xs tracking-wide text-slate-500 font-semibold">
              NO FEES TO JOIN &middot; VERIFIED AIUB STUDENTS ONLY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;