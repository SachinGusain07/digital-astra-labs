"use client";
import React, { useEffect, useRef } from 'react';
import { Smartphone, Globe, Cpu, Rocket, ChevronRight, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { 
    title: "Mobile Apps", 
    desc: "High-performance Flutter applications delivering native fluidity on both iOS and Android platforms.", 
    icon: <Smartphone size={22} />, 
    color: "#00B5E2" 
  },
  { 
    title: "Web Platforms", 
    desc: "Scalable React and Next.js solutions built for speed, SEO, and pixel-perfect responsiveness.", 
    icon: <Globe size={22} />, 
    color: "#8A2BE2" 
  },
  { 
    title: "Backend Systems", 
    desc: "Robust API architectures using FastAPI and Node.js, designed to handle massive concurrent growth.", 
    icon: <Cpu size={22} />, 
    color: "#FF2FB3" 
  },
  { 
    title: "MVP Strategy", 
    desc: "Rapid engineering cycles to help founders validate ideas and launch production-ready products faster.", 
    icon: <Rocket size={22} />, 
    color: "#3EC6FF" 
  }
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Background Animation (Floating Blobs)
      gsap.to(".bg-blob", {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // 2. Fix Flickering: Set initial state immediately
      gsap.set(".reveal-card", { autoAlpha: 0, y: 30 });

      // 3. Staggered reveal for cards
      gsap.to(".reveal-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%", 
          toggleActions: "play none none none"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="relative py-24 px-6 bg-[#FDFBF7] overflow-hidden"
    >
      {/* --- RELEVANT BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `radial-gradient(#0A0F2C 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
        
        {/* Animated Astra Blobs */}
        <div className="bg-blob absolute top-1/4 -left-20 w-80 h-80 bg-cyan-blue/10 blur-[100px] rounded-full" />
        <div className="bg-blob absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-purple/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="reveal-card text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full mb-5 shadow-sm">
            <Zap size={12} className="text-cyan-blue fill-cyan-blue" />
            <span className="text-[10px] font-bold tracking-widest text-[#0A0F2C] uppercase">Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F2C] leading-tight mb-4">
            Engineering <span className="text-gradient">Solutions</span> <br className="hidden sm:block" /> 
            for the Future
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed font-medium">
            We architect digital platforms with clean code and scalable infrastructure, 
            ensuring your startup is built to grow.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="reveal-card group relative p-8 bg-white/70 backdrop-blur-sm rounded-[2.5rem] border border-gray-100 
                         hover:border-cyan-blue/30 transition-all duration-500 shadow-sm 
                         hover:shadow-[0_20px_50px_rgba(10,15,44,0.03)] cursor-default"
            >
              {/* Animated Icon Container */}
              <div 
                className="mb-8 inline-flex p-4 rounded-2xl bg-white shadow-sm border border-gray-50 
                           transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ color: s.color }}
              >
                {s.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0A0F2C] mb-4 leading-tight">
                {s.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-8 font-medium">
                {s.desc}
              </p>

              {/* Link Micro-interaction */}
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#0A0F2C] uppercase tracking-widest group-hover:text-cyan-blue transition-colors">
                Explore Tech 
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Technical Approach Summary */}
        <div className="reveal-card mt-24 pt-12 border-t border-gray-200/50 flex flex-wrap justify-center gap-y-6 gap-x-10 sm:gap-x-16">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Architecture</span>
            <span className="text-sm font-bold text-[#0A0F2C]">Clean & Modular</span>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden sm:block" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Development</span>
            <span className="text-sm font-bold text-[#0A0F2C]">Agile Milestones</span>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden sm:block" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Thinking</span>
            <span className="text-sm font-bold text-[#0A0F2C]">Long-Term Scalability</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;