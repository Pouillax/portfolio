import styles from "./Skills.module.css";

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "CSS Modules", "Redux Toolkit"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST API", "JWT / OAuth"] },
  { category: "Base de données", items: ["MongoDB", "Mongoose"] },
  { category: "Outils", items: ["Git", "Jest", "ESLint", "Vercel", "npm"] },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Compétences</h2>
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((skill) => (
                  <li key={skill} className={styles.badge}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
