# Pluma maestra — versión autónoma (PWA)

Funciona sin conexión y guarda todo (progreso, textos, proyectos y ajustes) en el propio dispositivo. No necesita cuenta ni servidor.

## Qué contiene esta carpeta
- `index.html`: la app completa.
- `manifest.webmanifest`: nombre, colores e íconos de la app.
- `sw.js`: permite que funcione sin conexión.
- `icons/`: íconos de la app.

## 1. Publicar (hace falta HTTPS)
Sube esta carpeta, tal cual, a un hosting estático gratuito con HTTPS (por ejemplo Netlify, GitHub Pages o Cloudflare Pages). Obtendrás una dirección como `https://tu-sitio.netlify.app`.

Abrir `index.html` con doble clic sirve para ver la app, pero no para instalarla ni para el modo sin conexión: eso exige HTTPS.

## 2. Probar en el celular
1. Abre la dirección en Chrome para Android.
2. Menú ⋮ → «Instalar aplicación» (o «Añadir a pantalla de inicio»).
3. Ábrela una vez con conexión y luego prueba en modo avión.

## 3. Generar el APK
1. Entra en pwabuilder.com y pega tu dirección.
2. Cuando termine el análisis, elige «Package for stores» → Android (los nombres exactos pueden variar un poco).
3. Package ID en formato inverso, por ejemplo `com.tunombre.plumamaestra`. Nombre: Pluma maestra. Versión: 1.
4. Firma: crea una clave nueva y **guarda el archivo de clave y su contraseña**. Sin ellos no podrás publicar actualizaciones.
5. Descarga el paquete: incluye un `.apk` firmado para instalar en tu teléfono y un `.aab`, que es el formato que pide Google Play (si más adelante la subes allí, necesitarás una cuenta de desarrollador, que tiene un costo único).
6. PWABuilder también entrega un `assetlinks.json`. Súbelo a tu sitio en `/.well-known/assetlinks.json`: así la app abre a pantalla completa, sin barra de dirección. Sin ese archivo funciona igual, pero con una barra arriba.

## Datos y copias de seguridad
- Los datos viven en el dispositivo (IndexedDB). Si desinstalas la app o borras sus datos, se pierden.
- En Ajustes → «Guardar copia de seguridad» se descarga un archivo; con «Restaurar copia de seguridad» lo recuperas, incluso en otro teléfono.
- Si cambias de dirección web, los datos no se trasladan solos: usa la copia.

## Actualizar la app
Sube los archivos nuevos al mismo sitio. La app se actualiza sola la siguiente vez que se abre con conexión (a veces hace falta abrirla dos veces para ver los cambios).

## Fuentes de lectura
Las tipografías de Ajustes se descargan la primera vez que se abre la app con conexión y quedan guardadas para usarlas sin conexión.
