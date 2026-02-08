# 📱 CÓMO PROBAR EL SITIO EN MÓVIL

## 🎯 Guía Rápida y Visual

---

## 🚀 MÉTODO 1: Chrome DevTools (Más Rápido)

### Paso 1: Abrir el Sitio
```
1. Abre index.html en Chrome
2. Presiona F12 (abrir DevTools)
3. Presiona Ctrl+Shift+M (Device Mode)
```

### Paso 2: Seleccionar Dispositivo
```
En la barra superior, selecciona:
- iPhone SE (375x667) - Móvil pequeño
- iPhone 12/13 (390x844) - Móvil estándar
- iPhone 14 Pro Max (430x932) - Móvil grande
- Pixel 5 (393x851) - Android
- iPad (768x1024) - Tablet
```

### Paso 3: Probar Funcionalidades
```
✅ Menú hamburguesa (clic en las 3 líneas)
✅ Scroll suave
✅ Botones (deben ser grandes y fáciles de tocar)
✅ Formulario (no debe hacer zoom al enfocar)
✅ WhatsApp flotante
✅ Logo interactivo
```

### Paso 4: Ejecutar Lighthouse
```
1. En DevTools, ir a la pestaña "Lighthouse"
2. Seleccionar:
   - Device: Mobile
   - Categories: Todas
3. Clic en "Analyze page load"
4. Verificar scores > 90
```

---

## 📱 MÉTODO 2: Dispositivo Real (Recomendado)

### Opción A: Con Live Server (VS Code)

#### Paso 1: Instalar Live Server
```
1. Abrir VS Code
2. Ir a Extensions (Ctrl+Shift+X)
3. Buscar "Live Server"
4. Instalar
```

#### Paso 2: Iniciar Servidor
```
1. Abrir el proyecto en VS Code
2. Clic derecho en index.html
3. Seleccionar "Open with Live Server"
4. El sitio se abre en http://localhost:5500
```

#### Paso 3: Obtener IP Local
**Windows:**
```powershell
ipconfig
```
Busca "Dirección IPv4" (ejemplo: 192.168.1.100)

**Mac/Linux:**
```bash
ifconfig
```
Busca "inet" (ejemplo: 192.168.1.100)

#### Paso 4: Abrir en Móvil
```
1. Conecta tu móvil a la misma red WiFi
2. Abre el navegador en el móvil
3. Escribe: http://[TU-IP]:5500
   Ejemplo: http://192.168.1.100:5500
4. ¡Listo! Prueba el sitio
```

### Opción B: Con Python (Si tienes Python instalado)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre en móvil: `http://[TU-IP]:8000`

---

## 🔍 QUÉ PROBAR EN MÓVIL

### 1. 🍔 Menú de Navegación
```
✅ Toca el icono hamburguesa (esquina superior derecha)
✅ El menú debe deslizarse desde la derecha
✅ Debe aparecer un overlay oscuro
✅ Toca la X para cerrar
✅ Toca fuera del menú (debe cerrarse)
✅ Toca un link (debe navegar y cerrarse)
```

### 2. 👆 Áreas Táctiles
```
✅ Todos los botones deben ser fáciles de tocar
✅ No debes necesitar precisión extrema
✅ Debe haber espacio entre elementos
✅ Los botones deben tener feedback visual al tocar
```

### 3. 📝 Formulario
```
✅ Toca un input
✅ NO debe hacer zoom automático (iOS)
✅ El teclado debe aparecer correctamente
✅ Puedes escribir sin problemas
✅ El botón de envío es grande y fácil de tocar
```

### 4. 💬 WhatsApp Flotante
```
✅ El botón verde debe ser visible (esquina inferior derecha)
✅ Debe ser grande (60x60px)
✅ Debe tener animación de pulso
✅ Al tocar, debe abrir WhatsApp
✅ Debe aparecer el mensaje pre-rellenado
```

### 5. 🎨 Diseño General
```
✅ Todo el contenido debe estar dentro de la pantalla
✅ NO debe haber scroll horizontal
✅ Las imágenes no deben salirse
✅ Los textos deben ser legibles
✅ Los colores deben verse bien
```

### 6. 📐 Orientación
```
✅ Gira el móvil a horizontal (landscape)
✅ El sitio debe adaptarse correctamente
✅ Gira a vertical (portrait)
✅ El sitio debe verse bien
```

---

## ⚡ PRUEBAS DE RENDIMIENTO

### En Chrome DevTools

#### 1. Simular Conexión Lenta
```
1. Abrir DevTools (F12)
2. Ir a pestaña "Network"
3. Seleccionar "Slow 3G" o "Fast 3G"
4. Recargar página (F5)
5. Verificar que carga en < 5 segundos
```

#### 2. Lighthouse Móvil
```
1. Abrir DevTools (F12)
2. Ir a pestaña "Lighthouse"
3. Seleccionar:
   - Device: Mobile
   - Categories: Performance, Accessibility, Best Practices, SEO
4. Clic en "Analyze page load"
5. Esperar resultados
6. Verificar:
   ✅ Performance > 90
   ✅ Accessibility > 95
   ✅ Best Practices > 95
   ✅ SEO = 100
```

#### 3. Core Web Vitals
```
En el reporte de Lighthouse, verificar:
✅ LCP (Largest Contentful Paint) < 2.5s
✅ FID (First Input Delay) < 100ms
✅ CLS (Cumulative Layout Shift) < 0.1
```

---

## 🐛 PROBLEMAS COMUNES Y SOLUCIONES

### Problema 1: "No puedo conectarme desde el móvil"
```
Solución:
1. Verifica que móvil y PC estén en la misma red WiFi
2. Verifica que el firewall no bloquee el puerto
3. En Windows:
   - Panel de Control → Firewall
   - Permitir app → Live Server
4. Intenta con la IP correcta (ipconfig)
```

