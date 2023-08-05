//há 3 maneiras de se declarar um Variável em Javascript


//a VAR têm escopo de função e podem ser redeclaradas

var elemento = 'carbono'

elemento = 'cobalto'

console.log(elemento) // cobalto

//a LET têm escopo de bloco e também podem ser redeclaradas

let carro = 'Chevrolet'

carro = 'Renault'

console.log(carro) // Renault

// a CONST também escopo de bloco, mas não pode ser redeclarada

const fruta = 'laranja'

fruta = 'pera'

console.log(fruta) // Erro