function calcularInvestimento() {
    let capital = parseFloat(prompt("Digite o capital inicial investido (R$):"));
    let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
    let tempo = parseInt(prompt("Digite o tempo do investimento (em meses):"));

    let taxaDecimal = taxa / 100;

    let montante = capital * Math.pow(1 + taxaDecimal, tempo);

    alert("O montante ao final do investimento será de R$ " + montante.toFixed(2));
}

calcularInvestimento();
