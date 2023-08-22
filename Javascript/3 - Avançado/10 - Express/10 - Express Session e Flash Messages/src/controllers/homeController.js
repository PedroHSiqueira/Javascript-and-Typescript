const HomeModel = require('../models/homemodel')

HomeModel.create({
  titulo: 'Um título de testes 2',
  descricao: 'Uma descrição de testes 2'
}).then(dados => console.log(dados)).catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
  res.render('index');
  return
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return
};
