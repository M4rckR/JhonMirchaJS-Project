// Usaremos los import y export(en los js interno)

import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hambuguesa.js";
import { alarm, digitalClock } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";

// La variable documentos nos sirver para disminuir la cantidad de codigo a escribir
const d = document;

d.addEventListener("DOMContentLoaded", e => {
    // Aqui realizamos la llamada de las funciones 
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj-digital", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/audio/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown('countdown', 'Feb 02, 2024 22:00:00', "Feliz cumpleaños Daniela ♥")
})


d.addEventListener('keydown', (e) => {
    shortcuts(e)
    moveBall(e,'.ball', '.stage')
})