function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

//Criando os Métodos
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

//Link dos Prototypes
Camiseta.prototype = Object.create(Produto.prototype);

//Alterando o Construtor ao estado Original
Camiseta.prototype.constructor = Camiseta;

//Sobrescrevendo o método aumento
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

//Caneca

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta("Regata", 20, "Preto");
camiseta.aumento(10);
console.log(camiseta);

const caneca = new Caneca("Caneca", 8, "Porcelana", 5);
console.log(caneca);
