const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')
//const + o nome da tag html
//document.querySelector é pra buscar e identificar as classes do html
//o que está entre aspas é onde fica o nome da classe que é do html 

let minhaListaDeItens = [] //let é a variavel e o [] é o array que vai possibilitar que
//sejam armazenadas e criadas varias listas de itens

function adicionarNovaTarefa() {
    //minhaListaDeItens.push(input.value) //o push serve pra add algo ao array ou seja
    //o .push vai add algo dentro da variavel minhaListaDEItens que vai poder armazenar as coisas
    // por causa do array que é o [] e isso tudo vai ser gerado por causa do click do button

    minhaListaDeItens.push({
        tarefa: input.value, //tarefa é a div de tarefa, input.value é oq pessoa escreve no input
        concluida: false
        //concluida false é igual a manter a div padrao e normal / conscluida true é mudar a aparencia da div pra concluida,alterando a cor da div e fonte
    })


    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {

    let novaLi = '' //serve pra começar a lista sem nada

    minhaListaDeItens.forEach((item, posicao) => { //o forEach serve pra inteirar cada item do array '[]'
        // 1 por vez
        novaLi = novaLi + ` 
    <li class="task ${item.concluida && "done"}"> 
        <img src="img/check.png" alt="check" onclick='concluirTarefa(${posicao})'>
        <P>${item.tarefa}</P>
        <img src="img/trash.png" alt="trash" onclick='deletarItem(${posicao})'>
    </li> `
        //o $(quando){item.concluida && "done" serve pra se o concluido for verdadeiro, ou seja, concluido de fato, ele vai alterar a div mudando de
        //cor que é o done que foi declarado no css, ele é como uma calsse normal que foi estilizada no css,muda nada
        //novaLi = novaLi + serve pra sempre criar uma tarefa no mesmo padrao só q 1 independente
        //da outra. se nao tivesse o novaLi + ele iria sobreescrever a anterior, ou seja, ele ia
        //criar uma li nova e quando fosse criar outra, ele ia ocupar o lugar da anterior e nao
        //criar duas li independentes
        //esse onclick='deletarItem(${posicao}) serve pra pro sistema localizar a div especifica e deletar só a em que se encontra nessa posiçao

    })

    listaCompleta.innerHTML = novaLi //o innerhtml serve pra add oq eu quiserla no html


    localStorage.setItem('lista', JSON.stringify(mostrarTarefas)) //esse comando serve pra manter as infos do js armazenadas no navegador
    //quando recarregar a pagina
    //o JSON.stringify(...) serve pra transformar objetos em strings
}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida //a exclamaçao serve pra pra inverter oq vai acontecer ao clicar no concluido
    // ou seja, se o concluido no padrao é false, ele passa a ser true no !minhaListaDeItens[posicao].concluida e assim, mudando oq acontece com a div

    mostrarTarefas()

}



function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)  //splice serve pra deletar oq eu quiser dentro do array //esse 1 serve pra identificar quantos itens vao ser apagados
    //1 é igual a posiçao atual que vai ser deletada, se fosse 2, iria deletar a que eu cliquei e a debaixo
    mostrarTarefas()
}


//   function pegarOValorDOInput() {
//    console.log(input.value)
//  }

//o valor do input no caso é o que vai ser escrito dentro do input
//console.log é meio que o backend e é pra armazenar os dasos dentro do sistema da pagina
//o input.value é pra mostrar no console apenas o valor do input, ou seja, oq foi escrito dentro
//do input pelo usuario


button.addEventListener('click', adicionarNovaTarefa)

//o addEventListener vai ficar de olho no botao (button) e toda vez que acontecer algo no botao
//ele será clicado. e toda vez que ele for clicado (click) ele executa uma função (function)
//que é executado apenas quando chamado (pegarOValorDOInput)