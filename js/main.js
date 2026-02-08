/*==================== CONFIGURACIÓN INICIAL ====================*/
// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

/*==================== VARIABLES GLOBALES ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');
const header = document.getElementById('header');
const scrollUp = document.getElementById('scroll-up');
const sections = document.querySelectorAll('section[id]');

/*==================== MENÚ MÓVIL ====================*/
// Función para abrir menú
function openMenu() {
    if (navMenu) {
        // LIMPIAR ESTILO EN LÍNEA CONFLICTIVO ANTES DE AGREGAR LA CLASE
        navMenu.style.right = ''; // <--- ESTO BORRA EL -100%
        navMenu.style.removeProperty('right');
        navMenu.style.transition = 'right 0.4s ease'; // Reactiva la animación
        
        // Agregar clase para mostrar el menú
        navMenu.classList.add('show-menu');
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        
        // Actualizar accesibilidad
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'true');
        }
        if (navClose) {
            navClose.setAttribute('aria-expanded', 'true');
        }
    }
}

// Función para cerrar menú
function closeMenu() {
    if (navMenu) {
        navMenu.classList.remove('show-menu');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.height = '';
        
        // Ocultar menú - usar setTimeout para permitir que la transición CSS funcione
        setTimeout(() => {
            navMenu.style.right = '-100%';
        }, 400); // Después de la transición CSS (0.4s)
        
        // Actualizar accesibilidad
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.style.display = 'flex';
            navToggle.style.visibility = 'visible';
            navToggle.style.opacity = '1';
        }
        if (navClose) {
            navClose.setAttribute('aria-expanded', 'false');
            navClose.style.display = 'none';
        }
    }
}

// Mostrar menú móvil
if (navToggle) {
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openMenu();
    });
}

// Ocultar menú móvil
if (navClose) {
    navClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
    });
}

// Cerrar menú al hacer clic en un link
if (navLinks && navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
}

// Cerrar menú al hacer clic fuera (en el overlay)
document.addEventListener('click', function(e) {
    if (navMenu && navMenu.classList.contains('show-menu')) {
        // Si el clic es en el overlay (fuera del menú)
        const menuRect = navMenu.getBoundingClientRect();
        const clickedInsideMenu = (
            e.clientX >= menuRect.left &&
            e.clientX <= menuRect.right &&
            e.clientY >= menuRect.top &&
            e.clientY <= menuRect.bottom
        );
        
        // Verificar si el clic es en el botón cerrar o sus hijos
        const clickedOnClose = navClose && (
            e.target === navClose || 
            navClose.contains(e.target)
        );
        
        // Si el clic NO es en el menú ni en el botón hamburguesa ni en el botón cerrar
        // entonces cerrar el menú (clic en overlay)
        if (!clickedInsideMenu && 
            e.target !== navToggle && 
            !navToggle?.contains(e.target) &&
            !clickedOnClose) {
            closeMenu();
        }
    }
});

// Mejorar el manejo del overlay: cerrar al hacer clic directamente en el overlay
document.addEventListener('click', function(e) {
    if (navMenu && navMenu.classList.contains('show-menu')) {
        // Si el clic es en el body o en un elemento que no es parte del menú
        const isMenuElement = navMenu.contains(e.target);
        const isToggleButton = navToggle && (e.target === navToggle || navToggle.contains(e.target));
        const isCloseButton = navClose && (e.target === navClose || navClose.contains(e.target));
        
        // Si no es ningún elemento del menú, cerrar
        if (!isMenuElement && !isToggleButton && !isCloseButton) {
            // Verificar que realmente estamos fuera del menú
            const menuRect = navMenu.getBoundingClientRect();
            const clickedOutside = (
                e.clientX < menuRect.left ||
                e.clientX > menuRect.right ||
                e.clientY < menuRect.top ||
                e.clientY > menuRect.bottom
            );
            
            if (clickedOutside) {
                closeMenu();
            }
        }
    }
});

// Cerrar menú con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) {
        closeMenu();
    }
});

// Cerrar menú al redimensionar ventana
window.addEventListener('resize', function() {
    if (window.innerWidth > 992 && navMenu && navMenu.classList.contains('show-menu')) {
        closeMenu();
    }
});

/*==================== HEADER CON SCROLL ====================*/
// Cambiar estilo del header al hacer scroll
function scrollHeader() {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== ACTIVE LINK EN NAVEGACIÓN ====================*/
// Resaltar el link activo según la sección visible
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== BOTÓN SCROLL UP ====================*/
// Mostrar/ocultar botón de scroll up
function scrollUpButton() {
    if (window.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUpButton);

/*==================== SMOOTH SCROLL ====================*/
// Scroll suave para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Evitar prevenir default en links vacíos o solo #
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target && header) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
        }
    });
});

