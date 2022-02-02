import Ligacao from '../ligacao';
import CalculadoraDeTarifa from '../calculoTarifa';

class TarifaController {
  async store(req, res) {
    const { duracao, dddOrigem, dddDestino, plano } = req.body;

    const ligacao = new Ligacao(
      Number(duracao),
      dddOrigem,
      dddDestino,
      JSON.parse(plano)
    );

    const calculadora = new CalculadoraDeTarifa(ligacao);

    res.send({
      custoLigacaoComPlano: calculadora.calculaValorComPlano().toFixed(2),
      custodaLigacaoSemPlano: calculadora.calcularValorSemPlano().toFixed(2),
    });
  }
}

export default new TarifaController();
