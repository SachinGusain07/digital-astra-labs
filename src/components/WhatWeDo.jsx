"use client";
import React from 'react';
import { Smartphone, Globe, Cpu, Rocket } from 'lucide-react';

const services = [
  {
    title: "Mobile App Development",
    desc: "Cross-platform Flutter apps built with performance and scalability in mind.",
    icon: <Smartphone className="text-cyanBlue" />,
    color: "border-cyanBlue"
  },
  {
    title: "Web Development",
    desc: "Modern, responsive React.js applications backed by high-speed APIs.",
    icon: <Globe className="text-brandPurple" />,
    color: "border-brandPurple"
  },
  {
    title: "Backend Systems",
    desc: "Secure, high-performance architecture using FastAPI and PostgreSQL.",
    icon: <Cpu className="text-pinkMagenta" />,
    color: "border-pinkMagenta"
  },
  {
    title: "MVP for Startups",
    desc: "Rapid development cycles to help founders validate and launch ideas faster.",
    icon: <Rocket className="text-skyBlue" />,
    color: "border-skyBlue"
  }
];

const WhatWeDo = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What We Do</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Full-stack expertise tailored for modern startups.</p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div 
            key={i} 
            className={`p-8 bg-white dark:bg-darkNavy rounded-2xl border-b-4 ${s.color} hover:-translate-y-2 transition-all duration-300 shadow-xl`}
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;