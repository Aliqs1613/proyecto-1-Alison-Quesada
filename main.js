$("#btn1").click(function () { 
    $("#h1").toggle();
    $("#p1").toggle();
    $("#img1").toggle();

});

$("#btn2").click(function () { 
    $("#h2").toggle();
    $("#p2").toggle();
    $("#img2").toggle();
    
});

$("#btn3").click(function () { 
    $("#h3").toggle();
    $("#p3").toggle();
    $("#img3").toggle();
    
});


$("#modal").click(function () { 
    let api ="https://randomuser.me/api/"
    let contenido = document.getElementById("contenido")
    let nombre;
    let imagen;
    let html
    let correo;
    let fecha;
    let ubicación;
    let telefono;
    let clave;
  



    fetch(api) 
    .then(response => response.json()) 
    .then(data =>{
        nombre=data.results[0].name.first
        imagen=data.results[0].picture.thumbnail
        correo=data.results[0].email
        fecha=data.results[0].dob.date
        telefono=data.results[0].phone
        clave= data.results[0].login.password
        ubicación= data.results[0].location.country

       
        
        html= `
        <img src="${imagen}" class="img img-fluid rounded-circle bg-primary" id=imgmodal alt="" >
    
        <!-- List group -->
<div class="list-group" id="myList" role="tablist">
  <a class="list-group-item list-group-item-action active" data-toggle="list" href="#name" role="tab">Nombre</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#correo" role="tab">Correo</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#fecha" role="tab">Fecha</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#ubi" role="tab">Ubicación</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#phone" role="tab">Telefono</a>
  <a class="list-group-item list-group-item-action" data-toggle="list" href="#clave" role="tab">Clave</a>
</div>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="name" role="tabpanel"> <p class="text text-center">Mi Nombre es: ${nombre}</p></div>
  <div class="tab-pane" id="correo" role="tabpanel"><p class="text text-center">Mi Correo es: ${correo}</p></div>
  <div class="tab-pane" id="fecha" role="tabpanel"> <p class="text text-center"> mi Fecha: ${fecha}</p></div>
  <div class="tab-pane" id="ubi" role="tabpanel"><p class="text text-center">Mi ubicaión es: ${ubicación}</p></div>
  <div class="tab-pane" id="phone" role="tabpanel"><p class="text text-center"> Mi Numero es: ${telefono}</p></div>
  <div class="tab-pane" id="clave" role="tabpanel"><p class="text text-center"> Mi Clave es: ${clave}</p></div>
</div>

        
    
        
        `
        contenido.innerHTML=html
        
        
    



    
        console.log(imagen)
        console.log(nombre)


    } )
    
});


  
window.sr = ScrollReveal();

sr.reveal('#jmain', {
  duration: 2000,
  origin: 'right '
});

sr.reveal('.row', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});

sr.reveal('.display-4', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});


sr.reveal('#navbarTogglerDemo03', {
    duration: 3000,
    origin: 'top',
    distance: '300px'
  });

  sr.reveal('#aqui', {
    duration: 6000,
    origin: 'right',
    distance: '300px'
  });

  //tabla//
  function tabla() {
    let contenidotabla= document.getElementById("contenidotabla")
    let misdatos;
    fetch(tabla.json)
      .then(response=> response.json())
      .then(data=>{
  
          data.forEach(element => {
             misdatos += ` 
            
             <tr> 
                      
                       <td>${data.albumid}</td>  
                       <td>${data.id}</td>
                       <td>${data.title}</td>
                       <td>${data.url}</td>
                       <td>${data.thumbnailUr}</td>
                       
             </tr>
                       `
              
          });
          contenidotabla.innerHTML = misdatos
      })
  
    
  }
  
