import React from 'react';
import SectionHeading from './section-heading';
import { skills } from '@/lib/data';
import Image from 'next/image';

export default function Skills() {
  return (
    <section className='flex flex-col items-center justify-center mt-32 lg:mt-0'>
      <SectionHeading>My Skills</SectionHeading>
      <div className='flex flex-col justify-center w-full'>
        {skills.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof skills)[number];

function Project({ title, images }: ProjectProps) {
  return (
    <section className="lg:w-full rounded-lg overflow-hidden shadow-lg m-6">
      <h3>{title}</h3>
      <ul className="flex flex-row mt-4 gap-2 mx-auto justify-center space-x-10">
        {images.map((image, index) => (
          <li className=' ' key={index}>
            <Image src={image.src} width={30} height={50} alt='Skills logo' />
            {image.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
