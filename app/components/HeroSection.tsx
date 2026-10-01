"use client";

import React from "react";
import styles from "../landing.module.css";
import {
  ArrowRightIcon,
  StudentsStatIcon,
  BuildingStatIcon,
  CalendarIcon,
  GenerativeAiIcon,
  SparklesIcon,
  CodeProjectsIcon,
  ShieldCheckBadgeIcon,
} from "./Icons";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const handleScrollToCurriculum = () => {
    const section = document.getElementById("curriculum");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.asymmetricHeroSection} id="hero">
      {/* Ambient Radial Lighting & Subtle Tech Background */}
      <div className={styles.ambientLightingCanvas} aria-hidden="true">
        <div className={styles.ambientGlowTeal} />
        <div className={styles.ambientGlowLime} />
        <div className={styles.ambientDotGrid} />
      </div>

      <div className={styles.container}>
        <div className={styles.asymmetricHeroGrid}>
          {/* ========================================================
              LEFT COLUMN: EDITORIAL HEADLINE, DESCRIPTION, CTAS
             ======================================================== */}
          <div className={styles.asymmetricHeroLeft}>
            {/* Top Pill Badge */}
            <div className={styles.heroPillTag}>
              <span className={styles.pillGreenBeacon} />
              <span className={styles.pillTextBold}>NIM Academy</span>
              <span className={styles.pillDivider}>×</span>
              <span className={styles.pillTextTeal}>NIM Technologies</span>
            </div>

            {/* Asymmetric Typography Headline */}
            <h1 className={styles.asymmetricHeroTitle}>
              Become the<br />
              <span className={styles.titleLimeAccent}>AI Engineer</span><br />
              Companies Hire<span className={styles.titleGreenPeriod}>.</span>
            </h1>

            {/* Description */}
            <p className={styles.asymmetricHeroDescription}>
              A 6-month live Generative AI Engineering program — from zero-prerequisite beginner to
              job-ready, with real projects, 3 Gateway evaluations, a student portal and structured
              placement assistance.
            </p>

            {/* Two Action Buttons */}
            <div className={styles.asymmetricButtonsGroup}>
              <button
                type="button"
                onClick={onOpenConsultation}
                className={styles.asymmetricBtnPrimary}
                id="hero-book-consultation-btn"
              >
                <span>Book Free Consultation</span>
                <ArrowRightIcon className={styles.btnArrowIcon} />
              </button>

              <button
                type="button"
                onClick={handleScrollToCurriculum}
                className={styles.asymmetricBtnSecondary}
                id="hero-explore-curriculum-btn"
              >
                <span>Explore Curriculum</span>
              </button>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: PURE ABSTRACT AI VISUAL & NEURAL NETWORK ART
             ======================================================== */}
          <div className={styles.asymmetricHeroRight} aria-hidden="true">
            <div className={styles.abstractNeuralStage}>
              {/* Central Glowing Energy Spheres */}
              <div className={styles.neuralCoreAura} />
              <div className={styles.neuralCoreSphere}>
                <div className={styles.coreInnerGlow} />
                <div className={styles.corePulseRing} />
                <div className={styles.coreAiGlyph}>
                  <span>AI</span>
                </div>
              </div>

              {/* Kinetic Geometric Orbit Rings */}
              <div className={`${styles.orbitRing} ${styles.orbitRingOuter}`} />
              <div className={`${styles.orbitRing} ${styles.orbitRingMiddle}`} />
              <div className={`${styles.orbitRing} ${styles.orbitRingInner}`} />

              {/* SVG Constellation Mesh & Neural Pathways */}
              <svg
                className={styles.neuralConstellationSvg}
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connecting Synaptic Fibers */}
                <path
                  d="M110 130 L250 250 L390 120 M250 250 L410 360 M250 250 L120 370 M250 250 L250 80 M110 130 L250 80 M390 120 L410 240 M120 370 L250 420 L410 360"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  className={styles.svgNeuralPath}
                />

                {/* Synaptic Nodes */}
                <circle cx="250" cy="80" r="5" className={styles.svgNodeGreen} />
                <circle cx="110" cy="130" r="6" className={styles.svgNodeCyan} />
                <circle cx="390" cy="120" r="6" className={styles.svgNodeCyan} />
                <circle cx="410" cy="240" r="4.5" className={styles.svgNodeGreen} />
                <circle cx="410" cy="360" r="6.5" className={styles.svgNodeCyan} />
                <circle cx="250" cy="420" r="5" className={styles.svgNodeGreen} />
                <circle cx="120" cy="370" r="6" className={styles.svgNodeCyan} />

                {/* Synaptic Pulses */}
                <circle cx="180" cy="190" r="3" className={styles.svgPulseDotA} />
                <circle cx="320" cy="185" r="3" className={styles.svgPulseDotB} />
                <circle cx="330" cy="305" r="3" className={styles.svgPulseDotC} />
                <circle cx="185" cy="310" r="3" className={styles.svgPulseDotD} />
              </svg>

              {/* ----------------------------------------------------
                  FLOATING TECHNOLOGY PILLS
                 ---------------------------------------------------- */}
              {/* Floating Pill 1: Top-Left */}
              <div className={`${styles.abstractTechPill} ${styles.techPillTopLeft}`}>
                <div className={`${styles.pillIconBadge} ${styles.badgeColorCyan}`}>
                  <GenerativeAiIcon />
                </div>
                <div className={styles.pillLabelBlock}>
                  <span className={styles.pillMicroCategory}>ARCHITECTURE</span>
                  <strong className={styles.pillMainTitle}>Autonomous Agents</strong>
                </div>
              </div>

              {/* Floating Pill 2: Top-Right */}
              <div className={`${styles.abstractTechPill} ${styles.techPillTopRight}`}>
                <div className={`${styles.pillIconBadge} ${styles.badgeColorLime}`}>
                  <SparklesIcon />
                </div>
                <div className={styles.pillLabelBlock}>
                  <span className={styles.pillMicroCategory}>FOUNDATION</span>
                  <strong className={styles.pillMainTitle}>Transformer Models</strong>
                </div>
              </div>

              {/* Floating Pill 3: Mid-Right */}
              <div className={`${styles.abstractTechPill} ${styles.techPillMidRight}`}>
                <div className={`${styles.pillIconBadge} ${styles.badgeColorCyan}`}>
                  <CodeProjectsIcon />
                </div>
                <div className={styles.pillLabelBlock}>
                  <span className={styles.pillMicroCategory}>INDEXING</span>
                  <strong className={styles.pillMainTitle}>Hybrid RAG & Vector DB</strong>
                </div>
              </div>

              {/* Floating Pill 4: Bottom-Left */}
              <div className={`${styles.abstractTechPill} ${styles.techPillBottomLeft}`}>
                <div className={`${styles.pillIconBadge} ${styles.badgeColorLime}`}>
                  <ShieldCheckBadgeIcon />
                </div>
                <div className={styles.pillLabelBlock}>
                  <span className={styles.pillMicroCategory}>VALIDATION</span>
                  <strong className={styles.pillMainTitle}>3 Industrial Gateways</strong>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              3 COMPACT STATS ROW
              (On Desktop: Below Buttons. On Mobile: Below abstractNeuralStage)
             ======================================================== */}
          <div className={styles.asymmetricStatsRow}>
            <div className={styles.compactStatItem}>
              <div className={`${styles.compactStatIcon} ${styles.statIconCyan}`}>
                <StudentsStatIcon />
              </div>
              <div className={styles.compactStatContent}>
                <div className={styles.compactStatNumber}>50+</div>
                <div className={styles.compactStatLabel}>Students Placed</div>
              </div>
            </div>

            <div className={styles.statDividerVertical} />

            <div className={styles.compactStatItem}>
              <div className={`${styles.compactStatIcon} ${styles.statIconCyan}`}>
                <BuildingStatIcon />
              </div>
              <div className={styles.compactStatContent}>
                <div className={styles.compactStatNumber}>170+</div>
                <div className={styles.compactStatLabel}>Partner Companies</div>
              </div>
            </div>

            <div className={styles.statDividerVertical} />

            <div className={styles.compactStatItem}>
              <div className={`${styles.compactStatIcon} ${styles.statIconLime}`}>
                <CalendarIcon />
              </div>
              <div className={styles.compactStatContent}>
                <div className={styles.compactStatNumber}>6 Months</div>
                <div className={styles.compactStatLabel}>Live Training</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
