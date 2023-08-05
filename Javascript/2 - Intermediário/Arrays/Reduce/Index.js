const numeros = [10, 20, 30, 40, 50]

const total = numeros.reduce(function (acumulador, valor){
  acumulador += valor
  return acumulador
},0)

console.log(total)