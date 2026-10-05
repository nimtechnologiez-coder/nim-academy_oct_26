"use client";

import React from "react";
import styles from "../landing.module.css";
import { BrandLogoIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Column 1: Brand & Overview */}
          <div className={styles.footerBrandCol}>
            <div className={styles.brandLogo}>
              <BrandLogoIcon height={52} />
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

          {/* Column 2: Programs */}
          <div className={styles.footerCol}>
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

          {/* Column 3: Platform & Career */}
          <div className={styles.footerCol}>
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

          {/* Column 4: Contact & Organization */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>NIM Technologies</h4>
            <div className={styles.companyMetaBox}>
              <span className={styles.companyName}>NIM Technologies Pvt. Ltd.</span>
              <p className={styles.companyDesc}>
                Enterprise AI solutions, talent incubator, and applied machine learning research.
              </p>
              <a href="mailto:contactnimacademy@gmail.com" className={styles.contactEmailLink}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>contactnimacademy@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyrightText}>
            © {new Date().getFullYear()} NIM Technologies × NIM Academy. All rights reserved.
          </div>
          <div className={styles.bottomLegalLinks}>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <span className={styles.bottomLinkDivider}>•</span>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
            <span className={styles.bottomLinkDivider}>•</span>
            <a href="#" className={styles.footerLink}>Honor Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
