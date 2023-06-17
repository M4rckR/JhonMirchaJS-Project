
// Aqui exportamos las funciones 
const d  = document;

// Funcion del reloj
export function digitalClock(clock, btnPlay, btnStop) {

    // Esta variable sera el intervalo
    let clockTempo;
    d.addEventListener("click", e=> {
        if(e.target.matches(btnPlay)){
            // Captturamos el intervalo
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
                
            }, 1000);
            // Desactivamos el boton para no iniciar 2 veces el mismo boton
            e.target.disabled = true;
        }
        // Con esto resetearemos todo
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })    
}

// Funcion de la alarma
export function alarm(sound, btnPlay, btnStop) {
    // Con esta variable capturamos el setTimeOut
    let alarmTempo;

    // Creamos un elemento html de audio
    const $alarm = d.createElement("audio");
    // La variable sound sera la ruta de el audio
    $alarm.src = sound;

    d.addEventListener("click", e=> {
        if(e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)) {
            // Aqui se limpia el setTimeOut si es que aun no inicio
            clearTimeout(alarmTempo);
            // Aqui pausamos el audio y lo reiniciamos, ademas se volver a activar el boton
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}






// Mi intento
// export default function reloj(iniciarR,detenerR,iniciarA,detenerA) {
//     const d = document;

    
//     const reloj = new Date();
//     const alarma = new Audio('../assets/audio/alarma.mp3')
//     let horaActual = reloj.toLocaleTimeString()


//     d.addEventListener("click", e=> {
//         if(e.target.matches(iniciarR)){
//             d.querySelector(".reloj-digital").textContent = horaActual;
//         } 

//         if(e.target.matches(detenerR)){
//             d.querySelector(".reloj-digital").textContent = "";
//         }

//         if(e.target.matches(iniciarA)){
//             alarma.play();
//         } 

//         if(e.target.matches(detenerA)){
//             alarma.pause();
//             audio.currentTime = 0;
//         }

//     })
// }