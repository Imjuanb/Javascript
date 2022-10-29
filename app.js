const total = document.querySelector ("#total");
const cantidad = document.querySelector ("#cantidad");
const colores = document.querySelector ("#colores");
const color = document.querySelector ("#color");
const numero = document.querySelector ("#numero");
const boton = document.querySelector ("#boton");
const price = document.querySelector ("#price");
const colorbtn = document.querySelector ("#colorbtn")

boton.addEventListener("click", () => {
    const textoCliente = numero.value;
    cantidad.textContent = "Cantidad: " + textoCliente;
   const price = 40000
    total.textContent = "total: $" + price*numero.value
 
 
}) ;

function cambiaColor (color){
    const colorbtn = document.getElementById("colorbtn")
    colorbtn.style.backgroundColor = colores.value
}
