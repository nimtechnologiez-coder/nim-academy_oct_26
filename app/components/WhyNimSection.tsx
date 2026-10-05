"use client";

import React from "react";
import styles from "../landing.module.css";
import {
  CodeBracketIcon,
  ServerStackIcon,
  CpuChipIcon,
  CareerBriefcaseIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "./Icons";

export default function WhyNimSection() {
  return (
    <section className={`${styles.section} ${styles.whyNimModernSection}`} id="why-nim">
      <div className={styles.container}>
        {/* Modern Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadgePill}>
            <span className={styles.badgePulseGreenDot} />
            <span>Engineered for Impact</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Generative AI Engineering Program With <span className={styles.titleLimeAccent}>NIM</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Designed by practicing AI engineers at NIM Technologies to bridge the divide between
            isolated textbook theory and enterprise production demands.
          </p>
        </div>

        {/* Modern Bento-Style Grid */}
        <div className={styles.modernBentoGrid}>
          {/* Card 1: End-to-End Curriculum (Hero Bento) */}
          <div className={`${styles.bentoCard} ${styles.bentoCardCurriculum}`}>
            <div className={styles.bentoCardTop}>
              <div className={`${styles.bentoIconWrapper} ${styles.iconCyan}`}>
                <CodeBracketIcon />
              </div>
              <span className={styles.bentoWatermarkNum}>01</span>
            </div>

            <div className={styles.bentoContent}>
              <h3 className={styles.bentoTitle}>End-to-End Curriculum</h3>
              <p className={styles.bentoDesc}>
                From solid Python & linear algebra to advanced Transformer attention mechanisms and
                multi-agent orchestration. A cohesive, zero-assumption roadmap built for mastery.
              </p>

              {/* Visual Micro-Widget: Progression Track */}
              <div className={styles.curriculumRoadmapPill}>
                <div className={styles.roadmapStep}>
                  <span className={styles.stepDot} />
                  <span className={styles.stepText}>Python & Math</span>
                </div>
                <span className={styles.roadmapArrow}>→</span>
                <div className={styles.roadmapStep}>
                  <span className={styles.stepDot} />
                  <span className={styles.stepText}>PyTorch & DL</span>
                </div>
                <span className={styles.roadmapArrow}>→</span>
                <div className={styles.roadmapStep}>
                  <span className={styles.stepDot} />
                  <span className={styles.stepText}>LLMs & RAG</span>
                </div>
                <span className={styles.roadmapArrow}>→</span>
                <div className={styles.roadmapStep}>
                  <span className={`${styles.stepDot} ${styles.stepDotActive}`} />
                  <span className={styles.stepTextActive}>Agentic AI</span>
                </div>
              </div>

              <div className={styles.bentoTagRow}>
                <span className={styles.bentoTag}>Zero-Assumption</span>
                <span className={styles.bentoTag}>NumPy Vectorization</span>
                <span className={styles.bentoTag}>LangGraph Workflows</span>
              </div>
            </div>
          </div>

          {/* Card 2: Production & MLOps Focus */}
          <div className={`${styles.bentoCard} ${styles.bentoCardMlops}`}>
            <div className={styles.bentoCardTop}>
              <div className={`${styles.bentoIconWrapper} ${styles.iconLime}`}>
                <ServerStackIcon />
              </div>
              <span className={styles.bentoWatermarkNum}>02</span>
            </div>

            <div className={styles.bentoContent}>
              <h3 className={styles.bentoTitle}>Production & MLOps Focus</h3>
              <p className={styles.bentoDesc}>
                We move beyond notebook prototypes. Package AI services with Docker, build high-throughput
                FastAPI endpoints, configure vector databases, and implement automated CI/CD pipelines.
              </p>

              {/* Visual Micro-Widget: Mini Terminal Box */}
              <div className={styles.bentoCodePreview}>
                <div className={styles.bentoCodeHeader}>
                  <span className={styles.codeDotRed} />
                  <span className={styles.codeDotYellow} />
                  <span className={styles.codeDotGreen} />
                  <span className={styles.codeFileName}>deploy_service.sh</span>
                </div>
                <pre className={styles.bentoCodeBody}>
                  <code>
{`$ docker build -t nim-agent:v2.4 .
$ uvicorn api:app --workers 4
✓ Service live on port 8000 (SLA 99.9%)`}
                  </code>
                </pre>
              </div>

              <div className={styles.bentoTagRow}>
                <span className={styles.bentoTag}>Docker Containerization</span>
                <span className={styles.bentoTag}>FastAPI ASGI</span>
                <span className={styles.bentoTag}>Azure Cloud</span>
              </div>
            </div>
          </div>

          {/* Card 3: GenAI & Agentic Systems */}
          <div className={`${styles.bentoCard} ${styles.bentoCardAgents}`}>
            <div className={styles.bentoCardTop}>
              <div className={`${styles.bentoIconWrapper} ${styles.iconTeal}`}>
                <CpuChipIcon />
              </div>
              <span className={styles.bentoWatermarkNum}>03</span>
            </div>

            <div className={styles.bentoContent}>
              <h3 className={styles.bentoTitle}>GenAI & Agentic Systems</h3>
              <p className={styles.bentoDesc}>
                Master enterprise Retrieval-Augmented Generation (RAG), parameter-efficient fine-tuning
                (LoRA/PEFT), LangChain, LangGraph, and autonomous multi-agent problem solving.
              </p>

              {/* Visual Micro-Widget: Agent State Flow */}
              <div className={styles.agentFlowVisual}>
                <div className={styles.agentFlowNode}>
                  <span className={styles.nodeTag}>PLANNER</span>
                  <strong>User Intent</strong>
                </div>
                <div className={styles.flowConnector}>
                  <span className={styles.flowSignalDot} />
                </div>
                <div className={styles.agentFlowNode}>
                  <span className={styles.nodeTag}>RETRIEVER</span>
                  <strong>Hybrid Vector DB</strong>
                </div>
                <div className={styles.flowConnector}>
                  <span className={styles.flowSignalDot} />
                </div>
                <div className={styles.agentFlowNode}>
                  <span className={styles.nodeTagActive}>GUARDRAIL</span>
                  <strong>Anti-Hallucination</strong>
                </div>
              </div>

              <div className={styles.bentoTagRow}>
                <span className={styles.bentoTag}>LangGraph StateGraph</span>
                <span className={styles.bentoTag}>LoRA / PEFT Fine-Tuning</span>
                <span className={styles.bentoTag}>RAGAS: 99.2% Accuracy</span>
              </div>
            </div>
          </div>

          {/* Card 4: Career & Placement Layer */}
          <div className={`${styles.bentoCard} ${styles.bentoCardCareer}`}>
            <div className={styles.bentoCardTop}>
              <div className={`${styles.bentoIconWrapper} ${styles.iconGreen}`}>
                <CareerBriefcaseIcon />
              </div>
              <span className={styles.bentoWatermarkNum}>04</span>
            </div>

            <div className={styles.bentoContent}>
              <h3 className={styles.bentoTitle}>Career & Placement Layer</h3>
              <p className={styles.bentoDesc}>
                Placement assistance begins directly in Month 3. Benefit from ATS resume optimization,
                technical portfolio building, system design walkthroughs, and 1-on-1 mock interviews.
              </p>

              {/* Visual Micro-Widget: Career Milestones Checklist */}
              <div className={styles.careerMilestonesGrid}>
                <div className={styles.careerMilestoneItem}>
                  <div className={styles.milestoneIconCheck}>
                    <CheckIcon />
                  </div>
                  <div className={styles.milestoneInfo}>
                    <strong>Month 03: ATS Resume</strong>
                    <span>Engineered for recruiter filters</span>
                  </div>
                </div>

                <div className={styles.careerMilestoneItem}>
                  <div className={styles.milestoneIconCheck}>
                    <CheckIcon />
                  </div>
                  <div className={styles.milestoneInfo}>
                    <strong>Month 04: GitHub Portfolio</strong>
                    <span>Live code & reproducible Docker</span>
                  </div>
                </div>

                <div className={styles.careerMilestoneItem}>
                  <div className={styles.milestoneIconCheck}>
                    <CheckIcon />
                  </div>
                  <div className={styles.milestoneInfo}>
                    <strong>Month 05: Mock Architecture</strong>
                    <span>1:1 technical panel reviews</span>
                  </div>
                </div>

                <div className={styles.careerMilestoneItem}>
                  <div className={styles.milestoneIconCheck}>
                    <CheckIcon />
                  </div>
                  <div className={styles.milestoneInfo}>
                    <strong>Month 06: Direct Referrals</strong>
                    <span>170+ vetted hiring partners</span>
                  </div>
                </div>
              </div>

              <div className={styles.bentoTagRow}>
                <span className={styles.bentoTag}>170+ Hiring Partners</span>
                <span className={styles.bentoTag}>Avg. 8.4 LPA Target</span>
                <span className={styles.bentoTag}>1:1 Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
