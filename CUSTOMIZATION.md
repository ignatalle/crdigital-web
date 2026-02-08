# 🎨 Guía de Personalización - CR Digital

Esta guía te ayudará a personalizar el sitio web según tus necesidades.

---

## 📝 Tabla de Contenidos

1. [Cambiar Información de Contacto](#1-cambiar-información-de-contacto)
2. [Modificar Colores de Marca](#2-modificar-colores-de-marca)
3. [Actualizar Contenido de Texto](#3-actualizar-contenido-de-texto)
4. [Agregar/Modificar Servicios](#4-agregarmodificar-servicios)
5. [Cambiar Imágenes](#5-cambiar-imágenes)
6. [Personalizar Redes Sociales](#6-personalizar-redes-sociales)
7. [Modificar el Footer](#7-modificar-el-footer)
8. [Agregar Nuevas Secciones](#8-agregar-nuevas-secciones)

---

## 1. Cambiar Información de Contacto

### WhatsApp

**Ubicaciones a actualizar:**

**A) En `index.html` (múltiples lugares):**

```html
<!-- Línea ~95 - Hero Section -->
<a href="https://wa.me/TU_NUMERO?text=Hola!%20Quiero%20información%20sobre%20sus%20servicios">

<!-- Línea ~380 - Formulario -->
<a href="https://wa.me/TU_NUMERO?text=Hola!%20Quiero%20información%20sobre%20sus%20servicios">

<!-- Línea ~500 - Botón flotante -->
<a href="https://wa.me/TU_NUMERO?text=Hola!%20Quiero%20información%20sobre%20sus%20servicios">

<!-- Línea ~550 - Footer -->
<a href="https://wa.me/TU_NUMERO">+54 380 454-1541</a>
```

**B) En `js/main.js` (línea ~85):**

```javascript
// Formato: código de país + número (sin espacios, sin +)
// Ejemplo: Argentina +54 380 456-1541 = 5493804561541
const whatsappNumber = '5493804561541'; // ⬅️ Tu número (ya actualizado)
```

**Formato correcto:**
- Argentina: `549` + código de área sin 0 + número
- Ejemplo: +54 380 456-1541 → `5493804561541`
- México: `52` + número completo
- España: `34` + número completo

### Email

**En `index.html`:**

```html
<!-- Línea ~560 - Footer -->
<a href="mailto:TU_EMAIL@gmail.com">
    TU_EMAIL@gmail.com
</a>
```

### Teléfono

```html
<!-- Línea ~555 - Footer -->
<a href="https://wa.me/TU_NUMERO" class="footer__link">
    +54 380 456-1541  <!-- ⬅️ CAMBIAR AQUÍ -->
</a>
```

---

## 2. Modificar Colores de Marca

**Archivo:** `css/styles.css` (líneas 1-30)

```css
:root {
  /* COLORES PRINCIPALES - Personaliza aquí */
  --primary-color: #00D9FF;        /* Cyan - Color principal */
  --primary-dark: #00A8CC;         /* Cyan oscuro */
  --primary-light: #33E0FF;        /* Cyan claro */
  
  --secondary-color: #D4AF37;      /* Dorado - Color secundario */
  --secondary-dark: #B8941F;       /* Dorado oscuro */
  --secondary-light: #E6C966;      /* Dorado claro */
  
  /* FONDOS */
  --bg-color: #0A0E27;             /* Fondo principal */
  --bg-secondary: #131829;         /* Fondo secundario */
  --bg-card: #1A1F3A;              /* Fondo de cards */
  
  /* TEXTOS */
  --text-color: #E8E9ED;           /* Texto principal */
  --text-secondary: #A0A3BD;       /* Texto secundario */
  --text-muted: #6E7191;           /* Texto desactivado */
}
```

**Ejemplo de cambio:**

Si quieres usar azul (#0066FF) y naranja (#FF6B35):

```css
:root {
  --primary-color: #0066FF;        /* Azul */
  --primary-dark: #0052CC;
  --primary-light: #3385FF;
  
  --secondary-color: #FF6B35;      /* Naranja */
  --secondary-dark: #E65525;
  --secondary-light: #FF8C5C;
}
```

**Herramientas útiles:**
- [Coolors.co](https://coolors.co/) - Generador de paletas
- [Adobe Color](https://color.adobe.com/) - Rueda de colores
- [Paletton](https://paletton.com/) - Esquemas de color

---

## 3. Actualizar Contenido de Texto

### Hero Section (Portada)

**Archivo:** `index.html` (líneas 70-100)

```html
<h1 class="hero__title">
    Transforma tu Negocio con 
    <span class="hero__title-gradient">Inteligencia Artificial</span>
    <!-- ⬆️ CAMBIAR TÍTULO AQUÍ -->
</h1>
<p class="hero__description">
    Soluciones digitales que hacen crecer tu empresa. 
    Innovación, tecnología y resultados reales.
    <!-- ⬆️ CAMBIAR DESCRIPCIÓN AQUÍ -->
</p>
```

### Títulos de Secciones

```html
<!-- Servicios (línea ~150) -->
<h2 class="section__title">
    Soluciones Digitales <span class="text-gradient">a tu Medida</span>
</h2>

<!-- Por qué elegirnos (línea ~280) -->
<h2 class="section__title">
    La Mejor Opción para <span class="text-gradient">tu Negocio</span>
</h2>

<!-- CTA (línea ~390) -->
<h2 class="cta__title">
    ¿Listo para <span class="text-gradient">Digitalizar tu Negocio?</span>
</h2>
```

---

## 4. Agregar/Modificar Servicios

### Modificar un Servicio Existente

**Archivo:** `index.html` (líneas 160-260)

```html
<div class="service__card" data-aos="fade-up" data-aos-delay="100">
    <div class="service__icon">
        <i class="fa-solid fa-globe"></i>  <!-- ⬅️ Cambiar ícono -->
    </div>
    <h3 class="service__title">Páginas Web & Landing Pages</h3>  <!-- ⬅️ Título -->
    <p class="service__description">
        Diseños modernos y responsivos optimizados para conversión con SEO incluido
        <!-- ⬅️ Descripción -->
    </p>
    <ul class="service__features">
        <li><i class="fa-solid fa-check"></i> Diseño responsive</li>
        <li><i class="fa-solid fa-check"></i> Optimización SEO</li>
        <li><i class="fa-solid fa-check"></i> Alta conversión</li>
        <li><i class="fa-solid fa-check"></i> Carga ultrarrápida</li>
        <!-- ⬆️ Agregar/quitar características -->
    </ul>
    <a href="#contact" class="service__link">
        Más información <i class="fa-solid fa-arrow-right"></i>
    </a>
</div>
```

### Agregar un Nuevo Servicio

Copia todo el bloque `<div class="service__card">...</div>` y pégalo después del último servicio:

```html
<!-- Nuevo servicio -->
<div class="service__card" data-aos="fade-up" data-aos-delay="500">
    <div class="service__icon">
        <i class="fa-solid fa-video"></i>  <!-- Ícono de video -->
    </div>
    <h3 class="service__title">Producción de Video</h3>
    <p class="service__description">
        Videos profesionales para redes sociales y publicidad digital
    </p>
    <ul class="service__features">
        <li><i class="fa-solid fa-check"></i> Videos para RRSS</li>
        <li><i class="fa-solid fa-check"></i> Edición profesional</li>
        <li><i class="fa-solid fa-check"></i> Motion graphics</li>
        <li><i class="fa-solid fa-check"></i> Guiones creativos</li>
    </ul>
    <a href="#contact" class="service__link">
        Más información <i class="fa-solid fa-arrow-right"></i>
    </a>
</div>
```

**Íconos disponibles:** [Font Awesome Icons](https://fontawesome.com/icons)

Ejemplos:
- `fa-video` - Video
- `fa-camera` - Fotografía
- `fa-envelope` - Email marketing
- `fa-bullhorn` - Publicidad
- `fa-mobile` - Apps móviles
- `fa-code` - Desarrollo

---

## 5. Cambiar Imágenes

### Logo

1. Coloca tu logo en: `assets/images/Logo.png`
2. Tamaño recomendado: 200x60px (PNG transparente)
3. Si tu archivo tiene otro nombre, actualiza en `index.html`:

```html
<!-- Línea ~65 - Header -->
<img src="./assets/images/TU_LOGO.png" alt="CR Digital Logo">

<!-- Línea ~520 - Footer -->
<img src="./assets/images/TU_LOGO.png" alt="CR Digital Logo">
```

### Imagen del Hero

**Archivo:** `index.html` (línea ~135)

```html
<img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
     alt="Marketing Digital con IA" 
     class="hero__img">
```

**Cambiar por tu propia imagen:**

```html
<img src="./assets/images/hero-image.jpg" 
     alt="Marketing Digital con IA" 
     class="hero__img">
```

**Fuentes de imágenes gratis:**
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)

### Favicon

1. Crea un favicon de 32x32px o 64x64px
2. Guárdalo como `favicon.png` en `assets/images/`
3. Ya está referenciado en `index.html` (línea ~35)

**Herramientas:**
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

---

## 6. Personalizar Redes Sociales

**Archivo:** `index.html` (líneas 530-550)

```html
<!-- Footer - Redes Sociales -->
<div class="footer__social">
    <a href="https://www.instagram.com/TU_USUARIO/" 
       target="_blank" 
       class="footer__social-link">
        <i class="fa-brands fa-instagram"></i>
    </a>
    <a href="https://www.facebook.com/TU_PAGINA/" 
       target="_blank" 
       class="footer__social-link">
        <i class="fa-brands fa-facebook"></i>
    </a>
    <a href="https://wa.me/TU_NUMERO" 
       target="_blank" 
       class="footer__social-link">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
    <a href="mailto:TU_EMAIL@gmail.com" 
       class="footer__social-link">
        <i class="fa-solid fa-envelope"></i>
    </a>
</div>
```

### Agregar Más Redes Sociales

```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/company/TU_EMPRESA/" 
   target="_blank" 
   class="footer__social-link">
    <i class="fa-brands fa-linkedin"></i>
</a>

<!-- Twitter/X -->
<a href="https://twitter.com/TU_USUARIO" 
   target="_blank" 
   class="footer__social-link">
    <i class="fa-brands fa-twitter"></i>
</a>

<!-- TikTok -->
<a href="https://www.tiktok.com/@TU_USUARIO" 
   target="_blank" 
   class="footer__social-link">
    <i class="fa-brands fa-tiktok"></i>
</a>

<!-- YouTube -->
<a href="https://www.youtube.com/@TU_CANAL" 
   target="_blank" 
   class="footer__social-link">
    <i class="fa-brands fa-youtube"></i>
</a>
```

---

## 7. Modificar el Footer

**Archivo:** `index.html` (líneas 510-590)

### Cambiar Descripción

```html
<p class="footer__description">
    Transformamos negocios con soluciones digitales innovadoras 
    y tecnología de Inteligencia Artificial.
    <!-- ⬆️ CAMBIAR AQUÍ -->
</p>
```

### Modificar Links Rápidos

```html
<div class="footer__group">
    <h3 class="footer__title">Enlaces Rápidos</h3>
    <ul class="footer__list">
        <li><a href="#home" class="footer__link">Inicio</a></li>
        <li><a href="#services" class="footer__link">Servicios</a></li>
        <li><a href="#ai" class="footer__link">IA</a></li>
        <li><a href="#contact" class="footer__link">Contacto</a></li>
        <!-- ⬆️ Agregar/quitar links -->
    </ul>
</div>
```

### Cambiar Copyright

```html
<p class="footer__copy">
    &copy; 2025 CR Digital. Todos los derechos reservados.
    <!-- ⬆️ CAMBIAR AÑO Y NOMBRE -->
</p>
```

---

## 8. Agregar Nuevas Secciones

### Ejemplo: Sección de Testimonios

Agrega esto después de la sección "Por qué elegirnos" (línea ~330):

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
            <!-- Testimonio 1 -->
            <div class="testimonial__card" data-aos="fade-up" data-aos-delay="100">
                <div class="testimonial__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="testimonial__text">
                    "Excelente servicio. El chatbot con IA que desarrollaron 
                    para mi negocio ha aumentado las ventas en un 40%."
                </p>
                <div class="testimonial__author">
                    <h4 class="testimonial__name">Juan Pérez</h4>
                    <span class="testimonial__role">CEO, Empresa XYZ</span>
                </div>
            </div>

            <!-- Agrega más testimonios aquí -->
        </div>
    </div>
</section>
```

**Estilos para testimonios** (agregar en `css/styles.css`):

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

## 🛠️ Herramientas Recomendadas

### Editores de Código
- **VS Code** (recomendado) - [code.visualstudio.com](https://code.visualstudio.com/)
- **Sublime Text** - [sublimetext.com](https://www.sublimetext.com/)
- **Atom** - [atom.io](https://atom.io/)

### Extensiones Útiles para VS Code
- **Live Server** - Preview en tiempo real
- **Prettier** - Formateo automático de código
- **Auto Rename Tag** - Renombra tags HTML automáticamente
- **Color Highlight** - Visualiza colores en el código

---

## 📞 ¿Necesitas Ayuda?

Si tienes dudas sobre cómo personalizar algo:

- **Email:** disewebtalle@gmail.com
- **WhatsApp:** +54 380 456-1541

---

**CR Digital** - Transformando negocios con tecnología
