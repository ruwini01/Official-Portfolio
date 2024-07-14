"use client";
import React from 'react';
import {motion} from 'framer-motion';
import { links } from '@/lib/data'; 
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const {activeSection, setActiveSection, setTimeOfLastClick} =  useActiveSectionContext();
  
  return <header className='z-[999] relative'>
    <motion.div className= 'fixed top-0 left-0 h-[4.5rem] w-full bg-white bg-opacity-80 backdrop-blur-[0.5rem] sm:h-[4.25rem]'
      initial={{y: -200, opacity:0}}
      animate={{y:0, opacity:1}}>

    </motion.div>

    <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
    <ul className='flex w-full flex-wrap items-center justify-center gap-y-1 gap-x-4 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-20'>

        {
          links.map((link) => (
            <motion.li 
              className='h-3/4 flex items-center justify-center relative' key={link.hash}
              initial={{y: -200, opacity:0}}
              animate={{y:0, opacity:1}}>
                
              <Link className={clsx('flex w-full items-center justify-center hover:text-[#D45A5A] transition', {' text-[#d25252]':activeSection === link.name})} href={link.hash} onClick={()=> {setActiveSection(link.name); setTimeOfLastClick(Date.now())}}>{link.name}</Link>
            </motion.li>
          ))
        }
      </ul>

    </nav>

  </header>;
}
