import { useMemo, useState } from "react";
import blogs from "../data/blogs.json";

function splitParagraphs(content = "") {
  return content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function normalizeSections(post) {
  if (Array.isArray(post?.sections) && post.sections.length > 0) {
    return post.sections.map((section, index) => ({
      id: section.id || `section-${index + 1}`,
      title: section.title || `Section ${index + 1}`,
      paragraphs: splitParagraphs(section.content || ""),
    }));
  }

  return [
    {
      id: "overview",
      title: "Overview",
      paragraphs: splitParagraphs(post?.content || ""),
    },
  ];
}

function normalizeTabs(post) {
  if (!Array.isArray(post?.tabs) || post.tabs.length === 0) {
    return [];
  }

  return post.tabs.map((tab, index) => ({
    id: tab.id || `tab-${index + 1}`,
    title: tab.title || `Tab ${index + 1}`,
    content: splitParagraphs(tab.content || ""),
  }));
}

export default function BlogPost({ postId }) {
  const post = blogs.find((p) => p.id === postId);

  const sections = useMemo(() => normalizeSections(post), [post]);
  const tabs = useMemo(() => normalizeTabs(post), [post]);
  const [activeSection, setActiveSection] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const hasTabs = Array.isArray(tabs) && tabs.length > 0;

  if (!post) {
    return (
      <div className="blog-page">
        <a href="#blog" className="back-link">Back to blog</a>
        <p>Post not found.</p>
      </div>
    );
  }

  const activeContent = sections[activeSection] || sections[0];
  const activeTabContent = tabs[activeTab] || tabs[0];

  const handleSectionClick = (index) => {
    setActiveSection(index);

    const section = document.getElementById(sections[index]?.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="blog-page blog-post-page">
      <a href="#blog" className="back-link">Back to blog</a>

      <div className="blog-layout">
        {hasTabs && (
          <aside className="blog-side blog-side-left">
            <div className="blog-tab-panel">
              <div className="blog-tab-buttons" aria-label="Blog tabs">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={index === activeTab ? "active" : ""}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {activeTabContent && (
                <div className="blog-tab-content">
                  {activeTabContent.content.map((paragraph, index) => (
                    <p key={`${activeTabContent.id}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </aside>
        )}

        <article className="blog-post">
          <header className="blog-post-header">
            <h1>{post.title}</h1>
            <span className="blog-date">{post.date}</span>
          </header>

          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={index === activeSection ? "blog-section active" : "blog-section"}
            >
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${section.id}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        <aside className="blog-side blog-side-right">
          <div className="blog-toc">
            <h3>Table of contents</h3>
            <ul>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={index === activeSection ? "active" : ""}
                    onClick={() => handleSectionClick(index)}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}