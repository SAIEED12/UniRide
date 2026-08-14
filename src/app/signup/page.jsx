"use client";

import React, { useState } from "react";
import { ArrowLeft, Mail, CreditCard, Minus, Plus, Check } from "lucide-react";

const PRIMARY = "#5546E0";
const PRIMARY_LIGHT = "#EEF0FE";
const DOT_MUTED = "#D8D6EC";

/* ---------------- progress dots ---------------- */
function ProgressDots({ step }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-2">
      {[0, 1, 2].map((i) => {
        const completed = i < step - 1;
        const active = i === step - 1;
        return (
          <span
            key={i}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: active ? 32 : 8,
              backgroundColor: active || completed ? PRIMARY : DOT_MUTED,
            }}
          />
        );
      })}
    </div>
  );
}

/* ---------------- reusable option card ---------------- */
function OptionCard({ selected, onClick, icon, title, description, showCheck = true }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left rounded-2xl border p-4 flex items-start gap-3 transition-colors"
      style={{
        borderColor: selected ? PRIMARY : "#E5E3F1",
        backgroundColor: selected ? PRIMARY_LIGHT : "#FFFFFF",
      }}
    >
      <span className="text-2xl leading-none mt-0.5">{icon}</span>
      <span className="flex-1">
        <span className="block font-semibold text-[15px] text-[#14142B]">
          {title}
        </span>
        <span className="block text-sm text-[#6B7280] mt-0.5">
          {description}
        </span>
      </span>
      {showCheck && selected && (
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
          style={{ backgroundColor: PRIMARY }}
        >
          <Check size={12} color="white" strokeWidth={3} />
        </span>
      )}
    </button>
  );
}

