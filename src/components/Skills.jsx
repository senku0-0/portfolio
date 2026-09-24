import skills from "../data/skills.json";

export default function Skills() {
  return (
    <section id="skills" className="slide skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <img src={s.icon} alt={s.name} className="skill-icon" />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}