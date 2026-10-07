import React, { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend & React" },
    
  ];

  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="section-tag">Featured Work</div>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <p className="section-subtitle">
              A selection of web applications showcasing my proficiency in frontend engineering, API integration, and full-stack development.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Navigation */}
        <ScrollReveal delay={80}>
          <div className="projects-filter">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`filter-btn ${activeFilter === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100}>
              <div className="project-card">
                <div className="project-thumbnail">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80";
                    }}
                  />
                  <span className="project-category-badge">
                    {project.categoryName}
                  </span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-features">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="feature-point">
                        <span className="feature-dot" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-tech-stack">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project live"
                    >
                      Live Demo <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project code"
                    >
                      <GithubIcon size={14} /> GitHub
                    </a>
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
