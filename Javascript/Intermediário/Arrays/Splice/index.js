//método splice para remover elementos do array, modificando o  original

const numeros = [1, 2, 3, 4, 5]

numeros.splice(3, 2)

console.log(numeros) // [1, 2, 3]

//método splice para adicionar elementos do array, modificando o  original

const cores = [ 'verde', 'rosa', 'azul', 'laranja']

cores.splice(4, 0, 'amarelo')

console.log(cores) // [ 'verde', 'rosa', 'azul', 'laranja', amarelo]

/*para usar o splice sem mudar o original basta atribuir ele a uma variável 
como no exemplo a seguir

const adicionar = cores.splice(4, 0, 'amarelo')
*/ 