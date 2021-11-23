create database bielmusic;
use bielmusic;
create table cadastro (
idusuario int primary key auto_increment,
nome varchar(100),
apelido varchar(20),
email varchar(200),
senha varchar(200),
usuario varchar(200),
cep char(8),
idade int,
preferenciaMusic varchar(50),
criacao_conta timestamp default current_timestamp(),
bairro varchar(300),
localidade  varchar(200),
fotoperfil varchar(500))auto_increment = 1;

