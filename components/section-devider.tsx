'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function SectionDivider() {
  return (
    <motion.div
      className="relative my-3 flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="absolute flex space-x-1 bg-white px-2 mt-32 lg:mt-[-8rem]">
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
      <div className="h-32 lg:h-[8rem]"></div>
    </motion.div>
  );
}
