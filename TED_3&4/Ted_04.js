function calcularTotal(precoUnitario,quantidade){
    return precoUnitario*quantidade;
}
function descontar(precoTotal){
    if(precoTotal>100){
        return precoTotal*0.9
    }
    else{
        return console.log("sem desconto chefe")
    }
}

function resumo(precoUnitario,quantidade){


    let precoTotal=calcularTotal(precoUnitario,quantidade);
    let precoDesconto=descontar(precoTotal)

    alert(`Resumo da compra:\n
       valor antes do desconto:  ${precoTotal}\n
       valor descontado:  ${precoDesconto}`);
   
}

let precoUnitario = parseFloat(prompt("informe o preço: "))
let quantidade = parseInt(prompt("quantidade do produto: "))

resumo(precoUnitario,quantidade)
