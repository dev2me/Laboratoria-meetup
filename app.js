
//closure
// function patito() {

//   var nombre = "Mimi"; // variable definida
//   console.log("Nada");
  
//   // Funcion definida
//   function getNombre() {
//     console.log(nombre);
//   }
//   getNombre();
// }


// let btn = document.getElementById('btn');

// btn.addEventListener('click', (e) => {
//   console.log(e.srcElement.hidden = true);
// })

// window.addEventListener('load', function() {
//   let ref = patito();
// })


// window.addEventListener('load', () => {

//   let container = document.createElement("div");
//   let text = document.createTextNode(" Este es el contenido ")
//   container.appendChild(text)
//   document.body.appendChild(container);

// });


// createElement() Recibe como parametro un string con el nombre del nodo(elemento)

// appendChild() Recibe un parámetro y es el contexto donde se colocará el nodo creado

// removeChild() Recibe como parámetro el nodo hijo a ser removido

// parentNode() Obtiene el nodo padre de un nodo hijo

// replaceChild() Recibe dos parámetros: El primero es el nodo nuevo y el segundo es el nodo que será remplazado


// Node List

// getElementsByTagName()
// Como es una lista de elementos se pueden aplicar estructuras de control como
// ciclos
// Un nodeList es un Array de elementos


// window.addEventListener('load', () => {
//   var seccion = document.createElement("section");
//   var parrafo = document.createElement("p")
//   document.body.appendChild(seccion);
//   let flag = true;
  
//   if(flag) {
//     document.body.replaceChild(parrafo, seccion);
//   } else {
//     var text = document.createTextNode("Hola amigosss");
//     seccion.appendChild(text);
//   }


//   let li = document.getElementsByTagName('li');
//   console.log( li instanceof HTMLCollection );

//   for(let i = 0; i <= li.length -1; i++) {
        
//   }

// });

