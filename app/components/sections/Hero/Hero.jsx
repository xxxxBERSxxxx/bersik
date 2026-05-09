import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import fonMih from '../../../../public/Misha/1.png'; // Проверьте путь!

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}></div>
      
      <div className={styles.heroImageWrapper}>
        <Image
          src={fonMih}
          alt="Персональный тренер Михаил Соловьев проводит силовую тренировку в Одинцово"
          fill
          className={styles.heroImage}
          priority // Важно для LCP!
          sizes="100vw"
          quality={85}
        />
        <div className={styles.imageOverlay1}></div>
        <div className={styles.imageOverlay2}></div>
        <div className={styles.imageOverlay3}></div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.tag}>
          <span className={styles.pulse}></span>
          #PERSONAL_TRAINING
        </div>
        
        <h1 className={styles.title}>
          Персональные фитнес-тренеры
          <span className={styles.titleGradient}> в Одинцово и Москве</span>
        </h1>
        
        <p className={styles.subtitle}>
          Достигните своих целей с персональными тренировками от опытных тренеров. Силовой тренинг, реабилитация, ЛФК и онлайн-занятия.
        </p>
        
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>1000+</div>
            <div className={styles.statLabel}>КЛИЕНТОВ</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>УСПЕХА</div>
          </div>
        </div>
        
        <div className={styles.ctaButtons}>
          <Link href="/trenera" className={styles.primaryBtn} aria-label="Перейти к выбору тренера">
            Наши тренеры 🔥
            <span className={styles.btnGlow}></span>
          </Link>
          <Link href="/contacts" className={styles.secondaryBtn} aria-label="Связаться с нами">
            Связаться
            <span className={styles.btnArrow}>→</span>
          </Link>
        </div>
      </div>
      
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>
    </header>
  );
}