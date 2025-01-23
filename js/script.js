// Lógica challenge
let textInput = document.querySelector('input')
let elementoLista = document.querySelector('ul')
let listaDeAmigos = []
let btnSortear = document.getElementById('btn-sortear');
btnSortear.addEventListener('click', ()=>{sortearAmigo(listaDeAmigos)})

function adicionarAmigo(){
    if(textInput.value == ''){
        alert("Você precisa digitar o nome do amigo para adicioná-lo!")
        btnSortear.setAttribute('disabled', true)
        return
    }
    listaDeAmigos.push(textInput.value)
    atualizaListaAmigos(textInput.value)
    btnSortear.removeAttribute('disabled')
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

