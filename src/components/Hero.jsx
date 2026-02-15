// // // // "use client";
// // // // import React, { useEffect, useRef } from 'react';
// // // // import gsap from 'gsap';
// // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // import { Send } from 'lucide-react';

// // // // gsap.registerPlugin(ScrollTrigger);

// // // // const Hero = () => {
// // // //   const containerRef = useRef(null);
// // // //   const textRef = useRef(null);
// // // //   const imgUrl = "data:image/jpeg;base64,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";

// // // //   useEffect(() => {
// // // //     const ctx = gsap.context(() => {
// // // //       gsap.from(".hero-title", {
// // // //         y: 100,
// // // //         opacity: 0,
// // // //         duration: 1.2,
// // // //         stagger: 0.2,
// // // //         ease: "power4.out"
// // // //       });
      
// // // //       gsap.from(".hero-image", {
// // // //         scale: 0.8,
// // // //         opacity: 0,
// // // //         duration: 1.5,
// // // //         ease: "elastic.out(1, 0.7)"
// // // //       });

// // // //       gsap.to(".floating", {
// // // //         y: 20,
// // // //         repeat: -1,
// // // //         yoyo: true,
// // // //         duration: 2,
// // // //         ease: "sine.inOut"
// // // //       });
// // // //     }, containerRef);
// // // //     return () => ctx.revert();
// // // //   }, []);

// // // //   return (
// // // //     <section ref={containerRef} className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden">
// // // //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
// // // //         <div ref={textRef}>
// // // //           <h1 className="hero-title text-5xl md:text-7xl font-extrabold leading-tight mb-6">
// // // //             We Build <span className="text-gradient">Scalable</span> <br />
// // // //             Digital Realities
// // // //           </h1>
// // // //           <p className="hero-title text-xl text-gray-600 dark:text-lightSilver mb-8 max-w-lg">
// // // //             From MVP to production-ready platforms, Digital Astra Labs helps startups launch high-performance mobile apps and web systems.
// // // //           </p>
// // // //           <div className="hero-title flex flex-wrap gap-4">
// // // //             <button className="btn-primary flex items-center gap-2">
// // // //               Start Project <Send size={18} />
// // // //             </button>
// // // //             <button className="px-6 py-3 rounded-full border border-brandPurple text-brandPurple font-semibold hover:bg-brandPurple hover:text-white transition-all">
// // // //               Free Consultation
// // // //             </button>
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="hero-image relative">
// // // //           <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
// // // //           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyanBlue/20 rounded-full blur-3xl animate-pulse"></div>
// // // //           <img 
// // // //             src={imgUrl} 
// // // //             alt="Development" 
// // // //             className="rounded-2xl shadow-2xl relative z-10 floating border-4 border-white/10"
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;

// // // "use client";
// // // import React, { useEffect, useRef } from "react";
// // // import gsap from "gsap";
// // // import { Smartphone, Globe, Code, Rocket, ArrowRight, Zap } from "lucide-react";

// // // const Hero = () => {
// // //   const container = useRef(null);
// // //   const showcaseRef = useRef(null);

// // //   useEffect(() => {
// // //     let ctx = gsap.context(() => {
// // //       // Small stagger entrance for text
// // //       gsap.from(".hero-text", {
// // //         y: 30,
// // //         opacity: 0,
// // //         duration: 0.8,
// // //         stagger: 0.15,
// // //         ease: "power2.out",
// // //       });

// // //       // Subtle floating for showcase cards
// // //       gsap.to(".floating-card", {
// // //         y: -10,
// // //         repeat: -1,
// // //         yoyo: true,
// // //         duration: 3,
// // //         ease: "sine.inOut",
// // //         stagger: 0.5
// // //       });
// // //     }, container);

// // //     return () => ctx.revert();
// // //   }, []);

