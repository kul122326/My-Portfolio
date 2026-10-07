import React from "react";
import { skillsData } from "../data/portfolioData";
import { Code, Database, Terminal, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Engineering",
      icon: <Code size={22} />,
      skills: skillsData.frontend,
      description: "Crafting intuitive, accessible, and high-performance interfaces."
    },
    {
      title: "Backend & Databases",
      icon: <Database size={22} />,
      skills: skillsData.backend,
      description: "Developing robust APIs and scalable database data models."
    },
    {
      title: "Programming & Core CS",
      icon: <Terminal size={22} />,
      skills: skillsData.core,
      description: "Applying foundational algorithmic and object-oriented principles."
    },
    {
      title: "Tools & Deployment",
      icon: <Wrench size={22} />,
      skills: skillsData.tools,
      description: "Modern developer tooling for version control and CI/CD."
    }
  ];

  return (
    <section id="skills" className="section-wrapper" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="section-tag">Technical Arsenal</div>
            <h2 className="section-title">
              Skills & <span>Technologies</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive overview of programming languages, libraries, frameworks, and developer tools in my workflow.
            </p>
          </div>
        </ScrollReveal>

        <div className="skills-categories">
          {categories.map((cat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon">{cat.icon}</div>
                  <div>
                    <h3>{cat.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-dim)", marginTop: "2px" }}>
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="skills-pill-grid">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                      <span className="skill-level">· {skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
