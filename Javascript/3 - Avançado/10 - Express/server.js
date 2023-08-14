const express = require("express");
const app = express();

//CRUD => create, read, update, delete

//http://meusite.com/ <- Get -> Entregue a página

//req => requisição
//res => resposta

app.get('/', (req, res) => {
  res.send('Hello, World')
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato')
})

app.listen(3000, () => {
  console.log('acesse http://localhost:3000')
  console.log('Servidor executando na porta 3000')
})