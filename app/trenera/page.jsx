import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import mikhailPhoto from '../../public/Misha/1.png';
import elenaPhoto from '../../public/Lena/1.jpg';

export default function TrainersSection() {
  const trainers = [
    {
      id: 1,
      name: "Михаил Соловьев",
      title: "Специалист по силовому и функциональному тренингу",
      description: "Сертифицированный тренер с 8-летним опытом. Помогает достичь максимальных результатов в силовых тренировках, строит программы под любые цели — от набора массы до сушки.",
      photo: mikhailPhoto,
      gradient: "blue",
      badge: "Power & Performance",
      stats: [
        { value: "20 лет", label: "Опыта" },
        { value: "500+", label: "Клиентов" },
        { value: "94%", label: "Результат" }
      ],
      specialties: ["Силовой тренинг", "Функциональный тренинг", "ОФП", "Сушка тела"],
      link: "https://spiritfit.ru/coaches/solovyev-mikhail/"
    },
    {
      id: 2,
      name: "Елена Петухова",
      title: "Эксперт по оздоровительному фитнесу и реабилитации",
      description: "Специалист по восстановительным практикам и работе с особыми потребностями. Индивидуальный подход к каждому клиенту, помогающий вернуть здоровье и уверенность в себе.",
      photo: elenaPhoto,
      gradient: "purple",
      badge: "Wellness & Recovery",
      stats: [
        { value: "30 лет", label: "Опыта" },
        { value: "700+", label: "Клиентов" },
        { value: "98%", label: "Результат" }
      ],
      specialties: ["Оздоровительный фитнес", "Реабилитация", "Работа с женщинами", "ЛФК"],
      link: "/trenera/elena"
    }
  ];

  return (
    <section className={styles.section} aria-labelledby="trainers-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.pulse}></span>
            #PERSONAL_TRAINERS
          </div>
          <h2 id="trainers-heading" className={styles.title}>
            Знакомство с вашими&nbsp;
            <span className={styles.titleGradient}> персональными тренерами</span>
          </h2>
          <p className={styles.subtitle}>
            Профессионалы с многолетним опытом, готовые привести вас к результату
          </p>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          {trainers.map((trainer) => (
            <article key={trainer.id} className={`${styles.card} ${styles[trainer.gradient]}`} aria-label={`Тренер ${trainer.name}`}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardGlowSecondary}></div>
              <div className={styles.cardTop}>
                <div className={styles.photoWrapper}>
                  <div className={styles.photoFrame}>
                    <Image
                      src={trainer.photo}
                      alt={trainer.name}
                      width={120}
                      height={120}
                      className={styles.photo}
                      priority={trainer.id === 1}
                    />
                    <div className={styles.photoOverlay}></div>
                  </div>
                  <span className={styles.onlineDot}></span>
                </div>
                
                <div className={styles.badgeRow}>
                  <span className={styles.badge}>{trainer.badge}</span>
                </div>

                <h3 className={styles.name}>{trainer.name}</h3>
                <p className={styles.role}>{trainer.title}</p>
              </div>

              <p className={styles.description}>{trainer.description}</p>

              <div className={styles.stats}>
                {trainer.stats.map((stat, idx) => (
                  <div key={idx} className={styles.statItem}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.specialties}>
                {trainer.specialties.map((spec, idx) => (
                  <span key={idx} className={styles.specTag}>{spec}</span>
                ))}
              </div>

              <div className={styles.cardBottom}>
                <Link href={trainer.link} className={styles.actionBtn}>
                  <span>Подробнее о тренере</span>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.btnGlow}></span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}