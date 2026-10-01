"use client";

import React from "react";
import styles from "../landing.module.css";
import { BrandLogoIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand Col */}
          <div className={styles.footerBrandCol}>
            <div className={styles.brandLogo}>
              <div className={styles.logoIcon}>
                <BrandLogoIcon />
              </div>
              <div className={styles.logoTextGroup}>
                <span className={styles.logoTitle}>NIM ACADEMY</span>
                <span className={styles.logoSubtitle}>by NIM Technologies</span>
              </div>
            </div>

            <p className={styles.footerBrandTagline}>
              Empowering developers and tech professionals to master real-world Generative AI
              Engineering, LLM systems, and autonomous multi-agent production architectures.
            </p>

            <div className={styles.footerDomainPills}>
              <a
                href="https://nimtechnologies.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.domainPill}
              >
                <span>nimtechnologies.in</span>
              </a>
              <a
                href="https://nimacademy.in"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.domainPill}
              >
                <span>nimacademy.in</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className={styles.footerColTitle}>Programs</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#curriculum" className={styles.footerLink}>
                  GenAI Engineering Track
                </a>
              </li>
              <li>
                <a href="#curriculum" className={styles.footerLink}>
                  6-Month Roadmap
                </a>
              </li>
              <li>
                <a href="#microsoft-advantage" className={styles.footerLink}>
                  Azure AI-900 Prep
                </a>
              </li>
              <li>
                <a href="#gateways" className={styles.footerLink}>
                  3 Gateway Evaluations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div>
            <h4 className={styles.footerColTitle}>Platform & Career</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#placements" className={styles.footerLink}>
                  Placement Track
                </a>
              </li>
              <li>
                <a href="#student-portal" className={styles.footerLink}>
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#why-nim" className={styles.footerLink}>
                  Why NIM
                </a>
              </li>
              <li>
                <a href="#teaching-style" className={styles.footerLink}>
                  Mentorship Model
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className={styles.footerColTitle}>NIM Technologies</h4>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--color-text-muted)", marginBottom: "12px" }}>
              NIM Technologies Pvt. Ltd.
              <br />
              Enterprise AI solutions, talent incubator, and applied machine learning research.
            </p>
            <div style={{ fontSize: "0.8125rem", color: "var(--color-nim-teal)" }}>
              Email: admissions@nimacademy.in
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div>
            © {new Date().getFullYear()} NIM Technologies × NIM Academy. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
            <a href="#" className={styles.footerLink}>Honor Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
