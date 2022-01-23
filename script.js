const botao = document.querySelector('#criar-tarefa');
const inputt = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
let elementList = document.querySelector('.elementList');

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