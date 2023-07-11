const paragrafo = document.querySelector('.paragrafos')
const todosParagrafos = paragrafo.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for(let p of todosParagrafos){
  p.style.backgroundColor = backgroundColorBody
  p.style.color = 'white'
}