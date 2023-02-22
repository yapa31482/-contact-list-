 contactos = ["Alen  Robledo ", "Yesid Robledo", "Mitchel Penagos", "Eugenia Mosquera "];

 // Funcion agregar Contactos
 function addcontacto(nombre) {
     contactos.push(nombre);
     console.log(contactos);


 }
 //Funcion eliminar contactos
 function deletecontacto(nombre) {


     indice = contactos.indexOf(nombre);
     contactos.splice(indice, 1);


 }


 //Funcion ver contactos
 function viewcontacto() {

     for (var i = 0; i < contactos.length; i++) {

         console.log(contactos[i]);

     }
 }

 viewcontacto();