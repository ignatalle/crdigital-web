# 🔧 Snippets Útiles - CR Digital

Fragmentos de código reutilizables para personalizar y extender tu sitio.

---

## 📋 Tabla de Contenidos

1. [Nuevas Secciones](#nuevas-secciones)
2. [Componentes](#componentes)
3. [Animaciones](#animaciones)
4. [Formularios](#formularios)
5. [Integraciones](#integraciones)

---

## 🆕 Nuevas Secciones

### Sección de Testimonios

**HTML:**
```html
<!-- ==================== TESTIMONIALS SECTION ==================== -->
<section class="testimonials section">
    <div class="container">
        <div class="section__header" data-aos="fade-up">
            <span class="section__subtitle">Testimonios</span>
            <h2 class="section__title">
                Lo que Dicen <span class="text-gradient">Nuestros Clientes</span>
            </h2>
        </div>

        <div class="testimonials__grid">
            <div class="testimonial__card" data-aos="fade-up" data-aos-delay="100">
                <div class="testimonial__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="testimonial__text">
                    "Excelente servicio. El chatbot con IA aumentó mis ventas en un 40%."
                </p>
                <div class="testimonial__author">
                    <img src="./assets/images/client-1.jpg" alt="Cliente 1" class="testimonial__img">
                    <div>
                        <h4 class="testimonial__name">Juan Pérez</h4>
                        <span class="testimonial__role">CEO, Empresa XYZ</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**CSS:**
```css
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.testimonial__card {
  background: var(--bg-card);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all var(--transition-base);
}

.testimonial__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.testimonial__stars {
  color: var(--secondary-color);
  margin-bottom: var(--spacing-md);
  font-size: 1.125rem;
}

.testimonial__text {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
  font-style: italic;
}

.testimonial__author {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.testimonial__img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial__name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-xs);
}

.testimonial__role {
  font-size: var(--font-size-sm);
  color: var(--text-muted);
}
```

---

### Sección de Portafolio/Proyectos

**HTML:**
```html
<!-- ==================== PORTFOLIO SECTION ==================== -->
<section class="portfolio section">
    <div class="container">
        <div class="section__header" data-aos="fade-up">
            <span class="section__subtitle">Nuestro Trabajo</span>
            <h2 class="section__title">
                Proyectos <span class="text-gradient">Destacados</span>
            </h2>
        </div>

        <div class="portfolio__grid">
            <div class="portfolio__item" data-aos="zoom-in" data-aos-delay="100">
                <img src="./assets/images/project-1.jpg" alt="Proyecto 1" class="portfolio__img">
                <div class="portfolio__overlay">
                    <h3 class="portfolio__title">E-commerce con IA</h3>
                    <p class="portfolio__description">Tienda online con chatbot inteligente</p>
                    <div class="portfolio__tags">
                        <span class="portfolio__tag">IA</span>
                        <span class="portfolio__tag">E-commerce</span>
                        <span class="portfolio__tag">React</span>
                    </div>
                    <a href="#" class="portfolio__link">Ver Proyecto</a>
                </div>
            </div>
        </div>
    </div>
</section>
```

**CSS:**
```css
.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

.portfolio__item {
  position: relative;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  cursor: pointer;
}

.portfolio__img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.portfolio__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(10, 14, 39, 0.7) 0%, rgba(10, 14, 39, 0.95) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xl);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.portfolio__item:hover .portfolio__overlay {
  opacity: 1;
}

.portfolio__item:hover .portfolio__img {
  transform: scale(1.1);
}

.portfolio__title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
  text-align: center;
}

.portfolio__description {
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: var(--spacing-md);
}

.portfolio__tags {
  display: flex;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
}

.portfolio__tag {
  background: var(--primary-color);
  color: var(--bg-color);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}

.portfolio__link {
  background: var(--gradient-primary);
  color: var(--bg-color);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-lg);
  font-weight: var(--font-weight-semibold);
  transition: transform var(--transition-base);
}

.portfolio__link:hover {
  transform: translateY(-2px);
}
```

---

### Sección de Precios

**HTML:**
```html
<!-- ==================== PRICING SECTION ==================== -->
<section class="pricing section">
    <div class="container">
        <div class="section__header" data-aos="fade-up">
            <span class="section__subtitle">Planes</span>
            <h2 class="section__title">
                Precios <span class="text-gradient">Transparentes</span>
            </h2>
        </div>

        <div class="pricing__grid">
            <!-- Plan Básico -->
            <div class="pricing__card" data-aos="fade-up" data-aos-delay="100">
                <h3 class="pricing__name">Básico</h3>
                <div class="pricing__price">
                    <span class="pricing__currency">$</span>
                    <span class="pricing__amount">299</span>
                    <span class="pricing__period">/mes</span>
                </div>
                <ul class="pricing__features">
                    <li><i class="fa-solid fa-check"></i> Landing Page</li>
                    <li><i class="fa-solid fa-check"></i> Diseño responsive</li>
                    <li><i class="fa-solid fa-check"></i> SEO básico</li>
                    <li><i class="fa-solid fa-check"></i> Hosting incluido</li>
                    <li class="disabled"><i class="fa-solid fa-xmark"></i> Chatbot IA</li>
                </ul>
                <a href="#contact" class="button button--secondary button--full">
                    Elegir Plan
                </a>
            </div>

            <!-- Plan Pro (Featured) -->
            <div class="pricing__card pricing__card--featured" data-aos="fade-up" data-aos-delay="200">
                <div class="pricing__badge">Más Popular</div>
                <h3 class="pricing__name">Pro</h3>
                <div class="pricing__price">
                    <span class="pricing__currency">$</span>
                    <span class="pricing__amount">599</span>
                    <span class="pricing__period">/mes</span>
                </div>
                <ul class="pricing__features">
                    <li><i class="fa-solid fa-check"></i> Sitio Web Completo</li>
                    <li><i class="fa-solid fa-check"></i> Diseño personalizado</li>
                    <li><i class="fa-solid fa-check"></i> SEO avanzado</li>
                    <li><i class="fa-solid fa-check"></i> Chatbot con IA</li>
                    <li><i class="fa-solid fa-check"></i> Soporte prioritario</li>
                </ul>
                <a href="#contact" class="button button--primary button--full">
                    Elegir Plan
                </a>
            </div>

            <!-- Plan Enterprise -->
            <div class="pricing__card" data-aos="fade-up" data-aos-delay="300">
                <h3 class="pricing__name">Enterprise</h3>
                <div class="pricing__price">
                    <span class="pricing__currency">$</span>
                    <span class="pricing__amount">999</span>
                    <span class="pricing__period">/mes</span>
                </div>
                <ul class="pricing__features">
                    <li><i class="fa-solid fa-check"></i> Todo de Pro</li>
                    <li><i class="fa-solid fa-check"></i> E-commerce</li>
                    <li><i class="fa-solid fa-check"></i> Automatización IA</li>
                    <li><i class="fa-solid fa-check"></i> Integraciones</li>
                    <li><i class="fa-solid fa-check"></i> Soporte 24/7</li>
                </ul>
                <a href="#contact" class="button button--secondary button--full">
                    Elegir Plan
                </a>
            </div>
        </div>
    </div>
</section>
```

**CSS:**
```css
.pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  align-items: center;
}

