import styles from './ResultSection.module.css';

export default function ResultSection() {
  const resultsData = [
    {
      icon: "🧘",
      title: "Улучшение осанки и походки",
      description: "Исчезают сутулость и боли в спине",
      tech: "Posture"
    },
    {
      icon: "🩹",
      title: "Исчезновение болей",
      description: "Снижение или полное исчезновение болей в спине и суставах",
      tech: "Pain Free"
    },
    {
      icon: "⚡",
      title: "Повышение выносливости",
      description: "Увеличение силы и энергии в повседневной жизни",
      tech: "Energy+"
    },
    {
      icon: "💪",
      title: "Уверенность в себе",
      description: "Новое отношение к себе и своему телу",
      tech: "Confidence"
    },
    {
      icon: "🎯",
      title: "Улучшение формы",
      description: "Качественное улучшение физической формы",
      tech: "Shape Up"
    },
    {
      icon: "📈",
      title: "Повышение результатов",
      description: "Улучшение спортивных показателей",
      tech: "Progress"
    }
  ];

  return (
    <section className={styles.results}>
      <div className={styles.resultsBg}></div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <span className={styles.pulse}></span>
            #TRANSFORMATION
          </div>
          <h2 className={styles.sectionTitle}>
            Всего <span className={styles.highlight}>10 занятий</span> — и вы не узнаете свое тело!
          </h2>
          <p className={styles.sectionSubtitle}>
            Наши клиенты за 2-3 недели отмечают:
          </p>
          <div className={styles.sectionUnderline}></div>
        </div>

        <div className={styles.resultsGrid}>
          {resultsData.map((result, index) => (
            <div key={index} className={styles.resultCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{result.icon}</div>
                <div className={styles.cardNumber}>0{index + 1}</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{result.title}</h3>
                <p className={styles.cardDesc}>{result.description}</p>
                <div className={styles.cardTech}>{result.tech}</div>
              </div>
              <div className={styles.cardBorder}></div>
            </div>
          ))}
        </div>

        {/* Баннер с CTA */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaBannerGlow}></div>
          <div className={styles.ctaBannerContent}>
            <span className={styles.ctaBannerIcon}>⚡</span>
            <p className={styles.ctaBannerText}>
              Готов изменить себя за 10 тренировок?
            </p>
            <button className={styles.ctaBannerBtn}>
              Начать трансформацию →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}