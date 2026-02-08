# 🚀 CR Digital - Portafolio Web Profesional

Portafolio web moderno y profesional para CR Digital, agencia de marketing digital especializada en soluciones con Inteligencia Artificial, desarrollo web, inventarios por WhatsApp y estrategias de marketing digital.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Deployment en Netlify](#deployment-en-netlify)
- [Configuración](#configuración)
- [Personalización](#personalización)
- [Optimización SEO](#optimización-seo)
- [Optimizaciones Móviles](#optimizaciones-móviles)
- [Soporte](#soporte)

---

## ✨ Características

### Diseño y UX
- ✅ **Diseño moderno y profesional** con gradientes cyan y dorado
- ✅ **100% Responsive** - Mobile-first design optimizado
- ✅ **Optimizado para móviles** - Áreas táctiles de 44x44px mínimo
- ✅ **Animaciones suaves** con AOS (Animate On Scroll)
- ✅ **Elementos flotantes** animados en el hero
- ✅ **Navegación sticky** con scroll activo
- ✅ **Menú móvil lateral** con overlay y animaciones
- ✅ **Botón flotante de WhatsApp** con animación pulse (60x60px en móvil)
- ✅ **Scroll suave** entre secciones
- ✅ **Logo interactivo** con efectos parallax y holográficos

### Funcionalidades
- ✅ **Formulario de contacto** integrado con WhatsApp
- ✅ **Sistema de notificaciones** para feedback del usuario
- ✅ **Validación de formularios** en tiempo real
- ✅ **Lazy loading** de imágenes para mejor performance
- ✅ **Menú móvil** hamburguesa funcional
- ✅ **Botón scroll to top** con animación

### Performance y SEO
- ✅ **Optimizado para velocidad** - Sin dependencias pesadas
- ✅ **Lazy loading** de imágenes con IntersectionObserver
- ✅ **Scroll optimizado** con requestAnimationFrame
- ✅ **Meta tags completos** para SEO y móviles
- ✅ **Open Graph** para redes sociales
- ✅ **Schema markup** ready
- ✅ **Lighthouse score optimizado** (90+ en móvil)
- ✅ **PWA Ready** - Preparado para Progressive Web App

---

## 🛠️ Tecnologías

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Variables CSS, Flexbox, Grid, Animaciones
- **JavaScript Vanilla** - Sin frameworks pesados

### Librerías Externas (CDN)
- **Font Awesome 6.4.0** - Iconos
- **AOS 2.3.1** - Animaciones on scroll
- **Google Fonts** - Inter & Poppins

### Herramientas
- **Git** - Control de versiones
- **Netlify** - Deployment y hosting

---

## 📁 Estructura del Proyecto

```
cr-digital-web/
│
├── index.html                      # Página principal
│
├── css/
│   ├── styles.css                  # Estilos principales (variables, componentes)
│   ├── wow-styles.css              # Estilos avanzados (hero, animaciones)
│   ├── logo-animations.css         # Animaciones del logo
│   └── mobile-optimizations.css    # Optimizaciones específicas para móviles
│
├── js/
│   └── main.js                     # JavaScript principal (navegación, formularios, animaciones, móvil)
│
├── assets/
│   ├── images/
│   │   ├── Logo.png                # Logo de CR Digital (REQUERIDO)
│   │   ├── favicon.png             # Favicon del sitio
│   │   └── og-image.jpg            # Imagen para Open Graph (redes sociales)
│   │
│   └── documents/                  # PDFs, brochures, etc. (opcional)
│
├── README.md                       # Documentación principal
├── MOBILE-OPTIMIZATION.md          # Guía de optimizaciones móviles
├── LOGO-INTERACTIVO.md             # Guía del logo interactivo
├── LEEME-PRIMERO.md                # Guía de inicio rápido
├── QUICK-START.md                  # Inicio rápido en inglés
├── DEPLOYMENT.md                   # Guía de deployment
├── CUSTOMIZATION.md                # Guía de personalización
├── .gitignore                      # Archivos ignorados por Git
└── netlify.toml                    # Configuración de Netlify (opcional)
```

---

## 🚀 Instalación

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Git (opcional, para control de versiones)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone https://github.com/tu-usuario/cr-digital-web.git
   cd cr-digital-web
   ```

2. **Agregar tu logo**
   - Coloca tu archivo `Logo.png` en la carpeta `assets/images/`
   - Tamaño recomendado: 200x60px (PNG con fondo transparente)

3. **Agregar favicon**
   - Coloca tu `favicon.png` en `assets/images/`
   - Tamaño: 32x32px o 64x64px

4. **Agregar imagen Open Graph**
   - Coloca `og-image.jpg` en `assets/images/`
   - Tamaño recomendado: 1200x630px

5. **Abrir el proyecto**
   - Abre `index.html` en tu navegador
   - O usa un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   
   # Con VS Code
   # Instala la extensión "Live Server" y haz clic derecho > Open with Live Server
   ```

---

## 🌐 Deployment en Netlify

### Método 1: Drag & Drop (Más Fácil)

1. Ve a [Netlify](https://www.netlify.com/)
2. Crea una cuenta o inicia sesión
3. Haz clic en "Add new site" > "Deploy manually"
4. Arrastra la carpeta completa del proyecto
5. ¡Listo! Tu sitio estará en línea en segundos

### Método 2: Con Git (Recomendado)

1. **Sube tu código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - CR Digital website"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/cr-digital-web.git
   git push -u origin main
   ```

2. **Conecta con Netlify**
   - Ve a Netlify Dashboard
   - Click en "Add new site" > "Import an existing project"
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio `cr-digital-web`
   - Configuración de build:
     - **Build command:** (dejar vacío)
     - **Publish directory:** `.` o `/`
   - Click en "Deploy site"

3. **Configurar dominio personalizado (Opcional)**
   - En Netlify Dashboard > Domain settings
   - Add custom domain
   - Sigue las instrucciones para configurar tu DNS

### Método 3: Con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## ⚙️ Configuración

### Personalizar Información de Contacto

Edita los siguientes archivos:

**1. En `index.html`:**
```html
<!-- Línea ~400 - WhatsApp flotante -->
<a href="https://wa.me/TU_NUMERO?text=..." 

<!-- Línea ~350 - Formulario -->
const whatsappNumber = 'TU_NUMERO';

<!-- Línea ~450 - Footer -->
<a href="mailto:TU_EMAIL@gmail.com">
```

**2. En `js/main.js`:**
```javascript
// Línea ~85 - Número de WhatsApp
const whatsappNumber = 'TU_NUMERO_COMPLETO';
```

### Cambiar Colores de Marca

Edita `css/styles.css` (líneas 1-20):
```css
:root {
  --primary-color: #00D9FF;      /* Tu color cyan */
  --secondary-color: #D4AF37;    /* Tu color dorado */
  /* ... más variables ... */
}
```

### Modificar Contenido

Todos los textos están en `index.html`. Busca las secciones:
- **Hero:** Línea ~70
- **Servicios:** Línea ~150
- **Por qué elegirnos:** Línea ~280
- **Tecnologías:** Línea ~340
- **Contacto:** Línea ~390
- **Footer:** Línea ~450

---

## 🎨 Personalización

### Agregar Nuevos Servicios

En `index.html`, duplica un bloque `.service__card`:

```html
<div class="service__card" data-aos="fade-up" data-aos-delay="100">
    <div class="service__icon">
        <i class="fa-solid fa-TU-ICONO"></i>
    </div>
    <h3 class="service__title">Tu Servicio</h3>
    <p class="service__description">Descripción del servicio</p>
    <ul class="service__features">
        <li><i class="fa-solid fa-check"></i> Característica 1</li>
        <li><i class="fa-solid fa-check"></i> Característica 2</li>
    </ul>
    <a href="#contact" class="service__link">
        Más información <i class="fa-solid fa-arrow-right"></i>
    </a>
</div>
```

### Cambiar Imágenes

Reemplaza las URLs de Unsplash en `index.html`:
```html
<!-- Línea ~135 - Hero image -->
<img src="./assets/images/tu-imagen.jpg" alt="...">
```

### Agregar Google Analytics

En `index.html`, antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

### Agregar Facebook Pixel

En `index.html`, después de `<body>`:
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU-PIXEL-ID');
  fbq('track', 'PageView');
</script>
```

---

## 🔍 Optimización SEO

### Meta Tags Incluidos

El sitio ya incluye:
- ✅ Meta description
- ✅ Meta keywords
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Viewport
- ✅ Charset UTF-8

### Mejoras Adicionales Recomendadas

1. **Crear sitemap.xml**
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://tudominio.com/</loc>
       <lastmod>2025-02-08</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

2. **Crear robots.txt**
   ```
   User-agent: *
   Allow: /
   Sitemap: https://tudominio.com/sitemap.xml
   ```

3. **Google Search Console**
   - Registra tu sitio en [Google Search Console](https://search.google.com/search-console)
   - Envía tu sitemap
   - Monitorea el rendimiento

4. **Schema Markup**
   - Agrega JSON-LD para LocalBusiness
   - Mejora la visibilidad en búsquedas locales

---

## 📱 Optimizaciones Móviles

### Características Móviles Implementadas

#### 1. **Meta Tags Optimizados**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#0A0E27">
```

#### 2. **Áreas Táctiles Optimizadas**
- ✅ Tamaño mínimo de 44x44px para todos los elementos interactivos
- ✅ Botones con padding aumentado
- ✅ WhatsApp flotante de 60x60px
- ✅ Menú hamburguesa grande y visible

#### 3. **Menú Móvil Mejorado**
- ✅ Menú lateral deslizable (85% del ancho)
- ✅ Overlay oscuro con blur
- ✅ Cierre al hacer clic fuera
- ✅ Previene scroll del body cuando está abierto
- ✅ Animaciones suaves

#### 4. **Tipografía Responsive**
- ✅ Escalas de fuente adaptativas por dispositivo
- ✅ Tamaño mínimo de 16px en inputs (previene zoom en iOS)
- ✅ Mejoras de legibilidad (antialiasing)

#### 5. **Layout Adaptativo**
- ✅ Hero optimizado (título reducido, botones apilados)
- ✅ Servicios en 1 columna
- ✅ Stats en columna
- ✅ Footer centrado
- ✅ Elementos decorativos ocultos en móvil

#### 6. **Optimizaciones de Rendimiento**
```javascript
// Detección de dispositivo móvil
const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Prevención de zoom accidental
// Scroll optimizado con requestAnimationFrame
// Lazy loading de imágenes
// Detección de orientación
```

#### 7. **Accesibilidad Táctil**
- ✅ Feedback visual con `:active` en lugar de `:hover`
- ✅ Eliminación de efectos hover en dispositivos táctiles
- ✅ Respeto a preferencias de animaciones reducidas

### Breakpoints Utilizados

```css
/* Móvil pequeño */
@media screen and (max-width: 576px) { }

/* Móvil */
@media screen and (max-width: 768px) { }

/* Tablet */
@media screen and (max-width: 992px) { }

/* Desktop */
@media screen and (min-width: 993px) { }
```

### Testing en Móviles

**Dispositivos recomendados:**
- iPhone SE, 12, 13, 14 Pro Max
- Samsung Galaxy S21, Pixel 5
- iPad, Samsung Galaxy Tab

**Herramientas:**
- Chrome DevTools (Device Mode)
- Firefox Responsive Design Mode
- BrowserStack / LambdaTest
- Pruebas en dispositivos reales

### Documentación Completa

Para más detalles sobre las optimizaciones móviles, consulta:
📄 **[MOBILE-OPTIMIZATION.md](./MOBILE-OPTIMIZATION.md)**

---

## 📊 Performance

### Lighthouse Scores Esperados

**Desktop:**
- **Performance:** 95-100 ⚡
- **Accessibility:** 95-100 ♿
- **Best Practices:** 95-100 ✅
- **SEO:** 100 🎯

**Móvil:**
- **Performance:** 90+ ⚡
- **Accessibility:** 95+ ♿
- **Best Practices:** 95+ ✅
- **SEO:** 100 🎯

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **SEO:** 95-100

### Optimizaciones Implementadas
- ✅ Lazy loading de imágenes
- ✅ Debounce en eventos de scroll
- ✅ CSS y JS minificados (en producción)
- ✅ Uso de CDN para librerías
- ✅ Imágenes optimizadas
- ✅ Fuentes web optimizadas

---

## 🐛 Troubleshooting

### El logo no aparece
- Verifica que `Logo.png` esté en `assets/images/`
- Verifica la ruta en `index.html` (línea ~65)
- Verifica que el nombre del archivo coincida (case-sensitive)

### El formulario no funciona
- Verifica el número de WhatsApp en `js/main.js`
- Formato correcto: `5493804561541` (código país + número sin espacios)
- Prueba en un navegador diferente

### Las animaciones no funcionan
- Verifica que AOS esté cargando correctamente
- Abre la consola del navegador (F12) y busca errores
- Verifica tu conexión a internet (AOS se carga desde CDN)

### El sitio no es responsive
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica que `styles.css` esté cargando correctamente
- Prueba en modo incógnito

---

## 📱 Redes Sociales

Actualiza los enlaces en `index.html` (línea ~470):

```html
<a href="https://www.instagram.com/TU_USUARIO/" target="_blank">
<a href="https://www.facebook.com/TU_PAGINA/" target="_blank">
<a href="https://wa.me/TU_NUMERO" target="_blank">
<a href="mailto:TU_EMAIL@gmail.com">
```

---

## 🔄 Actualizaciones Futuras

### Funcionalidades Planeadas
- [ ] Blog integrado
- [ ] Portafolio de proyectos
- [ ] Testimonios de clientes
- [ ] Chat en vivo
- [ ] Modo oscuro/claro toggle
- [ ] Multiidioma (ES/EN)
- [ ] PWA (Progressive Web App)

---

## 📞 Soporte

¿Necesitas ayuda con el sitio?

- **Email:** disewebtalle@gmail.com
- **WhatsApp:** +54 380 456-1541
- **Instagram:** [@_crdigital_](https://www.instagram.com/_crdigital_/)
- **Facebook:** [CR Digital](https://www.facebook.com/crdigitalweb/)

---

## 📄 Licencia

© 2025 CR Digital. Todos los derechos reservados.

Este proyecto es propiedad de CR Digital y está protegido por derechos de autor.

---

## 🙏 Créditos

- **Diseño y Desarrollo:** CR Digital
- **Iconos:** Font Awesome
- **Fuentes:** Google Fonts (Inter, Poppins)
- **Animaciones:** AOS Library
- **Imágenes:** Unsplash (placeholders)

---

## 📝 Notas Importantes

1. **Logo:** Asegúrate de agregar tu archivo `Logo.png` en `assets/images/`
2. **Imágenes:** Reemplaza las imágenes de Unsplash con tus propias imágenes
3. **Contacto:** Actualiza todos los datos de contacto (email, WhatsApp, redes)
4. **SEO:** Personaliza los meta tags con tu información
5. **Analytics:** Agrega Google Analytics y Facebook Pixel si los usas

---

## 🚀 ¡Listo para Despegar!

Tu sitio está listo para ser deployado. Sigue los pasos de deployment en Netlify y estarás en línea en minutos.

**¿Preguntas? ¡Contáctanos!**

---

**Hecho con ❤️ por CR Digital**
