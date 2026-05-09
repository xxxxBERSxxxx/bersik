'use client';
import styles from './ContactSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import lena from '../../../../public/Lena/1.jpg';
import Mih from '../../../../public/Misha/1.png';

export default function ContactSection() {
  const [imageErrors, setImageErrors] = useState({});

  const trainers = [
    {
      name: "Елена Петухова",
      spec: "Оздоровительный фитнес | Реабилитация | Работа с женщинами",
      specShort: "Wellness & Recovery",
      whatsapp: "+7-903-874-18-98",
      telegram: "+7-903-874-18-98",
      vk: "vk.com/id222603101",
      // Путь к фото в папке public
      photo: lena,
      // Альтернативный URL (если фото еще нет)
      photoPlaceholder: "https://placehold.co/400x400/0f151c/00ffff?text=Елена",
      gradient: "gradient1"
    },
    {
      name: "Михаил Соловьев",
      spec: "Силовой тренинг | Функциональный тренинг | ОФП",
      specShort: "Power & Performance",
      whatsapp: "+7-999-606-26-16",
      telegram: "+7-999-606-26-16",
      vk: "vk.com/xxxxbersxxxx",
      photo: Mih,
      photoPlaceholder: "https://placehold.co/400x400/0f151c/00ffff?text=Михаил",
      gradient: "gradient2"
    }
  ];

  const handleImageError = (trainerName) => {
    setImageErrors(prev => ({ ...prev, [trainerName]: true }));
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactBg}></div>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>
            <span className={styles.pulse}></span>
            #CONTACT
          </div>
          <h2 className={styles.sectionTitle}>
            Свяжитесь с вашим тренером <br />
            <span className={styles.titleGradient}> прямо сейчас!</span>
          </h2>
          <p className={styles.freeBadge}>
            🎯 Первая консультация — <strong>бесплатно</strong>!
          </p>
          <div className={styles.sectionUnderline}></div>
        </div>

        <div className={styles.trainersGrid}>
          {trainers.map((trainer, index) => (
            <div key={index} className={`${styles.trainerCard} ${styles[trainer.gradient]}`}>
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardHeader}>
                <div className={styles.trainerPhoto}>
                  {!imageErrors[trainer.name] ? (
                    <Image
                      src={trainer.photo}
                      alt={trainer.name}
                      width={80}
                      height={80}
                      className={styles.photoImage}
                      onError={() => handleImageError(trainer.name)}
                      priority={index === 0}
                    />
                  ) : (
                    <div className={styles.photoFallback}>
                      <span className={styles.fallbackIcon}>
                        {trainer.name === "Елена Петухова" ? "👩‍⚕️" : "👨‍🏋️"}
                      </span>
                    </div>
                  )}
                  <span className={styles.onlineDot}></span>
                </div>
                {/* <div className={styles.cardNumber}>0{index + 1}</div> */}
              </div>

              <h3 className={styles.trainerName}>{trainer.name}</h3>
              <div className={styles.trainerSpec}>
                <span className={styles.specBadge}>{trainer.specShort}</span>
              </div>
              <p className={styles.trainerDesc}>{trainer.spec}</p>

              <div className={styles.contactLinks}>
                <a 
                  href={`https://wa.me/${trainer.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>📱</span>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>WhatsApp</span>
                    <span className={styles.contactValue}>{trainer.whatsapp}</span>
                  </div>
                  <span className={styles.contactArrow}>→</span>
                </a>

                <a 
                  href={`https://t.me/${trainer.telegram.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>📨</span>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>Telegram</span>
                    <span className={styles.contactValue}>{trainer.telegram}</span>
                  </div>
                  <span className={styles.contactArrow}>→</span>
                </a>

                <a 
                  href={`https://${trainer.vk}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}>🌐</span>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>VK</span>
                    <span className={styles.contactValue}>{trainer.vk}</span>
                  </div>
                  <span className={styles.contactArrow}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительный CTA */}
  <div className={styles.ctaCard}>
  <div className={styles.ctaCardGlow}></div>
  <div className={styles.ctaContent}>
    <span className={styles.ctaIcon}>💬</span>
    <div className={styles.ctaText}>
      <h4>Не уверены, какой тренер вам подходит?</h4>
      <p>Мы поможем подобрать специалиста с учетом ваших целей</p>
    </div>
    <Link href="/trenera" className={styles.ctaBtn}>
      Подобрать тренера →
    </Link>
  </div>
</div>
      </div>
    </section>
  );
}