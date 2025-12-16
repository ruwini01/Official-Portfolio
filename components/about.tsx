"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.section
        ref={ref}
        className="max-w-[22rem] lg:max-w-[60rem] text-center leading-8 sm:mb-40 mt-32 lg:mt-0 scroll-mt-40 lg:scroll-mt-60"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">

          I specialize in building the invisible engines that drive powerful digital experiences. With a deep love for <span className="text-red-500 font-medium">Java</span> and <span className="text-red-500 font-medium">JavaScript</span>, I craft scalable architectures, design efficient data flows, and ensure that every interaction is fast, secure, and reliable.

          My work lives at the intersection of performance and precision — from designing APIs that feel effortless to integrating systems that quietly do the heavy lifting. I thrive on solving complex challenges with clean, maintainable code that supports seamless user journeys.

          Technology should feel like magic. I build the spells behind the scenes.
        </p>
        <div className="flex justify-center mt-8">
          <a
            href="#education"
            className="bg-[#D45A5A] hover:bg-[#D93D3D] w-36 text-white font-medium lg:text-base sm:text-sm py-2 rounded-full flex justify-center items-center outline-none hover:scale-110 active:scale-105"
          >
            View More
          </a>
        </div>
      </motion.section>
    </div>
  );
}

function setActiveSection(arg0: string) {
  throw new Error('Function not implemented.');
}
