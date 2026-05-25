const buscador =
document.getElementById("buscador");

if(buscador){

    buscador.addEventListener("keyup", () => {

        let filtro =
        buscador.value.toLowerCase();

        let productos =
        document.querySelectorAll(".producto");

        productos.forEach(producto => {

            let nombre =
            producto.querySelector("h3")
            .textContent
            .toLowerCase();

            if(nombre.includes(filtro)){
                producto.style.display="block";
            }else{
                producto.style.display="none";
            }

        });

    });

}