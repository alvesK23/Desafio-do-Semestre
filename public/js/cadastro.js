function limparFormulario() {
    document.getElementById("form_cadastro").reset();
}

function cadastrar() {
    aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_cadastro")));

    var nome = formulario.get("nome");
    var apelido = formulario.get("apelido");
    var email = formulario.get("email");
    var senha = formulario.get("senha");
    var usuario = formulario.get("usuario");
    var cep = formulario.get("cep");
    var idade = formulario.get("idade");
    var preferenciaMusic = formulario.get("prefe");
    var check = accept.checked;
    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (nome == "" || apelido == "" || email == "" || senha == "" || usuario == "" || cep == 0 || idade == 0 || preferenciaMusic == "") {
        window.alert("Preencha todos os campos para prosseguir!");
    }

    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        finalizarAguardar();
        return false;
    }
    if (cep.length <= 7 || cep.length >= 9) {
        window.alert("cep é composto por 8 Digitos!, informe um cep válido!");
        finalizarAguardar();
        return false;
    }
    if (idade < 7) {
        window.alert("Você deve ter pelo menos 7 anos !");
        finalizarAguardar();
        return false;
    }
    if (check == false) {
        window.alert("Ops, aceite nossos termos para continuar.");
        finalizarAguardar();
        return false;
    }




    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function(resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "login.html";
            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function(resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}