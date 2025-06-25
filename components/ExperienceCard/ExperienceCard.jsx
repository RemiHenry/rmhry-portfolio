import Link from "next/link";
import styles from "../styles/ExperienceCard.module.css";

export default function ExperienceCard({
  logo,
  title,
  company,
  date,
  description,
  tech,
  screenshot,
  screenshotUrl = "#",
}) {
  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <div className={styles.header}>
            <img src={logo} alt={`${company} logo`} className={styles.logo} />
            <div>
              <h3 className={styles.title}>
                {title} – {company}
              </h3>
              <p className={styles.date}>{date}</p>
            </div>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.techList}>
            {tech.map((item, index) => (
              <span key={index} className={styles.badge}>
                {item}
              </span>
            ))}
          </div>
        </div>
        {screenshot && (
          <Link
            href={screenshotUrl}
            className={styles.screenshotLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={screenshot}
              alt={`${company} screenshot`}
              className={styles.screenshot}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
