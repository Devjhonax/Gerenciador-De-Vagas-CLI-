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
                const status = readlineSync.question("Status (EX: NAO INICIOU, APROVADO, REPROVADO): ");
                criarCandidatura(nomeEmpresa, dataInscricao, cargo, status, usuarioLogado);
                break;
            case '3':
                console.log("\n--- OPÇÕES DE BUSCA ---");
                console.log("a. Buscar por Empresa");
                console.log("b. Buscar por Cargo");
                console.log("c. Buscar por Status");
                console.log("d. Buscar por Data");
                console.log("e. Buscar por ID");
                const opcaoBusca = readlineSync.question("Escolha a opcao de busca: ");

                switch (opcaoBusca) {
                    case 'a':
                        const nomeBusca = readlineSync.question("Digite o nome da empresa: ");
                        buscarNome(nomeBusca, usuarioLogado);
                        break;
                    case 'b':
                        const cargoBusca = readlineSync.question("Digite o cargo: ");
                        buscarCargo(cargoBusca, usuarioLogado);
                        break;
                    case 'c':
                        const statusBusca = readlineSync.question("Digite o status: ");
                        buscarStatus(statusBusca, usuarioLogado);
                        break;
                    case 'd':
                        const dataBusca = readlineSync.question("Digite a data (DD/MM): ");
                        buscarData(dataBusca, usuarioLogado);
                        break;
                    case 'e':
                        const idBusca = readlineSync.questionInt("Digite o ID: ");
                        buscarId(idBusca, usuarioLogado);
                        break;
                    default:
                        console.log("Opcao de busca invalida.");
                }
                break;
            case '4':
                const idAtualizar = readlineSync.questionInt("Digite o ID da candidatura para atualizar: ");
                const novoStatus = readlineSync.question("Digite o novo status: ");
                atualizar(idAtualizar, novoStatus, usuarioLogado);
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
        makeUsers(nome, email, senha);
        console.log("\nPor favor, faça login com a sua nova conta.");
        const nomeLogin = readlineSync.question("Digite seu nome de usuario: ");
        const senhaLogin = readlineSync.question("Digite sua senha: ");

        if (verifyUser(nomeLogin, senhaLogin)) {
            console.log("\nLogin realizado com sucesso!");
            iniciarPainel(nomeLogin.toUpperCase());
        } else {
            console.log("\nNome de usuario ou senha incorretos.");
        }
    } else {
        console.log("Opcao invalida. Reinicie o programa para tentar novamente.");
    }
};

menu();