import React from "react";
import "../App.css";

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <h2>My Resume</h2>
      <p>You can view or download my resume below:</p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        View Resume
      </a>
      <a
        href="/resume.pdf"
        download="Kandisa_Agarwal_Resume.pdf"
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}
