class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }

    this.ligado = false;
  }
}

//Uma extensão da Classe Pai // Herança 
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }

  android(){
    console.log(`Android 9`)
  }
}

const smartphone = new Smartphone('Xiaomi', 'preto', 'Note 6')
console.log(smartphone)
