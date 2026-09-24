import { Fragment } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Hero() {
  const tagline = "I build scalable backend systems and automation workflows using Django, Python, and React. Currently working full time on client implementation projects, with hands on experience across authentication, real time systems, and API integrations.";

  return (
    <section id="home" className="slide hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Full Stack Developer</p>
          <h1>Ashad Shaikh</h1>
          <p className="hero-text" aria-label={tagline}>
            {tagline.split(" ").map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <span>{word}</span>
                {index < tagline.split(" ").length - 1 ? " " : null}
              </Fragment>
            ))}
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn">View Projects</a>
            <a href="mailto:ashadshaikh.zx@gmail.com" className="btn btn-outline">Get in Touch</a>
          </div>
          <div className="socials">
            <a href="https://github.com/senku0-0" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/ashad--shaikh" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="mailto:ashadshaikh.zx@gmail.com" aria-label="Email"><MailIcon /></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Profile image placeholder">
          <div className="hero-photo-placeholder">
            <img src="1752945100839.jpg" alt="Ashad Shaikh" />
          </div>
        </div>
      </div>
    </section>
  );
}