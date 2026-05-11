'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
    trainer: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const goals = [
    { value: '', label: 'Выберите цель' },
    { value: 'weight-loss', label: 'Снижение веса' },
    { value: 'muscle-gain', label: 'Набор мышечной массы' },
    { value: 'rehabilitation', label: 'Реабилитация после травмы' },
    { value: 'posture', label: 'Коррекция осанки' },
    { value: 'functional', label: 'Функциональный тренинг' },
    { value: 'general', label: 'Общее оздоровление' },
    { value: 'online', label: 'Онлайн-тренировки' }
  ];

  const trainers = [
    { value: '', label: 'Любой тренер' },
    { value: 'elena', label: 'Елена Петухова' },
    { value: 'mikhail', label: 'Михаил Соловьев' }
  ];

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,18}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.goal) {
      newErrors.goal = 'Выберите цель тренировок';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);

    try {
      // Имитация отправки
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data:', formData);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', goal: '', trainer: '', message: '' });
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.successCard}>
            <div className={styles.cardGlow}></div>
            <div className={styles.successContent}>
              <span className={styles.successEmoji}>🎉</span>
              <h3 className={styles.successTitle}>Заявка отправлена!</h3>
              <p className={styles.successText}>
                Мы свяжемся с вами в ближайшее время для уточнения деталей и подбора удобного времени
              </p>
              <button 
                className={styles.resetBtn}
                onClick={() => setSubmitted(false)}
              >
                Отправить ещё заявку →
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Заголовок */}
        <div className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.pulse}></span>
            #CONTACT_FORM
          </div>
          <h2 className={styles.title}>
            Запишитесь на
            <span className={styles.titleGradient}> бесплатную консультацию</span>
          </h2>
          <p className={styles.subtitle}>
            Оставьте заявку — и мы подберем для вас идеального тренера и программу тренировок
          </p>
          <div className={styles.underline}></div>
        </div>

        {/* Форма */}
        <div className={styles.formCard}>
          <div className={styles.cardGlow}></div>
          
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.formGrid}>
              {/* Имя */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <span className={styles.labelIcon}>👤</span>
                  Ваше имя *
                </label>
                <div className={`${styles.inputWrapper} ${errors.name ? styles.inputError : ''}`}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Александр"
                    className={styles.input}
                  />
                </div>
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              {/* Телефон */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <span className={styles.labelIcon}>📞</span>
                  Телефон *
                </label>
                <div className={`${styles.inputWrapper} ${errors.phone ? styles.inputError : ''}`}>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    className={styles.input}
                  />
                </div>
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>

              {/* Email */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <span className={styles.labelIcon}>📧</span>
                  Email
                </label>
                <div className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ''}`}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className={styles.input}
                  />
                </div>
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              {/* Цель */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <span className={styles.labelIcon}>🎯</span>
                  Цель тренировок *
                </label>
                <div className={`${styles.selectWrapper} ${errors.goal ? styles.inputError : ''}`}>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    {goals.map(goal => (
                      <option key={goal.value} value={goal.value}>
                        {goal.label}
                      </option>
                    ))}
                  </select>
                  <span className={styles.selectArrow}>▾</span>
                </div>
                {errors.goal && <span className={styles.errorText}>{errors.goal}</span>}
              </div>

              {/* Тренер */}
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <span className={styles.labelIcon}>🏋️</span>
                  Предпочитаемый тренер
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    name="trainer"
                    value={formData.trainer}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    {trainers.map(trainer => (
                      <option key={trainer.value} value={trainer.value}>
                        {trainer.label}
                      </option>
                    ))}
                  </select>
                  <span className={styles.selectArrow}>▾</span>
                </div>
              </div>

              {/* Сообщение */}
              <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
                <label className={styles.label}>
                  <span className={styles.labelIcon}>💬</span>
                  Дополнительная информация
                </label>
                <div className={styles.inputWrapper}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о ваших пожеланиях, особенностях здоровья, удобном времени для тренировок..."
                    className={styles.textarea}
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Чекбокс согласия */}
            <div className={styles.agreement}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" required className={styles.checkbox} />
                <span className={styles.checkmark}></span>
                <span className={styles.agreementText}>
                  Я согласен на обработку персональных данных и принимаю условия{' '}
                  <a href="/privacy" className={styles.agreementLink}>политики конфиденциальности</a>
                </span>
              </label>
            </div>

            {/* Кнопка отправки */}
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className={styles.spinner}></span>
                  Отправка...
                </>
              ) : (
                <>
                  Отправить заявку
                  <span className={styles.submitArrow}>→</span>
                  <span className={styles.btnGlow}></span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Дополнительная информация */}
        <div className={styles.infoRow}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>🔒</span>
            <span className={styles.infoText}>Ваши данные защищены</span>
          </div>
          <div className={styles.infoDivider}></div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>⚡</span>
            <span className={styles.infoText}>Ответ в течение 15 минут</span>
          </div>
          <div className={styles.infoDivider}></div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>🎁</span>
            <span className={styles.infoText}>Первая консультация — бесплатно</span>
          </div>
        </div>
      </div>
    </section>
  );
}