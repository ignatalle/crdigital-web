# 📱 Checklist de Testing Móvil - CR Digital

## 🎯 Guía Completa para Probar el Sitio en Móviles

---

## ✅ CHECKLIST GENERAL

### 📐 Viewport y Diseño Responsive
- [ ] El sitio se ve bien en 320px de ancho (iPhone SE)
- [ ] El sitio se ve bien en 375px de ancho (iPhone 12/13)
- [ ] El sitio se ve bien en 390px de ancho (iPhone 14)
- [ ] El sitio se ve bien en 430px de ancho (iPhone 14 Pro Max)
- [ ] El sitio se ve bien en 360px de ancho (Android común)
- [ ] El sitio se ve bien en 768px de ancho (iPad)
- [ ] No hay scroll horizontal en ningún tamaño
- [ ] Todos los elementos están dentro del viewport
- [ ] Las imágenes no se salen de sus contenedores

---

## 🍔 Menú de Navegación

### Menú Hamburguesa
- [ ] El icono hamburguesa es visible (esquina superior derecha)
- [ ] El icono es lo suficientemente grande (44x44px mínimo)
- [ ] Al hacer tap, el menú se abre desde la derecha
- [ ] El menú tiene un overlay oscuro detrás
- [ ] El menú ocupa 85% del ancho de la pantalla
- [ ] La animación de apertura es suave
- [ ] El botón de cerrar (X) es visible y grande
- [ ] Al hacer tap en X, el menú se cierra
- [ ] Al hacer tap fuera del menú (en el overlay), se cierra
- [ ] Al hacer tap en un link del menú, se cierra automáticamente
- [ ] El scroll del body está bloqueado cuando el menú está abierto
- [ ] El scroll se restaura cuando el menú se cierra

### Links del Menú
- [ ] Todos los links son fáciles de tocar (44x44px)
- [ ] Hay suficiente espacio entre links
- [ ] Los links tienen feedback visual al tocarlos
- [ ] El scroll a las secciones es suave

---

## 🦸 Hero Section

### Contenido
- [ ] El título es legible (no muy pequeño ni muy grande)
- [ ] El subtítulo es legible
- [ ] El badge superior se ve bien
- [ ] Los botones son grandes y fáciles de tocar
- [ ] Los botones están apilados verticalmente
- [ ] Cada botón ocupa el ancho completo
- [ ] Los stats están en columna
- [ ] Los números de stats son legibles

### Botones
- [ ] Botón "Ver Servicios" es fácil de tocar
- [ ] Botón "WhatsApp" es fácil de tocar
- [ ] Los botones tienen feedback visual al tocarlos
- [ ] Los botones funcionan correctamente

### Elementos Ocultos
- [ ] Las partículas de fondo NO se ven (optimización)
- [ ] El dashboard mockup NO se ve (optimización)
- [ ] Los elementos flotantes NO se ven (optimización)

---

## 💼 Sección de Servicios

### Tarjetas
- [ ] Las tarjetas están en 1 columna
- [ ] Cada tarjeta es fácil de leer
- [ ] Los iconos son del tamaño correcto (60px)
- [ ] El título de cada servicio es legible
- [ ] La descripción es legible
- [ ] Las features (bullets) son legibles
- [ ] Hay suficiente espacio entre tarjetas
- [ ] Las tarjetas tienen feedback visual al tocarlas

### Trust Indicators
- [ ] Los indicadores están apilados verticalmente
- [ ] Cada indicador es legible
- [ ] Los iconos son visibles

---

## 🎨 Sección de Proceso

### Timeline
- [ ] Los pasos están en 1 columna
- [ ] Los números de paso son visibles (60px)
- [ ] Los títulos son legibles
- [ ] Las descripciones son legibles
- [ ] Las líneas conectoras NO se ven (ocultas en móvil)
- [ ] Todo está centrado correctamente

### CTA del Proceso
- [ ] El título es legible
- [ ] El botón es grande y fácil de tocar
- [ ] El botón funciona correctamente

---

## 📝 Formulario de Contacto

### Campos
- [ ] Todos los inputs son fáciles de tocar (48px mínimo)
- [ ] Los inputs NO hacen zoom automático al enfocar (iOS)
- [ ] El texto dentro de los inputs es legible (16px mínimo)
- [ ] Los placeholders son visibles
- [ ] El textarea tiene altura suficiente (120px)
- [ ] Los bordes de los inputs son visibles
- [ ] Los estados :focus son claros

