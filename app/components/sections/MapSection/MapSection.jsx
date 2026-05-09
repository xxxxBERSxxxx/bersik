'use client';
import { useState, useCallback } from 'react';
import styles from './MapSection.module.css';

export default function MapSection() {
  const [selectedTransport, setSelectedTransport] = useState('auto');
  const coordinates = { lat: 55.677037, lon: 37.281953 };
  
  const transportModes = [
    { id: 'auto', icon: '🚗', label: 'Авто' },
    { id: 'public', icon: '🚌', label: 'Общественный' },
    { id: 'pedestrian', icon: '🚶', label: 'Пешком' },
    { id: 'bicycle', icon: '🚲', label: 'Велосипед' }
  ];

  const buildRouteUrl = useCallback((mode) => {
    const base = 'https://yandex.ru/maps/?mode=routes';
    return `${base}&rtext=~${coordinates.lat},${coordinates.lon}&rtt=${mode}`;
  }, [coordinates]);

  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${coordinates.lon}%2C${coordinates.lat}&mode=search&sll=${coordinates.lon}%2C${coordinates.lat}&text=${coordinates.lat}%2C${coordinates.lon}&z=15&pt=${coordinates.lon},${coordinates.lat},pm2rdm`;

  const handleTransportClick = (mode) => {
    setSelectedTransport(mode);
    window.open(buildRouteUrl(mode), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.pulse}></span>
            #LOCATION
          </div>
          <h2 className={styles.title}>
            Как к нам&nbsp;
            <span className={styles.titleGradient}> добраться</span>
          </h2>
          <p className={styles.subtitle}>
            Мы находимся в Одинцово. Постройте удобный маршрут прямо сейчас!
          </p>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.content}>
          {/* Карта */}
          <div className={styles.mapCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.mapWrapper}>
              <iframe
                src={mapUrl}
                className={styles.mapFrame}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Яндекс Карта - Одинцово"
              />
            </div>
          </div>

          {/* Панель с информацией */}
          <div className={styles.infoPanel}>
            {/* Адрес */}
            <div className={styles.addressCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.addressIcon}>📍</div>
              <div className={styles.addressContent}>
                <h3 className={styles.addressTitle}>Адрес студии</h3>
                <p className={styles.addressText}>
                  Московская область, Одинцово
                </p>
                <p className={styles.addressCoords}>
                  55.677037, 37.281953
                </p>
              </div>
            </div>

            {/* Построить маршрут */}
            <div className={styles.routeCard}>
              <div className={styles.cardGlow}></div>
              <h3 className={styles.routeTitle}>
                <span className={styles.routeIcon}>🗺️</span>
                Построить маршрут
              </h3>
              
              <div className={styles.transportGrid}>
                {transportModes.map((mode) => (
                  <button
                    key={mode.id}
                    className={`${styles.transportBtn} ${selectedTransport === mode.id ? styles.active : ''}`}
                    onClick={() => handleTransportClick(mode.id)}
                  >
                    <span className={styles.transportIcon}>{mode.icon}</span>
                    <span className={styles.transportLabel}>{mode.label}</span>
                  </button>
                ))}
              </div>

              <p className={styles.routeHint}>
                Нажмите на способ передвижения — маршрут откроется в Яндекс.Картах
              </p>
            </div>

            {/* Время работы */}
            <div className={styles.workCard}>
              <div className={styles.cardGlow}></div>
              <h3 className={styles.workTitle}>
                <span className={styles.workIcon}>🕐</span>
                Время работы
              </h3>
              <div className={styles.workGrid}>
                <div className={styles.workRow}>
                  <span className={styles.day}>Пн — Пт</span>
                  <span className={styles.time}>7:00 — 22:00</span>
                </div>
                <div className={styles.workRow}>
                  <span className={styles.day}>Суббота</span>
                  <span className={styles.time}>8:00 — 20:00</span>
                </div>
                <div className={styles.workRow}>
                  <span className={styles.day}>Воскресенье</span>
                  <span className={styles.time}>9:00 — 18:00</span>
                </div>
              </div>
            </div>

            {/* Контакты */}
            <div className={styles.contactMiniCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.contactRow}>
                <span className={styles.contactEmoji}>📞</span>
                <div>
                  <p className={styles.contactLabel}>Телефон</p>
                  <a href="tel:+79038741898" className={styles.contactValue}>
                    +7 (903) 874-18-98
                  </a>
                </div>
              </div>
              <div className={styles.contactDivider}></div>
              <div className={styles.contactRow}>
                <span className={styles.contactEmoji}>✉️</span>
                <div>
                  <p className={styles.contactLabel}>Telegram / WhatsApp</p>
                  <a 
                    href="https://t.me/fitnes1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactValue}
                  >
                    Написать в мессенджер
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaGlow}></div>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEmoji}>🏃</span>
            <div>
              <h4 className={styles.ctaTitle}>Готовы приехать?</h4>
              <p className={styles.ctaText}>
                Запишитесь на тренировку и получите бесплатную консультацию
              </p>
            </div>
            <a href="tel:+79038741898" className={styles.ctaBtn}>
              Позвонить сейчас →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}