.pricing__card {
  background: var(--bg-card);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  transition: all var(--transition-base);
  position: relative;
}

.pricing__card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--primary-color);
}

.pricing__card--featured {
  transform: scale(1.05);
  border-color: var(--primary-color);
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%);
}

.pricing__badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: var(--gradient-primary);
  color: var(--bg-color);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
}

.pricing__name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-lg);
}

.pricing__price {
  margin-bottom: var(--spacing-xl);
}

.pricing__currency {
  font-size: var(--font-size-2xl);
  color: var(--text-secondary);
  vertical-align: super;
}

.pricing__amount {
  font-size: var(--font-size-6xl);
  font-weight: var(--font-weight-extrabold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pricing__period {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
}

.pricing__features {
  margin-bottom: var(--spacing-xl);
  text-align: left;
}

.pricing__features li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.pricing__features li i {
  color: var(--accent-success);
}

.pricing__features li.disabled {
  opacity: 0.5;
}

.pricing__features li.disabled i {
  color: var(--text-muted);
}
```

---

## 🧩 Componentes

### Modal/Popup

**HTML:**
```html
<!-- Modal -->
<div class="modal" id="modal">
    <div class="modal__overlay" id="modal-overlay"></div>
    <div class="modal__content">
        <button class="modal__close" id="modal-close">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <h3 class="modal__title">Título del Modal</h3>
        <p class="modal__text">Contenido del modal aquí...</p>
        <div class="modal__actions">
            <button class="button button--primary">Aceptar</button>
            <button class="button button--secondary" id="modal-cancel">Cancelar</button>
        </div>
    </div>
</div>
```

**CSS:**
```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-modal);
  display: none;
  align-items: center;
  justify-content: center;
}

.modal.show {
  display: flex;
}

.modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
}

.modal__content {
  position: relative;
  background: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-2xl);
  max-width: 500px;
  width: 90%;
  z-index: 1;
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal__close {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color var(--transition-fast);
}

.modal__close:hover {
  color: var(--primary-color);
}

.modal__title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
}

.modal__text {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.modal__actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: flex-end;
}
```

**JavaScript:**
```javascript
// Abrir modal
function openModal() {
    document.getElementById('modal').classList.add('show');
}

// Cerrar modal
function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

