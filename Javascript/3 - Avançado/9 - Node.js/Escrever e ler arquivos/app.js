const path = require('path')
const caminhoArquivo = path.resolve(__dirname, "text.json");
const escrever = require('./modulos/escreve')
const ler = require('./modulos/ler');
const { json } = require('stream/consumers');

// const pessoas = [
//   {nome: 'Pedro'},
//   {nome: 'João'},
//   {nome: 'Carlos' },
//   {nome: 'Gabriel'}
// ]

// const json = JSON.stringify(pessoas, '', 2)

// escrever(caminhoArquivo, json)

async function leArquivo(caminho){
  const dados = await ler(caminhoArquivo)
  renderizaDados(dados)
}

function renderizaDados(dados){
  dados = JSON.parse(dados)
  dados.forEach(valor => console.log(valor));
}

leArquivo(caminhoArquivo)