"use client";
import React from 'react';
import SectionHeading from './section-heading';
import {motion} from 'framer-motion';

export default function About() {
  return (
    <div className="flex items-center justify-center">
      <motion.section className="max-w-[22rem] lg:max-w-[60rem] text-center leading-8 sm:mb-40 mt-32 lg:mt-0"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}>
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
          I am a dedicated <span className="text-red-500 font-medium">UX/UI designer</span> and <span className="text-red-500 font-medium">developer</span> with a passion for creating seamless and engaging user experiences. With a strong background in both design and development, I excel at transforming complex problems into intuitive, user-friendly solutions. My goal is to continuously innovate and deliver impactful digital products that meet users' needs and exceed their expectations.
        </p>
      </motion.section>
    </div>
  );
}
