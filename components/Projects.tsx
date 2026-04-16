import styles from "./Projects.module.css";

const projects = [
  {
    title: "Légendes du BGC",
    description:
      "Application web de TCG (jeu de cartes à collectionner) avec ouverture de boosters, gestion de collection, profils joueurs et classement. Projet d'équipe de fin de formation (5 personnes).",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Redux", "PixiJS"],
    links: [
      { label: "Frontend (GitHub Yoann) →", href: "https://github.com/CLA-Jhinius/legendes_du_bgc_frontend" },
      { label: "Backend (GitHub Yoann) →", href: "https://github.com/CLA-Jhinius/legendes_du_bgc_backend" },
    ],
    demo: null,
  },
  {
    title: "Strollify",
    description:
      "Application mobile de génération de promenades urbaines personnalisées propulsée par l'IA. L'utilisateur choisit un objectif de pas, des catégories de lieux d'intérêt et un point de départ. L'IA génère 3 itinéraires pédestres optimisés avec suivi GPS en temps réel.",
    tags: ["React Native", "Expo", "TypeScript", "Google Maps", "Google Routes API", "Groq AI"],
    links: [
      { label: "GitHub →", href: "https://github.com/Pouillax/strollify" },
    ],
    demo: null,
  },
  {
    title: "Portfolio",
    description:
      "Ce portfolio, conçu et développé de zéro avec Next.js App Router, CSS Modules et une attention particulière à la performance et l'accessibilité.",
    tags: ["Next.js", "TypeScript", "CSS Modules"],
    links: [],
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Projets</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              {(project.links.length > 0 || project.demo) && (
                <div className={styles.cardFooter}>
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                    >
                      {link.label}
                    </a>
                  ))}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                    >
                      Démo →
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
