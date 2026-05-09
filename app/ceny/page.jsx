
import Link from 'next/link';
import styles from './page.module.css';

export default function PriceSection() {
  const personalTraining = [
    {
      title: "Разовое занятие",
      price: "3000 ₽",
      duration: "60 минут",
      features: [
        "Индивидуальная тренировка",
        "Анализ текущей формы",
        "Коррекция техники выполнения",
        "Рекомендации по питанию"
      ],
      popular: false
    },
    {
      title: "Пакет 5 занятий",
      price: "13 500 ₽",
      pricePer: "2 700 ₽ за занятие",
      duration: "5 тренировок",
      features: [
        "Индивидуальные тренировки",
        "Персональная программа",
        "Контроль питания и прогресса",
        "Корректировка программы",
        "Поддержка между тренировками"
      ],
      popular: true
    },
    {
      title: "Пакет 10 занятий",
      price: "25 000 ₽",
      pricePer: "2 500 ₽ за занятие",
      duration: "10 тренировок",
      features: [
        "Полная диагностика организма",
        "Программа тренировок и питания",
        "Регулярные замеры прогресса",
        "Поддержка 24/7 в мессенджерах",
        "Доступ к закрытой группе"
      ],
      popular: false
    }
  ];

  const onlineTraining = [
    {
      title: "Разовое онлайн-занятие",
      price: "1 500 ₽",
      duration: "60 минут по видеосвязи",
      features: [
        "Проверка техники выполнения",
        "Рекомендации по домашним тренировкам",
        "Подбор упражнений под оборудование"
      ],
      badge: null
    },
    {
      title: "Месяц онлайн-тренировок",
      price: "12 000 ₽",
      pricePer: "8 занятий + поддержка",
      duration: "8 тренировок по 60 минут",
      features: [
        "Индивидуальная программа",
        "Консультации по питанию",
        "Еженедельный анализ прогресса",
        "Поддержка в чате 24/7"
      ],
      badge: "ВЫГОДНО"
    },
    {
      title: "Полное онлайн-ведение",
      price: "18 000 ₽",
      pricePer: "в месяц",
      duration: "12 онлайн-тренировок",
      features: [
        "Персональный план тренировок и питания",
        "Ежедневный контроль питания",
        "Регулярные замеры и корректировки",
        "Поддержка 24/7",
        "Доступ к обучающим материалам"
      ],
      badge: null
    }
  ];

  const specializedServices = [
    {
      title: "Реабилитация после травм",
      price: "3 500 ₽",
      duration: "за занятие",
      features: [
        "Индивидуальная программа восстановления",
        "Методика Бубновского",
        "Работа с ограничениями ОДА",
        "Постепенное увеличение нагрузок",
        "Консультация ортопеда"
      ],
      icon: ""
    },
    {
      title: "Лечебная физкультура (ЛФК)",
      price: "3 200 ₽",
      duration: "за занятие",
      features: [
        "Индивидуальные занятия ЛФК",
        "Коррекция осанки",
        "Устранение болевых синдромов",
        "Укрепление мышечного корсета",
        "Дыхательная гимнастика"
      ],
      icon: ""
    },
    {
      title: "Функциональный тренинг",
      price: "3 000 ₽",
      duration: "за занятие",
      features: [
        "Тренировки для повседневной активности",
        "Улучшение координации и баланса",
        "Развитие силы и выносливости",
        "Работа с собственным весом",
        "Подготовка к спортивным мероприятиям"
      ],
      icon: ""
    }
  ];

  const additionalServices = [
    {
      title: "Составление программы тренировок",
      price: "5 000 ₽",
      features: [
        "Полный фитнес-тест",
        "Индивидуальная программа на 3 месяца",
        "Подробное описание упражнений",
        "Рекомендации по периодизации",
        "Консультация по выполнению"
      ],
      icon: ""
    },
    {
      title: "План питания",
      price: "4 500 ₽",
      features: [
        "Анализ текущего рациона",
        "Индивидуальный план питания",
        "Рекомендации по БЖУ",
        "Список продуктов и рецепты",
        "Корректировка по показаниям"
      ],
      icon: ""
    },
    {
      title: "Комплексная программа",
      price: "8 000 ₽",
      features: [
        "Программа тренировок на 3 месяца",
        "Индивидуальный план питания",
        "Рекомендации по добавкам",
        "Регулярные онлайн-консультации",
        "Корректировка программ"
      ],
      icon: ""
    }
  ];

  const importantInfo = [
    { text: "Первая консультация и фитнес-тест — бесплатно", icon: "🎁" },
    { text: "Все абонементы действуют 2 месяца", icon: "📅" },
    { text: "Отмена за 12 часов — бесплатно", icon: "⏰" },
    { text: "Скидки пенсионерам и студентам — 10%", icon: "👨‍🎓" },
    { text: "Семейные скидки — 15%", icon: "👨‍👩‍👧‍👦" },
    { text: "Длительные программы — индивидуальные скидки", icon: "💎" }
  ];

  const renderPriceCard = (item, index, isPopular = false) => (
    <div key={index} className={`${styles.priceCard} ${item.popular ? styles.popular : ''}`}>
      {item.popular && <div className={styles.popularBadge}>ПОПУЛЯРНЫЙ</div>}
      {item.badge && <div className={styles.saleBadge}>{item.badge}</div>}
      
      <div className={styles.cardGlow}></div>
      
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        {item.icon && <span className={styles.cardIcon}>{item.icon}</span>}
      </div>

      <div className={styles.priceBlock}>
        <span className={styles.price}>{item.price}</span>
        {item.pricePer && <span className={styles.pricePer}>{item.pricePer}</span>}
        <span className={styles.duration}>{item.duration}</span>
      </div>

      <div className={styles.divider}></div>

      <ul className={styles.featuresList}>
        {item.features.map((feature, idx) => (
          <li key={idx} className={styles.featureItem}>
            <span className={styles.checkIcon}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/signup" className={styles.actionBtn}>
        Записаться
        <span className={styles.btnArrow}>→</span>
        <span className={styles.btnGlow}></span>
      </Link>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.pulse}></span>
            #PRICE_LIST
          </div>
          <h2 className={styles.title}>
            Прайс-лист <br />  
            <span className={styles.titleGradient}>         фитнес-услуг</span>
          </h2>
          <p className={styles.subtitle}>
            Соловьев Михаил и Петухова Елена — профессиональные тренеры в Одинцово и Москве
          </p>
          <p className={styles.freeBadge}>
             Индивидуальный подход к каждому клиенту. <br />Первая консультация — <strong>бесплатно</strong>!
          </p>
          <div className={styles.underline}></div>
        </div>

        {/* Персональные тренировки (офлайн) */}
        <div className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryIcon}>🏋️</span>
            <h3 className={styles.categoryTitle}>Персональные тренировки (офлайн)</h3>
          </div>
          <div className={styles.grid3}>
            {personalTraining.map((item, index) => renderPriceCard(item, index))}
          </div>
        </div>

        {/* Онлайн-тренировки */}
        <div className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryIcon}>💻</span>
            <h3 className={styles.categoryTitle}>Онлайн-тренировки</h3>
          </div>
          <div className={styles.grid3}>
            {onlineTraining.map((item, index) => renderPriceCard(item, index))}
          </div>
        </div>

        {/* Специализированные услуги */}
        <div className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryIcon}>⭐</span>
            <h3 className={styles.categoryTitle}>Специализированные услуги</h3>
          </div>
          <div className={styles.grid3}>
            {specializedServices.map((item, index) => renderPriceCard(item, index))}
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div className={styles.categorySection}>
          <div className={styles.categoryHeader}>
            <span className={styles.categoryIcon}>📦</span>
            <h3 className={styles.categoryTitle}>Дополнительные услуги</h3>
          </div>
          <div className={styles.grid3}>
            {additionalServices.map((item, index) => renderPriceCard(item, index))}
          </div>
        </div>

        {/* Важная информация */}
        <div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <div className={styles.cardGlow}></div>
            <h3 className={styles.infoTitle}>Важная информация</h3>
            <div className={styles.infoGrid}>
              {importantInfo.map((info, index) => (
                <div key={index} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{info.icon}</span>
                  <span className={styles.infoText}>{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaGlow}></div>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEmoji}>💪</span>
            <div>
              <h4 className={styles.ctaTitle}>Готовы начать?</h4>
              <p className={styles.ctaText}>Запишитесь на бесплатную консультацию уже сегодня</p>
            </div>
            <Link href="/trenera" className={styles.ctaBtn}>
              Связаться с тренером →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}