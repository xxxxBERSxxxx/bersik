'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие меню при клике вне навигации
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const linkItems = [
    { href: '/', label: 'Главная' },
    { href: '/trenera', label: 'Тренеры' },
    { href: '/uslugi', label: 'Услуги' },
    { href: '/ceny', label: 'Цены' },
    { href: 'https://www.zdorowdwig.ru/', label: 'Партнеры' },
    { href: '/contacts', label: 'Контакты' },
  ];

  if (!mounted) {
    return (
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Фитнес<span className={styles.logoAccent}>1</span></span>
        </div>
        <div className={styles.links}>
          {linkItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={styles.link}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} ref={navRef}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <span className={styles.logoText}>Ф<span className={styles.logoAccent}>итнес</span></span>
          <span className={styles.logoDot}></span>
        </Link>
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.menuHeader}>
          <span className={styles.menuLogo}>Фитнес</span>
        
        </div>
        {linkItems.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
              onClick={closeMenu}
            >
              <span className={styles.linkIndicator}></span>
              {label}
            </Link>
          );
        })}
        <div className={styles.menuFooter}>
          <span className={styles.menuTag}>#Фитнес</span>
        </div>
      </div>
    </nav>
  );
}