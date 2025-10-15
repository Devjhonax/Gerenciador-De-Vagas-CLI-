import { carregar, salvarCandidatura } from "./cadastro.js";

// Carrega os dados no início do arquivo para que a constante 'dados' seja a mesma
const dados = carregar();

const atualizar = (id, novoAndamento, usuarioLogado) => {
  // Adicione a verificação do usuário na busca da posição
  const posicao = dados.findIndex(el => el.id === id && el.usuario === usuarioLogado);

  if (posicao === -1) {
    // Mensagem de erro mais específica para o usuário
    console.error(`Candidatura não encontrada ou você não tem permissão para alterá-la.`);
  } else {
    dados[posicao].status = novoAndamento.toUpperCase();
    console.log(`Candidatura atualizada com sucesso!`);
    salvarCandidatura(dados);
  }
}
export { atualizar };