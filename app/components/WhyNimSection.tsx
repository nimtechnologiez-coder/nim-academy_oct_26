"use client";

import React from "react";
import styles from "../landing.module.css";
import { CodeBracketIcon, ServerStackIcon, CpuChipIcon, CareerBriefcaseIcon } from "./Icons";

export default function WhyNimSection() {
  const features = [
    {
      number: "01",
      title: "End-to-End Curriculum",
      description:
        "From solid Python & linear algebra to advanced Transformer attention mechanisms and multi-agent orchestration. A cohesive, zero-assumption roadmap built for mastery.",
      icon: <CodeBracketIcon />,
    },
    {
      number: "02",
      title: "Production & MLOps Focus",
      description:
        "We move beyond notebook prototypes. Package AI services with Docker, build high-throughput FastAPI endpoints, configure vector databases, and implement automated CI/CD pipelines.",
      icon: <ServerStackIcon />,
    },
    {
      number: "03",
      title: "GenAI & Agentic Systems",
      description:
        "Master enterprise Retrieval-Augmented Generation (RAG), parameter-efficient fine-tuning (LoRA/PEFT), LangChain, LangGraph, and autonomous multi-agent problem solving.",
      icon: <CpuChipIcon />,
    },
    {
      number: "04",
      title: "Career & Placement Layer",
      description:
        "Placement assistance begins directly in Month 3. Benefit from ATS resume optimization, technical portfolio building, system design walkthroughs, and 1-on-1 mock interviews.",
      icon: <CareerBriefcaseIcon />,
    },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="why-nim">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Engineered for Impact</span>
          <h2 className={styles.sectionTitle}>Why Learn Generative AI With NIM?</h2>
          <p className={styles.sectionSubtitle}>
            Designed by practicing AI engineers at NIM Technologies to bridge the divide between
            isolated textbook theory and enterprise production demands.
          </p>
        </div>

        <div className={styles.whyNimGrid}>
          {features.map((item) => (
            <div key={item.number} className={styles.featureCard}>
              <div className={styles.featureCardTop}>
                <div className={styles.featureIconWrapper}>{item.icon}</div>
                <span className={styles.featureNumber}>{item.number}</span>
              </div>
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
