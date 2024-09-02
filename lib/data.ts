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
import snake from '@/public/Snake.png'
import pong from '@/public/pong.png'
import uoj from '@/public/uoj.png'
import nibm from '@/public/nibm.jpeg'
import spm from '@/public/spm.jpeg'
import cisco from '@/public/cisco.png'
import solo from '@/public/solo.png'
import udemy from '@/public/udemy.jpg'




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
    tags: ["Figma"],
    imageUrl: healthXplore,
    link_web: "https://www.behance.net/gallery/202767933/HealthXplore"
  },
  {
    title: "E-Commerce website",
    description:
      "E-commerce website for Gonuts With Donuts for discovering and ordering bakery food items effortlessly.",
    tags: ["React", "Express", "Node.js", "MongoDB"],
    imageUrl: gonuts,
    link_web: "https://github.com/SGopinath89/IT22342024gonuts.git"
  },
  {
    title: "Snake Game",
    description:
      "Python-based Snake Game offering a fun and interactive way to play the classic game with smooth controls.",
    tags: ["Python", "Tkinter", "Turtle Graphics"],
    imageUrl: snake,
    link_web: "https://github.com/ruwini01/snake-game.git"
  },
  {
    title: "Pong Game",
    description:
      "Python-based Pong Game developed using Tkinter and Turtle Graphics, featuring smooth controls and a classic arcade-style gameplay experience.",
    tags: ["Python", "Tkinter", "Turtle Graphics"],
    imageUrl: pong,
    link_web: "https://github.com/ruwini01/pong-game.git"
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
      imageUrl: uoj

    },
    {
      date: '2021-2022',
      name: 'Java Application Development',
      institute:'National Institue of Business Management (NIBM)',
      imageUrl: nibm

    },
    {
      date: '2007-2020',
      name:'',
      institute:'St.Paul\'s Girls\' School Milagiriya',
      imageUrl: spm

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
      imageUrl: cisco,
      name: 'JavaScript Essentials',
      institute: 'Cisco',
      date:'Jan 2024'
    },

    {
      imageUrl: solo,
      name: 'Introduction to C',
      institute: 'sololearn',
      date:'Jun 2024'
    },
    {
      imageUrl: udemy,
      name: '100 Days of Code - Python Pro',
      institute: 'Udemy',
      date:''
    },


  ] 



