import SectionHeading from './SectionHeading.jsx';
import ProductCard from './ProductCard.jsx';
import styles from './Favorites.module.css';
import { products } from '../data/menu.js';

export default function Favorites({ onAdd }) {
  return (
    <section className={styles.favoritesSection} id="favoritos">
      <div className="container">
        <SectionHeading
          eyebrow="LO MÁS PEDIDO"
          title="Nuestros favoritos"
        />
        {/* .product-grid es global: lo comparte con Combos */}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
