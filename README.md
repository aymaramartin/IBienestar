# IBienestar · Soul Healing 🦋

Sitio web del emprendimiento de terapias alternativas de **Ivana Budi**.

## 📁 Estructura

```
ibienestar/
├── index.html          ← La página principal
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   ├── main.js         ← Funcionalidad (menú, blog, modales)
│   └── posts.js        ← ⭐ ACÁ EDITÁS LOS POSTS DEL BLOG
├── assets/
│   └── favicon.svg     ← Ícono de la pestaña del navegador
└── README.md           ← Este archivo
```

## 🚀 Cómo subirlo a GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo llamado `ibienestar`).
2. Subí todos los archivos de esta carpeta a ese repositorio.
3. En tu repositorio, andá a **Settings → Pages**.
4. En **Source**, elegí la rama `main` (o `master`) y la carpeta `/ (root)`.
5. Guardá los cambios. GitHub te va a dar una URL del tipo:
   `https://tuusuario.github.io/ibienestar/`
6. ¡Listo! En unos minutos tu web está online.

## 🦋 Panel de escritura (la forma fácil)

Hay una página secreta solo para vos: `escribir.html`

Para acceder, abrí en el navegador:
```
https://aymaramartin.github.io/IBienestar/escribir.html
```

(reemplazá `aymaramartin` y `IBienestar` con tus datos si cambiaron)

**Qué podés hacer ahí:**
- Escribir tu texto con un editor lindo (como un mensaje de WhatsApp)
- Ver una **vista previa** de cómo va a quedar antes de publicarlo
- El panel te genera el código automáticamente
- Tocás "Copiar" y listo

**Después solo te queda pegarlo en `js/posts.js` en GitHub.** El panel te explica cómo, paso a paso.

⚠️ Esta página es solo para vos — nadie que entre a tu web va a encontrarla. No hay ningún link hacia ella desde la web pública. Guardate la URL en favoritos 💜

---

## ✍️ Cómo escribir nuevos posts del blog (manualmente)

Si preferís editar el archivo directamente, todo está en **`js/posts.js`**.

Abrí ese archivo y vas a ver algo así:

```javascript
const posts = [
  {
    id: 1,
    date: "15 · 04 · 2026",
    title: "El alma también pide descanso",
    excerpt: "Cuando todo se siente pesado...",
    icon: "moon",
    content: `
      <p>Hay días en los que...</p>
      <p>Otro párrafo acá...</p>
    `
  },
  // ... más posts
];
```

### Para agregar un post nuevo:

Copiá uno de los bloques existentes y pegalo **arriba de todo** (así aparece primero en la web). Después cambiá los datos:

- **`id`** → cualquier número que no esté repetido (ej: si el último es 3, poné 4)
- **`date`** → fecha en formato `"DD · MM · AAAA"` (ej: `"10 · 05 · 2026"`)
- **`title`** → el título de tu post
- **`excerpt`** → resumen corto que aparece en la tarjeta (1-2 oraciones)
- **`icon`** → elegí uno de estos nombres: `"butterfly"`, `"moon"`, `"sun"`, `"lotus"`, `"heart"`
- **`content`** → el cuerpo del post, envolviendo cada párrafo entre `<p>` y `</p>`

### Trucos de formato dentro del `content`:

- Para un párrafo nuevo: `<p>Tu texto acá.</p>`
- Para texto en *cursiva*: `<em>texto en cursiva</em>`
- Para texto en **negrita**: `<strong>texto en negrita</strong>`
- Para un salto de línea: `<br>`

### Ejemplo de post nuevo:

```javascript
{
  id: 4,
  date: "01 · 05 · 2026",
  title: "El título de mi nuevo post",
  excerpt: "Una frase corta que invite a leer.",
  icon: "heart",
  content: `
    <p>Primer párrafo del post.</p>
    <p>Segundo párrafo con una <em>palabra en cursiva</em> y otra en <strong>negrita</strong>.</p>
    <p>Y un cierre amoroso.</p>
  `
},
```

⚠️ **Importante**: no te olvides de la coma `,` al final de cada post (excepto el último).

### Después de editar:

1. Guardá el archivo.
2. Subí los cambios a GitHub (commit + push).
3. En menos de 1 minuto, tu nuevo post aparece en la web.

## 🎨 Personalización rápida

### Cambiar tu número de WhatsApp

Si tu número cambia, buscá en `index.html` el texto `5491138435293` (está 2 veces) y reemplazalo por tu nuevo número (formato internacional sin signos ni espacios).

### Cambiar colores

Abrí `css/styles.css` y mirá las primeras líneas con `--color-violet`, `--color-lavender`, etc. Cambiando esos valores, cambia toda la web.

## 💜 Secciones del sitio

- **Hero** → Presentación principal
- **Sobre mí** → Tu historia como terapeuta
- **Terapias** → Las 4 terapias que ofrecés
- **Blog** → Tus reflexiones (editables desde `posts.js`)
- **Agendar** → Botón de WhatsApp con mensaje pre-armado
- **Contacto** → WhatsApp, Instagram y ubicación

---

Con amor, para acompañar tu camino 🦋
