// Importa a classe Conta do arquivo Conta.js
import Conta from "./model/Conta.js";

// Cria uma nova instância da classe Conta com o número de conta 123
const minhaConta = new Conta(123);

// Chama o método info() que retorna uma string, mas não exibe porque o valor não foi passado para o console
minhaConta.info(); // Este código não exibirá nada no console pois falta o console.log()

// console.log(minhaConta.#saldo); // Erro: Propriedade privada não pode ser acessada fora da classe

// Exibe o objeto completo da conta no console, incluindo a propriedade pública numeroConta
console.log(minhaConta);
