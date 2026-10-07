import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp, Heart, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/ky-logo.svg" alt="KY Logo" style={{ width: "36px", height: "36px", borderRadius: "8px" }} />
            <div>
              <h4>{personalInfo.name}</h4>
              <p>{personalInfo.title} · Lucknow, Uttar Pradesh</p>
            </div>
          </div>

          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#internship">Internship</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              style={{ width: "38px", height: "38px" }}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              style={{ width: "38px", height: "38px" }}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-icon-btn"
              style={{ width: "38px", height: "38px" }}
              aria-label="Send Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed & Built with React & Vite.
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn">
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
