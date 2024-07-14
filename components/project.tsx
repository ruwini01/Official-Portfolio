"use client";
import { skills } from "@/lib/data";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof skills)[number];

export default function Project({ title, images }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} =  useScroll({
        target:ref,
        offset:["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div 
            
        ref={ref}
        style={{
            scale:scaleProgress,
            opacity:opacityProgress
        }} 
        >
        <section className="lg:w-full rounded-lg overflow-hidden shadow-lg m-6">
        <h3 className='tracking-wider m-10 font-medium'>{title}</h3>
        <ul className="flex flex-row mt-4 mb-4 gap-2 mx-auto justify-center lg:space-x-10 sm:space-x-4">
            {images.map((image, index) => (
            <li className='flex flex-col items-center justify-center' key={index}>
                <Image src={image.src} width={30} height={50} alt='Skills logo' />
                <span className="ml-0 font-thin text-xs mt-1">{image.name}</span>
            </li>
            ))}
        </ul>
        </section>
        </motion.div>
  );
}
