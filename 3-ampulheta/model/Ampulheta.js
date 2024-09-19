
class Ampulheta{
   nomePessoa

    constructor(nomePessoa){
    this.nomePessoa = nomePessoa
    }

    voltarNoTempo(){
        const inicioTempo = Date.now()
        console.log(`${this.nomePessoa} voltou no tempo...`)

        this.pausar(3000)
        this.pausar(6000)

        const fimTempo = Date.now()
        const tempoTotal =(fimTempo - inicioTempo / 1000)
        console.log(`${this.nomePessoa} voltou no tempo... ${tempoTotal} segundos`)
    }
        
        pausar(tempoMs) {
        const espera = Date.now()
        console.log(`Passou pela camada do tempo em ${espera}.`)
        while (Date.now() - espera < tempoMs){}
        console.log(`E retornou no tempo de ${Date.now()}.`)
    }
}

export default Ampulheta
// criar o construtor da classe

// criar os métodos da classe (se eles existirem)

// exportar a classe para uso modular