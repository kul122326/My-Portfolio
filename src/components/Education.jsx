import React from "react";
import { educationData } from "../data/portfolioData";
import { GraduationCap, Award, MapPin, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="section-tag">Academic Background</div>
            <h2 className="section-title">
              Education & <span>Qualifications</span>
            </h2>
            <p className="section-subtitle">
              Formal foundations in Computer Science and Engineering, core mathematics, and computational logic.
            </p>
          </div>
        </ScrollReveal>

        <div className="education-grid">
          {educationData.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 130}>
              <div className="education-card">
                <div className="edu-top">
                  <div className="edu-badge-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div className="edu-year-badge">{item.year}</div>
                </div>

                <h3 className="edu-degree">{item.degree}</h3>
                <div className="edu-field">{item.field}</div>

                <div className="edu-institution">
                  <MapPin size={14} style={{ color: "var(--accent-blue)" }} />
                  <span>{item.institution}, {item.location}</span>
                </div>

                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--accent-emerald)", fontWeight: 600, marginBottom: "14px" }}>
                  <Award size={14} />
                  <span>{item.grade}</span>
                </div>

                <p className="edu-desc">{item.description}</p>

                {item.coursework && (
                  <div className="coursework-box">
                    <div className="coursework-title">Key Core Coursework</div>
                    <div className="coursework-pills">
                      {item.coursework.map((course, cIdx) => (
                        <span key={cIdx} className="coursework-pill">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.highlights && (
                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "var(--text-dim)" }}>
                        <CheckCircle size={14} style={{ color: "var(--accent-blue)", flexShrink: 0, marginTop: "2px" }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
