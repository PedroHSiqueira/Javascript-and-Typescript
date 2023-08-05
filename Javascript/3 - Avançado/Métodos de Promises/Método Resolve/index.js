//Gerador de numero aleatórios para o timeout

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function timeout(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Carácter inválido");
    setTimeout(() => {
      resolve(msg + " - Passei");
    }, tempo);
  });
}

// o método Resolve retorna um objeto Promise que é resolvido com o valor passado

function baixarPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return timeout("Baixei a página", 3000);
  }
}

baixarPagina()
  .then((dadosPagina) => console.log(dadosPagina))
  .catch((erro) => console.log(erro));
