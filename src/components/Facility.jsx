import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

const Facility = () => {
  return (
    <section className="w-full bg-white px-8 py-24 md:px-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 md:flex-row md:gap-20">
        {/* Left: content */}
        <div className="w-full md:w-1/2">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-mono font-semibold tracking-wide text-indigo-600">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
            COMFORT-FIRST MATCHING
          </div>

          {/* Headline */}
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#161329] sm:text-5xl">
            Extra care when
            <br />
            <span className="text-indigo-600">the journey matters</span>
            <br />
            <span className="text-indigo-600">most.</span>
          </h2>

          {/* Body copy */}
          <p className="mt-6 max-w-lg leading-relaxed text-slate-600 font-semibold">
            Sick or pregnant students can choose a comfort-first category
            when finding a ride. UniRide prioritizes available car rides
            first, helping you make a more comfortable trip to or from AIUB.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(79,70,229,0.35)] transition hover:bg-indigo-700 cursor-pointer">
              Find a comfortable ride
            </button>
            <button className="rounded-full bg-white px-6 py-3.5 font-semibold text-indigo-600 ring-1 ring-slate-200 transition hover:bg-slate-50 cursor-pointer">
              Browse all rides
            </button>
          </div>

          {/* Footnote */}
          <p className="mt-6 font-mono text-xs tracking-wide text-indigo-600 font-semibold">
            CAR RIDES RECOMMENDED &middot; <span className='text-[#ff6a3d]'>BIKE RIDES ALWAYS AVAILABLE</span>
          </p>
        </div>

        {/* Right: preference card */}
        <div className="w-full md:w-1/2">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-[#2a1a4a] p-6 shadow-[0_20px_60px_rgba(49,32,113,0.35)] sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-400/20 ring-1 ring-sky-300/30">
                <Shield size={20} className="text-sky-300" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide text-indigo-200">
                  YOUR PREFERENCE
                </p>
                <p className="text-lg font-bold text-white">
                  Comfort-first support
                </p>
              </div>
            </div>

            {/* Inner white card */}
            <div className="mt-5 rounded-2xl bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-slate-400">
                    RECOMMENDED FOR YOU
                  </p>
                  <p className="mt-1 text-xl font-extrabold text-[#161329]">
                    Car rides nearby
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-100 text-2xl">
                  🚗
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex items-center" />
                <p className='font-semibold'>Available options shown first</p>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <AlertCircle size={18} className="mt-0.5 shrink-0 text-white/70" />
              <p className="text-sm leading-relaxed text-indigo-100 font-semibold">
                You are always in control: this is a recommendation, not a
                restriction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;