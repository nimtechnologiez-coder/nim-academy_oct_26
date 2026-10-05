"use client";

import React, { useState } from "react";
import styles from "../landing.module.css";
import { CloseIcon, CheckIcon } from "./Icons";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "College Student / Fresh Graduate",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://nim-academy-backend-oct26.onrender.com/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Backend registration error:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className={styles.modalCloseBtn}
          aria-label="Close registration modal"
        >
          <CloseIcon />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "24px 8px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "var(--color-nim-lime-bg)",
                color: "var(--color-nim-lime)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px auto",
              }}
            >
              <CheckIcon />
            </div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "8px", color: "var(--color-text-main)" }}>
              Registration Submitted!
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.925rem", lineHeight: 1.55, marginBottom: "24px" }}>
              Welcome <strong>{formData.name || "Student"}</strong>! Your registration for the Generative AI Engineering Program has been received. An academic advisor will contact you at{" "}
              <strong>{formData.phone || formData.email}</strong> to finalize your cohort onboarding.
            </p>
            <button onClick={handleClose} className={styles.btnPrimaryGreen} style={{ width: "100%" }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "24px" }}>
              <span className={styles.sectionBadge} style={{ marginBottom: "8px" }}>
                Enrollment Open
              </span>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "6px" }}>
                Register for Generative AI Engineering
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                Secure your seat in the upcoming cohort. Zero-prerequisite to job-ready AI engineering.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="modal-name">
                  Full Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Roy"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="modal-email">
                  Email Address
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="e.g. priyanshu@example.com"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="modal-phone">
                  Phone / WhatsApp Number
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  className={styles.formInput}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="modal-exp">
                  Current Experience Level
                </label>
                <select
                  id="modal-exp"
                  className={styles.formSelect}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="College Student / Fresh Graduate">
                    College Student / Fresh Graduate
                  </option>
                  <option value="Software Engineer (0-2 Yrs)">
                    Software Engineer (0–2 Yrs)
                  </option>
                  <option value="Senior Tech Lead / Architect (3+ Yrs)">
                    Senior Tech Lead / Architect (3+ Yrs)
                  </option>
                  <option value="Non-Tech Professional Switching to AI">
                    Non-Tech Professional Switching to AI
                  </option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.btnPrimaryGreen}
                style={{ width: "100%", marginTop: "12px", padding: "14px 20px" }}
              >
                {isSubmitting ? "Submitting Registration..." : "Complete Registration →"}
              </button>

              <p className={styles.formConsent}>
                🔒 100% Secure Registration. No spam guaranteed.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
