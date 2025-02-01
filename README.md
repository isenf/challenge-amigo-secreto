# Gerador de amigo secreto - G8 ONE

> Esse projeto é o primeiro challenge do programa ONE (Oracle Next Education).

## 🚀 Começando

Este projeto consiste na consolidação dos conhecimentos aprendidos nos cursos, focando principalmente na lógica criada usando a linguagem JavaScript.

### Ajustes e melhorias
- [x] Criação de uma interface simples
- [x] Implementação da lógica de programação usando JavaScript
- [x] Melhorias na interface
- [ ] Aperfeitoamento do código
- [ ] Finalização do projeto

## Funcionalidades do projeto
1. **Adicionar amigo**: o usuário pode adicionar um amigo através de um campo de entrada.
2. **Exibir lista**: se o amigo ainda não estiver na lista, o nome dele será exibido nos elementos de uma lista não ordenada.
3. **Remover amigo**: caso o usuário não deseje mais aquele amigo na lista, ele pode removê-lo ao clicar no ícone de 'delete'.
4. **Sortear amigo**: o sistema realiza o sorteio de forma pseudo-aleatória através da função Math.random(). Após sortear um amigo, o botão de "Sortear" se transforma em um botão de "Recomeçar", que recarrega a página e permite adicionar amigos novamente.
5. **Bloqueio de sorteio sem amigos na lista**: o botão de sortear fica desativado se a lista estiver vazia, ele só será ativado quando pelo menos um amigo for adicionado.
6. **Mensagens de erro**: são exibidas quando o usuário tentar adicionar um amigo com o campo vazio ou um nome duplicado.