### Botón de Envío
- [ ] El botón es grande (56px de altura)
- [ ] El botón ocupa el ancho completo
- [ ] El botón es fácil de tocar
- [ ] El botón tiene feedback visual
- [ ] El formulario funciona correctamente
- [ ] Las notificaciones de éxito/error son visibles

---

## 💬 Botón de WhatsApp Flotante

### Posición y Tamaño
- [ ] El botón es visible en la esquina inferior derecha
- [ ] El botón es grande (60x60px)
- [ ] El botón no tapa contenido importante
- [ ] El botón está a 20px del borde derecho
- [ ] El botón está a 20px del borde inferior

### Funcionalidad
- [ ] El botón es fácil de tocar
- [ ] El botón tiene animación de pulso
- [ ] Al tocar, abre WhatsApp correctamente
- [ ] El número de WhatsApp es correcto (+54 9 380 456-1541)
- [ ] El mensaje pre-rellenado aparece

---

## 🦶 Footer

### Layout
- [ ] El contenido está en 1 columna
- [ ] Todo está centrado
- [ ] El logo es visible (40px)
- [ ] Los links son fáciles de tocar
- [ ] Los iconos sociales son grandes (44x44px)
- [ ] Hay suficiente espacio entre elementos

### Links y Redes
- [ ] Todos los links funcionan
- [ ] Instagram abre correctamente
- [ ] Facebook abre correctamente
- [ ] El email es correcto
- [ ] El WhatsApp es correcto

---

## 🎭 Logo Interactivo

### Navbar Logo
- [ ] El logo es visible (32px en móvil)
- [ ] El logo tiene efecto glow sutil
- [ ] Al tocar el logo, tiene efecto ripple
- [ ] Al tocar el logo, hace scroll al inicio
- [ ] El logo NO tiene efectos parallax en móvil (solo desktop)

### Footer Logo
- [ ] El logo es visible (40px)
- [ ] El logo tiene efecto hover simple
- [ ] No hay elementos que interfieran

---

## 🔄 Orientación del Dispositivo

### Portrait (Vertical)
- [ ] Todo se ve bien en modo vertical
- [ ] Los botones están apilados
- [ ] Las tarjetas están en 1 columna
- [ ] El menú funciona correctamente

### Landscape (Horizontal)
- [ ] Todo se ve bien en modo horizontal
- [ ] El hero es más compacto
- [ ] Los botones pueden estar en fila
- [ ] Los stats pueden estar en 2 columnas
- [ ] No hay elementos cortados

---

## ⚡ Performance y Velocidad

### Carga Inicial
- [ ] El sitio carga en menos de 3 segundos
- [ ] El logo aparece rápidamente
- [ ] No hay flash de contenido sin estilo (FOUC)
- [ ] Las fuentes cargan correctamente

### Scroll
- [ ] El scroll es suave y fluido
- [ ] No hay lag al hacer scroll
- [ ] Las animaciones no causan lag
- [ ] El menú sticky funciona bien

### Animaciones
- [ ] Las animaciones AOS funcionan
- [ ] Las animaciones no son molestas
- [ ] Las animaciones no causan problemas de rendimiento

---

## 🎯 Áreas Táctiles

### Tamaño Mínimo (44x44px)
- [ ] Todos los botones son lo suficientemente grandes
- [ ] Todos los links son lo suficientemente grandes
- [ ] Los iconos son lo suficientemente grandes
- [ ] El menú hamburguesa es lo suficientemente grande
- [ ] El botón de cerrar menú es lo suficientemente grande

### Espaciado
- [ ] Hay suficiente espacio entre elementos táctiles
- [ ] No hay elementos muy juntos que causen toques accidentales
- [ ] Los botones tienen padding adecuado

---

## 🔍 Zoom y Accesibilidad

### Zoom
- [ ] El sitio permite zoom (hasta 5x)
- [ ] Los inputs NO hacen zoom automático (iOS)
- [ ] El zoom manual funciona correctamente
- [ ] El contenido no se rompe al hacer zoom

### Accesibilidad
- [ ] Los colores tienen suficiente contraste
- [ ] Los textos son legibles
- [ ] Los botones tienen estados :focus visibles
- [ ] Los links tienen estados :active visibles

---

## 🌐 Navegadores Móviles

### Safari (iOS)
- [ ] El sitio se ve bien en Safari
- [ ] El menú funciona en Safari
- [ ] Los inputs no hacen zoom automático
- [ ] Las animaciones funcionan
- [ ] El scroll es suave

