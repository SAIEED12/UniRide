import React from 'react';
import { User, Bike, CircleCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: User,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    title: 'Sign up with your uni ID',
    description:
      'Verify your student status with your university email and ID. Campus-only, always safe.',
  },
  {
    number: '02',
    icon: Bike,
    iconBg: 'bg-orange-100',
    iconColor: 'text-[#ff6a3d]',
    title: 'Post or find a ride',
    description:
      'Offer your bike or car seat, or browse the board for rides going your way. Filter by vehicle, time, or category.',
  },
  {
    number: '03',
    icon: CircleCheck,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    title: 'Ride together',
    description:
      'Match, confirm, and ride. Rate each other after every trip to keep the community trustworthy.',
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#f2f1f8] px-8 py-24 md:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow + heading */}
        <p className="font-mono text-md lg:text-xl font-bold text-[#ff6a3d]">
          HOW IT WORKS
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#161329] sm:text-5xl">
          Three steps to a smarter commute.
        </h2>

        {/* Steps */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-2xl bg-white p-8 shadow-[0_2px_16px_rgba(22,19,41,0.06)]"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${step.iconBg}`}
                  >
                    <Icon size={26} className={step.iconColor} strokeWidth={2.25} />
                  </div>
                  <span className="text-4xl font-extrabold text-[#4f46e5]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#161329]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;