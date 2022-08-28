const lista=document.getElementById("listado");

let carrito=[]
fetch("./data.json")
.then(response=> response.json())
.then(productos=>{
    productos.forEach(producto=>{
        const li=document.createElement("li");
        li.innerHTML= `
        
        <h3>  ${producto.nombre} </h3>
        <img class="photoo" src=/img/steveapple.webp alt="Products" title="Product">
        <p>  ${producto.descripcion} </p>
        <p class="precioProducto">Precio:$${producto.precio} </p>
        <a href="/Clase 1/htmls/pages/mac.html" target="_blank"> <button id="boton ${producto.id}" class="but" >  Buy </button></a>
        <hr />
        `
        ;
        li.className="list"
        lista.append(li);

     
        
        
})
   
})


