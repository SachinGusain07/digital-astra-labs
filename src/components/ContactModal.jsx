"use client";
import React, { useEffect, useRef } from "react";
import { X, Mail, Phone, ExternalLink } from "lucide-react";
import gsap from "gsap";

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, display: "flex", duration: 0.3 });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    } else {
      gsap.to(overlayRef.current, { opacity: 0, display: "none", duration: 0.2 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] hidden items-center justify-center bg-dark-navy/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="w-full max-w-md bg-white dark:bg-dark-navy rounded-3xl p-8 border border-cyan-blue/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-black text-dark-navy dark:text-white">Get in Touch</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors">
            <X size={20} className="dark:text-white" />
          </button>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:info@digitalastralabs.com"
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 hover:border-cyan-blue border border-transparent transition-all group"
          >
            <div className="p-3 bg-cyan-blue/10 rounded-xl text-cyan-blue">
              <Mail size={24} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-bold text-gray-400 uppercase">Email Us</p>
              <p className="font-bold text-dark-navy text-[12px]  md:text-xl dark:text-white truncate">info@digitalastralabs.com</p>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-cyan-blue" />
          </a>

          <a
            href="tel:+910000000000"
            className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 hover:border-brand-purple border border-transparent transition-all group"
          >
            <div className="p-3 bg-brand-purple/10 rounded-xl text-brand-purple">
              <Phone size={24} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-xs font-bold text-gray-400 uppercase">Call Us</p>
              <p className="font-bold text-dark-navy dark:text-white">+91 (India Based)</p>
            </div>
          </a>
        </div>

        <button className="w-full mt-8 bg-brand-gradient text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-cyan-blue/20 transition-all">
          Start Project Conversation
        </button>
      </div>
    </div>
  );
};

export default ContactModal;