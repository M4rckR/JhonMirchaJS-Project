// Usaremos los import y export(en los js interno)

import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDevideInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hambuguesa.js";
import responsiveMedia from "./dom/objeto-responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { alarm, digitalClock } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";

// La variable documentos nos sirver para disminuir la cantidad de codigo a escribir
const d = document;

d.addEventListener("DOMContentLoaded", e => {
    // Aqui realizamos la llamada de las funciones 
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj-digital", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/audio/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown('countdown', 'Feb 02, 2024 22:00:00', "Feliz cumpleaños Daniela ♥")
    scrollTopButton(".scroll-top-btn")
    responsiveMedia("youtube","(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92&t=916s">Enlace video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps","(min-width: 1024px)", `<a href="https://www.google.com/maps/place/ROSA+LUZ/@-11.8882304,-77.0441216,14z/data=!4m6!3m5!1s0x9105d1934903fae9:0x85f9c3c4c76800d!8m2!3d-11.8791885!4d-77.0652314!16s%2Fg%2F11fnw90dyr?entry=ttu">Enlace Escritorio</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31233.935953293065!2d-77.0441216!3d-11.8882304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d1934903fae9%3A0x85f9c3c4c76800d!2sROSA%20LUZ!5e0!3m2!1ses!2spe!4v1689391578317!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDevideInfo('user-service');
    webCam('webcam')
    getGeolocation('geolocation');
})


d.addEventListener('keydown', (e) => {
    shortcuts(e)
    moveBall(e,'.ball', '.stage')
})

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();