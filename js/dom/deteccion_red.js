// Se crea una constante 'd' que hace referencia al objeto 'document'.
const d = document;

// Se crea una constante 'w' que hace referencia al objeto 'window'.
const w = window;

// Se crea una constante 'n' que hace referencia al objeto 'navigator'.
const n = navigator;

// La función 'networkStatus' se exporta como función por defecto para que pueda ser utilizada en otros módulos.
export default function networkStatus() {

    // La función 'isOnLine' comprueba si el navegador se encuentra en línea o desconectado y muestra un mensaje en la página en consecuencia.
    const isOnLine = () => {
        // Se crea un nuevo elemento <div> para mostrar el mensaje informativo.
        const $div = d.createElement('div');

        if (n.onLine) {
            // Si el navegador está en línea (conexión restablecida), se muestra un mensaje apropiado y se agrega una clase "online" al <div>.
            $div.textContent = 'Conexión Restablecida';
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            // Si el navegador está desconectado (conexión perdida), se muestra un mensaje apropiado y se agrega una clase "offline" al <div>.
            $div.textContent = 'Conexión Perdida';
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        // Después de 2000 milisegundos (2 segundos), el <div> se eliminará del DOM para que el mensaje desaparezca.
        setTimeout(() => {
            d.body.removeChild($div)
        }, 2000);

        // Se inserta el <div> en la parte superior del <body> para que se muestre el mensaje en la página.
        d.body.insertAdjacentElement("afterbegin", $div);
    }

    // Se agrega un evento de escucha para el evento 'online' en el objeto 'window'.
    w.addEventListener("online", e => isOnLine());

    // Se agrega un evento de escucha para el evento 'offline' en el objeto 'window'.
    w.addEventListener("offline", e => isOnLine());
}