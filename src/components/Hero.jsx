"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Smartphone, Globe, Code, Rocket, ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const container = useRef(null);
  const typeTarget = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Entrance Stagger
      gsap.from(".hero-el", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // 2. STABLE Typewriter 
      const text = "Digital Solutions for Startups";
      let charIndex = 0;
      const typeAction = setInterval(() => {
        if (charIndex <= text.length) {
          if (typeTarget.current) typeTarget.current.textContent = text.substring(0, charIndex);
          charIndex++;
        } else {
          clearInterval(typeAction);
        }
      }, 50);

      // 3. Card Animations
      gsap.to(".showcase-card", {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        stagger: 0.4
      });

      // 4. Background Ring Animations
      gsap.to(".ring-svg", {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative pt-24 pb-12 px-6 min-h-[90vh] flex items-center bg-[#FDFBF7] overflow-hidden">
      
      {/* --- VISIBLE ANIMATED RINGS --- */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="ring-svg absolute w-[450px] h-[450px] border border-cyan-blue/15 rounded-full">
           <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-blue rounded-full blur-[1px]" />
        </div>
        <div className="ring-svg absolute w-[650px] h-[650px] border border-brand-purple/10 rounded-full scale-110" style={{ animationDirection: 'reverse' }}>
           <div className="absolute bottom-20 right-20 w-3 h-3 bg-brand-purple/20 rounded-full blur-[2px]" />
        </div>
        <div className="ring-svg absolute w-[900px] h-[900px] border border-pink-magenta/5 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="text-center lg:text-left">
          
          {/* Micro Astra Badge */}
          <div className="hero-el inline-flex mb-6">
            <div className="relative p-[1px] rounded-full overflow-hidden flex items-center justify-center">
              <span className="absolute inset-[-500%] bg-[conic-gradient(from_90deg_at_50%_50%,#00B5E2_0%,#8A2BE2_50%,#FF2FB3_100%)] animate-[spin_5s_linear_infinite]" />
              <div className="relative flex items-center gap-2 px-4 py-1.5 bg-white rounded-full">
                <Rocket size={12} className="text-brand-purple" />
                <span className="text-[10px] font-bold tracking-widest text-dark-navy uppercase">
                  Astra Power Enabled
                </span>
              </div>
            </div>
          </div>

          {/* HEADING - Reserved Height for stability */}
          <div className="min-h-[110px] sm:min-h-[140px] lg:min-h-[160px]">
            <h1 className="hero-el text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] text-dark-navy">
              We Build <span className="text-gradient">Scalable</span> <br />
              <span className="text-dark-navy/90 block mt-1">
                <span ref={typeTarget}></span>
                <span className="inline-block w-[2px] h-7 lg:h-10 bg-cyan-blue ml-2 align-middle animate-pulse"></span>
              </span>
            </h1>
          </div>
          
          <p className="hero-el text-sm sm:text-base mb-8 text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Specializing in high-performance Flutter mobile apps and React ecosystems. 
            We turn MVPs into global products using clean architecture.
          </p>

          <div className="hero-el flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="btn-brand py-3 px-10 text-sm font-bold flex items-center gap-2 group shadow-xl shadow-cyan-blue/20 rounded-full border-2 border-[#8A2BE2]/20 text-sm font-bold text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white transition-all cursor-pointer"
            >
              Start Project 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side - Floating Showcase */}
        <div className="relative h-[350px] lg:h-[400px] flex items-center justify-center">
          
          {/* Card: React */}
          <div className="showcase-card absolute top-5 left-5 w-48 sm:w-56 p-5 glass rounded-2xl shadow-xl z-20 border-white">
             <div className="flex gap-1 mb-4">
               <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
               <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
               <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
             </div>
             <Globe size={24} className="text-cyan-blue mb-2" />
             <p className="text-[11px] font-bold text-dark-navy uppercase tracking-tighter">React Web App</p>
             <div className="h-1 w-full bg-gray-100 mt-4 rounded-full" />
             <div className="h-1 w-2/3 bg-gray-100 mt-2 rounded-full" />
          </div>

          {/* Card: Flutter */}
          <div className="showcase-card absolute bottom-5 right-5 w-44 sm:w-52 p-6 glass rounded-[2.5rem] shadow-2xl z-30 border-white">
            <div className="w-full h-28 bg-gradient-to-br from-brand-purple to-pink-magenta rounded-2xl mb-4 flex items-center justify-center">
              <Smartphone size={36} className="text-white" />
            </div>
            <p className="text-[10px] font-bold text-center text-dark-navy uppercase tracking-widest">Flutter Mobile</p>
          </div>

          {/* Backend Badge */}
          <div className="showcase-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 p-3 glass rounded-xl z-10 border-cyan-blue/10 bg-white/50 backdrop-blur-sm">
            <Code size={18} className="text-pink-magenta mx-auto mb-1" />
            <p className="text-[8px] text-center font-bold text-gray-400 uppercase tracking-tighter">Scalable API</p>
          </div>

        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;