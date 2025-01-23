// Lógica challenge
document.addEventListener('DOMContentLoaded', ()=>{
    const textInput = document.querySelector('input');
    const elementoLista = document.querySelector('ul');
    const listaDeAmigos = [];
    const btnSortear = document.getElementById('btn-sortear');
    const btnAdicionar = document.getElementById('btn-adicionar');

    btnSortear.addEventListener('click', ()=>{
        sortearAmigo(listaDeAmigos, elementoLista);
    });

    btnAdicionar.addEventListener('click', ()=>{
        adicionarAmigo(textInput, listaDeAmigos, btnSortear, elementoLista);
    });
});

function adicionarAmigo(input, lista, botao, elemento){
    if(input.value == ''){
        alert("Você precisa digitar o nome do amigo para adicioná-lo!");
        botao.setAttribute('disabled', true);
        return;
    }
    lista.push(input.value);
    atualizaListaAmigos(input.value, elemento);
    botao.removeAttribute('disabled');
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
    elemento.parentNode.replaceChild(texto, elemento)

}
