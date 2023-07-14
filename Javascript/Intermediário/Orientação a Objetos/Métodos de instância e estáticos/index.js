class ControleRemoto {
  constructor(marca){
    this.marca = marca
    this.volume = 0
  }

  //Método de Instância
  VolumeUp(){
    this.volume += 2
  }

  VolumeDown(){
    this.volume -= 2
  }

  //Método Estático = eles são chamados na própria classe
  static Substituir(){
    console.log(`Indo Trocar o controle`)
  }
}

const controle = new ControleRemoto('TCL')

//Chamado direto na classe pai 
ControleRemoto.Substituir()
console.log(controle)