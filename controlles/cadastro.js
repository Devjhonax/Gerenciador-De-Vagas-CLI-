import fs from "fs"
const caminho = '../bd/dados.json'

// Função para carregar as candidaturas
const carregar = () => { 
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
const criarCandidatura = (nome, inscricao, statos, cargo) => {
    const candidaturas = carregar();
    candidaturas.push(new Candidatura(nome, inscricao, statos, cargo))
    salvarCandidatura(candidaturas)
    console.log(`candidatura ${nome} salva`);
    
}

criarCandidatura("shutdown", "09/12", "analise", "pleno")