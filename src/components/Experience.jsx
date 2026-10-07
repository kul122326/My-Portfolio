import React from "react";
import { internshipsData } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="internship" className="section-wrapper">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="section-tag">Internship & Experience</div>
            <h2 className="section-title">
              Industry <span>Internship & Training</span>
            </h2>
            <p className="section-subtitle">
              Hands-on professional experience applying engineering concepts to live projects, collaborative sprints, and software delivery.
            </p>
          </div>
        </ScrollReveal>

        <div className="timeline-container">
          {internshipsData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 140}>
              <div className="timeline-item">
                <div className="timeline-marker" />

                <div className="experience-card">
                  <div className="experience-top">
                    <div className="exp-role-wrap">
                      <h3>{item.role}</h3>
                      <div className="exp-company-line">
                        <Briefcase size={16} />
                        <span>{item.company}</span>
                        <span className="loc">· <MapPin size={14} style={{ display: "inline", verticalAlign: "middle" }} /> {item.location}</span>
                      </div>
                    </div>

                    <div className="exp-period-badge">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="exp-desc">{item.description}</p>

                  <div className="exp-achievements">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="exp-achieve-item">
                        <CheckCircle size={16} className="exp-bullet-icon" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="exp-tech-tags">
                    {item.technologies.map((t, i) => (
                      <span key={i} className="exp-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
