# Web App Manifest

El manifiesto de aplicaciones web proporciona información sobre una aplicación (como nombre, autor, icono y descripción) en un documento simplificado. Su principal propósito es crear progressive web apps (en-US): aplicaciones web que se pueden instalar desde la pantalla principal de un dispositivo sin necesidad de hacerlo a traves de una app store (y otras ventajas como disponibilidad offline y enviar notificaciones push cuando cambia el contenido de la aplicación.)

## Interest Links

- [Web.dev - Cómo agregar un manifiesto en la aplicación web](https://web.dev/add-manifest/?utm_source=devtools)

- [Developer Mozilla - Web app manifests](https://developer.mozilla.org/en-US/docs/Web/Manifest)

- [Progressier App](https://progressier.com/)

- [Maskable App (To create maskable icons)](https://maskable.app/editor)

- [Crear un manifiesto de aplicación de PWA dinámicamente](https://javascript.plainenglish.io/create-a-pwa-app-manifest-dynamically-3b3d45340b11)

- [Web.dev - Aprende PWA](https://web.dev/learn/pwa/)

- [Identificación única de PWA con la propiedad de identificación del manifiesto de la aplicación web (start_url)](https://developer.chrome.com/blog/pwa-manifest-id/?utm_source=devtools)

- [Soporte de íconos adaptables en PWAs con íconos enmascarables (maskable icons)](https://web.dev/maskable-icon/?utm_source=devtools)

- [¿Qué se necesita para que una Aplicación Web Progresiva sea buena? (PWA Checklist)](https://web.dev/pwa-checklist/)

- [Service Worker Sample: Custom Offline Page Sample](https://googlechrome.github.io/samples/service-worker/custom-offline-page/)

- [Google Lighthouse (Testing PWA)](https://developer.chrome.com/docs/lighthouse/)

- [Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)

- [ServiceWorker - Mozilla Dev](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker)

- [Soporte de íconos adaptables en PWAs con íconos enmascarables](https://web.dev/maskable-icon/?utm_source=devtools)


## Full Template
````json
{
  "name": "Nuxt PWA Template",
    "short_name": "Nuxt PWA", // Name of app at devide when installed.
    "description": "A awesome PWA template build with Nuxt",
    "start_url": "http://localhost:3000/",
    "display": "standalone",
    "orientation": "portrait",
    "background_color": "#121212",
    "theme_color": "#121212",
    "scope": "http://localhost:3000/", // Routes scope. Other urls will land the browser.
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen72.png",
    "sizes": "72x72",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen96.png",
    "sizes": "96x96",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "related_applications": [{
    "platform": "web"
  }, {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.google.samples.apps.iosched"
  }],
  "screenshots" : [
    // These images are intended to be used by progressive web app stores.
  {
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "wide",
    "label": "Homescreen of Awesome App"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "platform": "wide",
    "label": "List of Awesome Resources available in Awesome App"
  }

}
````

---

### Keys

[List of manifest.json keys](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json#list_of_manifest.json_keys)

## Options

### `background_color`
Define el color de fondo deseado para la aplicación. Este valor repite lo definido en la hoja de estilos de la aplicación, pero puede ser utilizado por los navegadores para pintar el color de fondo de una app si el manifiesto está disponible antes de que la hoja de estilos se haya cargado. Esto suaviza la transición entre lanzar una aplicación y cargar el contenido de la misma.

````json
"background_color": "red"
````

### `description`

Proporciona una descripción general sobre qué hace la aplicación.

````json
"description": "The app that helps you find the best food in town!"
````

