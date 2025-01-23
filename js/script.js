// Lógica challenge
let textInput = document.querySelector('input')
let elementoLista = document.querySelector('ul')
let listaDeAmigos = []
document.getElementById('btn-sortear').addEventListener('click', ()=>{sortearAmigo(listaDeAmigos)})

function adicionarAmigo(){
    listaDeAmigos.push(textInput.value)
    atualizaListaAmigos(textInput.value)
}

function atualizaListaAmigos(amigo){
    var li = document.createElement('li');
    li.textContent = amigo;
    elementoLista.appendChild(li)
}

function sortearAmigo(lista){
    let tamanho = lista.length
    let sorteado = lista[Math.floor(Math.random() * tamanho)];


    let texto = document.createElement('p');
    texto.textContent = `O amigo sorteado foi ${sorteado}`;
    document.body.appendChild(texto);

    //console.log(sorteado)
}

