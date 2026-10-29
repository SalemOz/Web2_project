import { formatPrice } from '../data/menu.js';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAdd }) {
  return (
    <article className={styles.productCard}>
      <img src={product.image} alt={product.name} />
      <div className={styles.productInfo}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong className={styles.price}>{formatPrice(product.price)}</strong>
        <button
          type="button"
          className={`btn-primary ${styles.addButton}`}
          onClick={() => onAdd(product)}
        >
          <span uk-icon="icon: cart" /> Agregar al carrito
        </button>
      </div>
    </article>
  );
}
