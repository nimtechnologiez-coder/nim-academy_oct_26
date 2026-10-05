"use client";

import React, { useState, useEffect } from "react";
import styles from "../landing.module.css";
import { NimLogoLockup, SunIcon, MoonIcon, MenuIcon, CloseIcon, ArrowRightIcon } from "./Icons";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("nim_theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("nim_theme", nextTheme);
  };

  const navLinks = [
    { label: "Why NIM", href: "#why-nim" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Mentors", href: "#mentors" },
    { label: "Placements", href: "#placements" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Gateways", href: "#gateways" },
    { label: "Student Portal", href: "#student-portal" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* NIM Academy Logo on Left */}
        <a href="#" className={styles.brandLogo} aria-label="NIM Academy Home">
          <NimLogoLockup />
        </a>

        {/* Center Navigation */}
        <nav className={styles.centerNav} aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Theme Toggle & Book Free Consultation Button */}
        <div className={styles.navActions}>
          {/* Pill-style Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`${styles.themeSwitchPill} ${theme === "dark" ? styles.themeSwitchDark : ""}`}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <div className={styles.themeSwitchThumb}>
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </div>
          </button>

          {/* Book Free Consultation Green Button */}
          <button
            onClick={onOpenConsultation}
            className={styles.headerBtnConsultation}
            id="nav-consultation-btn"
          >
            <span>Register Now</span>
            <ArrowRightIcon />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.hamburgerBtn}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className={styles.headerBtnConsultation}
            style={{ width: "100%", marginTop: "12px", justifyContent: "center" }}
          >
            <span>Register Now</span>
            <ArrowRightIcon />
          </button>
        </div>
      )}
    </header>
  );
}
