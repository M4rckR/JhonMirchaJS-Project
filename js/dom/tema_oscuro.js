// Se crea una constante 'd' que hace referencia al objeto 'document'.
const d = document;

// Se crea una constante 'ls' que hace referencia al objeto 'localStorage'.
const ls = localStorage;

// La función 'darkTheme' se exporta como función por defecto para que pueda ser utilizada en otros módulos.
export default function darkTheme(btn, classDark) {
    // Se obtiene una referencia al botón que permitirá al usuario cambiar el tema.
    const $themeBtn = d.querySelector(btn);

    // Se obtienen todas las selecciones de elementos que tienen el atributo 'data-dark' para aplicar el tema oscuro.
    const $selectors = d.querySelectorAll("[data-dark]");

    // Se definen dos emojis para representar el sol y la luna.
    let moon = "🌙",
        sun = "☀️";

    // Función que aplica el modo claro.
    const lightMode = () => {
        // Se remueve la clase 'classDark' a todas las selecciones de elementos para volver al modo claro.
        $selectors.forEach(el => el.classList.remove(classDark));

        // Se actualiza el texto del botón para mostrar el emoji de luna.
        $themeBtn.textContent = moon;

        // Se guarda en el 'localStorage' que el tema seleccionado es el claro.
        ls.setItem("theme", "light");
    }

    // Función que aplica el modo oscuro.
    const darkMode = () => {
        // Se agrega la clase 'classDark' a todas las selecciones de elementos para aplicar el modo oscuro.
        $selectors.forEach(el => el.classList.add(classDark));

        // Se actualiza el texto del botón para mostrar el emoji de sol.
        $themeBtn.textContent = sun;

        // Se guarda en el 'localStorage' que el tema seleccionado es el oscuro.
        ls.setItem("theme", "dark");
    }

    // Se agrega un evento de clic ('click') en el objeto 'document'.
    d.addEventListener('click', e => {
        // Si el elemento clicado (e.target) coincide con el botón identificado por 'btn', se realiza el siguiente código:
        if (e.target.matches(btn)) {
            // Si el texto actual del botón es el emoji de luna, se activa el modo oscuro.
            // Si el texto actual del botón es el emoji de sol, se activa el modo claro.
            if ($themeBtn.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    // Se agrega un evento de carga ('DOMContentLoaded') en el objeto 'document'.
    d.addEventListener("DOMContentLoaded", (e) => {
        // Se verifica si en el 'localStorage' ya se guardó el tema seleccionado.
        // Si no se ha guardado ningún tema, se guarda por defecto el tema claro.
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");

        // Se verifica el tema guardado en el 'localStorage' y se aplica el modo correspondiente al cargar la página.
        if (ls.getItem("theme") === "light") lightMode();
        if (ls.getItem("theme") === "dark") darkMode();
    });
}