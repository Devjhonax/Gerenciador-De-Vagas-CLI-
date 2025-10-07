import { log } from "console";
import fs from "fs"
const caminho = '../bd/dados.json'

// Função para carregar as candidaturas
export const carregar = () => { 
    if(fs.existsSync(caminho)){
        return JSON.parse(fs.readFileSync(caminho, "utf-8"));
    }
    return []
}

// Função para salvar as candidaturas
const salvarCandidatura = (dados)=>{
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 2), "utf8");
}

// class de candidatura 
class Candidatura {
    constructor(nomeEmpresa, dataInscricao, status, cargo) {
        this.nomeEmpresa = nomeEmpresa
        this.dataInscricao = dataInscricao
        this.status = status
        this.cargo = cargo
    }
}

// função que salva a candidatura no banco de dados
const criarCandidatura = (nome, inscricao, status, cargo) => {
    const candidaturas = carregar();

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
            candidaturas.push(new Candidatura(name, dataEntrada, andamento, setor))
            salvarCandidatura(candidaturas)
            console.log("Sua candidatura foi salva com sucesso!");
        }
    }
}

criarCandidatura("Legado", "06/10", "Em Analise", "backend")

