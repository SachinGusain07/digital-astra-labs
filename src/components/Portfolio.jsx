"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinTech SaaS Platform",
    category: "Web Development",
    tags: ["React", "FastAPI", "PostgreSQL"],
    outcome: "Scaled to 50k users with modular backend architecture.",
    color: "from-cyan-blue/20"
  },
  {
    title: "HealthTrack Mobile",
    category: "Flutter App",
    tags: ["Flutter", "Firebase", "Node.js"],
    outcome: "Reduced patient check-in time by 40% via real-time sync.",
    color: "from-brand-purple/20"
  }
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-5xl font-bold text-dark-navy">Selected <span className="text-gradient">Impact</span></h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div key={i} className="group cursor-pointer">
            <div className={`relative h-80 w-full rounded-[3rem] bg-linear-to-br ${p.color} to-cream border border-gray-100 overflow-hidden mb-6`}>
              {/* Service Mockup Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-3/4 h-3/4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-2xl p-6">
                    <div className="w-1/2 h-2 bg-gray-200 rounded-full mb-4" />
                    <div className="w-full h-32 bg-gray-50/50 rounded-xl" />
                 </div>
              </div>
              <div className="absolute inset-0 bg-dark-navy opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-cyan-blue uppercase tracking-widest mb-2">{p.category}</p>
                <h4 className="text-2xl font-bold text-dark-navy mb-3">{p.title}</h4>
                <div className="flex gap-2 mb-4">
                  {p.tags.map(t => <span key={t} className="text-[9px] font-bold bg-gray-100 text-gray-400 px-2 py-0.5 rounded-md">{t}</span>)}
                </div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-sm">{p.outcome}</p>
              </div>
              <div className="p-4 rounded-full border border-gray-100 group-hover:bg-dark-navy group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;