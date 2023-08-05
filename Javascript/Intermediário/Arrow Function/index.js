// São uma maneira mais curta e moderna de escrever certas funções
//a Sintaxe é (Elemento) => {códigos}

const preco = (produto, valor) => {
  return console.log(`o ${produto} custa R$${valor.toFixed(2)} `)
}

const produto = preco('Celular', 2000)