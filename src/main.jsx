import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("ky_portfolio_theme") || "dark";
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ky_portfolio_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgressBar />

      {/* Background ambient lighting */}
      <div className="ambient-glow" />

      {/* Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* Hero Section with Dummy Image on the right & floating animations */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Internship & Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
