class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

    isSequencia(){
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    valida() {
      if(typeof this.cpfLimpo === 'undefined') return false
      if(this.cpfLimpo.length !== 11) return false
      if(this.isSequencia()) return false
    }
  }

  const validacpf = new ValidaCPF('070.987.720-03')
