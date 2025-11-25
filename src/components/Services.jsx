"use client";
import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const items = [
  {
    title: "Video Editing",
    desc:
      "We offer professional video editing for YouTube creators, short films, brand reels, and social media influencers.",
    Icon: () => (
      <svg viewBox="0 0 120 120" className="h-16 w-16 md:h-20 md:w-20 fill-white">
        <path d="M60 60c0 22.091-17.909 40-40 40V20c22.091 0 40 17.909 40 40Z" />
        <path d="M60 60c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40Z" />
      </svg>
    ),
  },
  {
    title: "Video Production",
    desc:
      "From scripting and storyboarding to filming and final cut—complete video production services for businesses and individuals.",
    Icon: () => (
      <svg viewBox="0 0 120 120" className="h-16 w-16 md:h-20 md:w-20 fill-white">
        <circle cx="50" cy="60" r="35" />
        <path d="M50 25a35 35 0 0 1 35 35H50Z" className="fill-white" />
      </svg>
    ),
  },
  {
    title: "Event Coverage",
    desc:
      "Capture your big day in a cinematic style with our premium event video editing and shooting services.",
    Icon: () => <Logo className="w-16 h-16 text-white/80" />,
  },
];

export default function Services() {
  const railRef = useRef(null);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 md:pb-24 md:pt-10">

        {/* Heading */}
        <h2 className="text-center font-serif text-3xl sm:text-5xl md:text-7xl tracking-tight text-[#D4AF37]">
          Services
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
          We turn visions into visuals that move hearts and spark action. Whether it's a
          brand story, a music video, a wedding, or a reel that needs to pop — we capture
          more than just motion. Let's create something unforgettable.
        </p>

        {/* Mobile horizontal scroll (NO ARROWS) */}
        <div className="mt-12 md:hidden relative">
          <div
            ref={railRef}
            className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-6 pr-4 -mr-4"
          >
            {items.map(({ title, desc, Icon }) => (
              <article
                key={title}
                data-card
                className="min-w-[80%] snap-center rounded-3xl bg-[#111111] p-7 shadow-[0_25px_55px_rgba(0,0,0,0.45)] ring-1 ring-white/10 text-center"
              >
                <div className="flex justify-center">
                  <Icon />
                </div>
                <h3 className="mt-5 font-serif text-2xl tracking-tight text-[#D4AF37]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="mt-16 hidden md:grid grid-cols-3 gap-12 services">
          {items.map(({ title, desc, Icon }) => (
            <article key={title} className="flex flex-col items-center text-center">
              <Icon />
              <h3 className="mt-6 font-serif text-2xl md:text-3xl tracking-tight text-[#D4AF37]">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/80 max-w-xs">
                {desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
