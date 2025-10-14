import { carregar } from "./cadastroUsers.js";

const users = carregar();

// função para validar usuários.
const verifyUser = (nome, senha) => {
    const nameUser = nome.toUpperCase()
    const password = senha.toString()
    
    return users.some( account => 
        account.name === nameUser && account.password === password
    ); // retorna o resultado, se o usuário existir retorna true, se não retorna false.
}
 