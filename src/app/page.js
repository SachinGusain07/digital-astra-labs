"use client";
import React, { useState } from "react";

// Importing our high-end architectural components
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";
import Vision from "@/components/Vision";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import ContactCTA from "@/components/ContactCTA";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative">
      
      {/* 1. Entrance: The Hook */}
      <Hero />

      {/* 2. Trust: Building immediate authority with big numbers */}
      <Stats />

      {/* 3. Expertise: What we actually deliver */}
      <WhatWeDo />

      {/* 4. Philosophy: Why startups choose us over cheap freelancers */}
      <Vision />

      {/* 5. Strategy: How we ensure your project doesn't fail */}
      <Process />

      {/* 6. Proof: Real outcomes for real businesses */}
      <Portfolio />

      {/* 7. Action: The high-conversion final section */}
      <ContactCTA onOpenModal={() => setIsModalOpen(true)} />

      {/* Global Contact Modal triggered by various buttons */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </main>
  );
}