import Pessoa from "./Pessoa.js"


class Aluno extends Pessoa{
    constructor(nome, idade, objetivo, turma){

        super(nome, idade)
        this.objetivo = objetivo
        this.turma = turma
        }
}

export default Aluno