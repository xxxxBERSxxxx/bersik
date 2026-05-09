// Features.jsx - статические карточки в сетке
import styles from './page.module.css';

export default function Features() {
  const featuresData = [
    {
      icon: "🏋️",
      title: "Персональный фитнес",
      subtitle: "Ваш личный путь к совершенству",
      description: "Индивидуально разработанные программы тренировок, учитывающие ваш текущий уровень подготовки, анатомические особенности и поставленные цели. Каждое занятие — это шаг к телу вашей мечты под чутким руководством профессионала.",
      highlights: [
        "Биомеханический анализ движений",
        "Прогрессивная нагрузка по науке",
        "Трекинг результатов в реальном времени"
      ],
      tech: "1 on 1"
    },
    {
      icon: "⚡",
      title: "Функциональный тренинг",
      subtitle: "Сила, выносливость, свобода движений",
      description: "Тренировки, которые готовят вас к реальной жизни, а не к соревнованиям по пауэрлифтингу. Развиваем все физические качества комплексно: силу, гибкость, координацию и баланс через естественные паттерны движений.",
      highlights: [
        "Улучшение повседневной активности",
        "Профилактика бытовых травм",
        "Развитие взрывной силы и скорости"
      ],
      tech: "Performance"
    },
    {
      icon: "🩺",
      title: "Реабилитация и восстановление",
      subtitle: "Возвращаем радость движения без боли",
      description: "Специализированные программы восстановления после травм, операций и длительных заболеваний. Используем проверенные методики, включая систему Бубновского, для безопасного возвращения к полноценной активной жизни.",
      highlights: [
        "Кинезиотейпирование и миофасциальный релиз",
        "Поэтапное восстановление подвижности",
        "Укрепление глубоких мышц-стабилизаторов"
      ],
      tech: "Recovery"
    },
    {
      icon: "🧘",
      title: "Коррекция осанки",
      subtitle: "Красивая спина — здоровый организм",
      description: "Комплексная работа над выравниванием позвоночника и устранением мышечных дисбалансов. Избавляем от хронических болей в спине и шее, формируем правильные двигательные стереотипы и королевскую осанку.",
      highlights: [
        "3D-диагностика осанки",
        "Устранение триггерных точек",
        "Формирование мышечного корсета"
      ],
      tech: "Posture"
    },
    {
      icon: "❤️‍🩹",
      title: "Лечебная физкультура",
      subtitle: "Движение как лекарство",
      description: "Научно обоснованные программы ЛФК при заболеваниях опорно-двигательного аппарата, сердечно-сосудистой и дыхательной систем. Мягко, безопасно и эффективно восстанавливаем здоровье через правильно подобранные упражнения.",
      highlights: [
        "Программы при грыжах и протрузиях",
        "Суставная гимнастика и стретчинг",
        "Дыхательные практики и релаксация"
      ],
      tech: "Therapy"
    },
    {
      icon: "💻",
      title: "Онлайн-тренировки",
      subtitle: "Профессиональный фитнес без границ",
      description: "Полноценные персональные тренировки в любом удобном для вас месте. HD-видеосвязь, детальный контроль техники через несколько камер, персональное ведение и поддержка 24/7 — всё, что нужно для результата на расстоянии.",
      highlights: [
        "Тренировки из любой точки мира",
        "Цифровой дневник прогресса",
        "Экстренная связь с тренером 24/7"
      ],
      tech: "Digital"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {/* Заголовок секции */}
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
            Комплексный подход к вашему здоровью и физической форме — от диагностики до впечатляющих результатов
          </p>
          <div className={styles.sectionUnderline}></div>
        </div>

        {/* Сетка карточек */}
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.cardGlow}></div>
              
              <div className={styles.featureHeader}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <span className={styles.featureTech}>{feature.tech}</span>
              </div>

              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureSubtitle}>{feature.subtitle}</p>
              <p className={styles.featureDesc}>{feature.description}</p>

              <div className={styles.highlightsList}>
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className={styles.highlightItem}>
                    <span className={styles.highlightDot}></span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className={styles.featureFooter}>
                <span className={styles.featureLink}>
                  Узнать подробнее
                  <span className={styles.arrow}>→</span>
                </span>
                <span className={styles.cardNumber}>0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaGlow}></div>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEmoji}>🎯</span>
            <div>
              <h4 className={styles.ctaTitle}>Не знаете, с чего начать?</h4>
              <p className={styles.ctaText}>
                Запишитесь на бесплатную консультацию — мы подберем идеальное направление для вас
              </p>
            </div>
            <a href="/contacts" className={styles.ctaBtn}>
              Бесплатная консультация →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}