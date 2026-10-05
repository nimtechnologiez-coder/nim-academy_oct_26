"use client";

import React from "react";
import styles from "../landing.module.css";
import { ArrowRightIcon, CheckIcon, SparklesIcon } from "./Icons";

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export default function FinalCtaSection({ onOpenConsultation }: FinalCtaProps) {
  return (
    <section className={styles.finalCtaSection} id="final-cta">
      <div className={styles.finalCtaGlow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.finalCtaContent}>
          <div
            className={styles.sectionBadge}
            style={{
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              color: "#34d399",
              borderColor: "rgba(16, 185, 129, 0.3)",
              marginBottom: "20px",
            }}
          >
            <SparklesIcon />
            <span>Admissions Now Open • Upcoming Cohort</span>
          </div>

          <h2 className={styles.finalCtaTitle}>Ready to Build Your AI Career?</h2>

          <p className={styles.finalCtaDesc}>
            Join a small-batch, live Generative AI Engineering program designed around real
            projects and career readiness.
          </p>

          <div className={styles.finalCtaButtons}>
            <button
              onClick={onOpenConsultation}
              className={styles.btnPrimaryGreen}
              id="final-cta-consultation-btn"
              style={{ padding: "16px 36px", fontSize: "1.05rem" }}
            >
              <span>Register Now</span>
              <ArrowRightIcon />
            </button>

            <a
              href="#curriculum"
              className={styles.btnOutline}
              style={{
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                padding: "16px 32px",
                fontSize: "1.05rem",
              }}
              id="final-cta-curriculum-btn"
            >
              Explore Curriculum
            </a>
          </div>

          {/* Trust points */}
          <div className={styles.ctaTrustRow}>
            <div className={styles.ctaTrustItem}>
              <CheckIcon />
              <span>Small batches capped at 15 learners</span>
            </div>
            <div className={styles.ctaTrustItem}>
              <CheckIcon />
              <span>Structured placement assistance from Month 3</span>
            </div>
            <div className={styles.ctaTrustItem}>
              <CheckIcon />
              <span>Microsoft Azure AI-900 track included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
