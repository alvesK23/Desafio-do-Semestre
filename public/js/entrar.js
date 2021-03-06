function limparFormulario() {
    document.getElementById("form_login").reset();
}

function entrar() {
    aguardar();

    var usuarioVar = usuario_input.value;
    var senhaVar = senha_input.value;

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (usuarioVar == "" || senhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        finalizarAguardar();
        return false;
    }



    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuarioVar,
            senha: senhaVar,
        })
    }).then(function(resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.USUARIO_USUARIO = json.usuario;
                sessionStorage.APELIDO_USUARIO = json.apelido;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.FOTOPERFIL_USUARIO = json.fotoperfil;
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NASC_USUARIO = json.Nascimento;
                sessionStorage.CRIACAOC_USUARIO = json.criacao_conta;
                sessionStorage.BAIRRO_USUARIO = json.bairro;
                sessionStorage.LOGRADOURO_USUARIO = json.logradouro;
                sessionStorage.SENHA_USUARIO = json.senha;

                setTimeout(function() {
                    window.location = "./dashboard/login.html";
                }, 11); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function(erro) {
        console.log(erro);
    })

    return false;
}