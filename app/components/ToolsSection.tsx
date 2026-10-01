"use client";

import React from "react";
import styles from "../landing.module.css";

export default function ToolsSection() {
  const toolGroups = [
    {
      category: "Python & Data Science",
      tools: ["Python", "NumPy", "Pandas"],
    },
    {
      category: "Deep Learning & CV",
      tools: ["PyTorch", "TensorFlow", "OpenCV"],
    },
    {
      category: "GenAI & Vector DBs",
      tools: ["HuggingFace", "LangChain", "Vector DBs"],
    },
    {
      category: "Agents & MLOps",
      tools: ["LangGraph", "FastAPI", "Docker", "AWS"],
    },
  ];

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="tools">
      <div className={styles.container}>
        <div className={styles.sectionHeader} style={{ marginBottom: "40px" }}>
          <span className={styles.sectionBadge}>Enterprise Toolchain</span>
          <h2 className={styles.sectionTitle}>Master Modern Production Tools</h2>
          <p className={styles.sectionSubtitle}>
            Gain fluency in the frameworks, platforms, and deployment tools standard across AI
            startups and Fortune 500 engineering teams.
          </p>
        </div>

        <div className={styles.toolsContainer}>
          <div className={styles.toolsCategoryGrid}>
            {toolGroups.map((group) => (
              <div key={group.category} className={styles.toolsCategoryCol}>
                <h3 className={styles.toolsCategoryTitle}>{group.category}</h3>
                <div className={styles.toolsPillsWrap}>
                  {group.tools.map((tool) => (
                    <span key={tool} className={styles.toolPill}>
                      <span className={styles.toolDot} />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
