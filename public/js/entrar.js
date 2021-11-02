 function limparFormulario() {
     document.getElementById("form_login").reset();
 }

 function entrar() {
     aguardar();

     var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

     var usuario = formulario.get("usuario");
     var senha = formulario.get("senha");

     console.log("FORM LOGIN: ", usuario);
     console.log("FORM SENHA: ", senha);

     // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
     if (usuario == "" || senha == "") {
         window.alert("Preencha todos os campos para prosseguir!");
         finalizarAguardar();
         return false;
     }



     fetch("/usuarios/autenticar", {
         method: "POST",
         body: formulario
     }).then(function(resposta) {
         console.log("ESTOU NO THEN DO entrar()!")

         if (resposta.ok) {
             console.log(resposta);

             resposta.json().then(json => {
                 console.log(json);
                 console.log(JSON.stringify(json));

                 sessionStorage.EMAIL_USUARIO = json.email;
                 sessionStorage.NOME_USUARIO = json.nome;
                 sessionStorage.ID_USUARIO = json.id;

                 setTimeout(function() {
                     window.location = "./dashboard/cards.html";
                 }, 1000); // apenas para exibir o loading

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