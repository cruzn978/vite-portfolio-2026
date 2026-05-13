// import React from "react";

export default function Header() {
  return (
    <div className="socials">
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <img src="/linkedin3.svg" alt="LinkedIn" className="social-icon" />
      </a>
      <a href="/resume.pdf" download aria-label="Download Resume">
        <img src="/resume2.svg" alt="Resume" className="social-icon" />
      </a>
    </div>
  );
}
