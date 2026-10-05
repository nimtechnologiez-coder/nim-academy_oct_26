"use client";

import React from "react";
import styles from "../landing.module.css";

interface Mentor {
  name: string;
  role: string;
  company: string;
  avatarBg: string;
  initials: string;
  experience: string;
  bio: string;
  skills: string[];
  metrics: { label: string; value: string }[];
}

export default function MentorsSection() {
  const mentors: Mentor[] = [
    {
      name: "Dr. Aris Thorne",
      role: "Lead AI Research Scientist",
      company: "Ex-DeepMind / Ex-Microsoft",
      avatarBg: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
      initials: "AT",
      experience: "14+ Yrs Industry Exp",
      bio: "Pioneered production multi-agent reinforcement learning systems. Authored 12+ AI patents and led enterprise LLM alignment teams.",
      skills: ["LLM Alignment", "Multi-Agent Systems", "PyTorch", "RLHF"],
      metrics: [
        { label: "AI Patents", value: "12+" },
        { label: "Learners Trained", value: "1,200+" },
        { label: "Rating", value: "4.98" },
      ],
    },
    {
      name: "Ananya Sharma",
      role: "Principal GenAI Architect",
      company: "Ex-Amazon Web Services",
      avatarBg: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      initials: "AS",
      experience: "10+ Yrs Tech Lead",
      bio: "Architected enterprise RAG platforms handling 10M+ daily vector queries. Specialist in hybrid search, Pinecone, Qdrant, and LangChain.",
      skills: ["Enterprise RAG", "Vector DBs", "LangGraph", "Semantic Search"],
      metrics: [
        { label: "Vector Pipelines", value: "15+" },
        { label: "Production Models", value: "24" },
        { label: "Rating", value: "4.96" },
      ],
    },
    {
      name: "Rahul Verma",
      role: "Senior MLOps & Infrastructure Lead",
      company: "Top Fintech Enterprise",
      avatarBg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      initials: "RV",
      experience: "9+ Yrs Infrastructure",
      bio: "Expert in scalable LLM serving (vLLM, TensorRT-LLM, Triton), GPU cluster optimization, and zero-downtime model deployments.",
      skills: ["vLLM Deployment", "Kubernetes", "Quantization", "MLOps"],
      metrics: [
        { label: "GPUs Managed", value: "500+" },
        { label: "Uptime Record", value: "99.99%" },
        { label: "Rating", value: "4.94" },
      ],
    },
    {
      name: "Sophia Chen",
      role: "Head of AI Product & Benchmarking",
      company: "Generative AI Research Lab",
      avatarBg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      initials: "SC",
      experience: "8+ Yrs Product AI",
      bio: "Specializes in autonomous AI agents, evaluation frameworks (Ragas, TruLens), and prompt optimization strategies for mission-critical workflows.",
      skills: ["AI Evaluation", "Agentic Workflows", "Prompt Eng", "Guardrails"],
      metrics: [
        { label: "Agent Repos", value: "30+" },
        { label: "Benchmark Tests", value: "50k+" },
        { label: "Rating", value: "4.97" },
      ],
    },
  ];

  return (
    <section className={`${styles.section} ${styles.mentorsSection}`} id="mentors" style={{ padding: "80px 0" }}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader} style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 52px auto" }}>
          <span className={styles.sectionBadge} style={{ display: "inline-block", marginBottom: "12px" }}>
            World-Class Faculty
          </span>
          <h2 className={styles.sectionTitle} style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 800, marginBottom: "16px" }}>
            Learn Directly from Senior AI Architects & Researchers
          </h2>
          <p className={styles.sectionSubtitle} style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
            Our instructors aren&apos;t just teachers — they are active industry leaders engineering production AI pipelines, multi-agent frameworks, and enterprise RAG systems at top global firms.
          </p>
        </div>

        {/* Mentors Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "24px",
          }}
        >
          {mentors.map((m) => (
            <div
              key={m.name}
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
                {/* Profile Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: m.avatarBg,
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {m.initials}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-text-main)", margin: 0 }}>
                        {m.name}
                      </h3>
                      <span style={{ color: "#10b981", fontSize: "0.9rem" }}>✓</span>
                    </div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-nim-teal-dark)", marginTop: "2px" }}>
                      {m.role}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "1px" }}>
                      {m.company}
                    </div>
                  </div>
                </div>

                {/* Experience Badge */}
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--color-nim-lime-bg)",
                    color: "var(--color-nim-lime)",
                    border: "1px solid var(--color-nim-lime-border)",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    marginBottom: "14px",
                  }}
                >
                  ⚡ {m.experience}
                </div>

                {/* Bio */}
                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.55,
                    marginBottom: "16px",
                  }}
                >
                  {m.bio}
                </p>

                {/* Skills Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {m.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        backgroundColor: "var(--color-bg-subtle)",
                        color: "var(--color-text-main)",
                        border: "1px solid var(--color-border-subtle)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Footer */}
              <div
                style={{
                  borderTop: "1px solid var(--color-border-subtle)",
                  paddingTop: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {m.metrics.map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-text-main)" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
