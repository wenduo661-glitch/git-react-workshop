import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-content">
        <h3>Kandisa Agarwal</h3>
        <p>Have a project or just want to say hi? Let’s connect!</p>
        <a className="email-link" href="mailto:kandisa@example.com">
          kandisa@example.com
        </a>
        <div className="social-links">
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} Kandisa Agarwal. All rights reserved.</p>
    </footer>
  );
};

export default Contact;
