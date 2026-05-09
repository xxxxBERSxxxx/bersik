import styles from './OnlyneTren.module.css';
import Link from 'next/link';

export default function OnlyneTren() {
  const onlineFeatures = [
    {
      icon: "📡",
      title: "HD Видеосвязь",
      description: "Zoom, Skype, WhatsApp — стабильное соединение",
      tech: "4K Ready"
    },
    {
      icon: "🌍",
      title: "Любая геолокация",
      description: "Дом, коворкинг, путешествия — тренируйся где хочешь",
      tech: "Cloud Access"
    },
    {
      icon: "⏱️",
      title: "Smart расписание",
      description: "Подстраиваемся под твой ритм жизни",
      tech: "24/7 Online"
    },
    {
      icon: "📊",
      title: "AI аналитика",
      description: "Персональные программы на основе твоих данных",
      tech: "Machine Learning"
    }
  ];

  const benefits = [
    "Тотальный контроль прогресса",
    "Энергия на максимуме",
    "Здоровье под наблюдением",
    "Навыки самостоятельных тренировок"
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <div className={styles.tag}>
            <span className={styles.pulse}></span>
            #ONLINE_FITNESS
          </div>
          
          <h1 className={styles.title}>
            Тренировки
            <span className={styles.titleGradient}> онлайн</span>
            <br />
            <span className={styles.titleLight}>без границ 🌎</span>
          </h1>
          
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>активных</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>30 лет</div>
              <div className={styles.statLabel}>опыта</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>результата</div>
            </div>
          </div>

          <div className={styles.benefitsCard}>
            <div className={styles.cardBadge}>
              <span>⚡</span> 10 тренировок
            </div>
            <div className={styles.benefitsList}>
              {benefits.map((benefit, idx) => (
                <div key={idx} className={styles.benefit}>
                  <div className={styles.check}>✓</div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.buttonGroup}>
            {/* ✅ Кнопка звонка */}
            <a href="tel:+79996062616" className={styles.btnPrimary}>
              📞 +7 (999) 606-26-16
              <span className={styles.btnGlow}></span>
            </a>

            <Link href="/about" className={styles.btnSecondary}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>✨ фишки формата</div>
          <h2 className={styles.sectionTitle}>
            Почему нас выбирают
          </h2>
          <div className={styles.sectionUnderline}></div>
        </div>

        <div className={styles.featuresGrid}>
          {onlineFeatures.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.featureHeader}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <span className={styles.featureTech}>{feature.tech}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
              <div className={styles.featureLink}>
                <span>Узнать</span>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}