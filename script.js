const botao = document.querySelector('#criar-tarefa');
const inputt = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
let elementList = document.querySelector('.elementList');
const botaoApaga = document.querySelector('#apaga-tudo');
const botaoCompletado = document.querySelector('#remover-finalizados');
let cssCompleted = document.querySelector('.completed');


const addTarefa = () => {
    const criacaoElemento = document.createElement('li');
    criacaoElemento.innerText = inputt.value;
    criacaoElemento.className = 'elementList';
    lista.appendChild(criacaoElemento);
    inputt.value = '';
};

botao.addEventListener('click', addTarefa);

function colorGrey(e) {
    const selecionarElemento = document.querySelector('.bgColor');
    if (selecionarElemento) {
        selecionarElemento.classList.remove('bgColor');
    }
    e.target.classList.add('bgColor');
}


lista.addEventListener('click', colorGrey);


function completed(e) {
    e.target.classList.toggle('completed');
}

lista.addEventListener('dblclick', completed);

function limpador() {
    while (lista.firstChild) {
        lista.firstChild.remove();
    }
}

botaoApaga.addEventListener('click', limpador);


function eraserDone() {
    let finalizado = document.querySelectorAll('li');

    for (let i = 0; i < finalizado.length; i ++) {
        if (finalizado[i].classList.contains('completed')) {
            finalizado[i].remove('completed');
        }
    }
}