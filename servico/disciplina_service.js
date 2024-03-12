class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(código, nome) {
        const disciplinaPesquisada = this.pesquisarPorCódigo(código);
        if (disciplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(código,nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCódigo(código) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.código === código);
    }

    remover(código) {
        this.repositorio.remover(código);
    }

    inserirAlunoNaDisciplina(matricula, código) {
        const alunoPesquisado = AlunoService.pesquisarPorMatricula(matricula);
        const disciplinaPesquisada = this.pesquisarPorCódigo(código);
        if (!alunoPesquisado.length > 0){
            throw new Error('Aluno não encontrado!');
        }
        if (!disciplinaPesquisada.length > 0){
            throw new Error('Disciplina não encontrada!');
        }
        disciplinaPesquisada[0].insereAluno(alunoPesquisado[0])

    }
}