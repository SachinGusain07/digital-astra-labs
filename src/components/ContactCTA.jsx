"use client";
import React from "react";
import { ArrowRight, Mail } from "lucide-react";

const ContactCTA = ({ onOpenModal }) => (
  <section id="contact" className="py-24 px-6 bg-white">
    <div className="max-w-5xl mx-auto bg-dark-navy rounded-[4rem] p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl">
      {/* Decorative Orbits */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-cyan-blue/10 rounded-full -translate-x-1/2 translate-y-1/2" />

      <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 relative z-10">
        Ready to build your <br /> <span className="text-cyan-blue">Digital Legacy?</span>
      </h2>
      <p className="text-gray-400 font-medium mb-12 max-w-lg mx-auto relative z-10">
        Stop waiting. Launch your MVP with high-performance engineering. Schedule your free technical consultation now.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 ">
        <button 
          onClick={onOpenModal}
          className=" text-lg py-5 px-14 w-full sm:w-auto flex items-center justify-center gap-3 group bg-white rounded-4xl"
        >
          Book Consultation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
      
      <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-8 relative z-10">
        <div className="flex items-center gap-3 text-gray-400 font-bold text-sm">
          <Mail size={18} className="text-cyan-blue" /> info@digitalastralabs.com
        </div>
        <div className="text-gray-600 font-black tracking-widest text-[10px] uppercase">Based in India • Serving Worldwide</div>
      </div>
    </div>
  </section>
);

export default ContactCTA;