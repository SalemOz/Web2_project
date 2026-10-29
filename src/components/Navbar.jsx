import { useRef } from 'react';
import CartPanel from './CartPanel.jsx';
import styles from './Navbar.module.css';

export default function Navbar({
  cart,
  cartCount,
  isCartOpen,
  onToggleCart,
  onIncrease,
  onDecrease,
  onRemove,
  onClear,
  onPay,
  payment,
  onClose,
}) {
  const cartButtonRef = useRef(null);

  const closeCart = () => {
    onClose();
    cartButtonRef.current?.focus();
  };

  return (
    <nav className={styles.navbar}>
      {/* .brand y .brand-icon son globales: los comparte con Footer */}
      <a href="#inicio" className="brand" aria-label="Burger Zone, inicio">
        <span className="brand-icon">B</span>
        <span>
          Burger
          <strong>Zone</strong>
        </span>
      </a>

      <div className={styles.navLinks}>
        <a className={styles.active} href="#inicio">Inicio</a>
        <a href="#menu">Menú</a>
        <a href="#bebidas">Bebidas</a>
        <a href="#combos">Combos</a>
        <a href="#contacto">Contacto</a>
      </div>

      <div className={styles.cartDropdown}>
        <button
          ref={cartButtonRef}
          type="button"
          className={styles.cartLink}
          aria-label="Carrito de compras"
          aria-expanded={isCartOpen}
          aria-controls="carrito-panel"
          onClick={onToggleCart}
        >
          <span uk-icon="icon: cart; ratio: 1.3"></span>
          <span className={styles.cartCount} aria-live="polite">{cartCount}</span>
        </button>

        {isCartOpen && (
          <CartPanel
            items={cart}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
            onClear={onClear}
            onPay={onPay}
            payment={payment}
            onClose={closeCart}
          />
        )}
      </div>
    </nav>
  );
}
