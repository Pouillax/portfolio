import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.greeting}>Bonjour, je suis</p>
        <h1 className={styles.name}>Jules Pouilly</h1>
        <h2 className={styles.title}>Développeur Fullstack JavaScript</h2>
        <p className={styles.bio}>
          Je conçois et développe des applications web modernes, du backend
          à l&apos;interface utilisateur.
        </p>
        <div className={styles.ctas}>
          <a href="#projects" className={styles.btnPrimary}>
            Voir mes projets
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
