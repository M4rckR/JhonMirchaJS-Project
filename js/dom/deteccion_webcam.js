// Se crea una constante 'd' que hace referencia al objeto 'document'.
const d = document;

// Se crea una constante 'n' que hace referencia al objeto 'navigator'.
const n = navigator;

// La función 'webCam' se exporta como función por defecto para que pueda ser utilizada en otros módulos.
export default function webCam(id) {
    // Se obtiene una referencia al elemento <video> identificado por el ID proporcionado.
    const $video = d.getElementById(id);

    // Se verifica si el navegador admite el método 'getUserMedia' del objeto 'mediaDevices'.
    if (n.mediaDevices.getUserMedia) {
        // Si el navegador admite 'getUserMedia', se solicita el acceso a la cámara del usuario con video habilitado y audio deshabilitado.
        n.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((stream) => {
                // Si se obtiene acceso a la cámara, el 'stream' (flujo de video) se asigna al atributo 'srcObject' del elemento <video>.
                $video.srcObject = stream;

                // Se inicia la reproducción del video en el elemento <video>.
                $video.play();
            })
            .catch((err) => {
                // Si ocurre un error al intentar acceder a la cámara, se muestra un mensaje de error en la página y se registra el error en la consola.
                $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
                console.log(`Sucedio un error: ${err}`);
            });
    }
}