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
      month: "Month 3",
      title: "Placement Track Begins",
      desc: "Profile audit & career goal mapping",
    },
    {
      step: "02",
      month: "Month 4",
      title: "Skill Building",
      desc: "Algorithmic thinking & system design basics",
    },
    {
      step: "03",
      month: "Month 5",
      title: "Portfolio & Projects",
      desc: "Deploying enterprise RAG & agent repos",
    },
    {
      step: "04",
      month: "Month 6",
      title: "Interview Ready",
      desc: "Rigorous 1-on-1 technical mock drills",
    },
    {
      step: "05",
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
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--color-nim-teal-dark)", marginBottom: "4px" }}>
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
      </div>
    </section>
  );
}
