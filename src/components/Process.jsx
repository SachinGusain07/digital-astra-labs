"use client";
import React, { useEffect, useRef } from "react";
import { Search, Layout, Code2, Microscope, Rocket, Activity, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { 
    title: "Discovery & Analysis", 
    desc: "We don't just take orders; we challenge assumptions. We analyze your business logic, user personas, and market fit to define a clear technical roadmap.", 
    icon: <Search size={22}/>,
    color: "cyan-blue" 
  },
  { 
    title: "Technical Architecture", 
    desc: "Before a single line of code is written, we architect modular systems. Choosing the right stack (React/Flutter/FastAPI) to ensure your app scales to millions.", 
    icon: <Layout size={22}/>,
    color: "brand-purple" 
  },
  { 
    title: "Agile Development", 
    desc: "Using clean code standards and milestone-based sprints. You see progress every 2 weeks, with full transparency via staging environments.", 
    icon: <Code2 size={22}/>,
    color: "pink-magenta" 
  },
  { 
    title: "Quality Assurance", 
    desc: "Rigorous alpha and beta testing cycles. We stress-test backend APIs and ensure pixel-perfect UI consistency across all mobile and web devices.", 
    icon: <Microscope size={22}/>,
    color: "sky-blue" 
  },
  { 
    title: "Cloud Deployment", 
    desc: "Production-ready launch on AWS, GCP, or Azure. We handle CI/CD pipelines, SSL security, and database optimization for a flawless debut.", 
    icon: <Rocket size={22}/>,
    color: "cyan-blue" 
  },
  { 
    title: "Technical Scaling", 
    desc: "Launch is just the beginning. We provide long-term technical thinking, performance monitoring, and rapid feature expansion to keep you ahead.", 
    icon: <Activity size={22}/>,
    color: "brand-purple" 
  }
];

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".process-el", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-24 px-6 bg-[#FDFBF7] border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="process-el flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
              <Zap size={12} className="text-brand-purple fill-brand-purple" />
              <span className="text-[10px] font-bold tracking-widest text-[#0A0F2C] uppercase">The Roadmap</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0F2C] leading-[1.15]">
              A Predictable Path from <br />
              <span className="text-gradient">Founder Idea to Market Launch</span>
            </h3>
          </div>
          <div className="max-w-xs">
             <p className="text-gray-500 font-medium text-sm leading-relaxed mb-2">
               We eliminate technical uncertainty with a process rooted in engineering excellence.
             </p>
             <div className="h-1 w-12 bg-cyan-blue rounded-full" />
          </div>
        </div>

        {/* Process Grid */}
        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 relative">
          
          {/* Subtle Decorative Path Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-0 opacity-50" />

          {steps.map((step, i) => (
            <div key={i} className="process-el relative group z-10">
              {/* Step Number Background */}
              <div className="text-7xl font-bold text-gray-100/80 absolute -top-10 -left-4 group-hover:text-cyan-blue/10 transition-colors duration-500 select-none">
                0{i + 1}
              </div>

              <div className="relative">
                {/* Icon Container */}
                <div className="mb-8 p-4 bg-white inline-flex rounded-2xl shadow-sm border border-gray-100 text-[#0A0F2C] group-hover:scale-110 group-hover:bg-cyan-blue group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-[#0A0F2C] mb-4 group-hover:text-cyan-blue transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
                
                {/* Mobile/Tablet Step Indicator */}
                <div className="mt-6 flex lg:hidden items-center gap-2">
                  <div className="h-1 w-8 bg-cyan-blue rounded-full" />
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Phase 0{i+1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="process-el mt-24 p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-blue/10 rounded-full flex items-center justify-center text-cyan-blue">
                <Code2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A0F2C]">Milestone-Based Delivery</p>
                <p className="text-xs text-gray-400 font-medium">Pay only as we hit technical goals.</p>
              </div>
           </div>
           <div className="hidden md:block w-px h-10 bg-gray-100" />
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A0F2C]">Real-Time Monitoring</p>
                <p className="text-xs text-gray-400 font-medium">Access to Jira, Slack, and Staging.</p>
              </div>
           </div>
           <button className="btn-brand !py-3 !px-8 !text-xs whitespace-nowrap">
             View Working Model
           </button>
        </div>

      </div>
    </section>
  );
};

export default Process;