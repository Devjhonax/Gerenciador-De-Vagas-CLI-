import { carregar } from "./cadastro.js";

// função para buscar a candidatura pelo nome da empresa
const buscarNome = (nome, usuarioLogado) => {
  const candidaturas = carregar();

  // Filtra as candidaturas do usuário logado antes de fazer a busca
  const candidaturasDoUsuario = candidaturas.filter(vaga => vaga.usuario === usuarioLogado);

  const entrada = nome.toUpperCase()
  let encontrada = false

  candidaturasDoUsuario.forEach((vaga) => {
    if (vaga.nomeEmpresa === entrada) {
      encontrada = true
      console.log(`\nId: ${vaga.id}`);
      console.log(`Empresa: ${vaga.nomeEmpresa}`);
      console.log(`Data de inscrição: ${vaga.dataInscricao}`);
      console.log(`Andamento: ${vaga.status}`);
      console.log(`Função desempenhada: ${vaga.cargo}`);
    }
  })

  if (!encontrada) {
    console.log(`Não existe nenhuma candidatura com esse requisito.`);
  }
}

// função para buscar a candidatura pelo cargo
const buscarCargo = (cargo, usuarioLogado) => {
  const candidaturas = carregar();
  const candidaturasDoUsuario = candidaturas.filter(vaga => vaga.usuario === usuarioLogado);

  const entrada = cargo.toUpperCase()
  let encontrado = false

  candidaturasDoUsuario.forEach((vaga) => {
    if (vaga.cargo === entrada) {
      encontrado = true
      console.log(`\nId: ${vaga.id}`);
      console.log(`Empresa: ${vaga.nomeEmpresa}`);
      console.log(`Data de inscrição: ${vaga.dataInscricao}`);
      console.log(`Andamento: ${vaga.status}`);
      console.log(`Função desempenhada: ${vaga.cargo}`);
    }
  })

  if (!encontrado) {
    console.log(`Não existe nenhuma candidatura com esse requisito.`);
  }
}

// função para buscar a candidatura pelo status
const buscarStatus = (status, usuarioLogado) => {
  const candidaturas = carregar();
  const candidaturasDoUsuario = candidaturas.filter(vaga => vaga.usuario === usuarioLogado);

  const entrada = status.toUpperCase()
  let encontrado = false

  candidaturasDoUsuario.forEach((vaga) => {
    if (vaga.status === entrada) {
      encontrado = true
      console.log(`\nId: ${vaga.id}`);
      console.log(`Empresa: ${vaga.nomeEmpresa}`);
      console.log(`Data de inscrição: ${vaga.dataInscricao}`);
      console.log(`Andamento: ${vaga.status}`);
      console.log(`Função desempenhada: ${vaga.cargo}`);
    }
  })

  if (!encontrado) {
    console.log(`Não existe nenhuma candidatura com esse requisito.`);
  }
}

// função para buscar a candidatura pela data de inscrição
const buscarData = (data, usuarioLogado) => {
  const candidaturas = carregar();
  const candidaturasDoUsuario = candidaturas.filter(vaga => vaga.usuario === usuarioLogado);

  let encontrado = false

  candidaturasDoUsuario.forEach((vaga) => {
    if (vaga.dataInscricao === data) {
      encontrado = true
      console.log(`\nId: ${vaga.id}`);
      console.log(`Empresa: ${vaga.nomeEmpresa}`);
      console.log(`Data de inscrição: ${vaga.dataInscricao}`);
      console.log(`Andamento: ${vaga.status}`);
      console.log(`Função desempenhada: ${vaga.cargo}`);
    }
  })

  if (!encontrado) {
    console.log(`Não existe nenhuma candidatura com esse requisito.`);
  }
}

// função para buscar a candidatura pelo id
const buscarId = (id, usuarioLogado) => {
  const candidaturas = carregar();
  const candidaturasDoUsuario = candidaturas.filter(vaga => vaga.usuario === usuarioLogado);

  let encontrado = false

  candidaturasDoUsuario.forEach((vaga) => {
    if (vaga.id === id) {
      encontrado = true
      console.log(`Id: ${vaga.id}`);
      console.log(`Empresa: ${vaga.nomeEmpresa}`);
      console.log(`Data de inscrição: ${vaga.dataInscricao}`);
      console.log(`Andamento: ${vaga.status}`);
      console.log(`Função desempenhada: ${vaga.cargo}`);
    }
  })

  if (!encontrado) {
    console.log(`Não existe nenhuma candidatura com esse requisito.`);
  }
}

export {
  buscarNome,
  buscarCargo,
  buscarStatus,
  buscarData,
  buscarId,
};