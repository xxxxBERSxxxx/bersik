import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      href: 'https://wa.me/79038741898', 
      icon: '💬', 
      label: 'WhatsApp',
      desc: 'Быстрые ответы'
    },
    { 
      href: 'https://t.me/fitnes1', 
      icon: '✈️', 
      label: 'Telegram',
      desc: 'Канал с советами'
    },
    { 
      href: 'https://vk.com/fitnes1', 
      icon: '🌐', 
      label: 'ВКонтакте',
      desc: 'Новости и акции'
    },
    { 
      href: 'https://youtube.com/@fitnes1', 
      icon: '▶️', 
      label: 'YouTube',
      desc: 'Видео тренировок'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGlow}></div>
      
      <div className={styles.container}>
        {/* Социальные сети */}
        <div className={styles.socialSection}>
          <h3 className={styles.socialTitle}>Мы в социальных сетях</h3>
          <div className={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <span className={styles.socialIcon}>{social.icon}</span>
                <div className={styles.socialInfo}>
                  <span className={styles.socialLabel}>{social.label}</span>
                  <span className={styles.socialDesc}>{social.desc}</span>
                </div>
                <span className={styles.socialArrow}>→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Нижняя часть */}
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Фитнес. Все права защищены.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                Политика конфиденциальности
              </Link>
              <span className={styles.bottomDivider}>|</span>
              <Link href="/terms" className={styles.bottomLink}>
                Условия использования
              </Link>
              <span className={styles.bottomDivider}>|</span>
              <Link href="/sitemap" className={styles.bottomLink}>
                Карта сайта
              </Link>
            </div>
            <p className={styles.madeWith}>
              Сделано с <span className={styles.heart}>❤️</span> для вашего здоровья
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}