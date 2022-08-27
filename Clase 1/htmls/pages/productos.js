const lista=document.getElementById("listado");

let carrito=[]
fetch("./data.json")
.then(response=> response.json())
.then(productos=>{
    productos.forEach(producto=>{
        const li=document.createElement("li");
        li.innerHTML= `
        
        <h3>  ${producto.nombre} </h3>
        <img class="photoo" src=/img/MacBook-portada.webp alt="Products" title="Product">
        <p>  ${producto.descripcion} </p>
        <p class="precioProducto">Precio:$${producto.precio} </p>
        <button id="boton ${producto.id}" >  Agregar </button>
        <hr />
        `
        ;
        li.className="list"
        lista.append(li);

     
        
        
})
   
})


