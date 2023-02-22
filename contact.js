 contactos = ["Alen  Robledo ", "Yesid Robledo", "Mitchel Penagos", "Eugenia Mosquera "];

 function addcontacto(nombre) {
     contactos.push(nombre);
     console.log(contactos);


 }

 function deletecontacto(nombre) {


     indice = contactos.indexOf(nombre);
     contactos.splice(indice, 1);


 }



 function viewcontacto() {

     for (var i = 0; i < contactos.length; i++) {

         console.log(contactos[i]);

     }
 }

 viewcontacto();