const botones = document.querySelectorAll(".agregar");

let contador = 0;

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        contador++;

        alert("Producto agregado al carrito");

        const contadorHTML =
        document.getElementById("contador");

        if(contadorHTML){
            contadorHTML.textContent = contador;
        }

    });

});