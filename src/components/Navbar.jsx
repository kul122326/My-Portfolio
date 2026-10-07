import React, { useState } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Internship", href: "#internship" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar-outer">
      <div className="container">
        <div className="navbar">
          <a href="#hero" className="brand-logo" aria-label="Kuldeep Yadav Portfolio">
            <img src="/ky-logo.svg" alt="KY Logo" className="brand-logo-img" />
            <span>Kuldeep<span className="dot">.</span></span>
          </a>

          <nav className="nav-links" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#contact" className="btn-hire">
              Hire Me <ArrowUpRight size={16} />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          style={{ color: "var(--accent-primary)", fontWeight: 700 }}
        >
          Hire Me ↗
        </a>
      </div>
    </header>
  );
}
