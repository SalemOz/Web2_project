import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contacto">
      <div className={`container ${styles.footerGrid}`}>
        {/* .brand y .brand-icon son globales: los comparte con Navbar */}
        <a href="#inicio" className="brand">
          <span className="brand-icon">B</span>
          <span>
            BURGER
            <strong>ZONE</strong>
          </span>
        </a>

        <div>
          <h3>Enlaces</h3>
          <a href="#inicio">Inicio</a>
          <a href="#menu">Menú</a>
          <a href="#bebidas">Bebidas</a>
          <a href="#combos">Combos</a>
        </div>

        <div>
          <h3>Horario</h3>
          <p>Lunes a domingo</p>
          <p>Horario por confirmar</p>
        </div>

        <div>
          <h3>Contacto</h3>
          <p>Neiva, Huila, Colombia</p>
          <p>+57 300 123 4567</p>
          <p>@burgerzone.com</p>
        </div>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} Burger Zone. Todos los derechos reservados.
      </div>
    </footer>
  );
}
