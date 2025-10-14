import { carregar } from "./cadastro.js";

// Carrega todas as candidaturas cadastradas
const candidaturas = carregar();

if (candidaturas.length === 0) {
  console.log("Não existe nenhuma candidatura cadastrada para buscar.");
}

// função para buscar a candidatura pelo nome da empresa
const buscarNome = (nome) => {
  const entrada = nome.toUpperCase()
  let encontrada = false

  candidaturas.forEach((vaga) => {
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
const buscarCargo = (cargo) => {
  const entrada = cargo.toUpperCase()
  let encontrado = false

  candidaturas.forEach((vaga) => {
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
const buscarStatus = (status) => {
  const entrada = status.toUpperCase()
  let encontrado = false

  candidaturas.forEach((vaga) => {
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
const buscarData = (data) => {
  let encontrado = false

  candidaturas.forEach((vaga) => {
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
const buscarId = (id) => {
  let encontrado = false

  candidaturas.forEach((vaga) => {
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

const buscar = {
  buscarNome,
  buscarCargo,
  buscarStatus,
  buscarData,
  buscarId,
};

export { buscar };
