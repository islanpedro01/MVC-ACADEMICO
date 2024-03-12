class Disciplina{

    constructor(código, nome){
        this._código = código;
        this._nome = nome;
        this.alunos = [];
    }

     get código(){
        return this._código;
    }

    get nome(){
        return this._nome;
    }

    set código(cod){
        this._código = cod;
    }

    set nome(nome){
        this._nome = nome;
    }
    
   insereAluno(aluno){
       this.alunos.push(aluno);
    }
}