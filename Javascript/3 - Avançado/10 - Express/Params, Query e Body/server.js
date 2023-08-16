const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}))

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

app.get("/testes/:idUsuarios?/:parametros?", (req, res) => {
  //mostra os parametros da url
  console.log(req.params)

  //mostra query strings 
  // ex: abc.com/?nome=Pedro

  console.log(req.query)
  res.send(req.query.nome)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('recebi o formulário')
})

app.listen(3000, () => {
  console.log('acesse http://localhost:3000')
  console.log('Servidor executando na porta 3000')
})