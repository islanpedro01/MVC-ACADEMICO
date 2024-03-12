class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nomeD");
        const codigoElemento = document.querySelector("#codigo");
        const disciplinaInserida = this.servico.inserir(codigoElemento.value,nomeElemento.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHTML(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHTML(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Código: ${disciplina.código}`;
        elementoDestino.appendChild(disciplinaElemento);
    }


}
