import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';

export default function Projects() {
  return (
    <section className='flex flex-col items-center justify-center mt-32 lg:mt-0'>
      <SectionHeading>My Recent Projects</SectionHeading>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className='max-w-80 rounded-lg overflow-hidden shadow-lg hover:bg-gray-100 scale-90 lg:hover:scale-95'>
      <div className='flex justify-center'>
        <Image src={imageUrl} width={400} height={200} alt={title} quality={95} className='h-52' />
      </div>
      <div className='px-6 py-4 text-center'>
        <h3 className='font-medium text-lg mb-2'>{title}</h3>
        <p className='text-gray-700 text-sm font-light mb-3 leading-relaxed'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 mx-5 justify-center'>
          {tags.map((tag, index) => (
            <li key={index} className=' px-3 py-1 text-[0.6rem] tracking-wider text-[#D45A5A]/[0.8] rounded-3xl border border-[#D45A5A]/[0.4]'>{tag}</li>
          ))}
        </ul>
        <button className='bg-[#D45A5A] hover:bg-red-500 text-white text-xs font-semibold py-2 mt-6 px-4 rounded-xl'>
          View Project
        </button>
      </div>
    </section>
  );
}
