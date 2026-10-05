"use client";

import React from "react";
import styles from "../landing.module.css";
import { CheckIcon, SparklesIcon } from "./Icons";

export default function GatewaysSection() {
  const gateways = [
    {
      index: "Gateway 1",
      timing: "After Month 2",
      name: "Foundation",
      description:
        "Validates your command over Python engineering patterns, mathematical grounding, data wrangling pipelines, and classical machine learning models.",
      rubrics: [
        "Python algorithmic efficiency & code style",
        "Linear algebra & calculus application",
        "End-to-end predictive model development",
        "1-on-1 code walkthrough with senior mentor",
      ],
      isHighlighted: false,
    },
    {
      index: "Gateway 2",
      timing: "After Month 4",
      name: "AI Engineering",
      description:
        "Ensures proficiency in deep learning frameworks, transformer architectures, and natural language processing pipelines prior to advanced generative systems.",
      rubrics: [
        "PyTorch neural network architecture design",
        "Attention mechanisms & Transformer tuning",
        "Semantic search pipeline & vector indexing",
        "Live technical architecture presentation",
      ],
      isHighlighted: false,
    },
    {
      index: "Gateway 3",
      timing: "Final Phase",
      name: "Industry Capstone",
      description:
        "The ultimate engineering standard: an autonomous multi-agent production system deployed to cloud infrastructure with real-time observability and guardrails.",
      rubrics: [
        "Autonomous multi-agent LangGraph workflow",
        "Containerized deployment with Docker & cloud API",
        "Production latency & safety evaluations",
        "Panel evaluation by enterprise AI practitioners",
      ],
      isHighlighted: true,
    },
  ];

  return (
    <section className={styles.section} id="gateways" style={{ paddingTop: "40px" }}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Engineering Quality Standard</span>
          <h2 className={styles.sectionTitle}>3 Gateway Evaluations</h2>
          <p className={styles.sectionSubtitle}>
            We do not hand out certificates for mere attendance. Three rigorous engineering
            milestones verify your genuine technical competence at each stage.
          </p>
        </div>

        <div className={styles.gatewaysGrid}>
          {gateways.map((gw) => (
            <div
              key={gw.index}
              className={`${styles.gatewayCard} ${gw.isHighlighted ? styles.gatewayHighlightCard : ""}`}
            >
              {gw.isHighlighted && (
                <div className={styles.gatewayHighlightTag}>
                  Industry Ready Standard
                </div>
              )}

              <div className={styles.gatewayHeader}>
                <div className={styles.gatewayIndex}>{gw.index}</div>
                <h3 className={styles.gatewayName}>{gw.name}</h3>
                <div className={styles.gatewayTiming}>{gw.timing}</div>
              </div>

              <p style={{ fontSize: "0.9125rem", color: "var(--color-text-muted)", marginBottom: "24px", lineHeight: 1.6 }}>
                {gw.description}
              </p>

              <div style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--color-text-subtle)", marginBottom: "12px" }}>
                Evaluation Criteria
              </div>

              <ul className={styles.gatewayRubricList}>
                {gw.rubrics.map((r, i) => (
                  <li key={i} className={styles.gatewayRubricItem}>
                    <span className={styles.rubricCheckIcon}>
                      <CheckIcon />
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
