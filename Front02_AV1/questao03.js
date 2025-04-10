let quantidade = parseInt(prompt("Quantos números você vai digitar?"));

let numeros = [];
let soma = 0;
let menor, maior;

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt("Digite o número " + (i+1) + ":"));
    numeros.push(numero);
    soma += numero;

    if (i === 0) {
        menor = numero;
        maior = numero;
    } else {
        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
    }
}

alert("Menor valor: " + menor + 
      "\nMaior valor: " + maior + 
      "\nSoma dos valores: " + soma);