/* ---------------- primary button ---------------- */
function PrimaryButton({ children, disabled, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-full py-3.5 font-semibold text-white text-[15px] transition-opacity"
      style={{
        backgroundColor: PRIMARY,
        opacity: disabled ? 0.55 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

const VEHICLES = [
  { id: "bike", label: "Bike", icon: "🚲" },
  { id: "car", label: "Car", icon: "🚗" },
];

const CATEGORIES = [
  {
    id: "regular",
    icon: "🧑‍🎓",
    title: "Regular",
    description: "Standard ride — bike or car.",
  },
  {
    id: "sick",
    icon: "🤒",
    title: "Sick / Unwell",
    description: "Car rides recommended for comfort.",
  },
  {
    id: "pregnant",
    icon: "🤰",
    title: "Pregnant",
    description: "Car rides recommended for safety.",
  },
];

const Signup = () => {
  const [step, setStep] = useState(1); // 1, 2, 3
  const [subStep, setSubStep] = useState("vehicle"); // used only when role === "both"

  const [form, setForm] = useState({
    email: "",
    studentId: "",
    role: null, // "offer" | "need" | "both"
    vehicleType: "car",
    licensePlate: "",
    seats: 3,
    passengerCategory: "regular",
  });

  const update = (patch) => setForm((prev) => ({ ...prev, ...patch }));

  const step1Valid =
    form.email.trim().length > 0 && form.studentId.trim().length > 0;

  const goBack = () => {
    if (step === 3 && form.role === "both" && subStep === "passenger") {
      setSubStep("vehicle");
    } else if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    }
  };

  const finish = () => {
    // TODO: replace with real signup API call
    console.log("submit signup", form);
  };

  const showBack = step > 1;

  return (
    <div className="min-h-screen bg-[#F1F0F7] flex items-center justify-center px-4 py-16 relative">
      {showBack && (
        <button
          onClick={goBack}
          className="absolute top-6 right-6 flex items-center gap-1 text-sm font-semibold"
          style={{ color: PRIMARY }}
        >
          <ArrowLeft size={16} /> Back
        </button>
      )}

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl px-8 py-9">
        <ProgressDots step={step} />
        <p className="text-center text-sm text-[#8B8A9C] mb-6">
          Step {step} of 3
        </p>

        {/* ---------------- STEP 1 ---------------- */}
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold text-[#14142B]">
              Create your account
            </h1>
            <p className="text-[#6B7280] text-sm mt-1 mb-6">
              Verify your student status to join.
            </p>

            <label className="block mb-4">
              <span className="block text-xs font-semibold tracking-wide text-[#14142B] mb-2">
                UNIVERSITY EMAIL
              </span>
              <div className="flex items-center gap-2 border border-[#E5E3F1] rounded-xl px-3.5 py-3">
                <Mail size={16} className="text-[#9C9AB0]" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update({ email: e.target.value })}
                  placeholder="you@student.aiub.edu"
                  className="flex-1 outline-none text-sm text-[#14142B] placeholder:text-[#B4B2C4]"
                />
              </div>
            </label>

            <label className="block mb-6">
              <span className="block text-xs font-semibold tracking-wide text-[#14142B] mb-2">
                STUDENT ID
              </span>
              <div className="flex items-center gap-2 border border-[#E5E3F1] rounded-xl px-3.5 py-3">
                <CreditCard size={16} className="text-[#9C9AB0]" />
                <input
                  type="text"
                  value={form.studentId}
                  onChange={(e) => update({ studentId: e.target.value })}
                  placeholder="e.g. 10837421"
                  className="flex-1 outline-none text-sm text-[#14142B] placeholder:text-[#B4B2C4]"
                />
              </div>
            </label>

            <PrimaryButton disabled={!step1Valid} onClick={() => setStep(2)}>
              Continue
            </PrimaryButton>

            <p className="text-center text-sm text-[#6B7280] mt-5">
              Already have an account?{" "}
              <a href="/login" className="font-semibold" style={{ color: PRIMARY }}>
                Log in
              </a>
            </p>
          </>
        )}

        {/* ---------------- STEP 2 ---------------- */}
        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold text-[#14142B]">
              How will you use UniRide?
            </h1>
            <p className="text-[#6B7280] text-sm mt-1 mb-6">
              You can change this later in your profile.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              <OptionCard
                selected={form.role === "offer"}
                onClick={() => update({ role: "offer" })}
                icon="🚗"
                title="I offer rides"
                description="Share your bike or car with fellow students."
              />
              <OptionCard
                selected={form.role === "need"}
                onClick={() => update({ role: "need" })}
                icon="🧑‍🎓"
                title="I need rides"
                description="Find and book rides from other students."
              />
              <OptionCard
                selected={form.role === "both"}
                onClick={() => update({ role: "both" })}
                icon="🔄"
                title="Both"
                description="Offer rides and find them when you need one."
              />
            </div>

            <PrimaryButton
              disabled={!form.role}
              onClick={() => {
                setSubStep("vehicle");
                setStep(3);
              }}
            >
              Continue
            </PrimaryButton>
          </>
        )}

        {/* ---------------- STEP 3: VEHICLE ---------------- */}
        {step === 3 &&
          (form.role === "offer" || (form.role === "both" && subStep === "vehicle")) && (
            <>
              <h1 className="text-2xl font-bold text-[#14142B]">Your vehicle</h1>
              <p className="text-[#6B7280] text-sm mt-1 mb-6">
                This helps passengers find the right ride.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {VEHICLES.map((v) => {
                  const selected = form.vehicleType === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => update({ vehicleType: v.id })}
                      className="rounded-2xl border p-5 flex flex-col items-center gap-2"
                      style={{
                        borderColor: selected ? PRIMARY : "#E5E3F1",
                        backgroundColor: selected ? PRIMARY_LIGHT : "#FFFFFF",
                      }}
                    >
                      <span className="text-3xl">{v.icon}</span>
                      <span className="font-semibold text-[#14142B]">
                        {v.label}
                      </span>
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: selected ? "#E1DEFB" : "#EAF3FF",
                          color: selected ? PRIMARY : "#2A6FDB",
                        }}
                      >
                        {v.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <label className="block mb-5">
                <span className="block text-xs font-semibold tracking-wide text-[#14142B] mb-2">
                  LICENSE PLATE
                </span>
                <input
                  type="text"
                  value={form.licensePlate}
                  onChange={(e) => update({ licensePlate: e.target.value })}
                  placeholder="e.g. Dhaka Metro Ga-24-3812"
                  className="w-full border border-[#E5E3F1] rounded-xl px-3.5 py-3 text-sm outline-none text-[#14142B] placeholder:text-[#B4B2C4]"
                />
              </label>

              <div className="mb-7">
                <span className="block text-xs font-semibold tracking-wide text-[#14142B] mb-2">
                  AVAILABLE SEATS
                </span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      update({ seats: Math.max(1, form.seats - 1) })
                    }
                    className="w-9 h-9 rounded-full border border-[#E5E3F1] flex items-center justify-center text-[#14142B]"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-lg font-bold text-[#14142B] w-4 text-center">
                    {form.seats}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      update({ seats: Math.min(6, form.seats + 1) })
                    }
                    className="w-9 h-9 rounded-full border border-[#E5E3F1] flex items-center justify-center text-[#14142B]"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {form.role === "both" ? (
                <PrimaryButton onClick={() => setSubStep("passenger")}>
                  Next: Passenger preferences
                </PrimaryButton>
              ) : (
                <PrimaryButton onClick={finish}>
                  Finish — Get riding!
                </PrimaryButton>
              )}
            </>
          )}

        {/* ---------------- STEP 3: PASSENGER CATEGORY ---------------- */}
        {step === 3 &&
          (form.role === "need" || (form.role === "both" && subStep === "passenger")) && (
            <>
              <h1 className="text-2xl font-bold text-[#14142B]">
                Passenger category
              </h1>
              <p className="text-[#6B7280] text-sm mt-1 mb-6">
                This helps us suggest the best rides for you.
              </p>

              <div className="flex flex-col gap-3 mb-7">
                {CATEGORIES.map((c) => (
                  <OptionCard
                    key={c.id}
                    selected={form.passengerCategory === c.id}
                    onClick={() => update({ passengerCategory: c.id })}
                    icon={c.icon}
                    title={c.title}
                    description={c.description}
                  />
                ))}
              </div>

              <PrimaryButton onClick={finish}>
                Finish — Start riding!
              </PrimaryButton>
            </>
          )}
      </div>
    </div>
  );
};

export default Signup;