// // //   // Parallax effect on mouse move
// // //   const handleMouseMove = (e) => {
// // //     const { clientX, clientY } = e;
// // //     const xPos = (clientX / window.innerWidth - 0.5) * 20;
// // //     const yPos = (clientY / window.innerHeight - 0.5) * 20;

// // //     gsap.to(showcaseRef.current, {
// // //       x: xPos,
// // //       y: yPos,
// // //       duration: 1,
// // //       ease: "power2.out",
// // //     });
// // //   };

// // //   return (
// // //     <section 
// // //       ref={container} 
// // //       onMouseMove={handleMouseMove}
// // //       className="pt-24 pb-12 px-6 min-h-[90vh] flex items-center bg-radial-at-t from-cyanBlue/5 via-transparent to-transparent transition-colors duration-500"
// // //     >
// // //       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
// // //         {/* Left Side Content - Scaled Down */}
// // //         <div className="text-center lg:text-left">
          
// // //           {/* Smaller Astra Badge */}
// // //           <div className="hero-text inline-flex mb-4">
// // //             <div className="relative p-[1px] rounded-full overflow-hidden flex items-center justify-center">
// // //               <span className="absolute inset-[-500%] bg-[conic-gradient(from_90deg_at_50%_50%,#00B5E2_0%,#8A2BE2_50%,#FF2FB3_100%)] animate-[spin_4s_linear_infinite]" />
// // //               <div className="relative flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-darkNavy rounded-full">
// // //                 <Rocket size={14} className="text-brandPurple" />
// // //                 <span className="text-[10px] font-black tracking-widest text-darkNavy dark:text-lightSilver uppercase">
// // //                   Astra Power
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <h1 className=" text-black text-3xl text-black sm:text-4xl lg:text-5xl font-black leading-[1.1] mb-5  text-black dark:text-white">
// // //             We Build <span className="text-gradient">Scalable</span> <br />
// // //             Digital Solutions for Startups
// // //           </h1>
          
// // //           <p className="hero-text text-sm sm:text-base mb-8 text-gray-600 dark:text-lightSilver/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
// // //             From high-performance Flutter apps to robust React platforms. 
// // //             We turn your MVP into a production-ready reality using 
// // //             clean architecture and modern tech stacks.
// // //           </p>

// // //           <div className="hero-text flex flex-wrap items-center justify-center lg:justify-start gap-3">
// // //             <button className="btn-brand py-2.5 px-6 text-sm flex items-center gap-2 group">
// // //               Start Your Project 
// // //               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
// // //             </button>
// // //             <button className="px-6 py-2.5 rounded-full border border-brandPurple/30 text-sm font-bold text-brandPurple dark:text-lightSilver hover:bg-brandPurple hover:text-white transition-all">
// // //               Book a Consultation
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Right Side - Animated Service Showcase */}
// // //         <div ref={showcaseRef} className="relative h-[350px] sm:h-[450px] flex items-center justify-center">
// // //           {/* Decorative Orbits */}
// // //           <div className="absolute inset-0 flex items-center justify-center opacity-20">
// // //              <div className="w-64 h-64 border border-cyanBlue rounded-full animate-[ping_10s_linear_infinite]" />
// // //              <div className="absolute w-80 h-80 border border-brandPurple rounded-full animate-[pulse_8s_linear_infinite]" />
// // //           </div>

// // //           {/* Web Showcase Card */}
// // //           <div className="floating-card absolute top-10 left-10 sm:left-20 w-48 sm:w-56 p-4 glass rounded-2xl border border-white/20 shadow-2xl z-20 hover:scale-105 transition-transform cursor-default">
// // //             <div className="flex items-center gap-2 mb-3">
// // //               <div className="flex gap-1">
// // //                 <div className="w-2 h-2 rounded-full bg-red-400" />
// // //                 <div className="w-2 h-2 rounded-full bg-yellow-400" />
// // //                 <div className="w-2 h-2 rounded-full bg-green-400" />
// // //               </div>
// // //               <div className="h-1 w-full bg-gray-200 dark:bg-white/10 rounded" />
// // //             </div>
// // //             <Globe size={24} className="text-cyanBlue mb-2" />
// // //             <div className="text-[10px] font-bold text-cyanBlue uppercase tracking-tighter">React Development</div>
// // //             <div className="h-2 w-3/4 bg-gray-100 dark:bg-white/5 mt-2 rounded" />
// // //             <div className="h-2 w-1/2 bg-gray-100 dark:bg-white/5 mt-1 rounded" />
// // //           </div>

