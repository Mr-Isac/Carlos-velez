import { Link } from "react-router-dom";
import {
  Stethoscope,
  Sparkles,
  Activity,
  SmilePlus,
  ArrowRight,
} from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Dental Implants",
      icon: <Stethoscope size={32} strokeWidth={1.5} />,
      link: "/services/dental-implants",
      hasBg: false,
    },
    {
      id: 2,
      title: "Porcelain Veneers",
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      link: "/services/porcelain-veneers",
      hasBg: true,
      bgImage: "https://picsum.photos/seed/smile/400/400",
    },
    {
      id: 3,
      title: "Full Mouth Reconstruction",
      icon: <Activity size={32} strokeWidth={1.5} />,
      link: "/services/full-mouth-reconstruction",
      hasBg: false,
    },
    {
      id: 4,
      title: "Smile Design",
      icon: <SmilePlus size={32} strokeWidth={1.5} />,
      link: "/services/smile-design",
      hasBg: false,
    },
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Services</h2>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className={`${styles.card} ${service.hasBg ? styles.cardWithBg : ""}`}
            >
              {service.hasBg && (
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className={styles.bgImage}
                  referrerPolicy="no-referrer"
                />
              )}

              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.viewDetails}>
                  <span>View Details</span>
                  <ArrowRight size={16} className={styles.arrowIcon} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
