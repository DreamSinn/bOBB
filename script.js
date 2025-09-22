// Função para lidar com cliques nos CTAs
function handleCTAClick() {
    // Log para analytics (simulado)
    console.log('CTA clicked - redirecting to Twitch');
    
    // Efeito de confetti
    createConfetti();
    
    // Redirecionar para o Twitch
    setTimeout(() => {
        window.open('https://www.twitch.tv/mashrq', '_blank');
    }, 500);
}

// Contador regressivo funcional
function initCountdown() {
    // Tempo inicial (pode ser ajustado)
    let timeLeft = {
        days: 1,
        hours: 15,
        minutes: 32,
        seconds: 45
    };

    function updateCountdown() {
        // Atualizar elementos do DOM
        const daysEl = document.getElementById('countdownDays');
        const hoursEl = document.getElementById('countdownHours');
        const minutesEl = document.getElementById('countdownMinutes');
        const secondsEl = document.getElementById('countdownSeconds');

        if (daysEl) daysEl.textContent = timeLeft.days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = timeLeft.hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = timeLeft.minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = timeLeft.seconds.toString().padStart(2, '0');

        // Decrementar tempo
        if (timeLeft.seconds > 0) {
            timeLeft.seconds--;
        } else if (timeLeft.minutes > 0) {
            timeLeft.minutes--;
            timeLeft.seconds = 59;
        } else if (timeLeft.hours > 0) {
            timeLeft.hours--;
            timeLeft.minutes = 59;
            timeLeft.seconds = 59;
        } else if (timeLeft.days > 0) {
            timeLeft.days--;
            timeLeft.hours = 23;
            timeLeft.minutes = 59;
            timeLeft.seconds = 59;
        } else {
            // Reset quando chegar a zero
            timeLeft = { days: 1, hours: 15, minutes: 32, seconds: 45 };
        }
    }

    // Atualizar a cada segundo
    setInterval(updateCountdown, 1000);
    
    // Atualizar imediatamente
    updateCountdown();
}

// Captura de email
function initEmailCapture() {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const emailSuccess = document.getElementById('emailSuccess');

    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value;
            if (email) {
                // Simular envio
                console.log('Email captured:', email);
                
                // Mostrar mensagem de sucesso
                emailForm.style.display = 'none';
                emailSuccess.style.display = 'block';
                
                // Log para analytics (simulado)
                console.log('Email capture successful');
            }
        });
    }
}

// Animações de scroll reveal
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos que devem aparecer no scroll
    const elementsToReveal = document.querySelectorAll(
        '.gallery-item, .testimonial-card, .faq-item, .bonus-item, .feature-item'
    );
    
    elementsToReveal.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Efeitos de hover aprimorados
function initHoverEffects() {
    // Botões principais
    const buttons = document.querySelectorAll('.cta-primary, .cta-purchase, .cta-urgency');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.05)';
        });
    });

    // Imagens da galeria
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach((image, index) => {
        image.addEventListener('mouseenter', () => {
            const rotation = index % 2 === 0 ? '2deg' : '-2deg';
            image.style.transform = `scale(1.1) rotate(${rotation})`;
        });
        
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Cards de depoimentos
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Efeito de confetti
function createConfetti() {
    const colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.transition = 'all 3s ease-out';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.style.top = window.innerHeight + 'px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Animação dos elementos decorativos
function initDecorativeAnimations() {
    const decorativeElements = document.querySelectorAll('.bg-circle');
    
    decorativeElements.forEach((element, index) => {
        const delay = index * 0.5;
        element.style.animationDelay = `${delay}s`;
    });
}

// Parallax suave para elementos de fundo
function initParallax() {
    if (window.innerWidth <= 768) return; // Desabilitar em mobile
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const decorativeElements = document.querySelectorAll('.bg-circle');
        
        decorativeElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Smooth scroll para links internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Lazy loading para imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// Analytics simulado
function trackEvent(eventName, properties = {}) {
    console.log('Analytics Event:', eventName, properties);
    
    // Aqui você integraria com Google Analytics, Facebook Pixel, etc.
    // gtag('event', eventName, properties);
    // fbq('track', eventName, properties);
}

// Detecção de dispositivo
function detectDevice() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const isDesktop = window.innerWidth > 1024;
    
    document.body.classList.toggle('mobile', isMobile);
    document.body.classList.toggle('tablet', isTablet);
    document.body.classList.toggle('desktop', isDesktop);
    
    return { isMobile, isTablet, isDesktop };
}

// Otimizações de performance
function initPerformanceOptimizations() {
    // Preload de imagens críticas
    const criticalImages = [
        'hero_preview.png',
        'thumbnail_1.png',
        'thumbnail_2.png',
        'thumbnail_3.png',
        'thumbnail_4.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Debounce para eventos de scroll e resize
    let scrollTimeout;
    let resizeTimeout;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Scroll events aqui
        }, 16); // ~60fps
    });
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            detectDevice();
        }, 250);
    });
}

// Inicialização principal
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Landing page Bobbie Goodies carregada!');
    
    // Detectar dispositivo
    detectDevice();
    
    // Inicializar funcionalidades
    initCountdown();

    initScrollReveal();
    initHoverEffects();
    initDecorativeAnimations();
    initSmoothScroll();
    initLazyLoading();
    initPerformanceOptimizations();
    
    // Inicializar parallax apenas em desktop
    const { isDesktop } = detectDevice();
    if (isDesktop) {
        initParallax();
    }
    
    // Track page load
    trackEvent('page_view', {
        page: 'landing_page',
        device: detectDevice()
    });
    
    // Adicionar listeners para CTAs
    const ctaButtons = document.querySelectorAll('[onclick*="handleCTAClick"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('cta_click', {
                button_text: button.textContent.trim(),
                section: button.closest('section')?.className || 'unknown'
            });
        });
    });
});

// Suporte a gestos touch
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {
        document.body.classList.add('touch-device');
    });
    
    // Otimizações para touch
    const touchElements = document.querySelectorAll('.cta-primary, .cta-purchase, .cta-urgency');
    touchElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.style.webkitTapHighlightColor = 'transparent';
    });
}

// Tratamento de erros
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        line: e.lineno
    });
});

// Service Worker para cache (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Exportar funções para uso global
window.BobbieGoodies = {
    handleCTAClick,
    createConfetti,
    trackEvent
};

