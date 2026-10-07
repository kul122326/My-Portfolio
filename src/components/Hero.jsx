import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/profile.jpg";
import { 
  ArrowRight, 
  Mail, 
  FileText, 
  Code2, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Column */}
          <div className="hero-left">
            <div className="status-pill">
              <span className="status-dot" />
              <span>Available for Full-Time Roles & Projects</span>
            </div>

            <div className="hero-headings">
              <h1 className="hero-title">
                Hi, I'm <span className="name-highlight">{personalInfo.name}</span>
                <span className="hero-role">Full-Stack Developer & CS Graduate</span>
              </h1>
            </div>

            <p className="hero-description">
              {personalInfo.tagline} A passionate Computer Science graduate dedicated to building responsive, scalable, and high-performance digital solutions with modern web technologies.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} /> Get In Touch
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                aria-label="Email Me"
                title="Email Me"
              >
                <Mail size={20} />
              </a>
              <a
                href="#education"
                className="social-icon-btn"
                aria-label="Academic Background"
                title="Academic Background"
              >
                <FileText size={20} />
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="hero-stats">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Column: Dummy Image with Floating Animated Badges */}
          <div className="hero-right">
            <div className="hero-visual-card">
              {/* Radial glow background */}
              <div className="visual-halo" />

              

              {/* The Styled Frame containing the Dummy Image */}
              <div className="image-frame">
                <div className="image-inner">
                  {!imgError ? (
                    <img
                      src={profileImg || personalInfo.dummyImage}
                      alt="Kuldeep Yadav - Professional Developer"
                      className="hero-dummy-img"
                      loading="eager"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Fallback SVG Developer Avatar if image cannot be loaded */
                    <div className="dummy-avatar-fallback">
                      <div className="avatar-icon-wrap">
                        <Code2 size={48} color="#ffffff" />
                      </div>
                      <h3 className="avatar-name">Kuldeep Yadav</h3>
                      <p className="avatar-sub">Computer Science & Full-Stack</p>
                      <div style={{ marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--accent-emerald)" }}>
                        <CheckCircle2 size={14} /> Ready to Build
                      </div>
                    </div>
                  )}
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
