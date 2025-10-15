import readlineSync from 'readline-sync';

// Importa todas as funcionalidades dos arquivos de controle
import { criarCandidatura } from './controlles/cadastro.js';
import { listarCandidaturas } from './controlles/listagem-de-candidatura.js';
import { atualizar } from './controlles/atualizar.js';
import { buscarNome, buscarCargo, buscarStatus, buscarData, buscarId } from './controlles/buscar.js';
import { verifyUser } from './controlles/validacaoUser.js';
import { makeUsers } from './controlles/cadastroUsers.js';
import { apagarCandidaturaPorNome } from './controlles/delete.js';

// Função principal que exibe o menu e controla a navegação
const mostrarMenuPrincipal = () => {
    console.log("\n--- PAINEL DO GERENCIADOR DE VAGAS ---");
    console.log("1. Listar todas as candidaturas");
    console.log("2. Cadastrar nova candidatura");
    console.log("3. Buscar candidatura");
    console.log("4. Atualizar status de uma candidatura");
    console.log("5. Excluir candidatura");
    console.log("6. Sair");
    console.log("---------------------------------------");
};

// Lógica para executar as ações do painel
const iniciarPainel = (usuarioLogado) => {
    let continuar = true;

    while (continuar) {
        mostrarMenuPrincipal();
        const opcao = readlineSync.question("Escolha uma opcao: ");

        switch (opcao) {
            case '1':
                listarCandidaturas(usuarioLogado);
                break;
            case '2':
                const nomeEmpresa = readlineSync.question("Nome da Empresa: ");
                const dataInscricao = readlineSync.question("Data de Inscricao (DD/MM): ");
                const cargo = readlineSync.question("Cargo: ");
                console.log(`Status da vaga:`);
                console.log(`1- NAO INICIOU`);
                console.log(`2- APROVADO`);
                console.log(`3- REPROVADO`);
                let status = ''
                const perguntaStatus = readlineSync.question("Digite a opcao correspondente: ");
                switch (perguntaStatus) {
                    case '1':
                        status = "NAO INICIOU"
                        criarCandidatura(nomeEmpresa, dataInscricao, cargo, status, usuarioLogado);
                        break;
                    case '2':
                        status = "APROVADO"
                        criarCandidatura(nomeEmpresa, dataInscricao, cargo, status, usuarioLogado);
                        break;
                    case '3':
                        status = "REPROVADO"
                        criarCandidatura(nomeEmpresa, dataInscricao, cargo, status, usuarioLogado);
                        break;
                    default:
                        console.log("Por favor escolha uma opção valida. Tente novamente.");
                        break;
                }
                break;
            case '3':
                console.log("\n--- OPÇÕES DE BUSCA ---");
                console.log("1- Buscar por Empresa");
                console.log("2- Buscar por Cargo");
                console.log("3- Buscar por Status");
                console.log("4- Buscar por Data");
                console.log("5- Buscar por ID");
                const opcaoBusca = readlineSync.question("Escolha a opcao de busca: ");

                switch (opcaoBusca) {
                    case '1':
                        const nomeBusca = readlineSync.question("Digite o nome da empresa: ");
                        buscarNome(nomeBusca, usuarioLogado);
                        break;
                    case '2':
                        const cargoBusca = readlineSync.question("Digite o cargo: ");
                        buscarCargo(cargoBusca, usuarioLogado);
                        break;
                    case '3':
                        const statusBusca = readlineSync.question("Digite o status: ");
                        buscarStatus(statusBusca, usuarioLogado);
                        break;
                    case '4':
                        const dataBusca = readlineSync.question("Digite a data (DD/MM): ");
                        buscarData(dataBusca, usuarioLogado);
                        break;
                    case '5':
                        const idBusca = readlineSync.questionInt("Digite o ID: ");
                        buscarId(idBusca, usuarioLogado);
                        break;
                    default:
                        console.log("Opcao de busca invalida.");
                }
                break;
            case '4':
                const idAtualizar = readlineSync.questionInt("Digite o ID da candidatura para atualizar: ");
                buscarId(idAtualizar, usuarioLogado);
                console.log(`\nStatus da vaga:`);
                console.log(`1- NAO INICIOU`);
                console.log(`2- APROVADO`);
                console.log(`3- REPROVADO`);
                const novoStatus = readlineSync.question("Digite o novo status: ");
                let newStt = ''
                switch (novoStatus) {
                    case '1':
                        newStt = "NAO INICIOU"
                        atualizar(idAtualizar, newStt, usuarioLogado);
                        break;
                    case '2':
                        newStt = "APROVADO"
                        atualizar(idAtualizar, newStt, usuarioLogado);
                        break;
                    case '3':
                        newStt = "REPROVADO"
                        atualizar(idAtualizar, newStt, usuarioLogado);
                        break;
                    default:
                        console.log("Por favor escolha uma opção valida. Tente novamente.");
                        break;
                }
                break;
            case '5': // Lógica para exclusão
                const nomeEmpresaApagar = readlineSync.question("Digite o nome da empresa para apagar a candidatura: ");
                apagarCandidaturaPorNome(nomeEmpresaApagar, usuarioLogado);
                break;
            case '6':
                console.log("Saindo do gerenciador. Ate mais!");
                continuar = false;
                break;
            default:
                console.log("Opcao invalida. Por favor, tente novamente.");
        }
    }
};

// Lógica de autenticação inicial
const menu = () => {
    console.log("\n--- BEM-VINDO AO GERENCIADOR DE VAGAS ---");
    console.log("Para usar o sistema, faça login ou crie uma conta.");
    const opcaoLogin = readlineSync.question("1. Login\n2. Criar Nova Conta\nEscolha uma opcao: ");

    if (opcaoLogin === '1') {
        const nome = readlineSync.question("Digite seu nome de usuario: ");
        const senha = readlineSync.question("Digite sua senha: ");

        if (verifyUser(nome, senha)) {
            console.log("\nLogin realizado com sucesso!");
            iniciarPainel(nome.toUpperCase());
        } else {
            console.log("\nNome de usuario ou senha incorretos.");
        }
    } else if (opcaoLogin === '2') {
        const nome = readlineSync.question("Digite o nome de usuario desejado: ");
        const email = readlineSync.question("Digite o email: ");
        const senha = readlineSync.question("Digite a senha: ");
        if (makeUsers(nome, email, senha)) {
            iniciarPainel(nome.toUpperCase());
        }
    }
};

menu();