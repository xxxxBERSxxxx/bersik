// Features.jsx - карточки, оптимизированные под смартфоны
import Image from 'next/image';
import styles from './Features.module.css';
import mih from '../../../../public/Misha/1.png';
import func from '../../../../public/Lena/1.jpg';
import reabilitacia from '../../../../public/Lena/7.jpg';
import only from '../../../../public/Misha/5.png';
import korrekcia from '../../../../public/Misha/2.png';
import lfk from '../../../../public/Misha/6.png';

export default function Features() {
  const featuresData = [
    {
      icon: "🏋️",
      image: mih,
      title: "Персональный фитнес",
      subtitle: "Тренировки, которые работают именно на тебя",
      description: "Никаких шаблонов — программа строится под твой образ жизни, цели и даже настроение.",
      tech: "1 on 1",
      accent: "blue"
    },
    {
      icon: "⚡",
      image: func,
      title: "Функциональный тренинг",
      subtitle: "Стань сильнее во всём, что делаешь",
      description: "Поднимать детей, носить покупки, бегать за автобусом — ты будешь делать это играючи.",
      tech: "Performance",
      accent: "orange"
    },
    {
      icon: "🩺",
      image: reabilitacia,
      title: "Реабилитация",
      subtitle: "Восстановись быстрее, чем думаешь",
      description: "Травма — не приговор. Методика Бубновского и современные подходы вернут радость движения.",
      tech: "Recovery",
      accent: "green"
    },
    {
      icon: "🧘",
      image: korrekcia,
      title: "Коррекция осанки",
      subtitle: "Расправь плечи — измени жизнь",
      description: "Сутулость старит и крадёт энергию. 3 недели — и ты увидишь в зеркале королевскую осанку.",
      tech: "Posture",
      accent: "purple"
    },
    {
      icon: "💚",
      image: lfk,
      title: "Лечебная физкультура",
      subtitle: "Когда движение — лучшее лекарство",
      description: "Грыжи, протрузии, артроз — не повод ставить крест. Мягкие программы, одобренные врачами.",
      tech: "Therapy",
      accent: "pink"
    },
    {
      icon: "💻",
      image: only,
      title: "Онлайн-тренировки",
      subtitle: "Твой личный тренер — в телефоне",
      description: "Живёшь в другом городе? Путешествуешь? Я на связи 24/7 — результат гарантирован.",
      tech: "Digital",
      accent: "cyan"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.pulse}></span>
            #EXPERTISE
          </div>
          <h2 className={styles.title}>
            6 направлений — 1 цель:{' '}
            <span className={styles.titleGradient}>твоё идеальное тело</span>
          </h2>
          <p className={styles.subtitle}>
            Выбери своё или доверься нашему опыту
          </p>
          <div className={styles.underline}></div>
        </div>

        {/* Карточки */}
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${styles[feature.accent]}`}
            >
              {/* Изображение */}
              <div className={styles.imageWrapper}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className={styles.image}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}></div>
                {/* <span className={styles.imageIcon}>{feature.icon}</span> */}
                <span className={styles.imageTech}>{feature.tech}</span>
              </div>

              {/* Контент */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardSubtitle}>{feature.subtitle}</p>
                <p className={styles.cardDesc}>{feature.description}</p>
                
                <div className={styles.cardFooter}>
                  <span className={styles.cardLink}>
                    Подробнее
                    <span className={styles.arrow}>→</span>
                  </span>
                  <span className={styles.cardNumber}>0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaGlow}></div>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEmoji}>🎯</span>
            <div className={styles.ctaTextBlock}>
              <h4 className={styles.ctaTitle}>Не знаешь, с чего начать?</h4>
              <p className={styles.ctaText}>
                Запишись на бесплатную консультацию — подберём идеальное направление
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