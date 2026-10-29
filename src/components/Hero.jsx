import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1800&q=90"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/videos/hero-burger.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroContent}>
        {/* .eyebrow es global: lo comparte con Combos */}
        <span className="eyebrow">COMIDA RÁPIDA QUE SIEMPRE</span>
        <h1>
          TE HACE <em>FELIZ</em>
        </h1>
        <p>
          Hamburguesas jugosas, perros calientes y salchipapas
          irresistibles. ¡El antojo perfecto en un solo lugar!
        </p>
        <a href="#menu" className="btn-primary">
          EXPLORAR MENÚ <span uk-icon="arrow-right"></span>
        </a>
      </div>

      <div className={styles.heroBadge}>
        <span>★</span>
        Sabor en cada
        <strong>bocado</strong>
      </div>
    </section>
  );
}
