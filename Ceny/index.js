// Плавная прокрутка для навигационных ссылок
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка только для якорных ссылок
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Если это якорная ссылка (начинается с #), обрабатываем плавную прокрутку
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                
                // Закрываем мобильное меню после клика
                const offcanvas = document.getElementById('offcanvasDarkNavbar');
                if (offcanvas) {
                    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                    if (bsOffcanvas) {
                        bsOffcanvas.hide();
                    }
                }
            }
            // Для внешних ссылок (как "Партнеры") разрешаем стандартное поведение
        });
    });

    // Изменение навигации при скролле
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.custom-navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(25, 25, 26, 0.98)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'rgba(25, 25, 26, 0.95)';
            navbar.style.padding = '1rem 0';
        }
    });

    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за элементами для анимации
    const animatedElements = document.querySelectorAll('.service-card, .stat-item, .trainer-card, .hero-buttons, section div, section h1, section h2, section h3, section h4, section p');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Обработчики для кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Здесь можно добавить логику для открытия чатов
            if (this.textContent.includes('WhatsApp')) {
                // Открыть WhatsApp
                window.open('https://wa.me/79996062616', '_blank');
            } else if (this.textContent.includes('Telegram')) {
                // Открыть Telegram
                window.open('https://t.me/@xxxbersxxx', '_blank');
            }
        });
    });
});