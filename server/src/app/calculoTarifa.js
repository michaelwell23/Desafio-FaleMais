const TARIFAS = {
  '011': { '016': 1.9, '017': 1.7, '018': 0.9 },
  '016': { '011': 2.9 },
  '017': { '011': 2.7 },
  '018': { '018': 1.9 },
};

class CalculadoraDeTarifa {
  constructor(ligacao) {
    this.ligacao = ligacao;
    ligacao.plano.acrescimo = 1.1;
  }

  calcularValorSemPlano() {
    return (
      this.ligacao.duracao *
      TARIFAS[this.ligacao.dddOrigem][this.ligacao.dddDestino]
    );
  }

  calculaValorComPlano() {
    if (this.ligacao.duracao <= this.ligacao.plano.franquia) {
      return 0;
    }

    const duracaoSemFranquia =
      this.ligacao.duracao - this.ligacao.plano.franquia;
    return (
      duracaoSemFranquia *
      TARIFAS[this.ligacao.dddOrigem][this.ligacao.dddDestino] *
      this.ligacao.plano.acrescimo
    );
  }
}
module.exports = CalculadoraDeTarifa;
