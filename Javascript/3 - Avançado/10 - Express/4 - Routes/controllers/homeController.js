exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="qualquercoisa"><br>
  Sobrenome: <input type="text" name="aquioutrocampo">
  <button>Enviar</button>
  </form>
  `);
};

exports.trataPost = (req, res) => {
  res.send('Rota de POST.');
};