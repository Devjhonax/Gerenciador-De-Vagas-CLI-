import fs from "fs"
const caminho = './bd/dados.json'

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
    constructor(id, nomeEmpresa, dataInscricao, cargo, status, usuario) {
        this.id = id
        this.nomeEmpresa = nomeEmpresa
        this.dataInscricao = dataInscricao
        this.cargo = cargo
        this.status = status
        this.usuario = usuario
    }
}

// função que salva a candidatura no banco de dados
const criarCandidatura = (nome, inscricao, cargo, status, usuario) => {
    const candidaturas = carregar();
    let id = 0

    if (candidaturas.length === 0) {
        id = 1;
    } else {
        const num = candidaturas.length - 1
        id = candidaturas[num].id + 1
    }

    if (nome === undefined || inscricao === undefined || status === undefined || cargo === undefined || usuario === undefined) {
        console.error("Campo vazio, por favor preencha todos os campos.")
    } else {
        const name = nome.toUpperCase()
        const dataEntrada = inscricao.toString()
        const andamento = status.toUpperCase()
        const setor = cargo.toUpperCase()
        const user = usuario.toUpperCase()

        // checa se a candidatura já existe para o mesmo usuário
        const validarCandidatura = candidaturas.some(candidatura => candidatura.nomeEmpresa === name && candidatura.cargo === setor && candidatura.usuario === user)

        if (validarCandidatura) {
            console.error("Esta candidatura já foi cadastrada por este usuário.")
            return;
        } else {
            candidaturas.push(new Candidatura(id, name, dataEntrada, setor, andamento, user))
            salvarCandidatura(candidaturas)
            console.log("Sua candidatura foi salva com sucesso!");
        }
    }
}
export { carregar, salvarCandidatura, criarCandidatura };