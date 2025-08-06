
let listaDeAmigos = []; // lista vacia de amigos

function agregarAmigo() {  // funcion para agregar amigos
    const input = document.getElementById('amigo'); // constante input es igual a documento optine elemento por Id 'amigo'
    const nombre = input.value.trim();// constante nombre es igual a input , value.trim sirve para ver si tiene espacio al final o alcomienzo lo termina borrando
    
    if (nombre === ""){ // si nombre es igual a vacio manda una alerta 
        alert('Por favor, ingresa un nombre valido.');
    }


    listaDeAmigos.push(nombre); // se agrega el nombre a la lista de amigos  con push

    // mostrar amigos en el html 

    const listaHTML = document.getElementById('listaAmigos');// listaHTML es igual a 'listaAmigos' esto es obtenido por el ID desde el index.html
    const nuevoElemento = document.createElement('li');// crea un nuevo elemento 'li' en el html quees una linea este contendra los nombres de los amigos

    nuevoElemento.textContent = nombre;// como ya se creo el nuevoElemento se agrega  el  nombre 
    listaHTML.appendChild(nuevoElemento);// agrega el nuevoElemento que es un <li> dentro de la lista
  
    input.value = "";// limpia el imput
}

function sortearAmigo() {        // creamos la funcion
    if (listaDeAmigos.length === 0) { // comprobamos que la listaDeAmigos no este vacia
        alert("Debes anadir al menos un amigo para sortear.");// si esta vacia mandamos una alerta
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length); //indiceSorteado es igual a la listaDeAmigos *  un numero random
    const nombreSorteado = listaDeAmigos[indiceSorteado];// usa el indice para obtener unnombre indiceSorteado es un numero y saca el nombre de la lista de amigos


    const resultadoHTML = document.getElementById('resultado');// selecciona el elemento  resultado es donde va a mostrar el nombre
    resultadoHTML.innerHTML = `<li>El amigo secreto es ${nombreSorteado}</li>`;// remplaza el contenido  por una li con el nombreSorteado

}




