import fs from "fs";
import readline from "readline";

const arquivo = "./bd/dados.json";

// Função para ler os dados de candidaturas
export function lerCandidatura() {
    const conteudo = fs.readFileSync(arquivo, "utf-8");
    const candidatura = JSON.parse(conteudo);
    return candidatura;
}

// Função de apagar candidatura pelo nome
export function apagarCandidaturaPorNome(nome, usuarioLogado) {
    const candidaturas = lerCandidatura();
    const nomeApagar = nome.toUpperCase();

    // Encontrar todas as candidaturas que correspondem ao nome E ao usuário logado
    const candidaturasParaApagar = candidaturas.filter(
        (vaga) => vaga.nomeEmpresa.toUpperCase() === nomeApagar && vaga.usuario === usuarioLogado.toUpperCase()
    );

    if (candidaturasParaApagar.length === 0) {
        console.log("Nenhuma candidatura encontrada com este nome para o seu usuário.");
        return;
    }

    if (candidaturasParaApagar.length > 1) {
        console.log("Há mais de uma candidatura com este nome para o seu usuário.");
        console.log("Por favor, digite o ID da candidatura que deseja apagar.");

        candidaturasParaApagar.forEach((vaga) => {
            console.log(`ID: ${vaga.id}, Empresa: ${vaga.nomeEmpresa}, Cargo: ${vaga.cargo}`);
        });

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("Digite o ID para apagar: ", (idParaApagar) => {
            const novaLista = candidaturas.filter(
                (vaga) => vaga.id != idParaApagar || vaga.usuario !== usuarioLogado.toUpperCase()
            );
            fs.writeFileSync(arquivo, JSON.stringify(novaLista, null, 2), "utf-8");
            console.log("Candidatura apagada com sucesso.");
            rl.close();
        });
    } else {
        // Se houver apenas uma, apagar diretamente
        const novaLista = candidaturas.filter(
            (vaga) => vaga.nomeEmpresa.toUpperCase() !== nomeApagar || vaga.usuario !== usuarioLogado.toUpperCase()
        );
        fs.writeFileSync(arquivo, JSON.stringify(novaLista, null, 2), "utf-8");
        console.log("Candidatura apagada com sucesso.");
    }
}