// // //           {/* Mobile Showcase Card */}
// // //           <div className="floating-card absolute bottom-10 right-10 sm:right-20 w-40 sm:w-48 p-4 glass rounded-3xl border border-white/20 shadow-2xl z-30 hover:scale-105 transition-transform cursor-default">
// // //             <div className="w-full h-32 bg-linear-to-br from-brandPurple to-pinkMagenta rounded-xl mb-3 flex items-center justify-center">
// // //               <Smartphone size={40} className="text-white animate-pulse" />
// // //             </div>
// // //             <div className="text-[10px] font-bold text-white uppercase text-center bg-brandPurple/50 rounded-full py-1">Flutter App</div>
// // //           </div>

// // //           {/* Backend / API Card */}
// // //           <div className="floating-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 p-3 glass rounded-xl border border-white/20 shadow-lg z-10 opacity-80">
// // //             <Code size={20} className="text-pink-magenta mx-auto mb-1" />
// // //             <div className="text-[8px] text-center font-bold text-gray-400">FastAPI Backend</div>
// // //           </div>
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;

// // "use client";
// // import React, { useState, useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { Smartphone, Globe, Code, Rocket, ArrowRight } from "lucide-react";
// // import ContactModal from "./ContactModal";

// // const Hero = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const container = useRef(null);
// //   const showcaseRef = useRef(null);

// //   useEffect(() => {
// //     let ctx = gsap.context(() => {
// //       gsap.from(".hero-text", {
// //         y: 30,
// //         opacity: 0,
// //         duration: 0.8,
// //         stagger: 0.15,
// //         ease: "power2.out",
// //       });
// //       gsap.to(".floating-card", {
// //         y: -10,
// //         repeat: -1,
// //         yoyo: true,
// //         duration: 3,
// //         ease: "sine.inOut",
// //         stagger: 0.4
// //       });
// //     }, container);
// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section ref={container} className="pt-32 pb-20 px-6 min-h-[85vh] flex items-center bg-radial-at-t from-cyan-blue/5 to-transparent">
// //       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
// //         {/* Left Side Content */}
// //         <div className="text-center lg:text-left">
// //           <div className="hero-text inline-flex mb-5">
// //             <div className="relative p-[1px] rounded-full overflow-hidden flex items-center justify-center">
// //               <span className="absolute inset-[-500%] bg-[conic-gradient(from_90deg_at_50%_50%,#00B5E2_0%,#8A2BE2_50%,#FF2FB3_100%)] animate-[spin_4s_linear_infinite]" />
// //               <div className="relative flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-dark-navy rounded-full">
// //                 <Rocket size={14} className="text-brand-purple" />
// //                 <span className="text-[11px] font-black tracking-widest text-dark-navy dark:text-light-silver uppercase">
// //                   Astra Power
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           <h1 className="hero-text text-4xl lg:text-5xl font-black leading-[1.15] mb-6 text-dark-navy dark:text-white">
// //             We Build <span className="text-gradient">Scalable</span> <br />
// //             Digital Solutions for Startups
// //           </h1>
          
// //           <p className="hero-text text-sm sm:text-base mb-8 text-gray-600 dark:text-light-silver/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
// //             From cross-platform Flutter apps to dynamic React.js environments. 
// //             We build the technical foundation your startup needs to scale globally.
// //           </p>

