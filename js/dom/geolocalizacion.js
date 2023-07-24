// Se crea una constante 'd' que hace referencia al objeto 'document'.
const d = document;

// Se crea una constante 'n' que hace referencia al objeto 'navigator'.
const n = navigator;

// La función 'getGeolocation' se exporta como función por defecto para que pueda ser utilizada en otros módulos.
export default function getGeolocation(id) {
    // Se obtiene una referencia al elemento HTML identificado por el ID proporcionado.
    const $id = d.getElementById(id);

    // Se definen las opciones para la geolocalización.
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    // Función que se ejecuta cuando la geolocalización tiene éxito.
    const success = position => {
        // Se obtienen las coordenadas de la posición.
        let coords = position.coords;
        console.log(position);

        // Se actualiza el contenido del elemento identificado por 'id' con información de la geolocalización.
        $id.innerHTML = `
            <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy} metros</b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `;
    };

    // Función que se ejecuta cuando ocurre un error en la geolocalización.
    const error = (err) => {
        // Se actualiza el contenido del elemento identificado por 'id' con un mensaje de error.
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    };

    // Se llama al método 'getCurrentPosition' del objeto 'geolocation' del 'navigator' para obtener la posición actual del usuario.
    // Se le pasa la función 'success' como primer argumento para manejar el éxito de la geolocalización y la función 'error' como segundo argumento para manejar errores.
    // También se le pasan las opciones de geolocalización definidas anteriormente.
    n.geolocation.getCurrentPosition(success, error, options);
}