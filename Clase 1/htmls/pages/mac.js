const contenedorCompus= document.getElementById("compus")

const contenedorCarrito= document.getElementById("carrito-contenedor")

const botonVaciar= document.getElementById("vaciar-carrito")
const contadorCarrito= document.getElementById("contadorCarrito")
const precioTotal= document.getElementById("precioTotal")
let carrito=[]



document.addEventListener(`DOMContentLoaded`, () =>{
    if(sessionStorage.getItem(`carrito`)){
        carrito = JSON.parse(sessionStorage.getItem(`carrito`))
        actualizarCarrito()
    }
} )

botonVaciar.addEventListener("click", () =>{
    carrito.length=0
    actualizarCarrito()
})


stockCompus.forEach((producto)=> {
    const div= document.createElement("div")
    div.innerHTML=`
    <img src= ${producto.img} alt="">Notebooks</h1>
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p class="precioProducto">precio:$${producto.precio}</p>
    <button id="agregar ${producto.id}">Agregar</button>

    `
    div.className= "list"
    contenedorCompus.appendChild(div)
    const boton=document.getElementById(`agregar ${producto.id}`)
    boton.addEventListener("click", ()=>{
        agregarALCarro(producto.id)
    })
})

const agregarALCarro = (prodId)=> {
    

        const item =stockCompus.find((prod)=>prod.id === prodId)
        carrito.push(item);
        console.log(carrito);
        actualizarCarrito();

}
 



const actualizarCarrito = () => {

contenedorCarrito.innerHTML=" "
    carrito.forEach((prod) =>{
        const div= document.createElement("div")
        div.className= ("productoEnCarrito")
        div.innerHTML=`
        <div class="inside">
        <p >${prod.nombre}</p>
        <p  > Precio:${prod.precio}</p>
        <p cantidad >cantidad:<span id="cantidad">${prod.cantidad}</span></p>
        </div>
    
        `
        contenedorCarrito.appendChild(div)

        sessionStorage.setItem(`carrito`, JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText= carrito.reduce((acc,prod)=> acc + prod.precio, 0)
}

let finish= document.getElementById("exampleModal")

finish.addEventListener("submit", (e) =>{
    e.preventDefault(); 
   
    Swal.fire({
        icon: 'success',
        title: '¡Gracias por confiar!',
        text: 'Su compra ha sido realizada con exito!',
        footer: '<a href="">A disfrutarlo!</a>'
      })

})  