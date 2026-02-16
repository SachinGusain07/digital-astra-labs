"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  Mail, 
  MapPin, 
  Smartphone, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Layers, 
  ArrowUpRight,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Slow, smooth background rotation for architectural rings
      gsap.to(".footer-ring", {
        rotate: 360,
        duration: 50,
        repeat: -1,
        ease: "none",
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const footerLinks = {
    services: [
      { name: "Mobile Development", href: "#" },
      { name: "Web Applications", href: "#" },
      { name: "Backend Systems", href: "#" },
      { name: "MVP for Startups", href: "#" }
    ],
    company: [
      { name: "About Astra", href: "#" },
      { name: "Our Process", href: "#" },
      { name: "Project Portfolio", href: "#" },
      { name: "Careers", href: "#" }
    ],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
  };

  return (
    <footer ref={footerRef} className="relative bg-[#FDFBF7] pt-24 pb-10 px-6 overflow-hidden border-t border-gray-100">
      
      {/* --- ANIMATED BACKGROUND ORBITS (Strictly Background) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-40">
        <div className="footer-ring w-[600px] h-[600px] border border-[#00B5E2]/10 rounded-full flex items-center justify-center">
          <div className="w-[400px] h-[400px] border border-[#8A2BE2]/10 rounded-full" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-start gap-3">
              <div className="p-2 bg-black rounded-xl shadow-sm">
<img 
                src="/logo2.png" 
                alt="Logo" 
                className="w-32 h-22 rounded-full object-fit" 
              />              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tighter text-[#0A0F2C] uppercase">
                  Digital <span className="text-[#00B5E2]">Astra</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#8A2BE2] uppercase mt-1">Labs</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              We architect high-performance digital engines for startups worldwide. 
              Engineering excellence with a long-term technical mindset.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-xl bg-white border border-gray-200 text-[#0A0F2C] hover:text-[#00B5E2] hover:border-[#00B5E2]/30 hover:shadow-md transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Services Section */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00B5E2] mb-8">Expertise</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm font-bold text-gray-500 hover:text-[#0A0F2C] transition-colors flex items-center group">
                    {item.name} 
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-1 text-[#00B5E2]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company Section */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A2BE2] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm font-bold text-gray-500 hover:text-[#0A0F2C] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Section */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF2FB3] mb-8">Contact Us</h4>
            <div className="space-y-5">
              <a href="mailto:info@digitalastralabs.com" className="flex items-center gap-4 group">
                <div className="p-2 bg-[#00B5E2]/5 rounded-lg text-[#00B5E2] group-hover:bg-[#00B5E2] group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-bold text-gray-600 group-hover:text-[#0A0F2C]">info@digitalastralabs.com</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-[#8A2BE2]/5 rounded-lg text-[#8A2BE2]">
                  <MapPin size={16} />
                </div>
                <span className="text-sm font-bold text-gray-600">India Based | Serving Global</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-2 bg-[#FF2FB3]/5 rounded-lg text-[#FF2FB3] group-hover:bg-[#FF2FB3] group-hover:text-white transition-all">
                  <Smartphone size={16} />
                </div>
                <span className="text-sm font-bold text-gray-600">+91 (Consultation)</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM COPYRIGHT BAR --- */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              © {new Date().getFullYear()} Digital Astra Labs.
            </p>
            <p className="text-[9px] font-medium text-gray-300 uppercase tracking-tighter">
              Built for Scale & Performance
            </p>
          </div>
          
          <div className="flex gap-8">
            {footerLinks.legal.map((item) => (
              <a key={item} href="#" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#00B5E2] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;