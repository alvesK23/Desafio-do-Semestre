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


function cadastrar(nome, apelido, email, usuario, senha, idade, fotopadrao, bairro, localidade, logradouro, cep, generoM) {
    var instrucao = `
        INSERT INTO usuario (nome, apelido, email, usuario, senha, Nascimento, fotoperfil,bairro,localidade,logradouro,cep,Fkpreferencia) 
        VALUES ('${nome}', '${apelido}', '${email}', '${usuario}', '${senha}', '${idade}', '${fotopadrao}' , '${bairro}', '${localidade}','${logradouro}', '${cep}',
        (select id from preferenciaMusic where GeneroMusical = '${generoM}'));
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function fotoo(foto, ID) {

    var instrucao = `UPDATE usuario set fotoperfil='${foto}' where id = ${ID}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




function grafrics() {
    instrucao = `select count(GeneroMusical) as quantia, a.GeneroMusical from usuario as u 
    join preferenciaMusic as a where u.Fkpreferencia = a.id group by a.GeneroMusical;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function altersenha(senhaNova, ID) {

    var instrucao = `UPDATE usuario set senha='${senhaNova}' where id = ${ID}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    fotoo,
    grafrics,
    altersenha
};