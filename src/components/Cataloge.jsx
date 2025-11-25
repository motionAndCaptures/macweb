"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function WorkIntroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("leave");
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.06 },
    },
    leave: { opacity: 0, y: -24, transition: { duration: 0.45, ease: "easeIn" } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    leave: { opacity: 0, y: -18, transition: { duration: 0.35, ease: "easeIn" } },
  };

  return (
    <section ref={ref} className="w-full bg-black text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="
          mx-auto 
          max-w-6xl 
          px-4 
          pt-24 
          pb-16 
          sm:pt-24 sm:pb-24 
          md:pt-28 md:pb-28
        "
      >

        {/* MOBILE: FULL WIDTH CONTENT */}
        {/* DESKTOP: GRID WITH LINE */}
        <div className="
          flex flex-col gap-6
          md:grid md:grid-cols-[8px_1fr] md:gap-12
        ">
          
          {/* Decorative line – only desktop */}
          <motion.div
            variants={item}
            aria-hidden
            className="hidden md:block"
          >
            <div className="h-full w-px bg-[#D4AF37]" />
          </motion.div>

          {/* Content */}
          <div className="text-left">
            <motion.h2
              variants={item}
              className="
                font-serif 
                text-3xl 
                leading-[1.3]
                sm:text-5xl sm:leading-[1.2]
                md:text-7xl md:leading-[1.1]
                text-white
              "
            >
              Our Work Speaks for
              <br className="hidden sm:block" /> Itself!
            </motion.h2>

            <motion.p
              variants={item}
              className="
                mt-6 
                text-sm leading-6
                sm:text-lg sm:leading-8
                md:text-xl md:leading-9
                text-white/80 
                max-w-3xl
              "
            >
              Motion and Capture Films offers professional video editing services 
              that turn raw footage into polished, impactful stories. From corporate 
              promos and documentaries to weddings and social media content, we deliver 
              cinematic edits with expert color grading, sound design, motion graphics, 
              and more. Our team ensures every frame supports your vision, creating 
              visually compelling content that engages and resonates with your audience.
            </motion.p>

            <motion.div variants={item} className="mt-8 sm:mt-10">
              <a
                href="/contact"
                className="
                  inline-block 
                  rounded-none 
                  bg-[#D4AF37] 
                  px-6 py-3 
                  sm:px-8 sm:py-4 
                  text-black 
                  font-medium 
                  shadow-sm 
                  transition 
                  hover:-translate-y-0.5 
                  focus:outline-none 
                  focus-visible:ring-2 
                  focus-visible:ring-yellow-400
                "
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
