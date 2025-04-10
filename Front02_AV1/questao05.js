function calcularCirculo() {
    let raio = parseFloat(prompt("Digite o raio do círculo:"));
    
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    alert("Área do círculo: " + area.toFixed(2) +
          "\nPerímetro do círculo: " + perimetro.toFixed(2));
}

calcularCirculo();
