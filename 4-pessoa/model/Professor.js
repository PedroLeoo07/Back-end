 import Pessoa from "./Pessoa.js"


 class Professor extends Pessoa {
    especialidade

    constructor(nome, idade, especialidade){
        super(nome, idade)
        this.especialidade = especialidade
    }
 }

export default Professor
