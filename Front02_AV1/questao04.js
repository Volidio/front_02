let salario = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let anoAtual = new Date().getFullYear();
let percentual = 0.0015; 

for (let ano = 1996; ano <= anoAtual; ano++) {
    salario += salario * percentual;

    if (ano >= 1997) {
        percentual *= 2;
    }
}

alert("Salário atual em " + anoAtual + ": R$ " + salario.toFixed(2));
