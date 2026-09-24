import { useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, CopyIcon, CheckIcon } from "./Icons";

const contactItems = [
  { id: "email", label: "ashadshaikh.zx@gmail.com", value: "ashadshaikh.zx@gmail.com", href: "mailto:ashadshaikh.zx@gmail.com", icon: MailIcon, external: false },
  { id: "phone", label: "+91 73979 54957", value: "+91 73979 54957", href: "tel:+917397954957", icon: PhoneIcon, external: false },
  { id: "github", label: "github.com/senku0-0", value: "https://github.com/senku0-0", href: "https://github.com/senku0-0", icon: GitHubIcon, external: true },
  { id: "linkedin", label: "linkedin.com/in/ashad-shaikh", value: "https://www.linkedin.com/in/ashad--shaikh", href: "https://www.linkedin.com/in/ashad--shaikh", icon: LinkedInIcon, external: true },
];

export default function ContactSection() {
  const [copiedId, setCopiedId] = useState(null);

  const copy = async (item) => {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      // clipboard permission denied or unavailable, fail silently
    }
  };

  return (
    <section id="contact" className="slide contact">
      <h2>Get in Touch</h2>
      <p className="contact-availability">Open to full-time roles · Based in Pune, India</p>
      <p>
        I am open to new opportunities and collaborations. Feel free to reach
        out through any of the channels below.
      </p>
      <div className="contact-links">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const isCopied = copiedId === item.id;
          return (
            <div key={item.id} className="contact-row">
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="contact-item"
              >
                <Icon />
                {item.label}
              </a>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copy(item)}
                aria-label={"Copy " + item.label}
                title={"Copy " + item.label}
              >
                {isCopied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
          );
        })}
      </div>
      <a href="mailto:ashadshaikh.zx@gmail.com" className="contact-cta">Say Hello <span aria-hidden="true">&#8594;</span></a>
      <p className="footer-note">© {new Date().getFullYear()} Ashad Shaikh</p>
    </section>
  );
}