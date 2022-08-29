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

        Swal.fire({
            icon: 'success',
            title: '¡Steve Jobs le agradece!',
            text: 'Su elemento ha sido agregado al carrito exitosamente!',
            imageUrl: 'https://media.diepresse.com/images/thumb/q75/607x364/f/9/0/688016/applechef_steve_jobs_tritt_stevejobs20110825152915.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Steve Image'
          })
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

