const dados = require("./dados");
let maiorFaturamento = 0, menorFaturamento = dados[0].valor, somaFaturamento = 0, contaDiasValidos = 0

dados.forEach((item) => {
    //Pegando o maior faturamento
    if(item.valor > maiorFaturamento){
        maiorFaturamento = item.valor
    }
    //Pegando o menor faturamento
    if(item.valor < menorFaturamento && item.valor > 0){
        menorFaturamento = item.valor
    }
    
    //Soma do total faturamento para calcular a média de faturamento do mês
    if(item.valor > 0){
        somaFaturamento = somaFaturamento + item.valor
        contaDiasValidos++
    }
})

console.log(`Maior valor de faturamento ocorrido em um dia do mês: ${maiorFaturamento}`)
console.log(`Maior valor de faturamento ocorrido em um dia do mês: ${menorFaturamento}`)

let diasAcimaMediaFaturamento = 0
const mediaFaturamentoMensal = somaFaturamento/contaDiasValidos

dados.forEach((item) => {
    if(item.valor > mediaFaturamentoMensal) diasAcimaMediaFaturamento++;
})

console.log(`Quantidade de dias com faturamento acima da média mensal: ${diasAcimaMediaFaturamento}`)
