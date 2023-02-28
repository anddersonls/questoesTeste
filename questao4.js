const estadosFaturamento = [
    {
        estado: 'SP',
        faturamento: 67836.43
    },
    {
        estado: 'RJ',
        faturamento: 36678.66
    },
    {
        estado: 'MG',
        faturamento: 29229.88
    },
    {
        estado: 'ES',
        faturamento: 27165.48
    },
    {
        estado: 'outros',
        faturamento: 19849.53
    }
]

let faturamentoTotal = 0
estadosFaturamento.forEach((item) => {
    faturamentoTotal = faturamentoTotal + item.faturamento
})

estadosFaturamento.forEach((item) => {
    let porcentagemFaturamento = (100*item.faturamento)/faturamentoTotal
    console.log(`Estado: ${item.estado}, Porcentagem em relação ao faturamento: ${porcentagemFaturamento.toFixed(2)}%`)
})