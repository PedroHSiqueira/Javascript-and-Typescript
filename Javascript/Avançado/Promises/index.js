//Gerador de numero aleatórios para o timeout

function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

//Resolve = quando a promise funcionar
//reject = quando der algum erro

function timeout(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Carácter inválido");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

//o THEN só funcionará quando o RESOLVE for executado
timeout("Inicializando...", aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return timeout("Conectando...", aleatorio(1, 3));

    //encadeamento
  })
  .then((resposta) => {
    console.log(resposta);
    return timeout("Preparativos Finais...", aleatorio(1, 3));

    // outro encadeamento
  })
  .then((resposta) => {
    console.log(resposta);
    return timeout(true, aleatorio(1, 3));

    //o CATCH só funcionará quando o REJECT for executado
  })
  .catch((e) => {
    console.log('ERRO: ', e);
  });
