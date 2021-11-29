// sessão
function validarSessao() {
    // aguardar();

    var usuario = sessionStorage.USUARIO_USUARIO;
    var apelido = sessionStorage.APELIDO_USUARIO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (usuario != null && apelido != null) {
        //window.alert(`Seja bem-vindo, ${apelido}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = usuario;
        }
        b_usuario.innerHTML = apelido;

        // finalizarAguardar();
    } else {
        window.location = "../index.html#loginmodel";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../index.html";
}


// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}