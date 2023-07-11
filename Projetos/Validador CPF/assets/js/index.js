function validaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

validaCPF.prototype.valida = function () {
  //Validações Iniciais
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  //removendo os 2 últimos dígitos do CPF
  const cpfParcial = this.cpfLimpo.slice(0, -2);

  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

validaCPF.prototype.criaDigito = function (cpfParcial) {
  //Transformando em um Array
  const cpfArray = Array.from(cpfParcial);

  //fazendo o calculo
  let regressivo = cpfArray.length + 1;
  let total = cpfArray.reduce((acumulador, valor) => {
    acumulador += regressivo * Number(valor);
    regressivo--;
    return acumulador;
  }, 0);

  //Calculando e verificando o Dígito
  const digito = 11 - (total % 11);

  // convertendo para String
  return digito > 9 ? "0" : String(digito);
};

validaCPF.prototype.isSequencia = function (){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequencia === this.cpfLimpo
}

const cpf = new validaCPF("705.484.450-52");

if(cpf.valida()){
  console.log(`CPF válido`)
}else{
  console.log(`CPF inválido`)
}