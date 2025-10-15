import { carregar } from "./cadastro.js";
//listagem de candidatura
const listarCandidaturas = (usuarioLogado) => {
    const candidaturas = carregar();
    const candidaturasDoUsuario = candidaturas.filter(candidatura => candidatura.usuario === usuarioLogado);

    if (candidaturasDoUsuario.length === 0) {
        console.log("Nenhuma candidatura encontrada para este usuário.");
        return;
    }

    console.log("\n=== SUAS CANDIDATURAS ===");
    candidaturasDoUsuario.forEach((candidatura, index) => {
        console.log(`\nCandidatura ${index + 1}:`);
        console.log(`Id: ${candidatura.id}`);
        console.log(`Empresa: ${candidatura.nomeEmpresa}`);
        console.log(`Data de Inscrição: ${candidatura.dataInscricao}`);
        console.log(`Cargo: ${candidatura.cargo}`);
        console.log(`Status: ${candidatura.status}`);
    });
}
export { listarCandidaturas };