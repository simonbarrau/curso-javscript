
let hola = document.getElementById("hola");
let button= document.getElementById("button")
button.addEventListener("click",() =>{
    button.className= "mouse";
});
button.addEventListener("click",() =>{
    button.className= "box";
});


class Notebooks{
    constructor(nombre, precio, envio, descuento, stock, id){
        this.nombre=nombre;
        this.precio=precio;
        this.envio=envio;
        this.descuento=descuento;
        this.stock=stock;
        this.id=id;
        this.vendido=false;
    }
    vender(){
        this.vendido=true;
    }
    calcIva(){
        this.precio= this.precio * 1.21
    }
    calcDescuento(){
        this.precio = this.precio * 1.21 - (this.precio *1.21 * 0.3)
    }
}

const mac1 = new Notebooks("Mac Book Pro 2022", 250000, " gratis",":OFF", " Available", 1)
const mac2 = new Notebooks("Mac Air 2022", 190000, " gratis",":ON", " Available", 2)
const mac3 = new Notebooks("Mac Air Pro 2022", 200000, " gratis",":OFF", " Available", 3)


let macs= [];
macs.push(mac2);
macs.push(mac1);
macs.push(mac3);


mac1.calcDescuento();
mac2.calcDescuento();
mac3.calcIva();

macs.reverse();
let encontrar=macs.filter(item => item.descuento === "Descuento:ON");



for(const item of macs){
if(item.nombre === "Mac Air Pro 2022"){
    item.vender()
} 

let li= document.createElement("li");
li.innerHTML= `
<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${item.nombre}</h5>
<p class="card-text">Envio: ${item.envio}</p>
<p class="card-text">Descuento: ${item.descuento}</p>
<p class="card-text">Stock: ${item.stock}</p>
</div>
<button class="btn btn-success"> ¡Ultima tecnologia en el mercado!</button>
</div>
`;

li.className="amarillo";

hola.append(li);
}

let titulo= document.getElementById("alvin")

let input= document.getElementById("mumi")

input.addEventListener("input", () => {
    if(input.value.length === 5){
        titulo.className="background"
    }
})


papas.forEach(elemento=>console.log(elemento));


