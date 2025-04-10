let quantidadePares = 0;
let quantidadeImpares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite um número inteiro (" + (i+1) + " de 10):"));

    if (numero % 2 === 0) {
        quantidadePares++;
    } else {
        quantidadeImpares++;
    }
}

alert("Quantidade de números pares: " + quantidadePares + "\nQuantidade de números ímpares: " + quantidadeImpares);
