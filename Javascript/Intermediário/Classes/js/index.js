class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  //O método já é enviado para o prototype automaticamente

  falar() {
    console.log(`${this.nome} está falando`);
  }
}

const pessoa = new Pessoa("Pedro", "Siqueira");
console.log(pessoa);
