"use client";

import React from "react";
import styles from "../landing.module.css";
import {
  SparklesIcon,
  CheckIcon,
  MessageQuestionIcon,
  BarChartReportIcon,
  FileBadgeIcon,
} from "./Icons";

export default function StudentPortalSection() {
  const portalFeatures = [
    {
      title: "Attendance Tracking",
      description: "Live session check-ins, automated attendance analytics, and streak tracking.",
      icon: <CheckIcon />,
    },
    {
      title: "Exams & Evaluations",
      description: "Gateway submission portals, detailed rubric scorecards, and mentor notes.",
      icon: <FileBadgeIcon />,
    },
    {
      title: "Ask Your Mentors",
      description: "Dedicated asynchronous doubt desk with code attachments and rapid turnaround.",
      icon: <MessageQuestionIcon />,
    },
    {
      title: "Auto-Generated Reports",
      description: "Weekly competence breakdown and benchmark comparisons across cohorts.",
      icon: <BarChartReportIcon />,
    },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="student-portal">
      <div className={styles.container}>
        <div className={styles.portalSplit}>
          {/* Left Column: Information & 4 Feature Cards */}
          <div>
            <span className={styles.sectionBadge}>Integrated Platform</span>
            <h2 className={styles.sectionTitle}>One Portal For Your Entire Learning Journey</h2>
            <p className={styles.sectionSubtitle}>
              Stay organized, track your engineering milestones, submit lab projects, and receive
              granular feedback in NIM Academy's proprietary student platform.
            </p>

            <div className={styles.portalFeaturesList}>
              {portalFeatures.map((f) => (
                <div key={f.title} className={styles.portalFeatureCard}>
                  <div className={styles.portalFeatureIcon}>{f.icon}</div>
                  <h3 className={styles.portalFeatureTitle}>{f.title}</h3>
                  <p className={styles.portalFeatureDesc}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Realistic Modern Student Dashboard Preview */}
          <div>
            <div className={styles.dashboardCard}>
              {/* Dashboard Top Header */}
              <div className={styles.dashTopBar}>
                <div className={styles.dashUserGroup}>
                  <div className={styles.dashAvatar}>AS</div>
                  <div>
                    <div className={styles.dashUserName}>Aryan Sharma</div>
                    <div className={styles.dashUserCohort}>Cohort #08 • AI Engineering</div>
                  </div>
                </div>

                <div className={styles.dashLiveBadge}>
                  <span className={styles.badgePulseDot} style={{ width: "6px", height: "6px" }} />
                  <span>Portal Active</span>
                </div>
              </div>

              {/* 4 KPI Cards */}
              <div className={styles.dashKpiGrid}>
                <div className={styles.dashKpiBox}>
                  <div className={styles.dashKpiLabel}>Attendance</div>
                  <div className={styles.dashKpiVal} style={{ color: "#10b981" }}>96%</div>
                </div>

                <div className={styles.dashKpiBox}>
                  <div className={styles.dashKpiLabel}>Assignments</div>
                  <div className={styles.dashKpiVal} style={{ color: "#0284c7" }}>12/12</div>
                </div>

                <div className={styles.dashKpiBox}>
                  <div className={styles.dashKpiLabel}>Assessment</div>
                  <div className={styles.dashKpiVal} style={{ color: "#8b5cf6" }}>92/100</div>
                </div>

                <div className={styles.dashKpiBox}>
                  <div className={styles.dashKpiLabel}>Project Status</div>
                  <div className={styles.dashKpiVal} style={{ color: "#f59e0b", fontSize: "1.05rem" }}>Month 5</div>
                </div>
              </div>

              {/* Progress Bar & Widget Showcase */}
              <div className={styles.dashWidgetSection}>
                <div className={styles.dashWidgetBox}>
                  <div className={styles.widgetHeader}>
                    <span>Course Progress (Phase 5 of 6)</span>
                    <span style={{ color: "var(--color-nim-teal)" }}>83%</span>
                  </div>
                  <div className={styles.progressBarTrack}>
                    <div className={styles.progressBarFill} style={{ width: "83%" }} />
                  </div>
                </div>

                {/* Doubt Desk Widget */}
                <div className={styles.dashWidgetBox}>
                  <div className={styles.widgetHeader}>
                    <span>Doubt Desk • Recent Activity</span>
                    <span style={{ fontSize: "0.75rem", color: "#10b981" }}>Resolved</span>
                  </div>

                  <div className={styles.doubtDeskItem}>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--color-text-main)" }}>
                        Optimizing ChromaDB cosine similarity indexing
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)", marginTop: "2px" }}>
                        Answered by Senior Mentor (Siddharth K.) • 2h ago
                      </div>
                    </div>
                    <span className={styles.monthPill} style={{ fontSize: "0.6875rem" }}>
                      Lab 5
                    </span>
                  </div>
                </div>

                {/* Gateway Milestone Mini Tracker */}
                <div className={styles.dashWidgetBox}>
                  <div className={styles.widgetHeader}>
                    <span>Gateway Checkpoint Milestones</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span className={styles.gatewayBadge} style={{ fontSize: "0.72rem" }}>
                      <CheckIcon /> Gateway 1: Cleared (94%)
                    </span>
                    <span className={styles.gatewayBadge} style={{ fontSize: "0.72rem" }}>
                      <CheckIcon /> Gateway 2: Cleared (91%)
                    </span>
                    <span
                      className={styles.monthPill}
                      style={{ fontSize: "0.72rem", backgroundColor: "rgba(245, 158, 11, 0.15)", color: "#b45309" }}
                    >
                      Gateway 3: Scheduled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