### Problema 2: "El menú no se abre"
```
Solución:
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que main.js esté cargado
4. Verifica que no haya errores de JavaScript
```

### Problema 3: "Los inputs hacen zoom en iPhone"
```
Solución:
Ya está solucionado en el código:
- Los inputs tienen font-size: 16px
- Esto previene el zoom automático en iOS
```

### Problema 4: "El sitio se ve cortado"
```
Solución:
1. Verifica el viewport meta tag en index.html
2. Debe tener: width=device-width, initial-scale=1.0
3. Ya está implementado correctamente
```

### Problema 5: "Las animaciones van lentas"
```
Solución:
1. Es normal en dispositivos antiguos
2. Las animaciones se reducen automáticamente
3. Los elementos pesados se ocultan en móvil
```

---

## 📊 CHECKLIST RÁPIDO

Antes de dar por terminado el testing:

- [ ] Probado en Chrome DevTools (Device Mode)
- [ ] Probado en al menos 1 dispositivo real
- [ ] Menú hamburguesa funciona
- [ ] Formulario no hace zoom (iOS)
- [ ] WhatsApp flotante funciona
- [ ] No hay scroll horizontal
- [ ] Lighthouse móvil > 90 en Performance
- [ ] Probado en orientación portrait y landscape
- [ ] Todos los botones son fáciles de tocar
- [ ] El sitio carga rápido (< 3 segundos)

---

## 🎯 DISPOSITIVOS PRIORITARIOS

### Alta Prioridad (Probar Sí o Sí)
```
✅ iPhone 12/13 (390x844) - Más común
✅ Samsung Galaxy S21 (360x800) - Android común
✅ Chrome DevTools con throttling 3G
```

### Media Prioridad (Si es Posible)
```
⚪ iPhone SE (375x667) - Pantalla pequeña
⚪ iPhone 14 Pro Max (430x932) - Pantalla grande
⚪ iPad (768x1024) - Tablet
```

### Baja Prioridad (Opcional)
```
⚪ Dispositivos Android antiguos
⚪ Tablets Android
⚪ Dispositivos con pantallas muy grandes
```

---

## 🌐 NAVEGADORES A PROBAR

### Móvil iOS
```
1. Safari (Obligatorio)
2. Chrome para iOS (Recomendado)
```

### Móvil Android
```
1. Chrome (Obligatorio)
2. Firefox (Recomendado)
3. Samsung Internet (Si tienes Samsung)
```

---

## 📸 CAPTURAS DE PANTALLA

### Tomar Screenshots para Documentación
```
1. Abre el sitio en móvil
2. Navega a cada sección
3. Toma screenshots de:
   - Hero section
   - Menú abierto
   - Servicios
   - Formulario
   - Footer
4. Guarda en carpeta assets/screenshots/
```

---

## 🎓 RECURSOS ADICIONALES

### Herramientas Online (Sin Instalar Nada)
```
1. Responsively App
   https://responsively.app/
   - Prueba múltiples dispositivos a la vez

2. BrowserStack
   https://www.browserstack.com/
   - Prueba en dispositivos reales (online)

3. LambdaTest
   https://www.lambdatest.com/
   - Testing cross-browser
```

### Extensiones de Chrome
```
1. Mobile Simulator
2. Responsive Viewer
3. Window Resizer
```

---

## 💡 TIPS PRO

### Tip 1: Usa el Modo Responsive de Chrome
```
Ctrl+Shift+M → Responsive
Arrastra las esquinas para probar diferentes tamaños
```

### Tip 2: Simula Touch Events
```
En DevTools:
Settings (F1) → Devices → Add custom device
Marca "Mobile" y "Touch"
```

### Tip 3: Prueba en Modo Incógnito
```
Ctrl+Shift+N (Chrome)
Así evitas problemas de caché
```

### Tip 4: Usa la Consola Móvil
```
En dispositivo real:
- iOS: Safari → Develop → iPhone
- Android: Chrome → Inspect Devices
```

---

## 🎉 ¡LISTO PARA PROBAR!

### Flujo Recomendado:
```
1. Prueba rápida en Chrome DevTools (5 min)
2. Ejecuta Lighthouse (2 min)
3. Prueba en tu móvil personal (10 min)
4. Pide a un amigo que pruebe (5 min)
5. Corrige problemas encontrados
6. Repite hasta que todo funcione perfecto
```

### Tiempo Total Estimado:
```
⏱️ Testing básico: 15-20 minutos
⏱️ Testing completo: 30-45 minutos
⏱️ Testing exhaustivo: 1-2 horas
```

---

## 📞 ¿NECESITAS AYUDA?

Si encuentras problemas durante el testing:

**Email:** disewebtalle@gmail.com  
**WhatsApp:** +54 9 380 456-1541  
**Instagram:** [@_crdigital_](https://www.instagram.com/_crdigital_/)

---

## ✅ CHECKLIST FINAL

Marca cuando completes cada paso:

- [ ] Leí esta guía completa
- [ ] Probé en Chrome DevTools
- [ ] Ejecuté Lighthouse móvil
- [ ] Probé en mi móvil personal
- [ ] Probé el menú hamburguesa
- [ ] Probé el formulario
- [ ] Probé el botón de WhatsApp
- [ ] Verifiqué que no hay scroll horizontal
- [ ] Probé en ambas orientaciones
- [ ] Todo funciona correctamente ✅

---

**¡Tu sitio está listo para móviles!** 🎊📱

**Próximo paso:** Deploy a Netlify 🚀

---

**Última actualización:** Febrero 2026  
**Versión:** 1.0  
**Autor:** CR Digital Team
