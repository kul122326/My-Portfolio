import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  CheckCircle2
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";
import ScrollReveal from "./ScrollReveal";

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast("Email copied to clipboard!");
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast("Thank you! Your message has been sent successfully.");
      }
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">
              Let's Build <span>Something Great</span>
            </h2>
            <p className="section-subtitle">
              Whether you have an opportunity, a project proposal, or simply want to connect, my inbox is always open.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Quick Links */}
          <ScrollReveal delay={100} className="contact-info-col">
            <div className="contact-card">
              <h3>Contact Information</h3>
              <p>
                Feel free to reach out directly via email or connect with me on social platforms. I typically respond within 24 hours.
              </p>

              <div className="contact-items-list">
                {/* Email Item with 1-Click Copy */}
                <div className="contact-item-row">
                  <div className="contact-item-left">
                    <div className="contact-item-icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="contact-item-label">Email</div>
                      <div className="contact-item-value">{personalInfo.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-copy"
                    aria-label="Copy Email"
                    title="Copy Email"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-item-row">
                  <div className="contact-item-left">
                    <div className="contact-item-icon">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="contact-item-label">Location</div>
                      <div className="contact-item-value">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="contact-item-row">
                  <div className="contact-item-left">
                    <div className="contact-item-icon">
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <div className="contact-item-label">LinkedIn</div>
                      <div className="contact-item-value">in/kuldeep-yadav-468938295</div>
                    </div>
                  </div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-copy"
                  >
                    Connect ↗
                  </a>
                </div>

                {/* GitHub Item */}
                <div className="contact-item-row">
                  <div className="contact-item-left">
                    <div className="contact-item-icon">
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <div className="contact-item-label">GitHub</div>
                      <div className="contact-item-value">github.com/kuldeepyadav</div>
                    </div>
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-copy"
                  >
                    View ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Employment Status Badge Card */}
            <div className="contact-card" style={{ borderColor: "rgba(16, 185, 129, 0.3)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span className="status-dot" />
                <span style={{ fontWeight: 700, color: "var(--accent-emerald)", fontSize: "14px" }}>
                  Currently Open to Opportunities
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: 0 }}>
                Looking for Junior Software Engineer, Frontend Developer, or Full-Stack Engineer roles. Willing to relocate or work remotely.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Send Message Form */}
          <ScrollReveal delay={180}>
            <div className="contact-form-card">
              <h3 className="form-title">Send Me a Message</h3>
              <p className="form-subtitle">
                Have a question, feedback, or a job offer? Leave a message below!
              </p>

              {submitted && (
                <div style={{
                  padding: "16px",
                  background: "rgba(16, 185, 129, 0.15)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--accent-emerald)"
                }}>
                  <CheckCircle2 size={20} />
                  <span style={{ fontSize: "14px", fontWeight: 600 }}>
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project inquiry / Full-time role opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Hi Kuldeep, I came across your portfolio and wanted to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-submit"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
