// Define a classe Carro

class Carro {
  marca; // Propriedade para armazenar a marca do carro
  ano; // Propriedade para armazenar o ano do carro

  // Construtor que inicializa as propriedades marca e ano
  constructor(marca, ano) {
    this.marca = marca; // Atribui a marca do carro
    this.ano = ano; // Atribui o ano do carro
  }

  // Método que exibe informações do carro no console
  info() {
    console.log(
      `Carro construído da marca ${this.marca} do ano ${this.ano} 🚙`
    );
  }
}

// Exporta a classe Carro para ser utilizada em outros módulos
export default Carro;
