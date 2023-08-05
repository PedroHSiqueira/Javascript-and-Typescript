//O método forEach() executa uma dada função em cada elemento de um array.

const cores = ['amarelo', 'verde', 'rosa']

cores.forEach(function(value, indice, array){
  console.log(value, indice, array)
})


// também pode ser usado para somar valores

const numero = [10, 20, 30, 40, 50]
let total = 0

numero.forEach( (valor) => {
  total += valor
})

console.log(`total: ${total}`)
