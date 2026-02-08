# 🚀 Guía de Deployment - CR Digital

Guía paso a paso para deployar tu sitio web en Netlify.

---

## 📋 Pre-requisitos

Antes de deployar, asegúrate de tener:

- ✅ Tu archivo `Logo.png` en `assets/images/`
- ✅ Todos los datos de contacto actualizados (email, WhatsApp, redes sociales)
- ✅ Los colores de marca configurados (si los cambiaste)
- ✅ Una cuenta en [Netlify](https://www.netlify.com/) (gratis)
- ✅ (Opcional) Una cuenta en [GitHub](https://github.com/) para control de versiones

---

## 🎯 Método 1: Deploy Rápido (Drag & Drop)

**Tiempo estimado: 2 minutos**

### Paso 1: Preparar los Archivos

1. Abre la carpeta del proyecto: `cr-digital-web`
2. Verifica que tengas estos archivos:
   ```
   cr-digital-web/
   ├── index.html
   ├── css/
   ├── js/
   └── assets/
   ```

### Paso 2: Crear Cuenta en Netlify

1. Ve a [netlify.com](https://www.netlify.com/)
2. Click en "Sign up" (Registrarse)
3. Puedes registrarte con:
   - Email
   - GitHub
   - GitLab
   - Bitbucket

### Paso 3: Deploy Manual

1. Una vez dentro de Netlify, busca la sección que dice:
   **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**

2. Arrastra toda la carpeta `cr-digital-web` a esa área

3. Netlify subirá los archivos automáticamente

4. En 30-60 segundos, tu sitio estará en línea

5. Netlify te dará una URL temporal como:
   ```
   https://random-name-123456.netlify.app
   ```

### Paso 4: Personalizar el Dominio

1. En el dashboard de Netlify, click en "Site settings"
2. Click en "Change site name"
3. Elige un nombre único, por ejemplo: `crdigital-web`
4. Tu nueva URL será: `https://crdigital-web.netlify.app`

---

## 🔄 Método 2: Deploy con Git (Recomendado)

**Tiempo estimado: 10 minutos**

Este método te permite actualizar el sitio automáticamente cada vez que hagas cambios.

### Paso 1: Instalar Git (si no lo tienes)

**Windows:**
1. Descarga Git desde [git-scm.com](https://git-scm.com/)
2. Instala con las opciones por defecto

**Verificar instalación:**
```bash
git --version
```

### Paso 2: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com/) y crea una cuenta (si no tienes)
2. Click en el botón "+" arriba a la derecha
3. Selecciona "New repository"
4. Configura:
   - **Repository name:** `cr-digital-web`
   - **Description:** "Sitio web profesional de CR Digital"
   - **Visibility:** Public o Private (tu elección)
   - ❌ NO marques "Initialize this repository with a README"
5. Click en "Create repository"

### Paso 3: Subir tu Código a GitHub

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Navegar a la carpeta del proyecto
cd "c:\Users\IGNAC\OneDrive\Marketing_Digital\CD_Digital\cr-digital-web"

# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit - CR Digital website"

# Renombrar la rama a main
git branch -M main

# Conectar con GitHub (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/cr-digital-web.git

# Subir los archivos
git push -u origin main
```

**Nota:** GitHub te pedirá tu usuario y contraseña (o token de acceso personal).

### Paso 4: Conectar Netlify con GitHub

1. En Netlify Dashboard, click en "Add new site"
2. Selecciona "Import an existing project"
3. Click en "GitHub"
4. Autoriza a Netlify para acceder a tu GitHub
5. Busca y selecciona el repositorio `cr-digital-web`
6. Configuración de build:
   - **Branch to deploy:** main
   - **Build command:** (dejar vacío)
   - **Publish directory:** `.` o `/`
7. Click en "Deploy site"

### Paso 5: ¡Listo!

Tu sitio se deployará automáticamente. Cada vez que hagas cambios y los subas a GitHub, Netlify actualizará el sitio automáticamente.

---

## 🌐 Configurar Dominio Personalizado

### Opción A: Usar Dominio de Netlify (Gratis)

Ya tienes un dominio como: `https://crdigital-web.netlify.app`

### Opción B: Usar tu Propio Dominio

Si tienes un dominio (ej: `crdigital.com`):

1. En Netlify Dashboard, ve a "Domain settings"
2. Click en "Add custom domain"
3. Ingresa tu dominio: `crdigital.com`
4. Netlify te dará instrucciones para configurar tu DNS

**Configuración DNS típica:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: crdigital-web.netlify.app
```

5. Espera 24-48 horas para que se propague el DNS

### SSL/HTTPS Gratis

Netlify incluye SSL gratis con Let's Encrypt:
1. Ve a "Domain settings" > "HTTPS"
2. Click en "Verify DNS configuration"
3. Click en "Provision certificate"
4. En minutos tendrás HTTPS activado

---

## 🔄 Actualizar el Sitio

### Si usaste Drag & Drop:

1. Haz los cambios en tu código local
2. Arrastra la carpeta completa de nuevo a Netlify
3. Netlify actualizará el sitio

### Si usaste Git:

```bash
# Hacer cambios en tu código

# Ver qué archivos cambiaron
git status

# Agregar los cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

# Netlify detectará los cambios y actualizará automáticamente
```

---

## 🐛 Solución de Problemas

### El sitio no carga

1. Verifica que `index.html` esté en la raíz del proyecto
2. Revisa el log de deploy en Netlify para ver errores
3. Verifica que todas las rutas de archivos sean correctas

### Las imágenes no cargan

1. Verifica que las rutas sean relativas: `./assets/images/Logo.png`
2. Verifica que los nombres de archivos coincidan (case-sensitive)
3. Asegúrate de que las imágenes estén en la carpeta correcta

### El logo no aparece

1. Verifica que `Logo.png` esté en `assets/images/`
2. Verifica la ruta en `index.html`:
   ```html
   <img src="./assets/images/Logo.png" alt="CR Digital Logo">
   ```
3. Si el nombre de tu archivo es diferente, actualiza la ruta

### Los estilos no se aplican

1. Verifica que `styles.css` esté en la carpeta `css/`
2. Verifica el link en `index.html`:
   ```html
   <link rel="stylesheet" href="./css/styles.css">
   ```
3. Limpia la caché del navegador (Ctrl + Shift + R)

### El formulario no funciona

1. Verifica el número de WhatsApp en `js/main.js`:
   ```javascript
   const whatsappNumber = '5493804561541';
   ```
2. El formato debe ser: código de país + número (sin espacios ni signos)

---

## 📊 Monitoreo y Analytics

### Google Analytics

1. Crea una cuenta en [analytics.google.com](https://analytics.google.com/)
2. Crea una propiedad para tu sitio
3. Copia el código de seguimiento
4. Pégalo en `index.html` antes de `</head>`

### Netlify Analytics (Pago)

Netlify ofrece analytics propios (de pago):
- Visitas únicas
- Páginas vistas
- Tráfico por país
- Dispositivos

---

## 🔐 Seguridad

### Headers de Seguridad

Ya incluidos en `netlify.toml`:
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Content-Security-Policy
- ✅ Referrer-Policy

### SSL/HTTPS

- ✅ Incluido gratis con Netlify
- ✅ Se renueva automáticamente

### Backups

- Netlify guarda historial de deploys
- Puedes hacer rollback a versiones anteriores
- Si usas Git, tienes control de versiones completo

---

## 📈 Optimización

### Performance

1. **Imágenes:**
   - Optimiza con [TinyPNG](https://tinypng.com/)
   - Usa formatos modernos (WebP)
   - Tamaño máximo recomendado: 500KB por imagen

2. **Lighthouse:**
   - Abre Chrome DevTools (F12)
   - Ve a la pestaña "Lighthouse"
   - Ejecuta un audit
   - Sigue las recomendaciones

### SEO

1. **Google Search Console:**
   - Registra tu sitio en [search.google.com/search-console](https://search.google.com/search-console)
   - Envía tu sitemap
   - Monitorea el rendimiento

2. **Meta Tags:**
   - Ya incluidos en `index.html`
   - Personaliza con tu información

---

## 📞 Soporte

¿Problemas con el deployment?

- **Email:** disewebtalle@gmail.com
- **WhatsApp:** +54 380 456-1541
- **Documentación Netlify:** [docs.netlify.com](https://docs.netlify.com/)

---

## ✅ Checklist Final

Antes de considerar el deployment completo:

- [ ] Logo agregado y visible
- [ ] Todos los datos de contacto actualizados
- [ ] Formulario de contacto probado
- [ ] Botón de WhatsApp funcional
- [ ] Links de redes sociales actualizados
- [ ] Sitio responsive en móvil
- [ ] Todas las imágenes cargan correctamente
- [ ] Sin errores en la consola del navegador
- [ ] SSL/HTTPS activado
- [ ] Dominio personalizado configurado (opcional)
- [ ] Google Analytics instalado (opcional)
- [ ] Probado en diferentes navegadores

---

## 🎉 ¡Felicitaciones!

Tu sitio está en línea y listo para recibir clientes.

**Próximos pasos:**
1. Comparte tu sitio en redes sociales
2. Agrega el link a tu bio de Instagram
3. Usa el link en tus tarjetas de presentación
4. Compártelo con clientes potenciales

---

**Hecho con ❤️ por CR Digital**
