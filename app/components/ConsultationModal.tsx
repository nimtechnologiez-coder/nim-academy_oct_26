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
    preferredTime: "Morning (10 AM - 1 PM)",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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
          aria-label="Close consultation modal"
        >
          <CloseIcon />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
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
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "8px" }}>
              Consultation Scheduled!
            </h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "24px" }}>
              Thanks {formData.name || "there"}! An AI Engineering mentor will contact you at{" "}
              <strong>{formData.phone || formData.email}</strong> during your preferred slot.
            </p>
            <button onClick={handleClose} className={styles.btnPrimaryGreen} style={{ width: "100%" }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span className={styles.sectionBadge} style={{ marginBottom: "8px" }}>
                1-on-1 Guidance
              </span>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-main)", marginBottom: "6px" }}>
                Book Your Free AI Career Consultation
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                Speak with our engineering mentors about eligibility, curriculum details, and placement roadmaps.
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
                  Phone Number
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
                  Experience Level
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
                  <option value="Non-tech professional switching to AI">
                    Non-tech professional switching to AI
                  </option>
                  <option value="Software Developer (0-2 yrs)">
                    Software Developer (0–2 yrs)
                  </option>
                  <option value="Experienced Developer / Lead (3+ yrs)">
                    Experienced Developer / Lead (3+ yrs)
                  </option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="modal-time">
                  Preferred Time Slot
                </label>
                <select
                  id="modal-time"
                  className={styles.formSelect}
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM – 1 PM)</option>
                  <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM – 5 PM)</option>
                  <option value="Evening (6 PM - 9 PM)">Evening (6 PM – 9 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.btnPrimaryGreen}
                style={{ width: "100%", marginTop: "8px" }}
              >
                {isSubmitting ? "Confirming..." : "Confirm Free Consultation"}
              </button>

              <p className={styles.formConsent}>
                🔒 100% confidential. No spam guaranteed.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
