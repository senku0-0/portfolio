import { useState } from "react";
import Modal from "./Modal";

const experiences = [
  {
    id: "e1",
    role: "Full Stack Developer & Implementation",
    company: "NuviraTeck, Remote",
    period: "Nov 2025, Present",
    summary: "Implementing and delivering solutions across three client accounts, including Namma Yatri and Tech Mahindra.",
    points: [
      "Implementing and delivering solutions across three client accounts, including two engagements for Namma Yatri and one for Tech Mahindra.",
      "Developed a workflow automation bot using Django, HTML, CSS, and JavaScript, with custom Zendesk integrations to automate ticket routing and agent handoffs.",
      "Built and configured Zendesk workflows and bots, and integrated secure APIs for reliable ticket, user, and data sync across client environments.",
      "Implemented messaging and Copilot features such as suggested responses and context summaries, and delivered solutions on Pipedrive and Fynd.",
      "Created knowledge base articles and led onboarding sessions to help agents adopt new workflows.",
    ],
  },
];

export default function ExperienceSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience" className="slide experience">
      <h2>Experience</h2>
      <div className="exp-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-card" onClick={() => setSelected(exp)}>
            <span className="exp-status">Present</span>
            <div className="exp-head">
              <h3>{exp.role}</h3>
              <span>{exp.period}</span>
            </div>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-summary">{exp.summary}</p>
            <span className="exp-expand-hint">Click to see details <span aria-hidden="true">&#8594;</span></span>
          </div>
        ))}
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <div className="exp-head">
            <h3>{selected.role}</h3>
            <span>{selected.period}</span>
          </div>
          <p className="exp-company">{selected.company}</p>
          <ul>
            {selected.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </Modal>
      )}
    </section>
  );
}