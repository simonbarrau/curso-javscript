
    // let user;
    //let userStorage= sessionStorage.getItem("user");

    //if(userStorage){
      //  let user=userStorage;
      //  let message= `Welcome to lays ${user}`;
      //  alert(message)
   // }else{
     //   usuario=prompt("Ingrese su usuario");
      //  sessionStorage.setItem("user", usuario);
       
   // } 
   
   let formulario= document.getElementById("formulario")
   

   formulario.addEventListener("submit", (e) =>{
       e.preventDefault();
   
       
       let listaUsuarios= JSON.parse(sessionStorage.getItem("usuarios")) || [];
   
       let usuario={
           nombre: e.target.children[1].value,
           apellido: e.target.children[3].value,
           email: e.target.children[5].value,
           password: e.target.children[7].value,
           username: e.target.children[9].value
   
   
       }
       listaUsuarios.push(usuario);
       sessionStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

       Swal.fire({
        title: '¡Bienvenido! ',
        text: '¡Tu cuenta ha sido creada con exito!¡Estas listo para navegar!!',
        imageUrl: 'https://www.apple.com/v/mac-mini/p/images/overview/hero__x8ruukomx2au_large_2x.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Mac Image',
      })
   })