// //           <div className="hero-text flex flex-wrap items-center justify-center lg:justify-start gap-4">
// //             <button className="btn-brand py-3 px-8 text-sm flex items-center gap-2">
// //               Start Project <ArrowRight size={16} />
// //             </button>
// //             <button 
// //               onClick={() => setIsModalOpen(true)}
// //               className="px-8 py-3 rounded-full border border-brand-purple/30 text-sm font-bold text-brand-purple dark:text-light-silver hover:bg-brand-purple hover:text-white transition-all shadow-sm"
// //             >
// //               Book a Consultation
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Side - Animated Showcase */}
// //         <div ref={showcaseRef} className="relative h-[300px] flex items-center justify-center">
// //           <div className="floating-card absolute top-0 left-0 w-48 p-4 glass rounded-2xl shadow-xl z-20">
// //              <Globe size={24} className="text-cyan-blue mb-2" />
// //              <p className="text-[10px] font-black text-cyan-blue uppercase">Web Platforms</p>
// //              <div className="h-1.5 w-1/2 bg-gray-200 dark:bg-white/10 mt-2 rounded" />
// //           </div>

// //           <div className="floating-card absolute bottom-0 right-0 w-44 p-4 glass rounded-3xl shadow-xl z-30">
// //             <div className="w-full h-24 bg-linear-to-br from-brand-purple to-pink-magenta rounded-xl mb-3 flex items-center justify-center">
// //               <Smartphone size={32} className="text-white" />
// //             </div>
// //             <p className="text-[10px] font-bold text-center dark:text-white uppercase">Mobile Apps</p>
// //           </div>

// //           <div className="floating-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 p-3 glass rounded-xl z-10 border-white/10">
// //             <Code size={20} className="text-pink-magenta mx-auto mb-1" />
// //             <p className="text-[8px] text-center font-bold text-gray-400 uppercase tracking-tighter">Secure APIs</p>
// //           </div>
// //         </div>

// //       </div>

// //       <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
// //     </section>
// //   );
// // };

// // export default Hero;

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Smartphone, Globe, Code, Rocket, ArrowRight, Mail, Phone, ExternalLink } from "lucide-react";
// import ContactModal from "./ContactModal";

// const Hero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const container = useRef(null);
//   const showcaseRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // Small stagger entrance for text elements
//       gsap.from(".hero-text", {
//         y: 20,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "power2.out",
//       });

//       // Subtle floating animation for the showcase cards
//       gsap.to(".floating-card", {
//         y: -15,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//         ease: "sine.inOut",
//         stagger: 0.3
//       });
//     }, container);
//     return () => ctx.revert();
//   }, []);

//   // Parallax effect on mouse move
//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const xPos = (clientX / window.innerWidth - 0.5) * 15;
//     const yPos = (clientY / window.innerHeight - 0.5) * 15;

//     gsap.to(showcaseRef.current, {
//       x: xPos,
//       y: yPos,
//       duration: 1,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <section 
//       ref={container} 
//       onMouseMove={handleMouseMove}
//       className="pt-28 pb-10 px-6 min-h-[85vh] flex items-center bg-radial-at-t from-cyan-blue/5 to-transparent transition-colors duration-500"
//     >
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
//         {/* Left Side Content */}
//         <div className="text-center lg:text-left">
          
//           {/* Compact Astra Badge */}
//           <div className="hero-text inline-flex mb-5">
//             <div className="relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center">
//               <span className="absolute inset-[-500%] bg-[conic-gradient(from_90deg_at_50%_50%,#00B5E2_0%,#8A2BE2_50%,#FF2FB3_100%)] animate-[spin_5s_linear_infinite]" />
//               <div className="relative flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-dark-navy rounded-full">
//                 <Rocket size={12} className="text-brand-purple" />
//                 <span className="text-[10px] font-black tracking-[0.15em] text-dark-navy dark:text-light-silver uppercase">
//                   Astra Power Enabled
//                 </span>
//               </div>
//             </div>
//           </div>

