// Usando Spread em Arrays

const frutas = ["banana", "maçã", "laranja"];

//o spread operator copia os elementos de um determinado espaço na memória para
//para um novo local

const novoEstoque = [...frutas, "tangerina"];

console.log(frutas);
console.log(novoEstoque);


// Usando Spread em Objetos

const mateus = {
  nome: 'mateus',
  idade: 18,
  endereços: [{ endereço: "AV. Bento Gonçalves", cidade: "Pelotas" }],
};

//o spread operator copia os elementos de um determinado espaço na memória para
//para um novo local e reescreve se for necessário

const julia = {
  ...mateus,
  nome: 'julia',
  idade: 12
}

console.log(mateus)
console.log(julia)
