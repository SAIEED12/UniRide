'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Leaf, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '500+', label: 'Students joined' },
  { value: '2K+', label: 'Rides shared' },
  { value: '100%', label: 'Verified campus members' },
];

const values = [
  {
    icon: Shield,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    title: 'Safety First',
    description:
      'Every member is verified with a university email and student ID. Campus-only means you always know who you are riding with.',
  },
  {
    icon: Users,
    iconBg: 'bg-orange-100',
    iconColor: 'text-[#ff6a3d]',
    title: 'Community Driven',
    description:
      'Built by students, for students. UniRide grows through trust, ratings, and real connections between classmates.',
  },
  {
    icon: Leaf,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Sustainability',
    description:
      'Fewer cars on the road means less traffic and a smaller carbon footprint. Every shared ride makes campus greener.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const aboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full bg-[#0d0b21] px-8 py-24 md:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono tracking-wide text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              ABOUT UNIRIDE
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              The story behind{' '}
              <span className="text-[#ff6a3d]">smarter student commutes</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              UniRide started with a simple idea: getting to campus should not
              be stressful, expensive, or lonely. We are building a trusted
              community where students share rides, save money, and make
              friends along the way.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff6a3d] px-6 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(255,106,61,0.35)] transition hover:bg-[#ff7d52] hover:no-underline"
              >
                Sign up now
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/#how-it-works"
                className="rounded-full bg-white/5 px-6 py-3.5 font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10 hover:no-underline"
              >
                Learn how it works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-[#f2f1f8] px-8 py-24 md:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="font-mono text-md font-bold text-[#ff6a3d] lg:text-xl">
              OUR MISSION
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#161329] sm:text-5xl">
              Rides that feel like campus,{' '}
              <span className="text-indigo-600">not traffic.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              We believe every student deserves an affordable, safe, and
              comfortable way to get to class. UniRide connects you with
              classmates going the same way, so you never have to choose
              between a crowded bus and an expensive ride-hailing app.
            </motion.p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl bg-white p-8 text-center shadow-[0_2px_16px_rgba(22,19,41,0.06)]"
              >
                <p className="text-4xl font-extrabold text-[#4f46e5]">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-white px-8 py-24 md:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          >
            <motion.p variants={fadeUp} className="font-mono text-md font-bold text-[#ff6a3d] lg:text-xl">
              WHAT WE BELIEVE
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#161329] sm:text-5xl">
              Values that drive every ride.
            </motion.h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl bg-[#f9fafb] p-8 shadow-[0_2px_16px_rgba(22,19,41,0.06)]"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${value.iconBg}`}>
                    <Icon size={26} className={value.iconColor} strokeWidth={2.25} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-[#161329]">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-500">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white px-8 py-24 md:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
            className="flex flex-col items-center text-center"
          >
            <motion.h2 variants={fadeUp} className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#161329] sm:text-5xl">
              Ready to ride with us?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
              Join hundreds of students who are already saving time, money,
              and stress on their daily commute.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff6a3d] px-8 py-4 font-semibold text-white shadow-[0_8px_30px_rgba(255,106,61,0.35)] transition hover:bg-[#ff7d52] hover:no-underline"
              >
                Get started — it&apos;s free
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default aboutUs;
