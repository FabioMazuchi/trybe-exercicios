/*

5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!

*/

let info = {
	personagem: 'Margarida',
	origem: 'Pato Donald',
	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
	recorrente: 'Sim'
};

let info1 = {
	personagem: 'Tio Patinhas',
	origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
	nota: 'O último MacPatinhas',
	recorrente: 'Sim'
}

for (let key in info) {
		if(key == 'recorrente') {
			continue;
		}else {
			console.log(info[key] + ' e ' + info1[key]);
		}
}

if(info['recorrente'] == 'Sim' && info1['recorrente'] == 'Sim') {
	console.log('Ambos recorrentes');	
}

