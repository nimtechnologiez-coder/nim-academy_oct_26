"use client";

import React from "react";
import styles from "../landing.module.css";
import { CheckIcon, SparklesIcon } from "./Icons";

export default function TeachingStyleSection() {
  const pillars = [
    {
      num: "10–15",
      title: "Learners Per Cohort",
      desc: "Intentionally limited cohort sizes ensuring genuine 1-on-1 interaction, individual code reviews, and guaranteed discussion time.",
    },
    {
      num: "100%",
      title: "Live Interactive Classes",
      desc: "No boring pre-recorded slide monologues. Learn dynamically through live demonstrations, group problem-solving, and instant Q&A.",
    },
    {
      num: "Real",
      title: "Project Guidance",
      desc: "Work on production-grade systems alongside mentors who build real-world AI applications every day at NIM Technologies.",
    },
    {
      num: "360°",
      title: "Soft-Skills & Comm Training",
      desc: "Technical excellence coupled with stakeholder presentation training, architecture defense, and behavioral interview coaching.",
    },
  ];

  return (
    <section className={styles.section} id="teaching-style">
      <div className={styles.container}>
        <div className={styles.teachingSplit}>
          {/* Left Column: 4 Pillars */}
          <div>
            <span className={styles.sectionBadge}>Pedagogy</span>
            <h2 className={styles.sectionTitle}>Small-Batch Mentoring, Not a Video Course</h2>
            <p className={styles.sectionSubtitle} style={{ marginBottom: "36px" }}>
              Most courses fail because passive video consumption does not cultivate real engineering
              intuition. We treat our cohorts like junior engineering teams inside a tech company.
            </p>

            <div className={styles.teachingPillars}>
              {pillars.map((p) => (
                <div key={p.title} className={styles.teachingPillarCard}>
                  <div className={styles.pillarNum}>{p.num}</div>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Modern Mentor/Student Interaction Visual */}
          <div>
            <div className={styles.codeReviewCard}>
              <div className={styles.codeReviewHeader}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                  <span style={{ marginLeft: "6px", fontFamily: "monospace", color: "#94a3b8" }}>
                    rag_eval_pipeline.py
                  </span>
                </div>
                <span style={{ color: "#38bdf8", fontSize: "0.75rem" }}>Live Code Review</span>
              </div>

              <div style={{ fontSize: "0.8125rem", lineHeight: 1.7, color: "#cbd5e1" }}>
                <div><span style={{ color: "#f43f5e" }}>from</span> langgraph.graph <span style={{ color: "#f43f5e" }}>import</span> StateGraph, END</div>
                <div><span style={{ color: "#f43f5e" }}>from</span> langchain_community.vectorstores <span style={{ color: "#f43f5e" }}>import</span> Chroma</div>
                <br />
                <div><span style={{ color: "#60a5fa" }}>def</span> <span style={{ color: "#34d399" }}>grade_documents</span>(state: AgentState):</div>
                <div style={{ paddingLeft: "16px", color: "#94a3b8" }}>&quot;&quot;&quot;Evaluates retrieved docs for hallucination & relevance.&quot;&quot;&quot;</div>
                <div style={{ paddingLeft: "16px" }}>question = state[<span style={{ color: "#fcd34d" }}>&quot;question&quot;</span>]</div>
                <div style={{ paddingLeft: "16px" }}>documents = state[<span style={{ color: "#fcd34d" }}>&quot;documents&quot;</span>]</div>
                <div style={{ paddingLeft: "16px" }}><span style={{ color: "#60a5fa" }}>return</span> {`{"filtered_docs": filtered, "re_rank_score": score}`}</div>
              </div>

              {/* Mentor Comment Callout */}
              <div className={styles.codeReviewComment}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                  <strong style={{ color: "#34d399", fontSize: "0.8rem" }}>
                    💬 Mentor Feedback • Lead AI Architect
                  </strong>
                  <span style={{ fontSize: "0.7rem", color: "#6ee7b7" }}>10 mins ago</span>
                </div>
                <div>
                  &quot;Great architecture! For enterprise production, consider wrapping this step with a circuit-breaker fallback if the latency exceeds 200ms.&quot;
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", fontSize: "0.75rem", color: "#94a3b8" }}>
                <span>Session: Live Pair Programming & Architecture Walkthrough</span>
                <span style={{ color: "#34d399", fontWeight: 600 }}>Cohort #08</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
