import { useState } from "react";
import blogs from "../data/blogs.json";
import { SearchIcon } from "./Icons";

export default function BlogList() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const sorted = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  const filtered = sorted.filter((post) => {
    const value = query.trim().toLowerCase();
    if (!value) return true;
    return (
      post.title.toLowerCase().includes(value) ||
      post.description.toLowerCase().includes(value) ||
      post.date.toLowerCase().includes(value)
    );
  });

  return (
    <div className="blog-page">
      <div className="blog-header-row">
        <h1>Blog</h1>
        <div className="blog-search-wrap">
          {searchOpen && (
            <input
              type="text"
              className="blog-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts"
              aria-label="Search blog posts"
              autoFocus
            />
          )}
          <button
            type="button"
            className="blog-search-btn"
            aria-label="Search blog posts"
            title="Search blog posts"
            onClick={() => setSearchOpen((open) => !open)}
          >
            <SearchIcon />
          </button>
        </div>
      </div>

      {filtered.length === 0 && <p>No matching posts found.</p>}

      <div className="blog-list">
        {filtered.map((post) => (
          <a key={post.id} href={"#blog/" + post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <span className="blog-date">{post.date}</span>
          </a>
        ))}
      </div>
    </div>
  );
}