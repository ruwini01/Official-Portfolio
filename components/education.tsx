"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { education, certificates } from '@/lib/data';
import SectionHeading from './section-heading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Assuming education and certificates data types are defined elsewhere (see previous response)

function chunkArray(array: any[], chunkSize: number): any[][] {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const leftCardVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.2 } },
};

const rightCardVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.2 } },
};

export default function Education() {
  const chunkedCertificates = chunkArray(certificates, 3);

  return (
    <motion.section
      className="flex flex-col items-center justify-center mt-32 lg:mb-32 lg:mt-0 mx-8 lg:mx-28 scroll-mt-24"
      id="education"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SectionHeading>Education & Certifications</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        <motion.div
          key="education"
          className="rounded-lg overflow-hidden shadow-lg p-4"
          variants={leftCardVariants}
          initial="initial"
          whileInView="animate"
        >
          <p className="tracking-wider font-semibold text-lg mb-8">Education</p>
          {education.map((item, index) => (
            <div key={index} className="flex flex-col mb-10">
              <p className="tracking-wider font-light">{item.date}</p>
              <p className="tracking-wider font-medium">{item.name}</p>
              <p className="tracking-wider font-light">{item.institute}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          key="certifications"
          className="rounded-lg overflow-hidden shadow-lg p-4"
          variants={rightCardVariants}
          initial="initial"
          whileInView="animate"
        >
          <p className="tracking-wider font-semibold text-lg mb-4">Certifications</p>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {chunkedCertificates.map((chunk, index) => (
              <SwiperSlide key={index}>
                {chunk.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-row items-center mb-8 lg:mb-6">
                    <Image
                      src={item.imageUrl}
                      alt="Institute name"
                      width={50}
                      height={50}
                      className="mr-4 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium">{item.name}</p>
                      <p className="font-light">{item.institute}</p>
                      <p className="font-light">{item.date}</p>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
}

