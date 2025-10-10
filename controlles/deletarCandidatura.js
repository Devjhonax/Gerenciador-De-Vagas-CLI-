import fs from "fs";
import readline from "readline";

const arquivo = "../bd/dados.json";

//Função para ler os dados de candidaturas:

export function lerCandidatura(){
    const conteudo = fs.readFileSync(arquivo, "utf-8");
    const candidatura = JSON.parse(conteudo);
    return candidatura;
}

//Função apagar candidatura pelo nome:

export function apagarCandidaturaPorNome(nome){
    const candidatura = lerCandidatura();
    const nomeApagar = nome.toUpperCase();

    // verificar se tem nomes repetidos

    let quantNome = 0;

    for (let i = 0; i < candidatura.length; i++){
        if (candidatura[i].nomeEmpresa.toUpperCase() === nome.toUpperCase()){
            quantNome++;
        }
    }
    if (quantNome > 1){
        candidatura.forEach((elemento, indice) => {
            if (elemento.nomeEmpresa.toUpperCase() === nome.toUpperCase()){
                console.log(`Id: ${indice + 1}\nnome da empresa: ${elemento.nomeEmpresa}\ndata de inscrição: ${elemento.dataInscricao}\nstatus: ${elemento.status}\ncargo: ${elemento.cargo}\n`);
            }
        });
    }
    if (quantNome > 1) {
        console.log("Existe mais de uma candidatura com o mesmo nome, por favor, selecione apagar por id\n")
        return;
    }

    const novasCandidaturas = candidatura.filter(elemento => elemento.nomeEmpresa.toUpperCase() !== nomeApagar);

    // verificar se foi apagado

    if (novasCandidaturas.length === candidatura.length){
        console.log("Empresa não encontrada");
    }
    else {
        const novosDados = JSON.stringify(novasCandidaturas, null, 2);
        fs.writeFileSync(arquivo, novosDados);
        console.log("Apagada com sucesso");
    }
    return;
}
//apagar pela posição

export function apagarCandidaturaPorId(idRemover){
    const candidatura = lerCandidatura();
    const posicao = Number(idRemover);

    const novasCandidaturas = candidatura.filter(elemento => elemento.id !== idRemover);

    if (novasCandidaturas.length === candidatura.length){
        console.log("Empresa não encontrada");
    }
    else {
        const novosDados = JSON.stringify(novasCandidaturas, null, 2);
        fs.writeFileSync(arquivo, novosDados);
        console.log("Apagado com sucesso");
    }
}
