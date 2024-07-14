"use client";
import React from 'react'
import github from '@/public/github.png'
import linkedin from '@/public/linkedin.png'
import instagram from '@/public/instagram.png'
import facebook from '@/public/facebook.png'
import Image from 'next/image'
import { links } from '@/lib/data'; 
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Footer() {
    const {activeSection, setActiveSection, setTimeOfLastClick} =  useActiveSectionContext();

  return (
    <section id='footer' className='flex w-full flex-col items-center justify-center gap-y-11'>
        <div className="w-full h-0.5 bg-[#fad2d2] mt-4 mb-4"></div>

        <div className='flex flex-row gap-x-4'>
            <Image src={github} width={25} height={25} alt="Github"/>
            <Image src={linkedin} width={25} height={25} alt="Linkedin"/>
            <Image src={instagram} width={25} height={25} alt="Instagram"/>
            <Image src={facebook} width={25} height={25} alt="Facebook"/>
        </div>
        <div>
        
    <ul className='flex w-full flex-wrap items-center justify-center gap-y-1 gap-x-6 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-20'>

        {
          links.map((link) => (
            <li className='h-3/4 flex items-center justify-center relative lg:tracking-widest font-extralight' key={link.hash}>
              <Link className={clsx('flex w-full items-center justify-center hover:text-[#D45A5A] transition', {' text-[#d25252]':activeSection === link.name})} href={link.hash} onClick={()=> {setActiveSection(link.name); setTimeOfLastClick(Date.now())}}>{link.name}</Link>
            </li>
          ))
        }
      </ul>


        </div>
        <div>
            <p className='font-normal  text-xs lg:text-sm text-gray-400 mb-4'>© 2024 ruwinitharanga - All Rights Reserved.</p>
        </div>
      
    </section>
  )
}
