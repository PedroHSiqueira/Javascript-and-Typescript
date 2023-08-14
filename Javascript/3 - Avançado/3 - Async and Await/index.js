//Gerador de numero aleatórios para o timeout

function aleatorio(min = 0, max = 3) {
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
      resolve(msg + " - Passei na Promise");
    }, tempo);
  });
}

async function executar() {
  // uso do try para conseguirmos usar o catch em todas promises de uma vez
  // AWAIT faz a função pausar a execução e aguardar uma promessa resolvida antes de continuar:

  try {
    const fase1 = await timeout("Fase 1", aleatorio());
    console.log(fase1);

    const fase2 = await timeout("Fase 2", aleatorio());
    console.log(fase2);

    const fase3 = await timeout("Fase 3", aleatorio());
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}

executar();
