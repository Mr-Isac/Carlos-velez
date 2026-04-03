import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection} id="/">
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            World-Class
            <br />
            Dentistry in the
            <br />
            Heart of the
            <br />
            Caribbean.
          </h1>

          <p className={styles.description}>
          el texto de prueba para ver si funciona esta chingadera jaja
          </p>

          <div className={styles.buttonGroup}>
            <Link to="/book" className={styles.primaryBtn}>
              View Prices
            </Link>
            <Link to="/cost-comparison" className={styles.secondaryBtn}>
              See Cost Comparison
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className={styles.imageWrapper}>
          <img
            src="https://picsum.photos/seed/dental-clinic/800/800"
            alt="Modern dental clinic with ocean view"
            className={styles.heroImage}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
