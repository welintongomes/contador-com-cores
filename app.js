/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
/*variável que será usada para alterar o texto do h1*/
let valor = 0
/*crie uma constante para fazer modificaçoes
buscando onde está o valor que vamos alterar no caso é no h1 
que está no html e tem uma ID valor*/
const h1_valor =  document.querySelector('#valor');

document.querySelector('#btn_decremento').addEventListener('click', ()=>{
    if(valor == -10)return;
    h1_valor.textContent = --valor;
    /*chamando a funçao*/
    set_valor()
})
document.querySelector('#btn_incremento').addEventListener('click', ()=>{
    if(valor == 10)return;
    /*incrementando a variavel valor quando clica no botão*/
    h1_valor.textContent = ++valor;
    /*chamando a função, ela vai atualizando o valor na variavel valor*/
    set_valor()
})
/*cria uma função para modificar o valor de h1*/
function set_valor(){
    
    /*como o if e simples nao presisa colocar as açoes entre aspas se tivessemos mais açoes a ser executadas teria que ser entre {}*/
    /*se o valor for exatamente igual a 0 tipo e valor vamos mudar o stylo color para branco*/
    if(valor === 0) h1_valor.style.color = "white"
    /*senão for o de cima mais for este aqui quando valor for maior que 0 mude a cor para verde*/
    else if(valor > 0) h1_valor.style.color = "green"
    /*caso contrario se nao for nen 0 e nen maior que 0 será negativo entao mude a cor para vermelho*/
    else h1_valor.style.color = "red"

}
