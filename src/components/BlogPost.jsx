import { useMemo, useState } from "react";
import blogs from "../data/blogs.json";

function normalizeSections(post) {
  if (Array.isArray(post?.sections) && post.sections.length > 0) {
    return post.sections.map((section, index) => ({
      id: section.id || `section-${index + 1}`,
      title: section.title || `Section ${index + 1}`,
      content: section.content || "",
    }));
  }

  return [
    {
      id: "overview",
      title: "Overview",
      content: post?.content || "",
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
    description: tab.description || "",
    articleTitle: tab.articleTitle || tab.title || `Tab ${index + 1}`,
    date: tab.date || post.date,
    sections: Array.isArray(tab.sections) ? normalizeSections(tab) : null,
  }));
}

export default function BlogPost({ postId }) {
  const post = blogs.find((p) => p.id === postId);

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

  const activeTabContent = tabs[activeTab];
  const sections = activeTabContent?.sections || normalizeSections(post);
  const articleTitle = activeTabContent?.articleTitle || post.title;
  const articleDate = activeTabContent?.date || post.date;

  const handleSectionClick = (index) => {
    setActiveSection(index);

    const section = document.getElementById(sections[index]?.id);
    const article = document.querySelector(".blog-post");
    if (section && article) {
      const top = section.offsetTop - article.offsetTop - 16;
      article.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveSection(0);

    const article = document.querySelector(".blog-post");
    if (article) article.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="blog-page blog-post-page">
      <a href="#blog" className="back-link">Back to blog</a>

      <div className={`blog-layout${hasTabs ? "" : " blog-layout-no-tabs"}`}>
        {hasTabs && (
          <aside className="blog-side blog-side-left">
            <div className="blog-tab-panel">
              <div className="blog-tab-buttons" aria-label="Blog tabs">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    type="button"
                    title={tab.description || undefined}
                    className={index === activeTab ? "active" : ""}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

            </div>
          </aside>
        )}

        <article className="blog-post">
          <header className="blog-post-header">
            <h1>{articleTitle}</h1>
            <span className="blog-date">{articleDate}</span>
          </header>

          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={index === activeSection ? "blog-section active" : "blog-section"}
            >
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
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