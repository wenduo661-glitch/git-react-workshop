import React from "react";
import "../styles/navbar.css"

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">My Portfolio</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        <li onClick={() => window.open("/resume.pdf", "_blank")}>Resume</li>
      </ul>
    </nav>
  );
}
