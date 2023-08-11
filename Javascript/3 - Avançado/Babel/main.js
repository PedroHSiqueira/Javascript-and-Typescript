/*babel é um compilador de códigos, ele é usado para converter o codigo Javascript para
uma versão mais antiga, fazendo com que navegadores que não possuem suporte a versão atual
consigam ler o código*/

const nome = "Pedro";

const objeto = { nome };

const novoObjeto = { ...objeto };

const carro = ['sandero']

console.log(novoObjeto)
