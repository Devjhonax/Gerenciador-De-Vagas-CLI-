import fs from "fs"
const caminho = '../bd/dados.json'

// Função para carregar as candidaturas
const carregar = () => {
    if (fs.existsSync(caminho)) {
        return JSON.parse(fs.readFileSync(caminho, "utf-8"));
    }
    return []
}

// Função para salvar as candidaturas
const salvarCandidatura = (dados) => {
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 2), "utf8");
}

// class de candidatura 
class Candidatura {
    constructor(id, nomeEmpresa, dataInscricao, cargo, status) {
        this.id = id
        this.nomeEmpresa = nomeEmpresa
        this.dataInscricao = dataInscricao
        this.cargo = cargo
        this.status = status
    }
}

// função que salva a candidatura no banco de dados
const criarCandidatura = (nome, inscricao, cargo, status) => {
    const candidaturas = carregar();
    let id = 0

    if (candidaturas.length === 0) {

    } else {
        const num = candidaturas.length - 1
        id = candidaturas[num].id + 1
    }

    if (nome === undefined || inscricao === undefined || status === undefined || cargo === undefined) {
        console.error("Campo vazio, por favor preencha todos os campos.")
    } else {
        const name = nome.toUpperCase()
        const dataEntrada = inscricao.toString()
        const andamento = status.toUpperCase()
        const setor = cargo.toUpperCase()

        const validarCandidatura = candidaturas.some(candidatura => candidatura.nomeEmpresa === name && candidatura.cargo === setor)

        if (validarCandidatura) {
            console.error("Esta candidatura já foi cadastrada.")
            return;
        } else {
            candidaturas.push(new Candidatura(id, name, dataEntrada, setor, andamento))
            salvarCandidatura(candidaturas)
            console.log("Sua candidatura foi salva com sucesso!");
        }
    }
}
const candidaturas = { carregar, salvarCandidatura, criarCandidatura };
export { candidaturas };