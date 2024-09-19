// Classe Conta.js

class Conta {
  numeroConta; // Número da conta
  #saldo; // Saldo da conta (privado)

  // Construtor que inicializa o número da conta e o saldo
  constructor(numeroConta) {
    this.numeroConta = numeroConta; // Define o número da conta
    this.#saldo = 0; // Inicializa o saldo como 0
  }

  // Método para depositar um valor na conta
  depositar(valor) {
    this.#saldo += valor; // Adiciona o valor ao saldo atual
  }

  // Método para retornar informações da conta, formatando o saldo em BRL (R$)
  info() {
    // Formata o saldo fixando duas casas decimais
    let saldoFinal = "R$ " + this.#saldo.toFixed(2);

    // Retorna uma string contendo o número da conta e o saldo formatado
    return `Conta ${this.numeroConta} com saldo de ${saldoFinal}`;
  }
}

// Exporta a classe Conta para ser usada em outros módulos
export default Conta;
