// Creamos la variable para que la seleccion no sea tan verbosa 
const d = document;

export default function countdown(id, limitDate, finalMessage) {
    const $countdown = d.getElementById(id),
        // Obtener los milisegundos (Siempre usar milisegundos para trabjar con fechas)
        countdownDate = new Date(limitDate).getTime();

    // Como sera segundo a segundo pondremos un intervalos de un segundo ylo guardamos en una varibale
    let countdownTempo = setInterval(() => {
        // Alamcenamos una varaable y lo convertimos en ms
        let now = new Date().getTime();
        // Definimos el tiempo limite restando la fecha propuesta menos la fecha actual para obtener los ms que faltan para ese momento
        let limitTime = countdownDate - now,
            // Calculo en milisegundos de dias
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            // Horas (El slice es para que cuando las horas minutos y segundos llegue )
            hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
            //Minutos
            minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
            //Segundo
            seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2)

        // Esto sera lo que se insertara en el html (Recordemos que este es una variable del dom)
        $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas  ${minutes} minutos ${seconds} segundos</h3>`
        // Validamos que cuando se llegue a ese tiempo dara un mensaje diferente al usuario
        if (limitTime < 0) {
            // Limpiamos el intervalo para que ya no se me ejecute
            clearInterval(countdownTempo)
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`
        }
    }, 1000);
}
