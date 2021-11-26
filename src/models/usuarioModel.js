var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM cadastro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function entrar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha)
    var instrucao = `
        SELECT * FROM cadastro WHERE usuario = '${usuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, apelido, email, usuario, senha, idade, cep, logradouro, bairro, localidade) {
    var instrucao = `
        INSERT INTO endereco (bairro, localidade, logradouro, cep) 
        VALUES ('${bairro}', '${localidade}', '${logradouro}', ${cep});`

    tableusuario(nome, apelido, email, usuario, senha, idade, cep)

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tableusuario(nome, apelido, email, usuario, senha, idade, cep) {
    var instrucao2 = `
        INSERT INTO usuario (nome, apelido, email, usuario, senha, Nascimento, FkIdEndereco) 
        VALUES ('${nome}', '${apelido}', '${email}', '${usuario}', '${senha}', '${idade}',
        (select idEndereco from endereco where cep = ${cep}));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao2);
}



function fotoo(foto, ID) {

    var instrucao = `UPDATE cadastro set fotoperfil='${foto}' where idusuario = ${ID}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    fotoo,

};