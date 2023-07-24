// Se crean dos constantes 'd' y 'w' que hacen referencia al objeto 'document' y 'window' respectivamente.
const d = document;
const w = window;

// La función 'responsiveMedia' se exporta como función por defecto para que pueda ser utilizada en otros módulos.
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    // Se obtiene un objeto 'MediaQueryList' que representa el media query definido por 'mq'.
    let breakpoint = w.matchMedia(mq);

    // La función 'responsive' se encarga de cambiar el contenido del elemento HTML cuando cambia la resolución de pantalla.
    const responsive = (e) => {
        // Si el media query coincide con la resolución de pantalla actual:
        if (e.matches) {
            // Se actualiza el contenido del elemento HTML (identificado por 'id') con el contenido para dispositivos de escritorio.
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            // Si el media query no coincide con la resolución de pantalla actual:
            // Se actualiza el contenido del elemento HTML (identificado por 'id') con el contenido para dispositivos móviles.
            d.getElementById(id).innerHTML = mobileContent;
        }

        // console.log("MQ", breakpoint, e.matches);
    }

    // Se agrega un evento de cambio ('change') al objeto 'MediaQueryList' para llamar a la función 'responsive' cuando cambia la resolución de pantalla.
    breakpoint.addEventListener("change", responsive);

    // Se llama a la función 'responsive' para que el contenido se actualice inicialmente al cargar la página.
    responsive(breakpoint);
}