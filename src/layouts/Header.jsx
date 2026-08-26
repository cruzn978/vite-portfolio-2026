// import React from "react";

export default function Header() {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/cruzn978/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <img src="/linkedin3.svg" alt="LinkedIn" className="social-icon" />
      </a>
      <a
        href="/Nichole_Resume_download.pdf"
        download
        aria-label="Download Resume"
      >
        <img src="/resume2.svg" alt="Resume" className="social-icon" />
      </a>

      <a href="mailto:cruzalegui.nichole@gmail.com" aria-label="Email">
        <img src="/email2.svg" alt="Email" className="social-icon" />
      </a>
    </div>
  );
}
