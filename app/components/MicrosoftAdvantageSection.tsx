"use client";

import React from "react";
import styles from "../landing.module.css";
import { CheckIcon, ShieldCheckBadgeIcon, SparklesIcon } from "./Icons";

export default function MicrosoftAdvantageSection() {
  const benefits = [
    {
      title: "Official Curriculum Alignment",
      description:
        "Comprehensive preparation mapped directly to Microsoft Azure AI-900 exam competency domains, covering responsible AI, vision, and natural language workloads.",
    },
    {
      title: "Hands-on Cloud AI Services",
      description:
        "Real enterprise experience provisioning and consuming Azure OpenAI Service, Cognitive Services, Azure AI Search, and cloud deployment pipelines.",
    },
    {
      title: "Globally Recognized Credential",
      description:
        "Add a verified Microsoft certification badge to your resume and LinkedIn, signaling formal enterprise AI cloud proficiency to recruiters worldwide.",
    },
  ];

  return (
    <section className={`${styles.section} ${styles.microsoftSection}`} id="microsoft-advantage">
      <div className={styles.container}>
        <div className={styles.microsoftSplit}>
          {/* Left Column: Information & 3 Benefits */}
          <div>
            <span className={styles.sectionBadge}>Certification Track</span>
            <h2 className={styles.sectionTitle}>The Microsoft Advantage</h2>
            <p className={styles.sectionSubtitle} style={{ fontSize: "1.15rem", marginBottom: "28px" }}>
              Get guided through Microsoft Azure AI Fundamentals (AI-900).
            </p>

            <div className={styles.benefitList}>
              {benefits.map((b) => (
                <div key={b.title} className={styles.benefitItem}>
                  <div className={styles.benefitIconBox}>
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className={styles.benefitTextTitle}>{b.title}</h3>
                    <p className={styles.benefitTextDesc}>{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Modern Certificate-Style Card */}
          <div>
            <div className={styles.certCard}>
              <div className={styles.certHeader}>
                <div className={styles.msLogoBadge}>
                  <div className={styles.msFlag}>
                    <div className={styles.msRed} />
                    <div className={styles.msGreen} />
                    <div className={styles.msBlue} />
                    <div className={styles.msYellow} />
                  </div>
                  <span>Microsoft Certified</span>
                </div>
                <ShieldCheckBadgeIcon />
              </div>

              <div className={styles.certExamCode}>AI-900</div>
              <div className={styles.certTitle}>Microsoft Azure AI Fundamentals</div>

              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.5, marginBottom: "28px" }}>
                Validates foundational knowledge of machine learning and artificial intelligence concepts
                together with related Microsoft Azure cloud services.
              </p>

              <div className={styles.certFooterPill}>
                <SparklesIcon />
                <span>Guided preparation included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
