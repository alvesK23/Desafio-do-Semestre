SELECT * FROM db_groupmusic.usuario;

create database Db_Groupmusic;
use Db_Groupmusic;

create table endereco (
idEndereco int primary key,
bairro varchar(200),
localidade varchar(200),
logradouro varchar(200),
cep int
);
create table usuario (
idusuario int primary key auto_increment,
nome varchar(100),
apelido varchar(20),
email varchar(200),
usuario varchar(200),
senha varchar(200),
Nascimento date,
criacao_conta timestamp default current_timestamp(),
FkIdEndereco int,
foreign key (FkIdEndereco) references endereco(idEndereco)
)auto_increment = 1000;

create table FotoPerfil(
idfotoPerfil int primary key auto_increment,
FkIdcadastro int,
foreign key (FkIdcadastro) references usuario(idusuario),
Link_FtSalva varchar(2000));


create table preferenciaMusic (
idpreferenciaMusic int,
GeneroMusical varchar(200),
primary key (idpreferenciaMusic , FkIdusuario),
FkIdusuario int ,
foreign key (FkIdusuario) references usuario(idusuario));

create table Musicas (
FkGeneroMusic int primary key,
foreign key (FkGeneroMusic) references preferenciaMusic(idpreferenciaMusic),
QtdLike int,
codMusica varchar(400));