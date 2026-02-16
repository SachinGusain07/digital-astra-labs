// // "use client";
// // import React, { useState, useEffect, useRef } from "react";
// // import { Sun, Moon, Layers, Globe, Code, Mail, Menu, X, Smartphone } from "lucide-react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // if (typeof window !== "undefined") {
// //   gsap.registerPlugin(ScrollTrigger);
// // }

// // const Navbar = ({ toggleTheme, theme }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const navContent = useRef(null);
// //   const headerRef = useRef(null);

// //   useEffect(() => {
// //     // 1. Initial Entrance
// //     gsap.from(navContent.current, {
// //       y: -20,
// //       opacity: 0,
// //       duration: 1,
// //       ease: "power3.out",
// //     });

// //     // 2. Scroll Transformation (Floating Island Effect)
// //     const tl = gsap.to(navContent.current, {
// //       scrollTrigger: {
// //         trigger: "body",
// //         start: "top top",
// //         end: "50",
// //         scrub: 0.5,
// //       },
// //       maxWidth: "95%",
// //       marginTop: "10px",
// //       borderRadius: "20px",
// //       paddingTop: "10px",
// //       paddingBottom: "10px",
// //       backgroundColor: theme === "dark" ? "rgba(10, 15, 44, 0.9)" : "rgba(255, 255, 255, 0.9)",
// //       border: "1px solid rgba(0, 181, 226, 0.3)",
// //       boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
// //       ease: "none",
// //     });

// //     return () => {
// //       tl.kill();
// //       ScrollTrigger.getAll().forEach(t => t.kill());
// //     };
// //   }, [theme]);

// //   // Mobile Menu Stagger Effect
// //   useEffect(() => {
// //     if (isOpen) {
// //       gsap.fromTo(".mobile-link", 
// //         { y: 20, opacity: 0 }, 
// //         { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "back.out(2)" }
// //       );
// //       document.body.style.overflow = 'hidden'; // Prevent scroll when menu open
// //     } else {
// //       document.body.style.overflow = 'auto';
// //     }
// //   }, [isOpen]);

// //   const menuItems = [
// //     { name: "Services", icon: <Code size={18} />, href: "#services" },
// //     { name: "Portfolio", icon: <Smartphone size={18} />, href: "#portfolio" },
// //     { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
// //   ];

// //   return (
// //     <header ref={headerRef} className="fixed top-0 w-full z-[100] flex justify-center px-4">
// //       <nav 
// //         ref={navContent} 
// //         className="w-full max-w-7xl mt-4 px-6 py-4 flex items-center justify-between transition-all duration-300"
// //       >
// //         {/* Logo */}
// //         <div className="flex items-center gap-2 group cursor-pointer">
// //           <div className="p-2 bg-linear-to-tr from-cyan-blue to-brand-purple rounded-xl transform group-hover:rotate-12 transition-transform duration-300">
// //             <Layers className="text-white" size={20} />
// //           </div>
// //           <div className="flex flex-col">
// //             <span className="text-base  font-black tracking-tighter  dark:text-white uppercase leading-none">
// //               DIGITAL <span className="text-cyan-blue">ASTRA</span>
// //             </span>
// //             <span className="text-[9px] font-bold tracking-[0.2em] text-brand-purple uppercase">LABS</span>
// //           </div>
// //         </div>

// //         {/* Desktop Links - Hidden on Mobile */}
// //         <div className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-white/5 p-1 rounded-xl">
// //           {menuItems.map((item) => (
// //             <a
// //               key={item.name}
// //               href={item.href}
// //               className="px-4 py-2 text-sm font-bold text-dark-navy/70 dark:text-light-silver/80 hover:text-cyan-blue transition-all rounded-lg hover:bg-white dark:hover:bg-white/10"
// //             >
// //               {item.name}
// //             </a>
// //           ))}
// //         </div>

// //         {/* Action Buttons */}
// //         <div className="flex items-center gap-2">
// //           {/* Theme Toggle */}
// //           <button 
// //             onClick={toggleTheme}
// //             className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-dark-navy dark:text-sky-blue hover:scale-110 transition-all"
// //           >
// //             {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
// //           </button>

// //           {/* Consultation Button - Hidden on very small screens */}
// //           <button className="hidden sm:block btn-brand !py-2 !px-5 !text-xs">
// //             Start Project
// //           </button>

// //           {/* Mobile Menu Toggle */}
// //           <button 
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="md:hidden p-2 rounded-xl bg-dark-navy dark:bg-white text-white dark:text-dark-navy shadow-lg"
// //           >
// //             {isOpen ? <X size={20} /> : <Menu size={20} />}
// //           </button>
// //         </div>
// //       </nav>

