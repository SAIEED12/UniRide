'use client'
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Who can use UniRide?',
    answer:
      'Only verified AIUB students can join. You sign up with your university email and student ID, so everyone on the platform is a confirmed classmate.',
  },
  {
    question: 'How does ID verification work?',
    answer:
      'During sign up, you submit your AIUB email and student ID photo. Our team checks it against enrollment records, and you get a verified badge once approved, usually within a day.',
  },
  {
    question: 'Is UniRide free to use?',
    answer:
      'Posting and browsing rides is free. For rides, riders and drivers agree on a fuel-cost split directly in the app before confirming a trip.',
  },
  {
    question: 'What if I need to cancel a ride?',
    answer:
      'You can cancel from My Rides up to the scheduled pickup time. We ask that you cancel as early as possible out of respect for the other rider, and repeated late cancellations can affect your rating.',
  },
  {
    question: 'How does comfort-first matching work?',
    answer:
      'If you mark yourself as needing extra comfort, sick, pregnant, or otherwise, available car rides are shown to you first when you browse or get matched. It is a preference, not a restriction, so you can still choose any ride.',
  },
  {
    question: 'What safety measures are in place?',
    answer:
      'Every user is ID-verified, trips can be shared with an emergency contact, and both riders and drivers rate each other after every ride to keep the community trustworthy.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200 py-6 first:pt-0 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-[#161329]">
          {faq.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <Plus size={16} strokeWidth={2.5} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-600 font-semibold">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#f9fafb] px-8 py-24 md:px-14">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow + heading */}
        {/* <p className="font-mono text-sm font-semibold tracking-widest text-[#ff6a3d]">
          FAQ
        </p> */}
        <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#161329] sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-slate-600 font-semibold">
          Everything you need to know before your first ride. Can&apos;t find
          what you&apos;re looking for? Reach out to the UniRide team.
        </p>

        {/* Accordion */}
        <div className="mt-12 rounded-3xl bg-white px-6 shadow-[0_2px_16px_rgba(22,19,41,0.06)] sm:px-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;