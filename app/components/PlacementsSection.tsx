"use client";

import React from "react";
import styles from "../landing.module.css";
import {
  FileBadgeIcon,
  UsersGroupIcon,
  CodeBracketIcon,
  MessageQuestionIcon,
  CareerBriefcaseIcon,
} from "./Icons";

export default function PlacementsSection() {
  const timelineSteps = [
    {
      step: "01",
      month: "Month 1",
      title: "Foundation Track",
      desc: "Python & Math foundations for AI",
    },
    {
      step: "02",
      month: "Month 2",
      title: "Core ML Track",
      desc: "ML fundamentals & Gateway 1 evaluation",
    },
    {
      step: "03",
      month: "Month 3",
      title: "Placement Track Begins",
      desc: "Profile audit & career goal mapping",
    },
    {
      step: "04",
      month: "Month 4",
      title: "Skill Building",
      desc: "Algorithmic thinking & system design basics",
    },
    {
      step: "05",
      month: "Month 5",
      title: "Portfolio & Projects",
      desc: "Deploying enterprise RAG & agent repos",
    },
    {
      step: "06",
      month: "Month 6",
      title: "Interview Ready",
      desc: "Rigorous 1-on-1 technical mock drills",
    },
    {
      step: "07",
      month: "After",
      title: "Interviews & Offers",
      desc: "Referrals & partner pipeline placement",
    },
  ];

  const prepCards = [
    {
      title: "Resume Preparation",
      description:
        "Engineered for ATS parsing with impact-driven metrics, highlighting real production AI deployments rather than basic classroom code.",
      icon: <FileBadgeIcon />,
    },
    {
      title: "LinkedIn Profile",
      description:
        "High-visibility technical branding, project writeups, and strategic keyword alignment to attract senior tech recruiters and engineering leaders.",
      icon: <UsersGroupIcon />,
    },
    {
      title: "GitHub & Portfolio",
      description:
        "Clean repositories, comprehensive README documentation, reproducible Docker environments, and interactive live demo walkthrough links.",
      icon: <CodeBracketIcon />,
    },
    {
      title: "Communication Training",
      description:
        "Learn to articulate complex AI tradeoffs, explain agentic architectures to non-technical stakeholders, and present behavioral case studies.",
      icon: <MessageQuestionIcon />,
    },
    {
      title: "Technical & Mock Interviews",
      description:
        "Comprehensive 1-on-1 sessions simulating actual startup & enterprise AI hiring rounds with rubric-backed feedback and actionable improvement paths.",
      icon: <CareerBriefcaseIcon />,
    },
  ];

  const placementRequirements = [
    "Attendance and assignment discipline maintained through the program",
    "All three Gateway evaluations completed",
    "Capstone project and GitHub portfolio finalized",
    "Resume and LinkedIn profile reviewed and approved by mentors",
    "Mock interview (technical + HR) completed with feedback",
    "Placement readiness review cleared by the academic team",
  ];

  const azureCertPoints = [
    "Globally recognized Microsoft credential",
    "Strengthens resume, LinkedIn & portfolio",
    "Included as part of the program",
  ];

  return (
    <section className={`${styles.section} ${styles.placementsSection}`} id="placements">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Career Acceleration</span>
          <h2 className={styles.sectionTitle}>Placement Assistance Starts in Month 3</h2>
          <p className={styles.sectionSubtitle}>
            We do not postpone career preparation until after you finish. Placement coaching runs
            concurrently with advanced engineering modules so you graduate interview-ready.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className={styles.timelineWrap}>
          <div className={styles.timelineTrack}>
            {timelineSteps.map((item) => (
              <div key={item.step} className={styles.timelineStep}>
                <div className={styles.timelineNode}>{item.step}</div>
                <div className={styles.timelineMonthLabel}>{item.month}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-nim-teal-dark)", marginBottom: "4px" }}>
                  {item.title}
                </div>
                <div className={styles.timelineDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Preparation Cards */}
        <div className={styles.prepCardsGrid}>
          {prepCards.map((card) => (
            <div key={card.title} className={styles.prepCard}>
              <div className={styles.prepCardIcon}>{card.icon}</div>
              <h3 className={styles.prepCardTitle}>{card.title}</h3>
              <p className={styles.prepCardDesc}>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Placement Requirements & Azure AI Certification Cards */}
        <div className={styles.placementDetailsGrid}>
          {/* Card 1: Placement Requirements */}
          <div className={styles.requirementsCard}>
            <h3 className={styles.requirementsCardTitle}>Placement Requirements</h3>
            <p className={styles.placementCardSubtitle}>
              Students enter the placement pipeline after clearing these readiness checkpoints:
            </p>
            <ul className={styles.placementChecklist}>
              {placementRequirements.map((item, idx) => (
                <li key={idx} className={styles.placementChecklistItem}>
                  <span className={styles.placementCheckDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Microsoft Azure AI Fundamentals Certification */}
          <div className={styles.azureCertCard}>
            <h3 className={styles.azureCertCardTitle}>
              Microsoft Azure AI Fundamentals (AI-900) Certification
            </h3>
            <p className={styles.placementCardSubtitle}>
              As part of the program, learners are prepared for and guided through the Microsoft Azure
              AI Fundamentals (AI-900) certification — a globally recognized Microsoft credential
              that validates foundational AI and machine learning knowledge.
            </p>
            <ul className={styles.placementChecklist}>
              {azureCertPoints.map((item, idx) => (
                <li key={idx} className={styles.placementChecklistItem}>
                  <span className={styles.placementCheckDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
