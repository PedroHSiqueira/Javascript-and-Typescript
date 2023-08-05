//1° maneira

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//   dateStyle: 'full',
//   timeStyle: 'short'
// }

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes)


//2° maneira

const exibir = document.querySelector('h1')
const data = new Date();

function getNomeMeses (numeroMes){
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  return meses[numeroMes]
}

function getDiasSemana (diaSemana){
  const dia = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
  return dia[diaSemana]
}

exibir.innerHTML = `${getDiasSemana(data.getDay())}, ${data.getDate()} de ${getNomeMeses(data.getMonth())} de ${data.getFullYear()}`


