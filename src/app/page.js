// import Hero from '@/components/Hero'
// import WhatWeDo from '@/components/WhatWeDo'
// import React from 'react'

// const page = () => {
//   return (
//     <div>

//        <Hero />
//       <WhatWeDo />
      
//     </div>
//   )
// }

// export default page


"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Heart, Sparkles, PartyPopper, Utensils } from "lucide-react";

const ValentineModal = () => {
  const [accepted, setAccepted] = useState(false);
  const noBtnRef = useRef(null);
  const yesBtnRef = useRef(null);
  const containerRef = useRef(null);

  // Floating Hearts Background Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".floating-heart", {
        y: "-100vh",
        x: "random(-100, 100)",
        rotation: "random(-90, 90)",
        duration: "random(4, 8)",
        repeat: -1,
        ease: "none",
        stagger: { each: 0.5, from: "random" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Logic to move the "No" button
  const moveNoButton = () => {
    const padding = 50;
    const container = containerRef.current.getBoundingClientRect();
    const btn = noBtnRef.current.getBoundingClientRect();

    // Calculate random position within container bounds
    const newX = Math.random() * (container.width - btn.width - padding);
    const newY = Math.random() * (container.height - btn.height - padding);

    gsap.to(noBtnRef.current, {
      left: newX,
      top: newY,
      duration: 0.3,
      ease: "power2.out",
    });

    // Make the "Yes" button slightly bigger every time they try to click "No"
    gsap.to(yesBtnRef.current, {
      scale: "+=0.1",
      duration: 0.2
    });
  };

  if (accepted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDFBF7] p-6 text-center">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-pink-200 animate-bounce">
          <PartyPopper size={60} className="text-pink-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-dark-navy mb-2">Yay! It's a Date! ❤️</h1>
          <p className="text-gray-500 font-medium">I knew you couldn't resist!</p>
          <div className="mt-6 flex justify-center gap-2">
             <Utensils className="text-brand-purple" />
             <span className="font-bold text-dark-navy">8:00 PM - Be Ready!</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#FDFBF7] flex items-center justify-center overflow-hidden"
    >
      {/* Floating Hearts Decoration */}
      {[...Array(15)].map((_, i) => (
        <Heart 
          key={i} 
          className="floating-heart absolute bottom-[-50px] text-pink-200/50 pointer-events-none" 
          size={Math.random() * 30 + 20}
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}

      {/* Main Modal */}
      <div className="relative z-10 w-full max-w-lg mx-4 bg-white/80 backdrop-blur-xl p-8 sm:p-16 rounded-[4rem] border border-white shadow-[0_20px_50px_rgba(255,47,179,0.1)] text-center">
        <div className="inline-flex p-4 bg-pink-50 rounded-full mb-8 animate-pulse">
          <Heart size={40} className="text-pink-500 fill-pink-500" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-black text-dark-navy mb-4 leading-tight">
           Hey monu , will you be my <br />
          <span className="text-gradient">Valentine?</span>
        </h2>
        
        <p className="text-gray-500 font-medium mb-12">
          Choose wisely... (if you even can!)
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 min-h-[100px]">
          {/* YES BUTTON */}
          <button 
            ref={yesBtnRef}
            onClick={() => setAccepted(true)}
            className="px-10 py-4 bg-linear-to-tr from-pink-500 to-brand-purple text-white rounded-full font-bold text-lg shadow-xl shadow-pink-200 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          >
            Yes! 💍
          </button>

          {/* NO BUTTON (Moving) */}
          <button 
            ref={noBtnRef}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="sm:absolute px-10 py-4 bg-gray-100 text-gray-400 rounded-full font-bold text-lg border border-gray-200 cursor-not-allowed"
          >
            No 😢
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-300">
          <Sparkles size={16} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Designed for you</span>
          <Sparkles size={16} />
        </div>
      </div>
    </section>
  );
};

export default ValentineModal;