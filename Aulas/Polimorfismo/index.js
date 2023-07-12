function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log("Saldo insuficiente");
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo()
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/C: ${this.agencia}/${this.conta} | Saldo: ${this.saldo.toFixed(2)}`
  );
};

// Conta Corrente

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function (valor) {
  if ( valor > (this.saldo  + this.limite)) {
    console.log("Saldo insuficiente");
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

//Conta Poupança

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


// Resultado do Polimorfismo 
// O método retorna um resultado diferente mesmo tendo a mesma função e nome

const cc = new CC(11, 22, 0, 100)
cc.depositar(100)
cc.sacar(110)

console.log('='.repeat(10))

const cp = new CP(11, 22, 0)
cp.depositar(100)
cp.sacar(110)