/*==================== FORMULARIO DE CONTACTO ====================*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validación básica
        if (!name || !email || !phone || !message) {
            showNotification('Por favor completa todos los campos', 'error');
            return;
        }
        
        // Validar email
        if (!isValidEmail(email)) {
            showNotification('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Crear mensaje para WhatsApp
        const whatsappMessage = `
*Nuevo Contacto desde Web CR Digital*

*Nombre:* ${name}
*Email:* ${email}
*Teléfono:* ${phone}
*Mensaje:* ${message}
        `.trim();
        
        // Número de WhatsApp (formato internacional sin +)
        const whatsappNumber = '5493804561541';
        
        // Crear URL de WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Abrir WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Mostrar notificación de éxito
        showNotification('Redirigiendo a WhatsApp...', 'success');
        
        // Limpiar formulario
        contactForm.reset();
        
        // Opcional: También puedes enviar el formulario por email usando un servicio como FormSubmit, EmailJS, etc.
        // sendEmailNotification(name, email, phone, message);
    });
}

/*==================== VALIDACIÓN DE EMAIL ====================*/
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/*==================== SISTEMA DE NOTIFICACIONES ====================*/
function showNotification(message, type = 'info') {
    // Sanitizar el mensaje para prevenir XSS
    const sanitizedMessage = String(message).replace(/[<>]/g, '');
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const content = document.createElement('div');
    content.className = 'notification__content';
    
    const icon = document.createElement('i');
    icon.className = `notification__icon ${getNotificationIcon(type)}`;
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'notification__message';
    messageSpan.textContent = sanitizedMessage;
    
    content.appendChild(icon);
    content.appendChild(messageSpan);
    notification.appendChild(content);
    
    // Agregar estilos si no existen
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 2rem;
                background: var(--bg-card);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: var(--border-radius-lg);
                padding: 1rem 1.5rem;
                box-shadow: var(--shadow-2xl);
                z-index: 1000;
                animation: slideInRight 0.3s ease-out;
                max-width: 400px;
            }
            
            .notification--success {
                border-left: 4px solid var(--accent-success);
            }
            
            .notification--error {
                border-left: 4px solid var(--accent-error);
            }
            
            .notification--info {
                border-left: 4px solid var(--primary-color);
            }
            
            .notification__content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .notification__icon {
                font-size: 1.5rem;
            }
            
            .notification--success .notification__icon {
                color: var(--accent-success);
            }
            
            .notification--error .notification__icon {
                color: var(--accent-error);
            }
            
            .notification--info .notification__icon {
                color: var(--primary-color);
            }
            
            .notification__message {
                color: var(--text-color);
                font-size: var(--font-size-sm);
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            
            @media screen and (max-width: 768px) {
                .notification {
                    right: 1rem;
                    left: 1rem;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-solid fa-circle-check',
        error: 'fa-solid fa-circle-exclamation',
        info: 'fa-solid fa-circle-info'
    };
    return icons[type] || icons.info;
}

/*==================== ANIMACIÓN DE NÚMEROS (CONTADOR) ====================*/
// Función mejorada para animar contadores
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target')) || parseInt(element.textContent);
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Observador para animar cuando sea visible
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-target], .stat__number, .result__number');
            counters.forEach(counter => {
                if (counter.getAttribute('data-target') || !isNaN(parseInt(counter.textContent))) {
                    animateCounter(counter);
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Observar secciones con contadores
const sectionsWithCounters = document.querySelectorAll('.hero, .results');
sectionsWithCounters.forEach(section => {
    if (section) {
        counterObserver.observe(section);
    }
});

/*==================== SCROLL INDICATOR ====================*/
// Smooth scroll al hacer click en el indicador
const scrollIndicator = document.querySelector('.hero__scroll');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = servicesSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

/*==================== LAZY LOADING DE IMÁGENES ====================*/
// Cargar imágenes de forma lazy para mejor performance
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

/*==================== PREVENIR ENVÍO MÚLTIPLE DEL FORMULARIO ====================*/
let isSubmitting = false;

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        if (isSubmitting) {
            e.preventDefault();
            return;
        }
        isSubmitting = true;
        
        // Resetear después de 3 segundos
        setTimeout(() => {
            isSubmitting = false;
        }, 3000);
    });
}

/*==================== DETECCIÓN DE MODO OSCURO DEL SISTEMA (OPCIONAL) ====================*/
// Si quieres implementar un toggle de modo oscuro/claro, puedes usar esto:
/*
const darkModeToggle = document.getElementById('dark-mode-toggle');

if (darkModeToggle) {
    // Verificar preferencia guardada
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    darkModeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}
*/

