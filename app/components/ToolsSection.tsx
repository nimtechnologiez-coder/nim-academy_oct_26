"use client";

import React from "react";
import styles from "../landing.module.css";

export default function ToolsSection() {
  const toolCategories = [
    {
      id: "python-data",
      badge: "CORE STACK",
      title: "Python & Data Science",
      subtitle: "High-Performance Engineering",
      accentColor: "#0284c7",
      iconBg: "rgba(2, 132, 199, 0.12)",
      iconColor: "#38bdf8",
      borderColor: "rgba(56, 189, 248, 0.3)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      tools: [
        { name: "Python", role: "Core Language & Vectorization", dotColor: "#3776AB" },
        { name: "NumPy", role: "ND-Arrays & Tensor Ops", dotColor: "#38bdf8" },
        { name: "Pandas", role: "Analytical Data Pipelines", dotColor: "#818cf8" },
        { name: "SciPy", role: "Scientific Computing", dotColor: "#a78bfa" },
      ],
      footerNote: "Vectorized data pipelines & high-speed ETL",
    },
    {
      id: "deep-learning",
      badge: "NEURAL COMPUTE",
      title: "Deep Learning & CV",
      subtitle: "Neural Architectures & Vision",
      accentColor: "#8b5cf6",
      iconBg: "rgba(139, 92, 246, 0.12)",
      iconColor: "#a78bfa",
      borderColor: "rgba(167, 139, 250, 0.3)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      ),
      tools: [
        { name: "PyTorch", role: "Autograd & Custom Layers", dotColor: "#EE4C2C" },
        { name: "TensorFlow", role: "Enterprise ML Production", dotColor: "#FF6F00" },
        { name: "OpenCV", role: "Image & Video Processing", dotColor: "#a78bfa" },
        { name: "YOLOv8", role: "Real-Time Object Detection", dotColor: "#38bdf8" },
      ],
      footerNote: "Backpropagation from scratch to YOLO edge models",
    },
    {
      id: "genai-vector",
      badge: "GENAI ARCHITECTURE",
      title: "GenAI & Vector DBs",
      subtitle: "LLM Fine-Tuning & RAG Systems",
      accentColor: "#10b981",
      iconBg: "rgba(16, 185, 129, 0.12)",
      iconColor: "#34d399",
      borderColor: "rgba(52, 211, 153, 0.3)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      tools: [
        { name: "HuggingFace", role: "Open LLMs & LoRA Tuning", dotColor: "#FFD21E" },
        { name: "LangChain", role: "Chain & Prompt Workflows", dotColor: "#34d399" },
        { name: "Vector DBs", role: "Pinecone, Chroma & Search", dotColor: "#38bdf8" },
        { name: "LlamaIndex", role: "Enterprise Knowledge Indexing", dotColor: "#c084fc" },
      ],
      footerNote: "Production RAG & parameter-efficient fine-tuning",
    },
    {
      id: "agents-mlops",
      badge: "PRODUCTION MLOPS",
      title: "Agents & MLOps",
      subtitle: "Orchestration, APIs & Cloud Infra",
      accentColor: "#f59e0b",
      iconBg: "rgba(245, 158, 11, 0.12)",
      iconColor: "#fbbf24",
      borderColor: "rgba(251, 191, 36, 0.3)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      tools: [
        { name: "LangGraph", role: "Multi-Agent State Graphs", dotColor: "#fbbf24" },
        { name: "FastAPI", role: "Async Model Serving APIs", dotColor: "#2dd4bf" },
        { name: "Docker", role: "Containerized Inference", dotColor: "#38bdf8" },
        { name: "AWS & Azure", role: "Cloud GPU Infrastructure", dotColor: "#f97316" },
      ],
      footerNote: "Autonomous agent swarms & containerized deployments",
    },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="tools">
      <div className={styles.container}>
        <div className={styles.sectionHeader} style={{ marginBottom: "48px" }}>
          <span className={styles.sectionBadge}>Enterprise Toolchain</span>
          <h2 className={styles.sectionTitle}>Master Modern Production Tools</h2>
          <p className={styles.sectionSubtitle}>
            Gain fluency in the frameworks, platforms, and deployment tools standard across AI
            startups and Fortune 500 engineering teams.
          </p>
        </div>

        {/* Modern 4-Card Grid Layout */}
        <div className={styles.modernToolsGrid}>
          {toolCategories.map((cat) => (
            <div
              key={cat.id}
              className={styles.modernToolCard}
              style={{
                borderColor: cat.borderColor,
              }}
            >
              {/* Card Header */}
              <div className={styles.toolCardHeader}>
                <div className={styles.toolCardIconWrap} style={{ backgroundColor: cat.iconBg, color: cat.iconColor }}>
                  {cat.icon}
                </div>
                <div>
                  <span className={styles.toolCardBadge}>{cat.badge}</span>
                  <h3 className={styles.toolCardTitle}>{cat.title}</h3>
                  <p className={styles.toolCardSubtitle}>{cat.subtitle}</p>
                </div>
              </div>

              {/* Tools List */}
              <div className={styles.toolItemsList}>
                {cat.tools.map((t) => (
                  <div key={t.name} className={styles.toolItemRow}>
                    <span className={styles.toolItemDot} style={{ backgroundColor: t.dotColor }} />
                    <div className={styles.toolItemInfo}>
                      <span className={styles.toolItemName}>{t.name}</span>
                      <span className={styles.toolItemRole}>{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer Tag */}
              <div className={styles.toolCardFooter}>
                <span className={styles.toolFooterDot} style={{ backgroundColor: cat.iconColor }} />
                <span>{cat.footerNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Summary Strip */}
        <div className={styles.toolsTrustStrip}>
          <div className={styles.toolsTrustItem}>
            <span className={styles.toolsTrustIcon}>⚡</span>
            <span>15+ Industry-Standard AI Frameworks</span>
          </div>
          <div className={styles.toolsTrustItem}>
            <span className={styles.toolsTrustIcon}>🛡️</span>
            <span>Zero Toy Code & Full Production Stacks</span>
          </div>
          <div className={styles.toolsTrustItem}>
            <span className={styles.toolsTrustIcon}>🚀</span>
            <span>100% Mapped to Enterprise AI Hiring</span>
          </div>
        </div>
      </div>
    </section>
  );
}
