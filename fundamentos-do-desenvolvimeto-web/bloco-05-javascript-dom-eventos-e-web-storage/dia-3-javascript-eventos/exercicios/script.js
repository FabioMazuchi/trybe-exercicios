function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function criandoDiasDoMes() {
	let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
	let diasMes = document.getElementById('days');

	for (let d of dezDaysList) {
		let dia = d;
		let diaLi = document.createElement('li');

		if (dia === 24 || dia === 25 || dia === 31) {
			diaLi.classList.add('holiday');
		}

		if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
			diaLi.classList.add('friday');
		}

		diaLi.classList.add('days');
		diaLi.innerHTML = dia;

		diasMes.appendChild(diaLi);
	}
}

criandoDiasDoMes();

function criaBotao(nomeBotao, id) {
	const botao = document.createElement('button');
	botao.innerHTML = nomeBotao;
	botao.id = id;
	containerBotao = document.querySelector('.buttons-container');

	containerBotao.appendChild(botao);
}

criaBotao('Feriados', 'btn-holiday');

function feriadoBackground() {
	let botao = document.getElementById('btn-holiday');
	cont = 1;

	botao.addEventListener('click', function () {
		let feriados = document.getElementsByClassName('holiday');
		cont++;

		for (let f of feriados) {
			if (cont % 2 == 0) {
				f.style.background = '#ccc';
			} else {
				f.style.background = ''
			}
		}
	});
}

feriadoBackground();

criaBotao('Sexta-feira', 'btn-friday');

function trcaTextoSexta(sextaArray) {
	let btnSexta = document.querySelector('#btn-friday');
	let sextas = document.getElementsByClassName('friday');
	let texto = 'Sextou!';

	btnSexta.addEventListener('click', function () {
		for (let i = 0; i < sextas.length; i++) {
			if (sextas[i].innerHTML !== texto) {
				sextas[i].innerHTML = texto;
			} else {
				sextas[i].innerHTML = sextaArray[i];
			}
		}
	})
};

let sextou = [4, 11, 18, 25];
trcaTextoSexta(sextou);

function zoom() {
	const li = document.getElementsByClassName('days');

	for (let l of li) {
		l.addEventListener('mouseenter', aumenta)
		l.addEventListener('mouseout', diminui)
	}

	function aumenta(e) {
		e.target.style.fontSize = '35px';
	}

	function diminui(e) {
		e.target.style.fontSize = '20px';
	}
}

zoom();

function legenda(tarefa) {
	let span = document.createElement('span');
	let div = document.createElement('div');
	const divPai = document.querySelector('.my-tasks');

	span.innerHTML = tarefa;
	div.classList.add('task');
	div.style.backgroundColor = 'blue';

	divPai.appendChild(span);
	divPai.appendChild(div);
}

legenda('Projeto');

function adicionaClasse() {
	let task = document.querySelector('.task');

	task.addEventListener('click', adiciona);

	function adiciona() {
		task.classList.add = 'selected';
	}
}

adicionaClasse();

function adicionaEvento() {
	let task = document.querySelector('.task');
	let classes = task.classList;
	let contc = 0;

	task.addEventListener('click', function () {
		if (contc % 2 == 0) {
			task.classList.remove(classes[1]);
			contc += 1;
		} else {
			task.classList.add('selected');
			contc += 1;
		}
	})
}

adicionaEvento();

function corLegenda() {
	let legendaSelecionada = document.getElementsByClassName('task');
	let dias = document.querySelector('#days');
	let divtask = document.querySelector('.task');
	let corTask = divtask.style.backgroundColor;

	dias.addEventListener('click', function (e) {
		let corTargetEvento = e.target.style.color;
		if (legendaSelecionada.length > 0 && corTargetEvento !== corTask) {
			let cor = legendaSelecionada[0].style.backgroundColor;
			e.target.style.color = cor;
		} else if (corTargetEvento === corTask && legendaSelecionada.length !== 0) {
			e.target.style.color = 'rgb(119,119,119)';
		}
	});
}

corLegenda();


function adicionarCompromisso() {
	const input = document.querySelector('#task-input');
	const btn = document.getElementById('btn-add');

	input.addEventListener('keydown', pressEnter);
	btn.addEventListener('click', adicionar);


	function pressEnter(event) {
		let teclado = event.key;
		if (teclado === 'Enter') {
			adicionar();

		}
	};

	function adicionar() {
		let compromisso = input.value;
		let li = document.createElement('li');
		let ul = document.querySelector('.task-list');

		li.innerHTML = compromisso;
		if (compromisso === '') {
			alert('Campo compromisso está vazio.')
		} else {
			ul.appendChild(li);
		}
	};
}

adicionarCompromisso();
