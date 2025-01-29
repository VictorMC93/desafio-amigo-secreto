// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosLista=[]; //Array de amigos ingresados
function agregarAmigo() { //Funcion para agregar nombres a array
    let amigoAgregado=document.getElementById('amigo').value; //añade el contenido escrito por el usuario a variable
    if (amigoAgregado==''){ //si el usuario no escribe nada
        alert('Por favor, inserte un nombre.');
    }else{ //agrega nombre a array y limpia campo de entrada
        amigosLista.push(amigoAgregado);
        document.getElementById('amigo').value='';
        console.log(amigosLista);
        generarListaAmigos();
    }
    return;
}
function generarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""
    for (i = 0; i < amigosLista.length; ++i) {
        let li = document.createElement('li');
        li.innerText = amigosLista[i];
        listaAmigos.appendChild(li); 
    }
    return;
}

function sortearAmigo() {
    
}