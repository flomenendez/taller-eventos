const boton = document.getElementById("boton");

function saludoDiv(){
    alert("Hola! Soy el div");
}

boton.addEventListener("click", saludoDiv);

const miBoton = document.getElementById("miBoton");

function saludoBoton(event){
    event.stopPropagation();
    alert("Hola!");
}

miBoton.addEventListener("click", saludoBoton);