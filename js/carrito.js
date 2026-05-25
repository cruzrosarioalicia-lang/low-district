console.log("Carrito cargado");

const botonFinalizar =
document.querySelector(".carrito button");

if(botonFinalizar){

    botonFinalizar.addEventListener("click", () => {

        alert(
        "Gracias por comprar en LOW OLD SCHOOL WEAR"
        );

    });

}