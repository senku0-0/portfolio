# Portfolio Website Guide

This repository is a React + Vite portfolio site designed for personal branding, project showcases, experience highlights, certification display, and contact links. It is structured to be easy to customize without changing the app architecture.

## Project Structure

```bash
src/
  App.jsx
  index.css
  components/
    About.jsx
    Hero.jsx
    ExperienceSection.jsx
    ProjectList.jsx
    Skills.jsx
    ContactSection.jsx
    Navbar.jsx
    BlogList.jsx
    BlogPost.jsx
  data/
    projects.json
    skills.json
    blogs.json
    certification.json
  assets/
public/
```

## Quick Start

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

To create a production build:

```bash
npm run build
```

---

## Customize Your Personal Information

### 1) Update the hero section
Open:

- `src/components/Hero.jsx`

Change:
- your name
- tagline
- subtitle
- CTA text
- social links
- profile image path

The profile image is usually stored in `public/` or imported from an asset folder.

Example:

```jsx
<h1>Your Name</h1>
<p>Full Stack Developer</p>
```

### 2) Update the About section
Open:

- `src/components/About.jsx`

Edit the paragraph text, your story, and any highlight stats you want to show.

Example:

```jsx
<p>
  I build modern web applications using React, Django, and cloud-first tools.
</p>
```

### 3) Update your experience
Open:

- `src/components/ExperienceSection.jsx`

This file contains the experience array and each job card's content. You can edit:
- role title
- company name
- date range
- summary
- bullet points

Example:

```js
{
  id: "e1",
  role: "Frontend Developer",
  company: "Your Company, Remote",
  period: "Jan 2024, Present",
  summary: "Built and maintained user-facing products...",
  points: [
    "Developed responsive dashboards.",
    "Improved performance and accessibility."
  ]
}
```

### 4) Update skills
Open:

- `src/data/skills.json`

Each skill entry can be adjusted to match your stack. Add or remove technology badges depending on your work.

Example:

```json
{
  "name": "React",
  "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
}
```

If a technology has no icon, remove it or replace it with a logo you prefer.

---

## Customize Images and Media

### Profile image
Place your image in `public/` and update the image source in `Hero.jsx`.

Example:

```jsx
<img src="/your-image.jpg" alt="Your Name" />
```

### Project images
Open:

- `src/data/projects.json`

Each project can include fields like:
- title
- description
- image
- technologies
- live URL
- GitHub URL

Example:

```json
{
  "title": "Portfolio Website",
  "description": "A personal portfolio built with React and Vite.",
  "image": "/project-portfolio.png",
  "tech": ["React", "CSS", "Vite"],
  "live": "https://example.com",
  "github": "https://github.com/yourname/project"
}
```

Place project images in `public/` and reference them by path.

### Certifications
Open:

- `src/data/certification.json`

Update the certificate list and image paths to match your credentials.

---

## Customize Theme and Styling

The main styling is in:

- `src/index.css`

This file controls:
- colors
- spacing
- typography
- card styles
- buttons
- section layouts
- dark/light mode behavior

You can customize your brand colors by editing the CSS variables near the top of the file.

Example:

```css
:root {
  --bg: #0b1020;
  --accent: #5eead4;
  --text: #e5e7eb;
  --border: rgba(255,255,255,0.1);
}
```

If you want a more personal visual identity, update:
- accent colors
- button colors
- background tones
- border radius
- section spacing

---

## Update Contact Information

Open:

- `src/components/ContactSection.jsx`

Update:
- email address
- LinkedIn link
- GitHub link
- location
- any other profile links

Example:

```jsx
<a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
```

The contact section is designed to support direct mailto actions and external links.

---

## Update Blogs

The blog section uses JSON data and pages in:

- `src/data/blogs.json`
- `src/components/BlogList.jsx`
- `src/components/BlogPost.jsx`

A blog post can have:
- a main article with `sections`
- an optional left-side tab panel with `tabs`
- a right-side table of contents generated from the main article sections

Example:

```json
{
  "id": "1",
  "title": "My First Blog Post",
  "date": "2026-09-01",
  "description": "A quick overview of my recent work.",
  "sections": [
    {
      "title": "Overview",
      "content": "Your introduction text goes here.\n\nThis can be multiple paragraphs."
    },
    {
      "title": "Process",
      "content": "More article content goes here."
    }
  ],
  "tabs": [
    {
      "title": "Notes",
      "content": "This tab is optional and can be used for quick highlights or references."
    }
  ]
}
```

Notes:
- `sections` is the main article structure and drives the right-side table of contents.
- `tabs` is optional and appears on the left side as a small secondary content area.
- You can keep it to a single tab or have multiple tabs depending on the post.
- If `tabs` is omitted, the left rail is hidden automatically.

---

## Add or Remove Sections

The app uses a section-based layout in:

- `src/App.jsx`

If you want to add or remove sections:
1. modify the component imports in `App.jsx`
2. add or remove the JSX section blocks
3. adjust the corresponding CSS in `src/index.css`

This makes the portfolio easy to extend without breaking the layout.

---

## Deployment

This project is built with Vite, so deployment is straightforward.

### Option 1: Deploy to Vercel
- Push to GitHub
- Import the repo in Vercel
- Use the default Vite settings
- Deploy

### Option 2: Deploy to Netlify
- Push to GitHub
- Import project in Netlify
- Set build command to:

```bash
npm run build
```

- Set publish directory to:

```bash
dist
```

### Option 3: GitHub Pages
You can also deploy to GitHub Pages by configuring Vite's `base` option and pushing the built `dist` folder.

---

## Useful Tips

- Keep all your profile images in `public/` for easy access
- Store reusable content in JSON files instead of hardcoding everything into JSX
- If you plan to reuse the site, update the branding text and colors before deployment
- Test the site with `npm run build` before publishing

---

## Recommended Customization Checklist

Before publishing your portfolio, update:

- [ ] your name and title
- [ ] About section text
- [ ] Experience list
- [ ] Skill stack
- [ ] Project data
- [ ] Certification list
- [ ] Contact links
- [ ] Profile image
- [ ] Brand colors
- [ ] Final deployment URL

---

## Final Note

This portfolio is already structured as a strong starting point for a personal brand. Most of the work is simply editing the content files and assets to reflect your own identity, projects, and experience.

If you want to personalize it further, the easiest places to start are:

- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/ExperienceSection.jsx`
- `src/data/projects.json`
- `src/data/skills.json`
- `src/index.css`

