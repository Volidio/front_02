// Obtenha dados da altura e o gênero (Masculino ou Feminino) de 15 pessoas e apresente os seguintes resultados:

// - A maior e a menor altura do grupo;
// - A média de altura das pessoas do gênero Masculino;
// - O número de pessoas do gênero Feminino.

// Para o desenvolvimento da atividade o aluno deve utilizar, obrigatoriamente, a linguagem JavaScript.

// Após o término da atividade, o aluno deve disponibilizar o link do seu github com a
// resposta.


let altura = [];
let genero = [];
const PESSOAS = 15;

for (let i = 0; i < PESSOAS; i++) {
    let altura_leitura = parseFloat(prompt("Qual sua altura?"));
    let genero_leitura = prompt("Qual seu gênero (m/f)?");

    altura.push(altura_leitura);
    genero.push(genero_leitura);
}

let ltm = [];
let i = 0;
for (let h of altura) {
    if (genero[i] === "m") {
        ltm.push(altura[i]);
    }
    i++;
}

let maiorAltura = Math.max(...altura);
let menorAltura = Math.min(...altura);
let mediaAlturaHomens = ltm.reduce((sum, current) => sum + current, 0) / ltm.length;
let quantidadeMulheres = PESSOAS - ltm.length;

console.log(`A maior altura é de ${maiorAltura}m e a menor altura é de ${menorAltura}m`);
console.log(`A média da altura dos homens é de ${mediaAlturaHomens.toFixed(2)}m`);
console.log(`A quantidade de mulheres é de ${quantidadeMulheres}`);

