window.onload = function gestionarEventos() {

    let imagenPrincipal = document.getElementById("image");
    imagenPrincipal.addEventListener("click", pulsadoConsola);

    let botonesNavegacion = document.querySelectorAll(".navbutton");

    botonesNavegacion.forEach(boton => {
        boton.addEventListener("click", () => alerta(boton));
    });

    let username = document.getElementById("user");
    let password = document.getElementById("pass");

    username.addEventListener("blur", () => {
        if (username.value === '') {
            username.value = 'tu@email';
        }
    });

    username.addEventListener("focus", () => {
        if (username.value === 'tu@email') {
            username.value = '';
        }
    });

    let listaDesplegable = document.getElementById("combobox");
    let nuevaOpcion = document.createElement("option");
    nuevaOpcion.className = "_self";
    nuevaOpcion.value = "pizzaMala";
    nuevaOpcion.innerText = "Pineapple Pizza";
    
    listaDesplegable.appendChild(nuevaOpcion);

    listaDesplegable.addEventListener("change", () => {
        mostrarOpcion(listaDesplegable);

        if (listaDesplegable.value == "pizzaMala") {
            alert("Pizza con piña… Non sei il benvenuto");
        }
    });

    let formulario = document.getElementById("form");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Se ha pulsado el boton Login");
        if (username.value.includes("@ehu.eus") && (password.value.length >= 4)) {
            alert("Bienvenido " + username.value);
        } else {
            alert("Error: usuario o contraseña incorrectos");
        }
    });


    const imagenes = [
        'images/fresas.jpg',    
        'images/limon.jpg',     
        'images/mandarinas.jpg', 
        'images/manzanas.jpg',   
        'images/melon.jpg',     
        'images/sesamo.jpg'      
    ];

    let i = 0;

    //tenemos que crear la etiqueta <img> y lo metemos en imaegnPrincipal
    const img = document.createElement("img");
    img.src = imagenes[0];
    imagenPrincipal.prepend(img); // La coloca al inicio de <div id="image">

    
    let timer = setInterval(() => {
        i++;
        if (i === imagenes.length) { 
            i = 0;
        }
        img.src = imagenes[i];
    }, 3000);


    img.addEventListener('click', (e) => {
        clearInterval(timer);
    });
}

function pulsadoConsola() {
    alert("Se ha pulsado la imagen principal de la web!");
}

function alerta(boton) {
    alert("Redirigiendo a " + boton.innerText);
}

function mostrarOpcion(lista) {
    alert("Se ha seleccionado: " + lista.options[lista.selectedIndex].innerText);
}
