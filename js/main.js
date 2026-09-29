
window.onload = function gestionarEventos(){

    let imagenPrincipal = document.getElementById("image")
    imagenPrincipal.addEventListener("click",pulsadoConsola)

    let botonesNavegacion = document.querySelectorAll(".navbutton")

    botonesNavegacion.forEach(boton=>{
    boton.addEventListener("click", () => alerta(boton))})

    let username = document.getElementById("user")
    let password = document.getElementById("pass")

    username.addEventListener("blur",()=>{
        username.value = 'tu@email'
    })
    username.addEventListener("focus",()=>{
            username.value = ''    
        })

    }

    let listaDesplegable = document.getElementById()

function pulsadoConsola(){
    alert("Se ha pulsado la imagen principal de la web")
}
function alerta(boton){
    alert("Redirigiendo a " + boton.innerText)
}

