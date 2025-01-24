// Lógica challenge
document.addEventListener('DOMContentLoaded', ()=>{
    const textInput = document.querySelector('input');
    const elementoLista = document.querySelector('ul');
    const listaDeAmigos = [];
    const btnSortear = document.getElementById('btn-sortear');
    const btnAdicionar = document.getElementById('btn-adicionar');

    btnAdicionar.addEventListener('click', ()=>{
        adicionarAmigo(textInput, listaDeAmigos, btnSortear, elementoLista);
    });

    btnSortear.addEventListener('click', ()=>{
        sortearAmigo(listaDeAmigos, elementoLista);
    });

});

function adicionarAmigo(input, lista, botao, elemento){
    if(input.value == ''){
        alert("Você precisa digitar o nome do amigo para adicioná-lo!");
        botao.setAttribute('disabled', true);
        return;
    }
    if(verificaLista(lista, input.value)){
        alert(`${input.value} já está na lista de amigos!`);
        return;
    }

    lista.push(input.value);
    atualizaListaAmigos(input.value, elemento);
    botao.removeAttribute('disabled');
    input.value = ''
}

function atualizaListaAmigos(amigo, elemento){
    var li = document.createElement('li');
    li.textContent = amigo;
    elemento.appendChild(li);
}

function gerarSorteado(lista){
    return lista[Math.floor(Math.random() * lista.length)];
}


function sortearAmigo(lista, elemento){
    const sorteado = gerarSorteado(lista);
    const texto = document.createElement('p');

    texto.textContent = `O amigo sorteado foi ${sorteado}`;
    elemento.parentNode.replaceChild(texto, elemento);
}

function verificaLista(lista, amigo){
    return lista.includes(amigo);
}