// //       {/* Modern Full-Screen Mobile Overlay */}
// //       <div 
// //         className={`fixed inset-0 w-full h-screen bg-white dark:bg-dark-navy z-[-1] flex flex-col items-center justify-center gap-6 md:hidden transition-transform duration-500 ease-in-out ${
// //           isOpen ? "translate-x-0" : "translate-x-full"
// //         }`}
// //       >
// //         {/* Animated Background Blob */}
// //         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-blue/20 blur-[100px] rounded-full animate-pulse" />
        
// //         {menuItems.map((item) => (
// //           <a
// //             key={item.name}
// //             href={item.href}
// //             onClick={() => setIsOpen(false)}
// //             className="mobile-link text-3xl font-black text-dark-navy dark:text-white flex items-center gap-4 group"
// //           >
// //             <span className="p-3 bg-gray-100 dark:bg-white/5 rounded-2xl text-brand-purple group-hover:text-cyan-blue transition-colors">
// //               {item.icon}
// //             </span>
// //             {item.name}
// //           </a>
// //         ))}
        
// //         <div className="mobile-link mt-6 flex flex-col items-center gap-4">
// //           <button className="btn-brand text-lg py-4 px-10 shadow-2xl">
// //             Book Free Call
// //           </button>
// //           <p className="text-gray-400 text-sm font-bold">info@digitalastralabs.com</p>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { Sun, Moon, Layers, Globe, Code, Mail, Menu, X, Smartphone } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const Navbar = ({ toggleTheme, theme }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navContent = useRef(null);

//   useEffect(() => {
//     // 1. Entrance Animation
//     gsap.from(navContent.current, {
//       y: -20,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//     });

//     // 2. Scroll Transformation (Floating Island)
//     // We use a CSS variable for background to prevent theme-flicker
//     const tl = gsap.to(navContent.current, {
//       scrollTrigger: {
//         trigger: "body",
//         start: "top top",
//         end: "50",
//         scrub: 0.5,
//       },
//       maxWidth: "92%",
//       marginTop: "12px",
//       borderRadius: "24px",
//       paddingTop: "12px",
//       paddingBottom: "12px",
//       // Using CSS Variable defined in globals.css
//       backgroundColor: "var(--nav-island-bg)",
//       border: "1px solid var(--nav-border)",
//       boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
//       ease: "none",
//     });

//     return () => {
//       tl.kill();
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []); // Only run once; CSS variables handle the color swap

//   // Mobile Menu Lock Scroll
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : 'auto';
//   }, [isOpen]);

//   const menuItems = [
//     { name: "Services", icon: <Code size={18} />, href: "#services" },
//     { name: "Portfolio", icon: <Smartphone size={18} />, href: "#portfolio" },
//     { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
//   ];

//   return (
//     <header className="fixed top-0 w-full z-[100] flex justify-center px-4 transition-colors rounded-3xl duration-300">
//       <nav 
//         ref={navContent} 
//         className="w-full max-w-7xl mt-4 px-5 py-5 flex items-center justify-between glass transition-all duration-300 rounded-3xl border-transparent"
//       >
//         {/* Logo Section */}
//         <div className="flex items-center gap-2.5 group cursor-pointer">
//           <div className="relative p-2 bg-linear-to-tr from-cyan-blue to-brand-purple rounded-xl transform group-hover:rotate-[-8deg] transition-transform duration-500 shadow-lg shadow-cyan-blue/20">
//             <Layers className="text-white" size={20} />
//           </div>
//           <div className="flex flex-col">
//             <span className="text-base font-black tracking-tighter  uppercase leading-none">
//               DIGITAL <span className="text-cyan-blue">ASTRA</span>
//             </span>
//             <span className="text-[8px] font-bold tracking-[0.3em] text-brand-purple uppercase mt-1">LABS</span>
//           </div>
//         </div>

//         {/* Desktop Navigation - Smaller Pill Style */}
//         <div className="hidden md:flex items-center gap-1 bg-gray-500/5 dark:bg-white/5 p-1 rounded-2xl border border-gray-200/50 dark:border-white/5">
//           {menuItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="px-5 py-2 text-[13px] font-bold   hover:text-cyan-blue transition-all rounded-xl hover:bg-white dark:hover:bg-white/5"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Right Side Actions */}
//         <div className="flex items-center gap-2">
//           {/* Theme Toggle Button */}
//           <button 
//             onClick={toggleTheme}
//             className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark-navy dark:text-sky-blue hover:scale-110 active:scale-95 transition-all shadow-sm"
//             aria-label="Toggle Theme"
//           >
//             {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//           </button>