//           <h1 className="hero-text text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] mb-6 text-dark-navy dark:text-white">
//             We Build <span className="text-gradient">Scalable</span> <br />
//             Digital Solutions for Startups
//           </h1>
          
//           <p className="hero-text text-sm sm:text-base mb-8 text-gray-600 dark:text-light-silver/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
//             Specializing in high-performance Flutter apps and React.js ecosystems. 
//             We turn your MVP into a production-ready engine using 
//             clean architecture and scalable technical thinking.
//           </p>

//           <div className="hero-text flex flex-wrap items-center justify-center lg:justify-start gap-3">
//             <button className="btn-brand py-3 px-7 text-xs sm:text-sm flex items-center gap-2 group">
//               Start Project 
//               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="px-7 py-3 rounded-full border border-brand-purple/30 text-xs sm:text-sm font-bold text-brand-purple dark:text-light-silver hover:bg-brand-purple hover:text-white transition-all shadow-sm"
//             >
//               Book a Consultation
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Interactive Showcase */}
//         <div ref={showcaseRef} className="relative h-[350px] sm:h-[400px] flex items-center justify-center mt-10 lg:mt-0">
//           {/* Web Card */}
//           <div className="floating-card absolute top-0 left-0 w-44 sm:w-52 p-4 glass rounded-2xl border border-white/20 shadow-2xl z-20">
//              <div className="flex gap-1 mb-3">
//                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
//                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
//                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
//              </div>
//              <Globe size={20} className="text-cyan-blue mb-2" />
//              <p className="text-[10px] font-black text-cyan-blue uppercase tracking-tighter">React.js Web App</p>
//              <div className="h-1.5 w-full bg-gray-200 dark:bg-white/10 mt-3 rounded-full" />
//              <div className="h-1.5 w-2/3 bg-gray-200 dark:bg-white/10 mt-1.5 rounded-full" />
//           </div>

//           {/* Mobile Card */}
//           <div className="floating-card absolute bottom-0 right-0 w-40 sm:w-48 p-4 glass rounded-3xl border border-white/20 shadow-2xl z-30">
//             <div className="w-full h-28 bg-linear-to-br from-brand-purple to-pink-magenta rounded-xl mb-3 flex items-center justify-center">
//               <Smartphone size={32} className="text-white animate-pulse" />
//             </div>
//             <p className="text-[10px] font-bold text-center text-dark-navy dark:text-white uppercase tracking-widest">Flutter Mobile</p>
//           </div>

//           {/* Backend Card */}
//           <div className="floating-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 p-3 glass rounded-xl z-10 border-cyan-blue/20 bg-cyan-blue/5">
//             <Code size={18} className="text-pink-magenta mx-auto mb-1" />
//             <p className="text-[8px] text-center font-bold text-gray-400 uppercase tracking-tighter">Scalable Backend</p>
//           </div>
//         </div>

//       </div>

//       <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </section>
//   );
// };

// export default Hero;


"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Smartphone, Globe, Code, Rocket, ArrowRight, Zap, ChevronRight } from "lucide-react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const container = useRef(null);
  const showcaseRef = useRef(null);

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

      // 2. Continuous Floating for cards
      gsap.to(".showcase-card", {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        stagger: 0.4
      });
    }, container);
    return () => ctx.revert();
  }, []);

  // Parallax Effect: Cards shift slightly based on mouse position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 15;
    const yPos = (clientY / window.innerHeight - 0.5) * 15;

    gsap.to(showcaseRef.current, {
      rotateY: xPos / 2,
      rotateX: -yPos / 2,
      x: xPos,
      y: yPos,
      duration: 1.2,
      ease: "power2.out",
    });
  };

  return (
    <section 
      ref={container} 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-16 px-6 min-h-[90vh] flex items-center overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-blue/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-purple/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- Left Content: Smaller & High Contrast --- */}
        <div className="text-center lg:text-left z-10">
          
          {/* Astra Badge: Thinner Moving Border */}
          <div className="hero-el inline-flex mb-6">
            <div className="relative p-[1.5px] rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-cyan-blue/10">
              <span className="absolute inset-[-500%] bg-[conic-gradient(from_90deg_at_50%_50%,#00B5E2_0%,#8A2BE2_50%,#FF2FB3_100%)] animate-[spin_5s_linear_infinite]" />
              <div className="relative flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-dark-navy rounded-full">
                <Rocket size={14} className="text-brand-purple" />
                <span className="text-[10px] font-black tracking-[0.2em] text-dark-navy dark:text-light-silver uppercase">
                  Astra Power Enabled
                </span>
              </div>
            </div>
          </div>

