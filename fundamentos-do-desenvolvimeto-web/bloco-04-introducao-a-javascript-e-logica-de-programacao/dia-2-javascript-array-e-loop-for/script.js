// ///// EXERCÍCIO 01 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let number of numbers) {
//   console.log(number);
// }


// ///// EXERCÍCIO 02 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0;

// for (let number of numbers) {
//   soma += number;
// }

// console.log(soma);


// ///// EXERCÍCIO 03 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0;
// let tamanhoNumber = numbers.length;
// let mediaAritmetica = 0;

// for (let number of numbers) {
//   mediaAritmetica += number / tamanhoNumber;
// }

// console.log(mediaAritmetica);


// /////// EXERCÍCIO 04 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0;
// let tamanhoNumber = numbers.length;
// let mediaAritmetica = 0;

// for (let number of numbers) {
//   mediaAritmetica += number / tamanhoNumber;
// }

// if (mediaAritmetica > 20)
//   console.log('valor maior que 20');
// else
//   console.log('valor menor ou igual a 20');


// /////// EXERCÍCIO 05 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let maior = 0;

// for (let number of numbers) {
//   if (number > maior) {
//     maior = number;
//   }
// }

// console.log(maior);


// /////// EXERCÍCIO 06 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let contImpar = 0;

// for (let number of numbers) {
//   if (number % 2 == 1) {
//     contImpar += 1;
//   }
// }

// if (contImpar == 0)
//   console.log('nenhum valor ímpar encontrado :(');
// else
//   console.log(contImpar);


// /////// EXERCÍCIO 07 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let menor = numbers[0];

// for (let number of numbers) {
//   if (number < menor) {
//     menor = number;
//   }
// }

// console.log(menor);


// /////// EXERCÍCIO 08 ////////
// for (let i = 1; i <= 25; i += 1) {
//   console.log(i);
// }


// // /////// EXERCÍCIO 09 ////////
// for (let i = 1; i <= 25; i += 1) {
//   console.log(i / 2);
// }


// ============ BÔNUS ============

/////// EXERCÍCIO 01 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);


/////// EXERCÍCIO 02 ////////
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);


/////// EXERCÍCIO 03 ////////
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplica = [];
let ultimo = numbers.length - 1;

for (let index = 0; index < numbers.length; index += 1) {
	let n;
	if (numbers[index] == numbers[ultimo]) {
		n = numbers[index] * 2;
		multiplica.push(n);
	} else {
		n = numbers[index] * numbers[index + 1];
		multiplica.push(n);
	}
}

console.log(multiplica);