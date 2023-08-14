//Gerador de numero aleatórios para o timeout

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function timeout(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Carácter inválido");
      return;
    }

    setTimeout(() => {
      resolve(msg + " - Passei");
    }, tempo);
  });
}

// o método all já entrega um array com todas as promises resolvidas

const promises = [
  timeout("Primeiro", aleatorio(1, 5)),
  timeout("Segundo", aleatorio(1, 5)),
  timeout("Terceiro", aleatorio(1, 5)),
  timeout("Quarto", aleatorio(1, 5)),
  timeout("Quinto", aleatorio(1, 5)),
];

// como já foi visto, o THEN pode ser escrito com Arrow Function ( => )

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });
