exports.paginaInicial = (req, res) => {
  console.log('respondendo cliente ...')
  res.render('index');
  return
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return
};
