// Se crea una constante 'd' que hace referencia al objeto 'document'.
const d = document;

// Se crea una constante 'w' que hace referencia al objeto 'window'.
const w = window;

// Se exporta la función 'scrollTopButton' como función por defecto para que pueda ser utilizada en otros módulos.
export default function scrollTopButton(btn) {
    // Se obtiene una referencia al botón que será utilizado para volver al inicio de la página.
    const $scrollBtn = d.querySelector(btn);

    // Se agrega un evento de desplazamiento ('scroll') al objeto 'window'.
    w.addEventListener('scroll', e => {
        // Se obtiene la posición actual del scroll vertical tanto para el objeto 'document' como para el objeto 'window'.
        let scrollTop = d.documentElement.scrollTop || w.pageYOffset;

        // Si la posición del scroll es mayor a 600 píxeles, se remueve la clase 'hidden' del botón para mostrarlo.
        if (scrollTop > 600) {
            $scrollBtn.classList.remove('hidden');
        } else {
            // Si la posición del scroll es menor o igual a 600 píxeles, se agrega la clase 'hidden' al botón para ocultarlo.
            $scrollBtn.classList.add('hidden');
        }
    });

    // Se agrega un evento de clic ('click') al objeto 'document'.
    d.addEventListener('click', e => {
        // Si el elemento clicado (e.target) coincide con el botón indicado ('btn'), se realiza el siguiente código:
        if (e.target.matches(btn)) {
            // Se utiliza el método 'scrollTo' del objeto 'window' para hacer un desplazamiento suave hacia la parte superior de la página.
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });
}