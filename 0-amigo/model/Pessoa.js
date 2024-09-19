// Define a classe Pessoa

class Pessoa {
  nome; // Nome do pessoa
  idade; // Idade do pessoa

  // Construtor que inicializa as propriedades nome e idade
  constructor(nome, idade) {
      this.nome = nome; // Define o nome do pessoa
      this.idade = idade; // Define a idade do pessoa
  }
}
// Exporta a classe Pessoa para uso em outros módulos
export default Pessoa;
