// Se crea una constante 'd' que hace referencia al objeto 'document'.
const d = document;

// La función 'responsiveTester' se exporta como función por defecto para que pueda ser utilizada en otros módulos.
export default function responsiveTester(form) {
    // Se obtiene una referencia al formulario identificado por el ID proporcionado.
    const $form = d.getElementById(form);

    // Se declara una variable 'tester' que se utilizará para almacenar la referencia a la ventana emergente.
    let tester;

    // Se agrega un evento de escucha para el evento 'submit' en el objeto 'document'.
    d.addEventListener("submit", (e) => {
        // Si el elemento clicado (e.target) es igual al formulario ($form), se realiza el siguiente código:
        if (e.target === $form) {
            // Se previene el comportamiento por defecto del formulario (enviar la información a una URL específica y recargar la página).
            e.preventDefault();

            // Se obtiene la URL proporcionada en el campo 'direccion' del formulario y las dimensiones personalizadas para el ancho y alto de la ventana emergente.
            // Luego, se utiliza la función 'window.open()' para abrir una nueva ventana emergente con la URL y dimensiones proporcionadas.
            tester = window.open(
                $form.direccion.value,
                "tester",
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
            );
        }
    });

    // Se agrega un evento de clic ('click') en el objeto 'document'.
    d.addEventListener('click', e => {
        // Si el elemento clicado (e.target) es igual al botón con el atributo 'name="cerrar"' dentro del formulario, se realiza el siguiente código:
        if (e.target === $form.cerrar) {
            // Se cierra la ventana emergente almacenada en la variable 'tester'.
            tester.close();
        }
    });
}

