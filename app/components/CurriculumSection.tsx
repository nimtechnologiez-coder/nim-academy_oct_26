"use client";

import React from "react";
import styles from "../landing.module.css";
import { SparklesIcon } from "./Icons";

export default function CurriculumSection() {
  const months = [
    {
      month: "Month 1",
      title: "Python & Math Foundations",
      description:
        "Master idiomatic Python for AI, data structures, NumPy vectorization, Pandas analytics, alongside essential Linear Algebra, Multivariable Calculus, and Probability & Statistics.",
      lab: "High-Performance Data Analysis & Analytics Pipeline",
      gateway: null,
      trackPill: "Foundation Track",
    },
    {
      month: "Month 2",
      title: "Machine Learning",
      description:
        "Deep dive into supervised & unsupervised learning, regression, decision trees, ensemble methods (XGBoost, LightGBM), feature engineering, hyperparameter tuning, and validation.",
      lab: "Predictive Churn & Risk Modeling Engine with Automated Validation",
      gateway: "Gateway 1 Evaluation",
      trackPill: "Core ML Track",
    },
    {
      month: "Month 3",
      title: "Deep Learning & Computer Vision",
      description:
        "Neural network fundamentals, backpropagation from scratch, PyTorch architectures, CNNs, transfer learning, OpenCV image processing, and object detection with YOLO.",
      lab: "Real-Time Multi-Object Detection & Edge Inference System",
      gateway: null,
      trackPill: "Placement Track Begins",
    },
    {
      month: "Month 4",
      title: "NLP & Transformers",
      description:
        "Natural language processing, tokenization, embeddings (Word2Vec, fastText), sequence models, Self-Attention mechanism, Transformer architectures (BERT, GPT), and Hugging Face.",
      lab: "Domain-Specific Semantic Search & Document Intelligence Engine",
      gateway: "Gateway 2 Evaluation",
      trackPill: "Modern NLP Track",
    },
    {
      month: "Month 5",
      title: "Generative AI & RAG",
      description:
        "Large Language Model architectures, prompt engineering patterns, Vector Databases (Pinecone, Chroma), Advanced Retrieval-Augmented Generation, and Parameter-Efficient Fine-Tuning (LoRA).",
      lab: "Enterprise RAG Knowledge Assistant with Verification & Guardrails",
      gateway: null,
      trackPill: "Portfolio & Projects",
    },
    {
      month: "Month 6",
      title: "Agentic AI & Capstone",
      description:
        "Autonomous multi-agent workflows, LangChain & LangGraph state machines, function calling, tool use, human-in-the-loop validation, Dockerized MLOps pipelines, and cloud deployment.",
      lab: "Autonomous Multi-Agent Enterprise Research & Execution Capstone",
      gateway: "Gateway 3 Industry Capstone",
      trackPill: "Interview Ready",
    },
  ];

  return (
    <section className={styles.section} id="curriculum">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>6-Month Progression</span>
          <h2 className={styles.sectionTitle}>Build the AI Systems That Get You Hired</h2>
          <p className={styles.sectionSubtitle}>
            A rigorous engineering roadmap taking you from foundational code to production-grade
            autonomous AI agents.
          </p>
        </div>

        <div className={styles.curriculumGrid}>
          {months.map((item) => (
            <div key={item.month} className={styles.curriculumCard}>
              <div>
                <div className={styles.monthBadgeRow}>
                  <span className={styles.monthPill}>{item.month}</span>
                  {item.gateway ? (
                    <span className={styles.gatewayBadge}>
                      <SparklesIcon />
                      <span>{item.gateway}</span>
                    </span>
                  ) : (
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-subtle)", fontWeight: 500 }}>
                      {item.trackPill}
                    </span>
                  )}
                </div>

                <h3 className={styles.curriculumTitle}>{item.title}</h3>
                <p className={styles.curriculumDesc}>{item.description}</p>
              </div>

              <div>
                <div className={styles.labProjectBox}>
                  <span className={styles.labLabel}>Hands-on Lab Project</span>
                  <div className={styles.labTitle}>{item.lab}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
