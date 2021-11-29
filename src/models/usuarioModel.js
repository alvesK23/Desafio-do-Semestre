var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function entrar(usuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", usuario, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE usuario = '${usuario}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, apelido, email, usuario, senha, idade, cep, logradouro, bairro, localidade, fotopadrao, generoM, iddapreferencia) {
    var instrucao = `
        INSERT INTO endereco (bairro, localidade, logradouro, cep) 
        VALUES ('${bairro}', '${localidade}', '${logradouro}', '${cep}');`

    tableusuario(nome, apelido, email, usuario, senha, idade, cep, fotopadrao, generoM, iddapreferencia)

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tableusuario(nome, apelido, email, usuario, senha, idade, cep, fotopadrao, generoM, iddapreferencia) {
    var instrucao = `
        INSERT INTO usuario (nome, apelido, email, usuario, senha, Nascimento, fotoperfil, FkIdEndereco) 
        VALUES ('${nome}', '${apelido}', '${email}', '${usuario}', '${senha}', '${idade}', '${fotopadrao}',
        (select idEndereco from endereco ORDER BY idEndereco DESC LIMIT 1));
    `;
    preferencia(generoM, iddapreferencia)

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function preferencia(generoM, iddapreferencia) {
    var instrucao = `
        INSERT INTO preferenciamusic (idpreferenciaMusic, GeneroMusical, FkIdusuario) 
        VALUES (${iddapreferencia},'${generoM}', (select idusuario from usuario  ORDER BY idusuario DESC LIMIT 1));
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function fotoo(foto, ID) {

    var instrucao = `UPDATE usuario set fotoperfil='${foto}' where idusuario = ${ID}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    entrar,
    cadastrar,
    listar,
    fotoo,

};