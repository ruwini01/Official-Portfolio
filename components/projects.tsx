"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id='projects' className='flex flex-col items-center justify-center mt-32 lg:mt-0 scroll-mt-28 lg:scroll-mt-24 lg:mb-32'>
      <SectionHeading>My Recent Projects</SectionHeading>
      <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} index={index} />
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number] & { index: number };

function Project({ title, description, tags, imageUrl, index }: ProjectProps) {
  return (
    <motion.section
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className='max-w-80 rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 scale-90 lg:hover:scale-95'
    >
      <div className='flex justify-center'>
        <Image src={imageUrl} width={350} height={300} alt={title} quality={95} className='h-40' />
      </div>
      <div className='px-6 py-4 text-center'>
        <h3 className='font-medium text-lg mb-2'>{title}</h3>
        <p className='text-gray-700 text-sm font-light mb-3 leading-relaxed'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 mx-5 justify-center'>
          {tags.map((tag, index) => (
            <li key={index} className='px-3 py-1 text-[0.6rem] tracking-wider text-[#D45A5A]/[0.8] rounded-3xl border border-[#D45A5A]/[0.4]'>{tag}</li>
          ))}
        </ul>
        <button className='bg-[#D45A5A] hover:bg-red-500 text-white text-xs font-semibold py-2 mt-6 px-4 rounded-xl'>
          View Project
        </button>
      </div>
    </motion.section>
  );
}
