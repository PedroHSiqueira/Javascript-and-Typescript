const express = require("express");
const app = express();

//CRUD => create, read, update, delete

//http://meusite.com/ <- Get -> Entregue a página

//req => requisição
//res => resposta

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text name="nome>
  <button>enviar formulário</button>
  </form>
  `)
})

app.post('/', (req, res) => {
  res.send('recebi o formulário')
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato')
})

app.listen(3000, () => {
  console.log('acesse http://localhost:3000')
  console.log('Servidor executando na porta 3000')
})