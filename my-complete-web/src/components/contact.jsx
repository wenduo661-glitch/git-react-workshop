import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-footer">
      <div className="footer-content">
        <p>Have a project or just want to say hi? Let’s connect!</p>
        <a className="email-link" href="mailto:kandisaagarawal@example.com">
          kandisaagarwal@example.com
        </a>
        <div className="social-links">
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Kandisa Agarwal. All rights reserved.</p>
    </section>
  );
};

export default Contact;