//           {/* CTA Button - Compact */}
//           <button className="hidden sm:block btn-brand !py-2 !px-5 !text-[12px] shadow-lg shadow-cyan-blue/20">
//             Start Project
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2.5 rounded-xl bg-dark-navy dark:bg-white text-white dark:text-dark-navy hover:scale-105 transition-transform"
//           >
//             {isOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </nav>

//       {/* Modern Slide-In Mobile Overlay */}
//       <div 
//         className={`fixed inset-0 w-full h-screen bg-white dark:bg-dark-navy z-[-1] flex flex-col items-center justify-center gap-8 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Decorative Background Blob */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-purple/20 blur-[120px] rounded-full" />
        
//         {menuItems.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             onClick={() => setIsOpen(false)}
//             className="text-4xl font-black text-dark-navy dark:text-white flex items-center gap-5 group"
//           >
//             <span className="p-4 bg-gray-100 dark:bg-white/5 rounded-3xl text-cyan-blue group-hover:scale-110 transition-transform">
//               {item.icon}
//             </span>
//             {item.name}
//           </a>
//         ))}
        
//         <div className="mt-8 flex flex-col items-center gap-4">
//           <button className="btn-brand text-lg py-4 px-12 rounded-2xl shadow-2xl">
//             Let's Build It
//           </button>
//           <p className="text-gray-400 text-sm font-bold tracking-widest uppercase">Digital Astra Labs</p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


"use client";
import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Layers, Globe, Code, Mail, Menu, X, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navContent = useRef(null);

  useEffect(() => {
    // 1. Entrance Animation
    gsap.from(navContent.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // 2. Scroll Transformation (Floating Island Effect)
    const tl = gsap.to(navContent.current, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "50",
        scrub: 0.5,
      },
      maxWidth: "92%",
      marginTop: "12px",
      borderRadius: "24px",
      paddingTop: "10px", // Reduced padding to feel less "zoomed"
      paddingBottom: "10px",
      // We use CSS variables so the theme switch is instant
      backgroundColor: "var(--nav-island-bg)", 
      borderColor: "var(--nav-border)",
      boxShadow: "0 10px 30px rgba(0,4,0,0.1)",
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const menuItems = [
    { name: "Services", icon: <Code size={18} />, href: "#services" },
    { name: "Portfolio", icon: <Smartphone size={18} />, href: "#portfolio" },
    { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] flex justify-center px-4">
      <nav 
        ref={navContent} 
        className="w-full max-w-7xl mt-4 px-5 py-4 flex items-center justify-between  transition-all duration-300 rounded-[2rem] border-transparent"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative p-2 bg-linear-to-tr from-cyan-blue to-brand-purple rounded-xl transform group-hover:rotate-12 transition-transform duration-500 shadow-md">
            <Layers className="text-white" size={18} />
          </div>
          <div className="flex flex-col leading-none">
            <div className="text-sm sm:text-base font-black tracking-tighter">
              DIGITAL <span className="text-cyan-blue">ASTRA</span>
            </div>
            <span className="text-[8px] font-bold tracking-[0.2em] text-brand-purple uppercase mt-0.5">LABS</span>
          </div>
        </div>

        {/* Desktop Links - Tightened and High Contrast */}
        <div className="hidden md:flex items-center gap-1  p-1 rounded-2xl">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-1.5 text-[13px] font-bold text-dark-navy dark:text-light-silver/90 hover:text-cyan-blue dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/5"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-500/5 dark:bg-white/5 text-dark-navy dark:text-sky-blue hover:scale-110 active:scale-95 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA - Small size to fit well on mobile */}
          <button className="hidden sm:block btn-brand !py-2 !px-5 !text-[11px] uppercase tracking-widest shadow-lg shadow-cyan-blue/20">
            Start Project
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-dark-navy dark:text-white hover:bg-gray-100 dark:hover:bg-white/5"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Modern Slide-In Mobile Overlay */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-white dark:bg-dark-navy z-[-1] flex flex-col items-center justify-center gap-6 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 blur-[100px] rounded-full" />
        
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black flex items-center gap-4 group"
          >
            <span className="p-3 rounded-2xl text-brand-purple group-hover:scale-110 transition-transform">
              {item.icon}
            </span>
            {item.name}
          </a>
        ))}
        
        <div className="mt-6 flex flex-col items-center gap-4">
          <button className="btn-brand text-lg py-4 px-10 rounded-2xl shadow-xl">
            Consultation
          </button>
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase opacity-50">Digital Astra Labs</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;