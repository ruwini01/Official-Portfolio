"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { skills } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Skills() {
  const {ref} = useSectionInView("Skills");

  return ( 
    <section ref={ref} id='skills' className='flex flex-col items-center justify-center mt-32 lg:mb-32 lg:mt-0 scroll-mt-28'>
      <SectionHeading>My Skills</SectionHeading>
      <div className='flex flex-col justify-center w-full lg:scale-90 '>
        {skills.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