<h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] mb-6">
            Transforming Ideas into <br />
            <span className="text-gradient">Scalable</span> Digital Reality
          </h1>
          
          <p className="hero-el text-sm sm:text-base mb-8 text-gray-600 dark:text-light-silver/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Digital Astra Labs builds high-performance Flutter mobile apps and React.js web ecosystems. We bridge the gap between MVP and global scale with clean architecture.
          </p>

          <div className="hero-el flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button className="btn-brand py-3 px-8 text-sm flex items-center gap-2 group shadow-xl shadow-cyan-blue/20">
              Start Project 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 rounded-full border border-brand-purple/30 text-sm font-bold text-brand-purple dark:text-light-silver hover:bg-brand-purple hover:text-white transition-all"
            >
              Consultation
            </button>
          </div>
        </div>

        {/* --- Right Content: Interactive Showcase --- */}
        <div ref={showcaseRef} className="relative h-[380px] lg:h-[450px] flex items-center justify-center perspective-[1000px]">
          
          {/* Decorative Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border border-cyan-blue/20 rounded-full animate-pulse" />
          </div>

          {/* Card: Web Development */}
          <div className="showcase-card absolute top-5 left-5 sm:left-10 w-48 sm:w-56 p-4 glass rounded-2xl border border-white/20 shadow-2xl z-20">
             <div className="flex gap-1.5 mb-4">
               <div className="w-2 h-2 rounded-full bg-red-400/80" />
               <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
               <div className="w-2 h-2 rounded-full bg-green-400/80" />
             </div>
             <Globe size={28} className="text-cyan-blue mb-2" />
             <p className="text-[10px] font-black text-cyan-blue uppercase tracking-widest">React Platforms</p>
             <div className="mt-4 space-y-2">
                <div className="h-1.5 w-full bg-gray-200 dark:bg-white/10 rounded-full" />
                <div className="h-1.5 w-2/3 bg-gray-200 dark:bg-white/10 rounded-full" />
             </div>
          </div>

          {/* Card: Mobile App (Top Layer) */}
          <div className="showcase-card absolute bottom-5 right-5 sm:right-10 w-44 sm:w-52 p-5 glass rounded-[2.5rem] border border-white/20 shadow-2xl z-30 overflow-hidden">
            <div className="w-full h-32 bg-linear-to-br from-brand-purple to-pink-magenta rounded-2xl mb-4 flex items-center justify-center shadow-inner">
              <Smartphone size={44} className="text-white animate-float-small" />
            </div>
            <div className="flex items-center justify-between">
               <span className="text-[9px] font-bold text-dark-navy dark:text-white uppercase">Flutter App</span>
               <Zap size={12} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>

          {/* Card: Backend/Cloud (Deep Layer) */}
          <div className="showcase-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 p-4 glass rounded-xl z-10 border-pink-magenta/20 bg-pink-magenta/5">
            <Code size={20} className="text-pink-magenta mx-auto mb-2" />
            <p className="text-[8px] text-center font-bold text-gray-400 uppercase tracking-tighter">FastAPI Backend</p>
            <div className="h-1 w-8 bg-pink-magenta/30 mx-auto mt-2 rounded" />
          </div>

        </div>

      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;