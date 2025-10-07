import { carregar } from "./cadastro.js";

// Carrega todas as candidaturas cadastradas
const candidaturas = carregar();
if (candidaturas.length === 0) {
  console.log("Nenhuma candidatura cadastrada.");
  process.exit(); 
}

// Mostra as opções de busca 
console.log("\nEscolha uma opção:");
console.log("[1] Buscar por nome da empresa:");
console.log("[2] Buscar por cargo:");
console.log("[3] Buscar por status:");
console.log("[4] Buscar por data de inscrição:");

process.stdout.write("Digite a opção: ");
process.stdin.resume(); 
process.stdin.setEncoding("utf-8");

// Escolha do tipo de busca
process.stdin.once("data", (opcao) => {
  const escolha = opcao.trim();
  if (!["1", "2", "3", "4"].includes(escolha)) {
    console.log("Opção inválida. Tente novamente.");
    process.stdin.pause();
    return;
  }

// Pede o que quer encontrar
  process.stdout.write("Digite o status que deseja: ");
  process.stdin.once("data", (entrada) => {
    const busca = entrada.trim().toLowerCase();
    if (!busca) {
      console.log("Você precisa digitar algo para continuar.");
      process.stdin.pause();
      return;
    }
// Busca as candidaturas 
    const resultados = candidaturas.filter((c) =>
      (escolha === "1" && c.nomeEmpresa.toLowerCase().includes(busca)) ||
      (escolha === "2" && c.cargo.toLowerCase().includes(busca)) ||
      (escolha === "3" && c.status.toLowerCase().includes(busca)) ||
      (escolha === "4" && c.dataInscricao.toLowerCase().includes(busca))
    );
// Mostra os resultados da busca
    if (resultados.length === 0) {
      console.log("Nenhuma candidatura encontrada.");
    } else {
      console.log("\nCandidaturas encontradas:");
      resultados.forEach((c, i) => {
        console.log(`\nCandidatura ${i + 1}`);
        console.log(`Empresa: ${c.nomeEmpresa}`);
        console.log(`Data de Inscrição: ${c.dataInscricao}`);
        console.log(`Status: ${c.status}`);
        console.log(`Cargo: ${c.cargo}`);
      });
    }

    process.stdin.pause(); 
  });
});
