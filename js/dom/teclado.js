const d = document;

// Esto definira el x & y de la trnadormacion trnaslate que movera la pelota
let x = 0;
let y = 0;

// Funcion para el movimiento de la pelota
export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),

        // Estas variables definen los datos de cada elementos (witdh , height, top, bottom, etc)
        limitsBall = $ball.getBoundingClientRect(),
        limitStage = $stage.getBoundingClientRect();
    // const move = (direccion) => {
    // }


    console.clear()
    console.log(limitsBall);
    console.log(limitStage);
    

    switch (e.keyCode) {
        // Cada key code equivale a cada boton de hacia arriba, abajo, derecha izquierda
        case 37:
            // move(`left`)
            // Con esto nos quedamos dentro del margen, para que cuando se cumpla condicion ya no se permita mover la pelota
            if(limitsBall.left>= limitStage.left){
                // Cuando la condicion se cumple se desactivan los atajos de teclado
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            // move(`up`)
            if(limitsBall.top > limitStage.top){
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            // move(`right`)
            if(limitsBall.right < limitStage.right){
                e.preventDefault();   
                x++;
            }
            break;
        case 40:
            // move(`down`)
            if(limitsBall.bottom < limitStage.bottom){
                e.preventDefault();
                y++;}
            break;

        default: break;  
    }

    // Esta funcion en la que mueve la pelota, y su valores aumentan y disminuyen dependiendo de el switch 
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`
}



// Funcion para los atajos del teclado
export function shortcuts(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`Ctrl : ${e.ctrlKey}`);
    // console.log(`Alt  : ${e.altKey}`);
    // console.log(`Shift: ${e.shiftKey}`);

    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado")
    }
    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmacion con el teclado")
    }
    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado una aviso con el teclado")
    }
}