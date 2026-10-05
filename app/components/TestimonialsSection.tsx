"use client";

import React, { useState } from "react";
import styles from "../landing.module.css";

interface Testimonial {
  id: number;
  name: string;
  category: "Career Switchers" | "Fresh Graduates" | "Experienced Engineers";
  prevRole: string;
  newRole: string;
  company: string;
  outcomeBadge: string;
  avatarBg: string;
  initials: string;
  rating: number;
  cohort: string;
  quote: string;
  highlightedText: string;
}

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priyanshu Roy",
      category: "Fresh Graduates",
      prevRole: "College B.Tech Graduate",
      newRole: "Junior AI Engineer",
      company: "Aura AI Systems",
      outcomeBadge: "Offered ₹14.5 LPA",
      avatarBg: "linear-gradient(135deg, #10b981, #059669)",
      initials: "PR",
      rating: 5,
      cohort: "Cohort 3 (2025)",
      quote:
        "Coming out of college, generic DSA tutorials weren't enough for AI roles. NIM Academy taught me how to deploy vector search databases and fine-tune LLaMA 3. The 3 Gateway evaluations simulated real corporate code reviews. I landed my first AI engineering job within 3 weeks!",
      highlightedText: "landed my first AI engineering job within 3 weeks!",
    },
    {
      id: 2,
      name: "Neha Kulkarni",
      category: "Experienced Engineers",
      prevRole: "Senior Backend Dev (3 Yrs)",
      newRole: "Lead LLM Architect",
      company: "FinTech Scaleup",
      outcomeBadge: "+140% Salary Hike",
      avatarBg: "linear-gradient(135deg, #0284c7, #0369a1)",
      initials: "NK",
      rating: 5,
      cohort: "Cohort 2 (2025)",
      quote:
        "I wanted to shift from standard REST APIs to Generative AI architecture. NIM Academy's curriculum is pure production code — no toy examples. Building multi-agent systems using LangGraph and vLLM deployment was the exact technical edge I needed.",
      highlightedText: "curriculum is pure production code — no toy examples.",
    },
    {
      id: 3,
      name: "Rohan Malhotra",
      category: "Career Switchers",
      prevRole: "Data Analyst",
      newRole: "GenAI Product Specialist",
      company: "Cognitive Solutions",
      outcomeBadge: "Role Transitioned",
      avatarBg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      initials: "RM",
      rating: 5,
      cohort: "Cohort 4 (2026)",
      quote:
        "Transitioning from SQL/Excel to AI engineering felt daunting until I joined. The mentors walked me step-by-step through PyTorch foundations and RAG pipelines. Placement assistance in Month 3 revamped my GitHub and LinkedIn completely.",
      highlightedText: "revamped my GitHub and LinkedIn completely.",
    },
    {
      id: 4,
      name: "Vikramaditya Singh",
      category: "Experienced Engineers",
      prevRole: "Full Stack Engineer (2 Yrs)",
      newRole: "AI Solutions Engineer",
      company: "Enterprise Cloud Partner",
      outcomeBadge: "Promoted to AI Lead",
      avatarBg: "linear-gradient(135deg, #f59e0b, #d97706)",
      initials: "VS",
      rating: 5,
      cohort: "Cohort 1 (2025)",
      quote:
        "The Microsoft Azure AI (AI-900) certification guidance along with hands-on capstone projects gave me massive credibility. During my technical interview, I demonstrated my live deployed RAG agent on Docker — the interviewers were blown away.",
      highlightedText: "interviewers were blown away.",
    },
    {
      id: 5,
      name: "Smriti Deshmukh",
      category: "Fresh Graduates",
      prevRole: "MCA Graduate",
      newRole: "Associate ML Developer",
      company: "Innovate Labs",
      outcomeBadge: "Placed in 45 Days",
      avatarBg: "linear-gradient(135deg, #ec4899, #be185d)",
      initials: "SD",
      rating: 5,
      cohort: "Cohort 3 (2025)",
      quote:
        "The 1-on-1 mock interviews and rubric-backed feedback transformed how I present technical tradeoffs. I walked into my interview knowing exactly how to explain chunking strategies, embeddings, and prompt guardrails.",
      highlightedText: "knowing exactly how to explain chunking strategies and prompt guardrails.",
    },
    {
      id: 6,
      name: "Karthik Subramanian",
      category: "Career Switchers",
      prevRole: "QA Automation Lead",
      newRole: "AI Quality & Evaluation Engineer",
      company: "Global Tech Inc",
      outcomeBadge: "+125% Salary Hike",
      avatarBg: "linear-gradient(135deg, #06b6d4, #0891b2)",
      initials: "KS",
      rating: 5,
      cohort: "Cohort 2 (2025)",
      quote:
        "Switching from QA to AI evaluation was seamless thanks to NIM's focused curriculum on Ragas evaluation, hallucination checks, and benchmark scoring. Highly recommended for anyone serious about AI careers.",
      highlightedText: "seamless thanks to NIM's focused curriculum.",
    },
  ];

  const categories = ["All", "Career Switchers", "Fresh Graduates", "Experienced Engineers"];

  const filteredTestimonials =
    activeCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <section className={`${styles.section} ${styles.testimonialsSection}`} id="testimonials" style={{ padding: "80px 0" }}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.sectionHeader} style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          <span className={styles.sectionBadge} style={{ display: "inline-block", marginBottom: "12px" }}>
            Student Success Stories
          </span>
          <h2 className={styles.sectionTitle} style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 800, marginBottom: "16px" }}>
            Real Feedback from Verified AI Graduates
          </h2>
          <p className={styles.sectionSubtitle} style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
            See how software developers, fresh graduates, and career switchers built job-ready AI portfolios and achieved career breakthroughs with NIM Academy.
          </p>
        </div>

        {/* Top Summary Banner */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "36px",
            backgroundColor: "var(--color-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            padding: "20px 24px",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-text-main)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <span>4.9</span>
              <span style={{ color: "#f59e0b", fontSize: "1.4rem" }}>★★★★★</span>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", fontWeight: 500, marginTop: "4px" }}>
              Average Learner Rating (250+ Reviews)
            </div>
          </div>

          <div style={{ textAlign: "center", borderLeft: "1px solid var(--color-border-subtle)" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-nim-lime)" }}>
              94%
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", fontWeight: 500, marginTop: "4px" }}>
              Placement & Career Upgrade Rate
            </div>
          </div>

          <div style={{ textAlign: "center", borderLeft: "1px solid var(--color-border-subtle)" }}>
            <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--color-nim-teal-dark)" }}>
              135%
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", fontWeight: 500, marginTop: "4px" }}>
              Average Salary Hike After Graduation
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 700,
                border: "1px solid",
                cursor: "pointer",
                transition: "all var(--transition-fast)",
                backgroundColor:
                  activeCategory === cat ? "var(--color-nim-lime-vibrant)" : "var(--color-card)",
                color: activeCategory === cat ? "#ffffff" : "var(--color-text-main)",
                borderColor:
                  activeCategory === cat ? "var(--color-nim-lime-vibrant)" : "var(--color-border)",
                boxShadow: activeCategory === cat ? "var(--shadow-lime)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: "var(--color-card)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div>
                {/* Top Badge & Rating */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span
                    style={{
                      backgroundColor: "var(--color-nim-lime-bg)",
                      color: "var(--color-nim-lime)",
                      border: "1px solid var(--color-nim-lime-border)",
                      padding: "4px 10px",
                      borderRadius: "14px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    🎉 {t.outcomeBadge}
                  </span>
                  <div style={{ color: "#f59e0b", fontSize: "0.9rem", letterSpacing: "1px" }}>
                    {"★".repeat(t.rating)}
                  </div>
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "0.915rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  &ldquo;
                  {t.quote.split(t.highlightedText)[0]}
                  <strong style={{ color: "var(--color-text-main)", fontWeight: 700 }}>
                    {t.highlightedText}
                  </strong>
                  {t.quote.split(t.highlightedText)[1]}
                  &rdquo;
                </p>
              </div>

              {/* Student Footer Profile */}
              <div
                style={{
                  borderTop: "1px solid var(--color-border-subtle)",
                  paddingTop: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: t.avatarBg,
                    color: "#ffffff",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-text-main)" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-nim-teal-dark)", fontWeight: 600 }}>
                    {t.prevRole} ➔ <strong>{t.newRole}</strong>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                    {t.company} • {t.cohort}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
