const lista =[
    {
        name: 'alface',
        preco: 4,
    },
    {
        name: 'file de frango',
        preco: 18,
    },
    {
        name: "arroz",
        preco: 28,
    }
];

const saldoDisponivel = 80;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));