"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const Hero = () => {
  return (
    <div className="w-full bg-[#0d0b21] font-sans">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        {/* Left: content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex w-full flex-col justify-center px-8 py-16 md:w-1/2 md:px-14 md:py-24"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono tracking-wide text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            AIUB STUDENTS &middot; VERIFIED IDs
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl font-outfit"
          >
            Ride for <span className="text-[#ff6a3d]">students</span>, by{" "}
            <span className="text-[#ff6a3d]">students.</span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md text-lg leading-relaxed text-slate-300 font-semibold"
          >
            Ride with verified AIUB classmates. Share a car or bike trip around
            Dhaka and make every campus commute feel simpler.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button className="group inline-flex items-center gap-2 rounded-full bg-[#ff6a3d] px-6 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(255,106,61,0.35)] transition hover:bg-[#ff7d52] cursor-pointer">
              Get started with AIUB ID
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-0.5"
              />
            </button>
            <button className="rounded-full bg-white/5 px-6 py-3.5 font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10 cursor-pointer">
              Browse rides
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="mt-12 mb-8 h-px w-full bg-white/10"
          />

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-10"
          >
            <div>
              <div className="text-2xl font-extrabold text-white">1,200+</div>
              <div className="mt-1 text-sm text-slate-400">
                verified students
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">8,400</div>
              <div className="mt-1 text-sm text-slate-400">rides shared</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">4.9★</div>
              <div className="mt-1 text-sm text-slate-400">avg. rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative h-64 w-full md:h-auto md:min-h-[560px] md:w-1/2"
        >
          <Image
            src="/Hero.jpg"
            alt="Hero Image"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
