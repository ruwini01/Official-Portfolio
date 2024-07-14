"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const {ref} = useSectionInView("Contact");
    
  return (
    <motion.section id='contact' ref = {ref} className="flex flex-col items-center min-h-screen mt-32 lg:mt-0 scroll-mt-32" 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.2}}
        >
      <div className="w-full flex flex-col items-center justify-center">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 text-center ml-6 mr-6 -mt-4">
          Contact me directly at{' '}
          <a className="underline" href="mailto:ruwini@gmail.com">
            ruwini@gmail.com
          </a>{' '}
          or through this form.
        </p>
        <form className="mt-10 flex flex-col" action={async (formData) => {console.log(formData)}}>
          <input
            className="h-14 rounded-lg border border-black/10 p-4 md:w-96 w-full"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg border border-black/10 p-4 md:w-96 w-full"
            placeholder="Your message"
            required
            maxLength={500}
          />
          <button
            type="submit"
            className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none hover:bg-[#141313] focus:scale-110 hover:scale-110 active:scale-105 transition-colors  mx-auto mt-4" // Centered horizontally with margin
          >
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
}
