import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Code, Layout, Cpu, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const highlights = [
    {
      icon: <Code size={22} />,
      title: "Clean & Maintainable Code",
      desc: "Writing modular, well-documented, and scalable code following industry best practices."
    },
    {
      icon: <Layout size={22} />,
      title: "Responsive & Modern UI",
      desc: "Crafting fluid user interfaces with intuitive UX, accessibility, and high aesthetic standard."
    },
    {
      icon: <Cpu size={22} />,
      title: "Algorithmic Problem Solving",
      desc: "Solid grasp of computer science fundamentals, data structures, and logical reasoning."
    },
    {
      icon: <Zap size={22} />,
      title: "Fast Learner & Team Player",
      desc: "Quickly adapting to emerging toolchains, agile methodologies, and cross-functional teams."
    }
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="section-tag">About Me</div>
            <h2 className="section-title">
              Transforming Ideas Into <span>Functional Digital Realities</span>
            </h2>
            <p className="section-subtitle">
              Get to know my engineering mindset, academic background, and passion for software development.
            </p>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal delay={100}>
            <div className="about-text-card">
              <p>
                Hello! I'm <strong>{personalInfo.name}</strong>, a Computer Science Engineering graduate from <strong>R R Institute Of Modern Technology</strong>, Lucknow. My passion lies in software development, particularly creating rich frontend interfaces and full-stack web architectures.
              </p>
              <p>
                During my academic career and hands-on internship experience, I developed a strong foundation in modern JavaScript, React.js, Node.js, and relational/NoSQL databases. I enjoy solving real-world challenges by translating conceptual ideas into efficient, clean web applications.
              </p>
              <p>
                I believe great software is born at the intersection of robust logic and exceptional user experience. Currently, I am actively seeking full-time opportunities where I can contribute to impactful software products and grow as a software engineer.
              </p>

              <div style={{ marginTop: "24px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a href="#contact" className="btn-primary" style={{ padding: "11px 22px", fontSize: "14px" }}>
                  Let's Talk
                </a>
                <a href="#education" className="btn-secondary" style={{ padding: "11px 22px", fontSize: "14px" }}>
                  View Education
                </a>
              </div>
            </div>
          </ScrollReveal>

          <div className="about-details-grid">
            {highlights.map((item, index) => (
              <ScrollReveal key={index} delay={150 + index * 80}>
                <div className="detail-card">
                  <div className="detail-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
