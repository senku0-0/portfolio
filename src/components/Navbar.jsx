import ThemeToggle from "./ThemeToggle";
import { DownloadIcon } from "./Icons";

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="navbar-brand-wrap">
        <a href="#home" className="navbar-brand">Ashad Shaikh</a>
        <span className="navbar-role">(Software Engineer)</span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
        <a href="/resume.pdf" download className="btn btn-outline navbar-resume">
          <DownloadIcon />
          Resume
        </a>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </nav>
    </header>
  );
}