### Chrome (Android)
- [ ] El sitio se ve bien en Chrome
- [ ] El menú funciona en Chrome
- [ ] Los botones funcionan
- [ ] Las animaciones funcionan
- [ ] El scroll es suave

### Firefox (Android)
- [ ] El sitio se ve bien en Firefox
- [ ] Todas las funcionalidades funcionan

### Samsung Internet
- [ ] El sitio se ve bien en Samsung Internet
- [ ] Todas las funcionalidades funcionan

---

## 🔗 Enlaces y Funcionalidades

### Enlaces Externos
- [ ] Instagram abre correctamente
- [ ] Facebook abre correctamente
- [ ] WhatsApp abre la app o web.whatsapp.com
- [ ] El email abre el cliente de correo

### Navegación Interna
- [ ] Los links del menú funcionan
- [ ] El scroll a secciones es suave
- [ ] El botón "Ver Servicios" funciona
- [ ] El logo hace scroll al inicio

---

## 📊 Testing con Herramientas

### Chrome DevTools
- [ ] Probar en Device Mode (F12 → Ctrl+Shift+M)
- [ ] Probar iPhone SE (375x667)
- [ ] Probar iPhone 12/13 (390x844)
- [ ] Probar Pixel 5 (393x851)
- [ ] Probar iPad (768x1024)
- [ ] Ejecutar Lighthouse en modo móvil
- [ ] Verificar score > 90 en Performance
- [ ] Verificar score > 95 en Accessibility
- [ ] Probar en modo 3G (Network throttling)

### Lighthouse Móvil
- [ ] Performance: > 90
- [ ] Accessibility: > 95
- [ ] Best Practices: > 95
- [ ] SEO: 100
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

---

## 📱 Testing en Dispositivos Reales

### iPhone
- [ ] Probar en iPhone real (cualquier modelo)
- [ ] Verificar que todo funcione
- [ ] Probar en Safari
- [ ] Probar en Chrome para iOS
- [ ] Agregar a pantalla de inicio (PWA)
- [ ] Verificar barra de estado

### Android
- [ ] Probar en Android real (cualquier modelo)
- [ ] Verificar que todo funcione
- [ ] Probar en Chrome
- [ ] Probar en Firefox
- [ ] Probar en Samsung Internet
- [ ] Agregar a pantalla de inicio (PWA)

---

## 🐛 Problemas Comunes a Verificar

### Layout
- [ ] No hay scroll horizontal
- [ ] No hay elementos cortados
- [ ] No hay texto que se salga de contenedores
- [ ] Las imágenes no están distorsionadas

### Interacción
- [ ] Los botones responden al primer toque
- [ ] No hay doble tap accidental
- [ ] El menú no se queda abierto
- [ ] El scroll no está bloqueado

### Performance
- [ ] No hay lag al hacer scroll
- [ ] Las animaciones son fluidas
- [ ] El sitio no se congela
- [ ] La carga es rápida

---

## ✅ CHECKLIST FINAL

Antes de dar por terminado el testing móvil:

- [ ] He probado en al menos 2 dispositivos reales diferentes
- [ ] He probado en al menos 2 navegadores móviles diferentes
- [ ] He probado todas las funcionalidades principales
- [ ] He verificado el Lighthouse score en móvil
- [ ] He probado en conexión lenta (3G)
- [ ] He probado en ambas orientaciones (portrait y landscape)
- [ ] He verificado que no hay errores en la consola
- [ ] He probado el formulario de contacto
- [ ] He probado el botón de WhatsApp
- [ ] He probado el menú hamburguesa
- [ ] Todo funciona correctamente ✅

---

## 📞 ¿Encontraste un problema?

Si encuentras algún problema durante el testing:

1. **Documenta el problema:**
   - Dispositivo y modelo
   - Navegador y versión
   - Descripción del problema
   - Screenshot si es posible

2. **Reporta:**
   - Email: disewebtalle@gmail.com
   - WhatsApp: +54 9 380 456-1541

---

## 🎉 ¡Testing Completado!

Si has marcado todos los checkboxes, ¡felicidades! 🎊

Tu sitio está completamente optimizado y probado para móviles.

**Próximos pasos:**
1. Deploy a Netlify
2. Probar en producción
3. Monitorear con Google Analytics
4. Recopilar feedback de usuarios reales

---

**Última actualización:** Febrero 2026  
**Versión:** 1.0  
**Autor:** CR Digital Team
