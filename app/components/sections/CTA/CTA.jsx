// CTA.jsx - статические карточки в сетке
import styles from './CTA.module.css';
import Link from 'next/link';

export default function CTA() {
  const audienceData = [
    {
      icon: "🏆",
      title: "Для спортсменов",
      description: "Индивидуальные программы для роста результатов и предотвращения травм",
      tech: "PRO level"
    },
    {
      icon: "🌱",
      title: "Для начинающих",
      description: "Правильный старт — залог долгосрочного успеха в тренировках",
      tech: "Start now"
    },
    {
      icon: "🔥",
      title: "Для целеустремленных",
      description: "Профессиональная поддержка на пути к вашей мечте о идеальном теле",
      tech: "Hustle mode"
    },
    {
      icon: "🩹",
      title: "Для восстановления здоровья",
      description: "Эффективные программы реабилитации после травм и при проблемах с ОДА",
      tech: "Recovery"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Для всей семьи",
      description: "От детей до будущих мам - безопасные и эффективные программы",
      tech: "Family fit"
    },
    {
      icon: "♿",
      title: "При ограничениях здоровья",
      description: "Специальные программы для людей с особыми потребностями",
      tech: "Inclusive"
    }
  ];

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBg}></div>
      <div className={styles.ctaContent}>
        <div className={styles.sectionTag}>
          <span className={styles.pulse}></span>
          #WHO_NEEDS
        </div>
        
        <h2 className={styles.title}>
          Кому особенно важна помощь&nbsp;
          <span className={styles.titleGradient}> персонального тренера?</span>
        </h2>
        
        <p className={styles.sectionSubtitle}>
          Мы работаем с разными категориями клиентов — каждый получает персональный подход
        </p>

        <div className={styles.audienceGrid}>
          {audienceData.map((item, index) => (
            <div key={index} className={styles.audienceCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <span className={styles.cardTech}>{item.tech}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardLink}>
                  Подробнее
                  <span className={styles.arrow}>→</span>
                </span>
                <span className={styles.cardNumber}>0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaFooter}>
          <div className={styles.footerText}>
            <span className={styles.footerIcon}>💪</span>
            Готов изменить себя?
          </div>
<a href="tel:+79996062616" className={styles.ctaBtn}>
  Начать тренировки 🔥
  <span className={styles.btnGlow}></span>
</a>
        </div>
      </div>
    </section>
  );
}