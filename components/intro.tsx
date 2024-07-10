import Image from 'next/image'
import React from 'react'
import profile from '@/public/profilepic.png'

export default function Intro() {
  return (
    <section className='relative'>
      <div className='absolute top-[10rem] right-[11rem] h-[15.25rem] w-[35.25rem] rounded-full blur-[6rem] bg-[#fecaca] z-[-1] sm:w-[68.75rem]'></div>
      <div className='absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] bg-[#ffffff] z-[-1] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
      
      <div className='flex items-center justify-center sm:justify-end'>
        <div className='relative'>
          <Image src={profile} width={300} height={300} alt='Profile Photo' className='relative z-10' />
        </div>
      </div>
    </section>
  )
}
