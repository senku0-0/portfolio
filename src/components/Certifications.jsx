import { useState } from "react";
import certifications from "../data/certification.json";
import Modal from "./Modal";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="slide certifications">
      <h2>Certifications</h2>
      <div className="certs-grid">
        {certifications.map((c) => (
          <div key={c.id} className="cert-card" onClick={() => setSelected(c)}>
            <div className="cert-image-wrap">
              <img src={c.image} alt={c.name} />
              <span className="cert-expand-cue" aria-hidden="true">&#8599;</span>
            </div>
            <p>{c.name}</p>
          </div>
        ))}
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)} wide>
          <img src={selected.image} alt={selected.name} className="cert-modal-image" />
          <h3>{selected.name}</h3>
          <a href={selected.image} download className="btn">
            Download Certificate
          </a>
        </Modal>
      )}
    </section>
  );
}