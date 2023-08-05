//Gerador de numero aleatórios para o timeout

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function timeout(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Carácter inválido");
        return;
      }
      resolve(msg + " - Passei");
    }, tempo);
  });
}

// o método RACE sempre retornará o primeiro valor que for finalizado

const promises = [
  timeout("Primeiro", aleatorio(1, 5)),
  timeout("Segundo", aleatorio(1, 5)),
  timeout("Terceiro", aleatorio(1, 5)),
  timeout("Quarto", aleatorio(1, 5)),
  timeout(true, aleatorio(1, 5)),
];

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });
