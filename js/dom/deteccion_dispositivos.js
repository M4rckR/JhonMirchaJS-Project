// Se crea una constante 'd' que hace referencia al objeto 'document'.
const d = document;

// Se crea una constante 'n' que hace referencia al objeto 'navigator'.
const n = navigator;

// Se obtiene el user agent del navegador (información sobre el dispositivo y navegador del usuario).
const ua = n.userAgent;

// La función 'userDevideInfo' toma un ID como argumento para identificar el elemento donde se mostrará la información del dispositivo y navegador del usuario.
export default function userDevideInfo(id) {
    // Se obtiene una referencia al elemento HTML identificado por el ID proporcionado.
    const $id = d.getElementById(id);

    // Objeto 'isMobile' que contiene métodos para verificar si el dispositivo es Android, iOS (iPhone, iPad, iPod) o Windows Phone.
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        }
    };

    // Objeto 'isDesktop' que contiene métodos para verificar si el dispositivo es Linux, macOS o Windows.
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        }
    };

    // Objeto 'isBrowser' que contiene métodos para verificar si el navegador es Chrome, Safari, Firefox, Opera, Internet Explorer (IE), Edge o cualquier otro.
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function() {
            return (this.ie()       ||
                    this.edge()     ||
                    this.chrome()   ||
                    this.safari()   ||
                    this.firefox()  ||
                    this.opera()
                    );
        }
    };

    // Se crea una estructura HTML para mostrar la información obtenida sobre el dispositivo y el navegador del usuario.
    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
    `;

    // Se imprime el user agent en la consola para ver la información completa.
    console.log(ua);

    // Si el navegador es Chrome, se agrega un mensaje adicional en el elemento mostrado en la página.
    if (isBrowser.chrome()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    }

    // La sección de redirección a Gmail para usuarios de Android está comentada. Es probable que estuviera destinada a redirigir a usuarios de Android a una URL específica.
}


// if(isMobile.android()){
    //     window.location.href = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'
    // }
