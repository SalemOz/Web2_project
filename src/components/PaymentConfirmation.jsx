import { useEffect, useRef } from 'react';
import { formatPrice } from '../data/menu.js';
import styles from './PaymentConfirmation.module.css';

export default function PaymentConfirmation({ payment, onClose }) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className={styles.confirmation}>
      <span className={styles.successIcon} uk-icon="icon: check; ratio: 1.6" aria-hidden="true" />
      <h3 ref={headingRef} tabIndex={-1}>Transacción realizada</h3>
      <p>¡Gracias por tu compra!</p>
      <div className={styles.summary}>
        <span>{payment.count} {payment.count === 1 ? 'producto' : 'productos'}</span>
        <strong>{formatPrice(payment.total)}</strong>
      </div>
      <button type="button" className={`btn-primary ${styles.continueButton}`} onClick={onClose}>
        Seguir comprando
        <span uk-icon="icon: arrow-right" aria-hidden="true" />
      </button>
    </div>
  );
}
