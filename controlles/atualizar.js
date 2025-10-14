import { carregar, salvarCandidatura } from "./cadastro.js";

const dados = carregar()

const atualizar = (id, novoAndamento) => {
  const posicao = dados.findIndex(el => el.id === id)

  if (posicao === -1) {
    console.error(`Candidatura não encontrada`)
  } else {
    dados[posicao].status = novoAndamento.toUpperCase()
    console.log(`deu tudo certo`);
    salvarCandidatura(dados)
  }
}