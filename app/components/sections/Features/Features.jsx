// Features.jsx - статические карточки в сетке
import styles from './Features.module.css';

export default function Features() {
  const featuresData = [
    {
      icon: "🏋️",
      title: "Персональный фитнес",
      description: "Программы, созданные специально для вас с учетом целей и возможностей",
      tech: "1 on 1"
    },
    {
      icon: "⚡",
      title: "Функциональный тренинг",
      description: "Тренируемся для жизни, а не просто для зала",
      tech: "Performance"
    },
    {
      icon: "🩺",
      title: "Реабилитация и восстановление",
      description: "Включая методику Бубновского и современные подходы",
      tech: "Recovery"
    },
    {
      icon: "🧘",
      title: "Коррекция осанки",
      description: "Работа с болевыми синдромами и улучшение осанки",
      tech: "Posture"
    },
    {
      icon: "❤️‍🩹",
      title: "Лечебная физкультура (ЛФК)",
      description: "Специализированные программы для восстановления здоровья",
      tech: "Therapy"
    },
    {
      icon: "💻",
      title: "Онлайн-тренировки",
      description: "Дистанционные занятия и персональное ведение",
      tech: "Digital"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featuresBg}></div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <span className={styles.pulse}></span>
            #EXPERTISE
          </div>
          <h2 className={styles.sectionTitle}>
            Наши экспертные&nbsp;
            <span className={styles.titleGradient}> направления</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Профессиональный подход к каждому направлению тренировок
          </p>
          <div className={styles.sectionUnderline}></div>
        </div>

        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.featureHeader}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <span className={styles.featureTech}>{feature.tech}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
              <div className={styles.featureFooter}>
                <span className={styles.featureLink}>
                  Подробнее
                  <span className={styles.arrow}>→</span>
                </span>
                <span className={styles.cardNumber}>0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}