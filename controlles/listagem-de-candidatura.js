import { carregar } from "./cadastro.js";

//listagem de candidatura
const listarCandidaturas = () => {
    const candidaturas = carregar();
    
    if (candidaturas.length === 0) {
        console.log("Nenhuma candidatura encontrada.");
        return;
    }
    
    console.log("\n=== LISTA DE CANDIDATURAS ===");
    candidaturas.forEach((candidatura, index) => {
        console.log(`\nCandidatura ${index + 1}:`);
        console.log(`Empresa: ${candidatura.nomeEmpresa}`);
        console.log(`Data de Inscrição: ${candidatura.dataInscricao}`);
        console.log(`Status: ${candidatura.status}`);
        console.log(`Cargo: ${candidatura.cargo}`);
    });

}
listarCandidaturas();