import fs from "fs"
const caminho = '../bd/usuarios.json'

// Função para carregar os usuários
const carregar = () => {
    if (fs.existsSync(caminho)) {
        return JSON.parse(fs.readFileSync(caminho, "utf-8"));
    }
    return []
}

// Função para salvar os usuários
const saveUser = (dados) => {
    fs.writeFileSync(caminho, JSON.stringify(dados, null, 2), "utf8");
}

// class usuários
class User {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password
    }
}

// função que salva o usuário no banco de dados
const makeUsers = (name, email, password) => {
    const users = carregar();

    if (name === undefined || email === undefined || password === undefined) {
        console.error("Campo vazio, por favor preencha todos os campos.")
    } else {
        const nome = name.toUpperCase()
        const eMail = email.toUpperCase()
        const senha = password.toString()

        const validarUsuario = users.some(user => user.name === nome || user.email === eMail)

        if (validarUsuario) {
            console.error("Nome de usuário ou email já existente.")
            return;
        } else {
            users.push(new User(nome, eMail, senha))
            saveUser(users)
            console.log("Usuário criado com sucesso!");
        }
    }
}

const CadastroUsuarios = { carregar, makeUsers };
export { CadastroUsuarios };