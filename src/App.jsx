import { useEffect, useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import SectionNav from "./components/SectionNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ExperienceSection from "./components/ExperienceSection";
import ProjectList from "./components/ProjectList";
import ContactSection from "./components/ContactSection";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import "./index.css";

function ProjectsSection() {
  return (
    <section id="projects" className="slide projects-section">
      <h2>Projects</h2>
      <ProjectList />
    </section>
  );
}

function MainSite() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [hash, setHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const onChange = () => setHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const isBlogPost = hash.indexOf("#blog/") === 0;
  const isBlogList = hash === "#blog";
  const isBlog = isBlogPost || isBlogList;

  useEffect(() => {
    if (hash && hash !== "#blog" && hash !== "#blog/") {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [hash]);

  useEffect(() => {
    const main = document.querySelector(".snap-main");
    if (!main) return undefined;

    const sections = main.querySelectorAll(".slide");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { root: main, threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isBlog]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const buttons = document.querySelectorAll(".btn");
    const cleanups = Array.from(buttons, (button) => {
      const onMove = (event) => {
        const rect = button.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
        button.style.setProperty("--magnetic-x", `${x}px`);
        button.style.setProperty("--magnetic-y", `${y}px`);
      };
      const reset = () => {
        button.style.removeProperty("--magnetic-x");
        button.style.removeProperty("--magnetic-y");
      };

      button.addEventListener("pointermove", onMove);
      button.addEventListener("pointerleave", reset);
      return () => {
        button.removeEventListener("pointermove", onMove);
        button.removeEventListener("pointerleave", reset);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [isBlog]);

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {isBlog ? (
        <main className="blog-main">
          {isBlogPost ? (
            <BlogPost postId={hash.replace("#blog/", "")} />
          ) : (
            <BlogList />
          )}
        </main>
      ) : (
        <>
          <main className="snap-main">
            <MainSite />
          </main>
          <SectionNav />
        </>
      )}
    </div>
  );
}
