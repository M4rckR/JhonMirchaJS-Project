// Usaremos los import y export(en los js interno)

import hamburgerMenu from "./dom/menu_hambuguesa.js";
import { alarm, digitalClock } from "./dom/reloj.js";

// La variable documentos nos sirver para disminuir la cantidad de codigo a escribir
const d = document;

d.addEventListener("DOMContentLoaded", e => {
    // Aqui realizamos la llamada de las funciones 
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj-digital", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/audio/alarma.mp3","#activar-alarma","#desactivar-alarma");
})


// const reloj = new Date();
// let horaActual = reloj.toLocaleTimeString()

// d.querySelector(".reloj").textContent = horaActual;