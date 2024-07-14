import React from "react";
import gonuts from "@/public/Gonuts.png";
import healthXplore from "@/public/heathXplore.png";
import html from '@/public/html.png'
import css from '@/public/css-3.png'
import js from '@/public/js.png'
import python from '@/public/python.png'
import java from '@/public/java.png'
import php from '@/public/web.png'
import figma from '@/public/figma.png'
import react from '@/public/physics.png'
import jquery from '@/public/web (1).png'
import express from '@/public/express.png'
import bootstrap from '@/public/bootstrap.png'
import mysql from '@/public/mysql.png'
import mongodb from '@/public/mongodb.png'
import cousera from '@/public/coursera.png'




export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "HealthXplore",
    description:
      "Innovative health app prototype using Figma for personalized wellness tracking and management.",
    tags: ["Figma", "Next.js", "MongoDB", "Express.js", "Prisma"],
    imageUrl: gonuts,
  },
  {
    title: "E-Commerce website",
    description:
      "E-commerce website for Gonuts With Donuts for discovering and ordering bakery food items effortlessly.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: healthXplore,
  },
  {
    title: "HealthXplore",
    description:
      "Innovative health app prototype using Figma for personalized wellness tracking and management.",
    tags: ["Figma", "Next.js", "MongoDB", "Express.js", "Prisma"],
    imageUrl: gonuts,
  },
  {
    title: "E-Commerce website",
    description:
      "Full stack e-commerce web site for Gonuts With Donuts for discovering and ordering bakery food items effortlessly.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: healthXplore,
  },
] as const;


export const skills = [
  {
    title: "Front-End & Back-End",
    images: [
      { name: "HTML", src: html },
      { name: "CSS", src: css },
      { name: "Java Script", src: js },
      { name: "Python", src: python },
      { name: "Java", src: java },
      { name: "PHP", src: php },
    ]
  },
  {
    title: "UI/UX",
    images: [
      { name: "Figma", src: figma },
    ]
  },
  {
    title: "Frameworks & Libraries",
    images: [
      { name: "React", src: react },
      { name: "jQuery", src: jquery },
      { name: "Express", src: express },
      { name: "Bootstrap", src: bootstrap},
    ]
  },
  {
    title: "Databases",
    images: [
      { name: "MYSQL", src: mysql },
      { name: "MONGODB", src: mongodb },
   
    ]
  },

  ] as const


  export const education = [
    {
      date: '2022-2026',
      name: 'BSc.Information Technology',
      institute: 'University of Jaffna',

    },
    {
      date: '2021-2022',
      name: 'Java Application Development',
      institute:'National Institue of Business Management (NIBM)'
    },
  ] as const



  export const certificates = [
    {
      imageUrl: mongodb,
      name: 'MongoDB Data medling Path',
      institute: 'MongoDB',
      date:'Jun 2024'
    },

    {
      imageUrl: cousera,
      name: 'Meta Front-End Develpoment',
      institute: 'Coursera',
      date:'Mar 2024'
    },

    {
      imageUrl: cousera,
      name: 'Meta Programming With Java Script',
      institute: 'Coursera',
      date:'Mar 2024'
    },

    {
      imageUrl: mongodb,
      name: 'MongoDB Data medling Path',
      institute: 'MongoDB',
      date:'Jun 2024'
    },

    {
      imageUrl: cousera,
      name: 'Meta Front-End Develpoment',
      institute: 'Coursera',
      date:'Mar 2024'
    },


  ] 



