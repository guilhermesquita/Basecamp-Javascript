const lista =[
    {
        name: 'sabão',
        preço: 30
    },

    {
        name: 'toalha',
        preço: 30
    },

    {
        name: 'cereal',
        preço: 15
    },
]

const saldoDisponivel = 100

function calcSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preço
    }, saldoDisponivel)
}

console.log(calcSaldo(saldoDisponivel, lista))
