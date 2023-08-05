//Gerador de numeros aleatórios para serem usados nos setTimeout

function numeroAleatorio(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

//foi colocado um tempo para execução, e se a função receber outra em seu parâmetro 
//ela será executada logo após finalizar a função atual, por conta do if

function f1(callback) {
  setTimeout(function () {
    console.log("Primeiro");
    if (callback) callback();
  }, numeroAleatorio());
}

function f2(callback) {
  setTimeout(function () {
    console.log("Segundo");
    if (callback) callback();
  }, numeroAleatorio());
}

function f3(callback) {
  setTimeout(function () {
    console.log("Terceiro");
    if (callback) callback();
  }, numeroAleatorio());
}

//assim que termina uma função a outra já é chamada automaticamente

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Finalizado");
}
