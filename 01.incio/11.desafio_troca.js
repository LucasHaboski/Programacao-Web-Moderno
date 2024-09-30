// O desafio consiste em realizar uma troca de valores de duas variaveis

let a = 20;
let b = 55;
let aux = 0; // variavel auxiliar para realizar a troca de valores

console.log("Numeros antes da troca: ");
console.log("a = " + a);
console.log("b = " + b);

aux = a;
a = b;
b = aux;

console.log("\nNumeros depois da troca: ");
console.log("a = " + a);
console.log("b = " + b);

//Outra forma:
//[a, b] = [b, a]