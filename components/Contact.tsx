import styles from "./Contact.module.css";

const links = [
  {
    label: "Email",
    value: "julespouilly0@gmail.com",
    href: "mailto:julespouilly0@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Pouillax",
    href: "https://github.com/Pouillax",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jules-pouilly",
    href: "https://www.linkedin.com/in/jules-pouilly/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.intro}>
          Disponible pour des opportunités de stage, d&apos;alternance ou de
          projets. N&apos;hésitez pas à me contacter.
        </p>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.label} className={styles.item}>
              <span className={styles.label}>{link.label}</span>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={styles.link}
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <p>© {new Date().getFullYear()} Jules Pouilly</p>
      </div>
    </section>
  );
}
