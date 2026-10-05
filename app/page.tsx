"use client";

import React, { useState } from "react";
import styles from "./landing.module.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyNimSection from "./components/WhyNimSection";
import CurriculumSection from "./components/CurriculumSection";
import ToolsSection from "./components/ToolsSection";
import MicrosoftAdvantageSection from "./components/MicrosoftAdvantageSection";
import PlacementsSection from "./components/PlacementsSection";
import GatewaysSection from "./components/GatewaysSection";
import StudentPortalSection from "./components/StudentPortalSection";
import TeachingStyleSection from "./components/TeachingStyleSection";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

import MentorsSection from "./components/MentorsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Sticky Header with centered navigation, logo & theme toggle */}
      <Navbar onOpenConsultation={openConsultation} />

      {/* Main Page Sections */}
      <main>
        <HeroSection onOpenConsultation={openConsultation} />
        <WhyNimSection />
        <CurriculumSection />
        <MentorsSection />
        <ToolsSection />
        <MicrosoftAdvantageSection />
        <PlacementsSection />
        <TestimonialsSection />
        <GatewaysSection />
        <StudentPortalSection />
        <TeachingStyleSection />
        <FinalCtaSection onOpenConsultation={openConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <div className={styles.stickyMobileCta}>
        <div>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text-main)" }}>
            Next Cohort: Limited to 15
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--color-nim-lime-vibrant)", fontWeight: 600 }}>
            Live Generative AI Program
          </div>
        </div>
        <button
          onClick={openConsultation}
          className={styles.btnPrimaryGreen}
          style={{ padding: "8px 16px", fontSize: "0.8125rem" }}
        >
          Register Now
        </button>
      </div>

      {/* Interactive Consultation Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
    </div>
  );
}
