"use client";
import Image from 'next/image'
import React from 'react'
import profile from '@/public/profilepic.png'
import github from '@/public/github.png'
import linkedin from '@/public/linkedin.png'
import instagram from '@/public/instagram.png'
import facebook from '@/public/facebook.png'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className='relative lg:mt-[-2rem] flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:h-screen lg:space-x-8'>
      
      <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.8,
      }}
       className='flex items-center justify-center lg:items-center lg:justify-center lg:w-1/2 relative'>
        <div className='absolute w-36 h-36 bg-[#825757] rounded-full blur-[4rem] z-0 top-[4rem] lg:top-[6rem] lg:ml-20' />
        <div className='relative z-10'>
          <Image src={profile} width={280} height={300} alt='Profile Photo' className='relative z-10 top-[-2rem] lg:ml-20' />
        </div>
      </motion.div>

      <motion.div
        className='flex flex-col items-center lg:items-start lg:w-1/2 lg:ml-5 lg:mt-[-2rem]'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.8,
        }}
      >
        <div className='flex items-center justify-center lg:justify-start text-xl font-semibold my-2 tracking-widest w-full'>
          <div className='w-6 border-t-2 border-black mr-2 lg:mr-4' />
          <span className=''>Hello</span>
          <div className='w-6 border-t-2 border-black ml-2 lg:ml-4' />
        </div>

        <h1 className='text-2xl lg:text-4xl sm:text-xs font-bold tracking-widest'>
          I’m <span className='text-red-500'>Ruwini</span> Tharanga
        </h1>
        
        <p className='text-[#808080] font-semibold text-base lg:text-lg mt-1'>
          Developer | UX/UI Designer | AI Enthusiast
        </p>

        <div className='flex mt-6 space-x-6 lg:space-x-10 justify-center lg:pl-10 pt-6'>
          <Link href='/CV.pdf' download={true} target='_blank' className='bg-[#D45A5A] hover:bg-[#D93D3D] w-36 text-white font-medium lg:text-base sm:text-sm py-2 rounded-full flex justify-center items-center outline-none hover:scale-110 active:scale-105'>MY RESUME</Link>
          <a href='#contact'  className='bg-[#D45A5A] hover:bg-[#D93D3D] w-36 text-white font-medium lg:text-base sm:text-sm py-2 rounded-full flex justify-center items-center outline-none hover:scale-110 active:scale-105'>CONTACT ME</a>
        </div>


        <div className='flex mt-6 space-x-4 justify-center lg:px-32'>
          <a href='https://github.com/ruwini01' target='_blank' className='hover:scale-110 active:scale-105'><Image src={github} width={25} height={25} alt='github' /></a>
          <a href='https://www.linkedin.com/in/ruwini-tharanga-443311286' target='_blank' className='hover:scale-110 active:scale-105'><Image src={linkedin} width={25} height={25} alt='linkedin' /></a>
          <a href='https://www.facebook.com/profile.php?id=100086256606607&mibextid=PtKPJ9' target='_blank' className='hover:scale-110 active:scale-105'><Image src={facebook} width={25} height={25} alt='facebook' /></a>
          <a href='#' target='_blank' className='hover:scale-110 active:scale-105'><Image src={instagram} width={25} height={25} alt='instagram' /></a>
        </div>

      </motion.div>

    </section>
  )
}
