
// Este es el Js de el menu hamburguesa con una funcion por default ya que sera la unica que usemos
export default function hamburgerMenu(panelBtn,panel,menuLink) {
    const d = document;

    d.addEventListener("click", e=> {
        // El * quiere decir que se capturar todo lo que viene adentro de ese selector
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        } 

        // Esto hace que el menu se cierre cada vez que hacemos click en una opcion
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}