/*==================== PERFORMANCE: DEBOUNCE PARA SCROLL ====================*/
// Optimizar eventos de scroll con debounce
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Aplicar debounce a funciones de scroll
window.addEventListener('scroll', debounce(() => {
    scrollHeader();
    scrollActive();
    scrollUpButton();
}, 10));

/*==================== ANALYTICS (OPCIONAL) ====================*/
// Tracking de eventos importantes
function trackEvent(category, action, label) {
    // Aquí puedes integrar Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', { category, action, label });
    
    // Ejemplo con Google Analytics (si lo tienes configurado):
    // gtag('event', action, {
    //     'event_category': category,
    //     'event_label': label
    // });
}

// Trackear clics en botones importantes
document.querySelectorAll('.button--primary, .button--whatsapp').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackEvent('Button', 'Click', buttonText);
    });
});

// Trackear envío de formulario
if (contactForm) {
    contactForm.addEventListener('submit', function() {
        trackEvent('Form', 'Submit', 'Contact Form');
    });
}

/*==================== LOGO INTERACTIVO ====================*/
// Efecto parallax en el logo con el mouse
const navLogo = document.querySelector('.nav__logo');
const navLogoImg = document.querySelector('.nav__logo-img');

if (navLogo && navLogoImg) {
    // Parallax effect
    navLogo.addEventListener('mousemove', (e) => {
        const rect = navLogo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        const rotateX = deltaY * 10; // Máximo 10 grados
        const rotateY = deltaX * 10;
        
        navLogoImg.style.transform = `
            perspective(1000px) 
            rotateX(${-rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale(1.1)
        `;
    });
    
    navLogo.addEventListener('mouseleave', () => {
        navLogoImg.style.transform = '';
    });
    
    // Click effect
    navLogo.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Crear efecto de ripple
        const clickEffect = navLogo.querySelector('.logo__click-effect');
        if (clickEffect) {
            clickEffect.classList.remove('active');
            void clickEffect.offsetWidth; // Trigger reflow
            clickEffect.classList.add('active');
        }
        
        // Scroll suave al inicio
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Efecto de energía en hover
const logoEnergy = document.querySelector('.logo__energy');
if (logoEnergy) {
    logoEnergy.addEventListener('mouseenter', () => {
        logoEnergy.style.filter = 'brightness(1.2)';
    });
    
    logoEnergy.addEventListener('mouseleave', () => {
        logoEnergy.style.filter = '';
    });
}

/*==================== CONSOLE MESSAGE ====================*/
// Mensaje en consola para desarrolladores
console.log(
    '%c🚀 CR Digital - Desarrollado con ❤️',
    'color: #00D9FF; font-size: 16px; font-weight: bold; padding: 10px;'
);
console.log(
    '%c¿Buscas un desarrollador? Contáctanos: disewebtalle@gmail.com',
    'color: #D4AF37; font-size: 12px; padding: 5px;'
);
console.log(
    '%c✨ Logo interactivo activado - Mueve el mouse sobre el logo',
    'color: #00D9FF; font-size: 12px; padding: 5px;'
);

/*==================== OPTIMIZACIONES MÓVILES ====================*/

// Detectar si es dispositivo móvil
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Optimizar eventos táctiles en móvil
if (isMobile) {
    // Prevenir zoom accidental en doble tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
    
    // Mejorar scroll suave en iOS
    document.documentElement.style.webkitOverflowScrolling = 'touch';
}

// Lazy loading de imágenes
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Detectar orientación del dispositivo
function handleOrientationChange() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        document.body.classList.add('landscape-mode');
        document.body.classList.remove('portrait-mode');
    } else {
        document.body.classList.add('portrait-mode');
        document.body.classList.remove('landscape-mode');
    }
}

if (isMobile) {
    window.addEventListener('orientationchange', handleOrientationChange);
    handleOrientationChange(); // Ejecutar al cargar
}

// Optimizar rendimiento en scroll (throttle)
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        // Aquí van las funciones de scroll
        scrollHeader();
        scrollActive();
    });
}, { passive: true });

// Prevenir zoom en inputs en iOS
if (isMobile && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            document.body.style.zoom = '1';
        });
    });
}

// Detectar si el usuario prefiere animaciones reducidas
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.body.classList.add('prefers-reduced-motion');
    console.log('♿ Modo de animaciones reducidas activado');
}

/*==================== INICIALIZACIÓN ====================*/
// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase al body según el dispositivo
    if (isMobile) {
        document.body.classList.add('is-mobile');
    } else {
        document.body.classList.add('is-desktop');
    }
});

/*==================== SERVICE WORKER (OPCIONAL - PWA) ====================*/
// Si quieres convertir el sitio en PWA, descomenta esto:
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registrado:', registration);
            })
            .catch(error => {
                console.log('❌ Error al registrar Service Worker:', error);
            });
    });
}
*/
