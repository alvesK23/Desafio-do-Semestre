create database Db_Groupmusic;
use Db_Groupmusic;
create table preferenciaMusic (
id int primary key auto_increment,
GeneroMusical varchar(200));

insert into preferenciaMusic values (null, 'funk'),
									(null , 'samba'),
                                    (null , 'forro'),
                                    (null , 'trap'),
                                    (null , 'rap'),
                                    (null , 'eletronica');


create table usuario (
id int primary key auto_increment,
nome varchar(100),
apelido varchar(20),
email varchar(200),
usuario varchar(200),
senha varchar(200),
Nascimento date,
criacao_conta timestamp default current_timestamp(),
fotoperfil varchar(2000),
bairro varchar(200),
localidade varchar(200),
logradouro varchar(200),
cep varchar(40),
Fkpreferencia int,
foreign key (Fkpreferencia) references preferenciaMusic(id))auto_increment = 1000;