// Event listeners
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', closeModal);
document.getElementById('modal-cancel').addEventListener('click', closeModal);

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
```

---

### Accordion/FAQ

**HTML:**
```html
<!-- FAQ Section -->
<section class="faq section">
    <div class="container">
        <div class="section__header" data-aos="fade-up">
            <span class="section__subtitle">FAQ</span>
            <h2 class="section__title">
                Preguntas <span class="text-gradient">Frecuentes</span>
            </h2>
        </div>

        <div class="accordion">
            <div class="accordion__item" data-aos="fade-up" data-aos-delay="100">
                <button class="accordion__header">
                    <span>¿Cuánto tiempo toma desarrollar un sitio web?</span>
                    <i class="fa-solid fa-chevron-down accordion__icon"></i>
                </button>
                <div class="accordion__content">
                    <p>El tiempo de desarrollo varía según la complejidad del proyecto. 
                    Una landing page simple puede estar lista en 1-2 semanas, mientras que 
                    un sitio web completo con funcionalidades avanzadas puede tomar 4-8 semanas.</p>
                </div>
            </div>

            <div class="accordion__item" data-aos="fade-up" data-aos-delay="200">
                <button class="accordion__header">
                    <span>¿Qué incluye el servicio de mantenimiento?</span>
                    <i class="fa-solid fa-chevron-down accordion__icon"></i>
                </button>
                <div class="accordion__content">
                    <p>El mantenimiento incluye actualizaciones de seguridad, backups regulares, 
                    optimización de rendimiento, actualizaciones de contenido y soporte técnico.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**CSS:**
```css
.accordion {
  max-width: 800px;
  margin: 0 auto;
}

.accordion__item {
  background: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-md);
  overflow: hidden;
}

.accordion__header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  text-align: left;
  cursor: pointer;
  transition: all var(--transition-base);
}

.accordion__header:hover {
  color: var(--primary-color);
}

.accordion__icon {
  transition: transform var(--transition-base);
}

.accordion__item.active .accordion__icon {
  transform: rotate(180deg);
}

.accordion__content {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-base);
}

.accordion__item.active .accordion__content {
  max-height: 500px;
}

.accordion__content p {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  color: var(--text-secondary);
  line-height: 1.6;
}
```

**JavaScript:**
```javascript
// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Cerrar todos los items
        document.querySelectorAll('.accordion__item').forEach(i => {
            i.classList.remove('active');
        });
        
        // Abrir el clickeado si no estaba activo
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
```

---

## 🎨 Animaciones

### Contador Animado

**HTML:**
```html
<div class="counter" data-target="1500">0</div>
```

**JavaScript:**
```javascript
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
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

// Usar con Intersection Observer
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));
```

---

### Typing Effect

**HTML:**
```html
<h1 class="typing-text" data-text="Bienvenido a CR Digital"></h1>
```

**JavaScript:**
```javascript
function typingEffect(element) {
    const text = element.getAttribute('data-text');
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Velocidad de tipeo
        }
    };
    
    type();
}

// Usar cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    const typingElements = document.querySelectorAll('.typing-text');
    typingElements.forEach(element => typingEffect(element));
});
```

---

## 📝 Formularios

### Formulario con Validación Avanzada

**JavaScript:**
```javascript
// Validación de email mejorada
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validación de teléfono
function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Validación en tiempo real
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', (e) => {
    const isValid = validateEmail(e.target.value);
    emailInput.classList.toggle('invalid', !isValid && e.target.value.length > 0);
    emailInput.classList.toggle('valid', isValid);
});

// Agregar clases CSS para feedback visual
```

**CSS para validación:**
```css
.form__input.valid {
    border-color: var(--accent-success);
}

.form__input.invalid {
    border-color: var(--accent-error);
}

.form__input.valid:focus {
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.form__input.invalid:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
```

---

## 🔗 Integraciones

### Google Analytics

```html
<!-- Agregar antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

### Facebook Pixel

```html
<!-- Agregar después de <body> -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
```

---

### Envío de Formulario a Email (con FormSubmit)

**HTML:**
```html
<form action="https://formsubmit.co/tu-email@gmail.com" method="POST">
    <input type="hidden" name="_subject" value="Nuevo contacto desde CR Digital">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://tudominio.com/gracias.html">
    
    <input type="text" name="name" placeholder="Nombre" required>
    <input type="email" name="email" placeholder="Email" required>
    <textarea name="message" placeholder="Mensaje" required></textarea>
    
    <button type="submit">Enviar</button>
</form>
```

---

## 🎯 Tips Finales

### Performance
- Minimiza CSS y JS en producción
- Usa lazy loading para imágenes
- Optimiza imágenes (WebP, compresión)
- Usa CDN para librerías

### SEO
- Usa etiquetas semánticas HTML5
- Agrega alt text a todas las imágenes
- Crea sitemap.xml
- Usa Schema markup

### Accesibilidad
- Usa aria-labels
- Mantén buen contraste de colores
- Navegación por teclado
- Textos descriptivos en links

---

**¿Necesitas más snippets?**  
Contáctanos: disewebtalle@gmail.com
