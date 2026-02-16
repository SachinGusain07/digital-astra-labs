"use client";
import React, { useState, useEffect, useRef } from "react";
import { Globe, Code, Mail, Menu, X, Smartphone, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navContent = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // 1. Entrance Animation - Slide down and fade in
    gsap.fromTo(navContent.current, 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
    );

    // 2. Scroll Transformation (The "Floating Island" effect)
    const tl = gsap.to(navContent.current, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "100",
        scrub: 1,
      },
      maxWidth: "92%",
      marginTop: "12px",
      borderRadius: "24px",
      paddingTop: "10px",
      paddingBottom: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.9)", // White with slight transparency
      border: "1px solid rgba(0, 181, 226, 0.2)", // Cyan tinted border
      boxShadow: "0 10px 30px rgba(10, 15, 44, 0.08)", // Soft Navy shadow
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const menuItems = [
    { name: "Services", icon: <Code size={18} />, href: "#services" },
    { name: "Portfolio", icon: <Smartphone size={18} />, href: "#portfolio" },
    { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 w-full z-[100] flex justify-center px-4">
      <nav 
        ref={navContent} 
        className="w-full max-w-7xl mt-4 px-6 py-5 flex items-center justify-between bg-white/50 backdrop-blur-md rounded-[2rem] transition-all duration-300 border border-transparent"
      >
        {/* LOGO - High Contrast Navy */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative p-2 bg-gradient-to-tr from-[#00B5E2] to-[#8A2BE2] rounded-xl transform group-hover:rotate-[-10deg] transition-transform duration-500 shadow-md">
            <img 
              src="/digitalLogo.png" 
              alt="Logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tighter text-[#0A0F2C] uppercase leading-none">
              DIGITAL <span className="text-[#00B5E2]">ASTRA</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.4em] text-[#8A2BE2] uppercase mt-1">LABS</span>
          </div>
        </div>

        {/* DESKTOP MENU - Tight & Sharp */}
        <div className="hidden md:flex items-center gap-2 bg-[#F1F5F9] p-1.5 rounded-2xl border border-gray-200">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-5 py-2 text-[13px] font-bold text-[#0A0F2C]/80 hover:text-[#00B5E2] transition-all group overflow-hidden rounded-xl"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute inset-0 bg-[#00B5E2]/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
            </a>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#00B5E2] via-[#8A2BE2] to-[#FF2FB3] text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all hover:shadow-lg hover:shadow-[#00B5E2]/30 active:scale-95 group">
            Start Project
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#0A0F2C] text-white shadow-lg shadow-navy/20"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - Full Screen Slide */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-white z-[-1] flex flex-col items-center justify-center gap-10 md:hidden transition-transform duration-700 ease-[cubic-bezier(0.9,0,0.1,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Subtle Brand Background elements */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#00B5E2]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-[#8A2BE2]/10 blur-[100px] rounded-full" />

        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-5xl font-black text-[#0A0F2C] hover:text-[#00B5E2] transition-colors flex items-center gap-6 group"
          >
            <span className="text-[#8A2BE2] group-hover:scale-125 transition-transform">{item.icon}</span>
            {item.name}
          </a>
        ))}
        
        <div className="flex flex-col items-center gap-4 mt-4">
          <button className="bg-[#0A0F2C] text-white text-xl py-5 px-12 rounded-2xl font-bold shadow-2xl">
            Book Consultation
          </button>
          <p className="text-gray-400 font-bold text-sm tracking-widest">Digital Astra Labs</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;