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

    atualizaStatusBtnSortear(listaDeAmigos, btnSortear);

});

function adicionarAmigo(input, lista, botaoSortear, elemento){
    if(input.value == ''){
        mostrarMensagem("Você precisa digitar o nome do amigo para adicioná-lo!");
        botaoSortear.setAttribute('disabled', true);
        
        return;
    }
    if(verificaLista(lista, input.value)){
        mostrarMensagem(`${input.value} já está na lista de amigos!`);
        return;
    }

    lista.push(input.value);
    atualizaListaAmigos(input.value, lista, elemento, botaoSortear);
    atualizaStatusBtnSortear(lista, botaoSortear);
    input.value = ''
}

function atualizaListaAmigos(amigo, lista, elemento, botaoSortear){
    const li = document.createElement('li');
    li.textContent = amigo;
    elemento.appendChild(li);

    const botaoRemover = criaBotaoRemover(amigo, lista, li, botaoSortear);

    li.appendChild(botaoRemover);
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

function mostrarMensagem(mensagem){
    alert(mensagem)
}

function removerAmigo(amigo, lista, elementoLi, botaoSortear){
    const indice = lista.indexOf(amigo);
    if(indice !== -1){
        lista.splice(indice, 1);
    }

    elementoLi.remove();
    atualizaStatusBtnSortear(lista, botaoSortear);
}

function criaBotaoRemover(amigo, lista, li, botaoSortear){
    const botaoRemover = document.createElement('img');
    botaoRemover.src = './assets/lixeira.png';
    botaoRemover.alt = 'Remover';
    botaoRemover.style.width = '20px';

    botaoRemover.addEventListener('click', ()=>{
        removerAmigo(amigo, lista, li, botaoSortear)
    })
    return botaoRemover

}

function atualizaStatusBtnSortear(lista, botaoSortear){
    lista.length === 0 ? botaoSortear.setAttribute('disabled', true) : botaoSortear.removeAttribute('disabled');
}