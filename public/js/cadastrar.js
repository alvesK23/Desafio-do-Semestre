  function limparFormulario() {
      document.getElementById("form_cadastro").reset();
  }


  var cepVar;
  var localVar;
  var bairroVar;
  var logradouroVar;

  function consulta() {
      cepVar = Inpu_cep.value;

      console.log(cepVar);
      fetch(`https://viacep.com.br/ws/${cepVar}/json/`, {
          method: "GET",
          mode: "cors"
      }).then(function(resposta) {
          resposta.json().then(function(data) {
              console.log(data)
              localVar = data.localidade;
              bairroVar = data.bairro;
              logradouroVar = data.logradouro;
          })
          console.log(resposta)
      }).catch(function(erro) {
          console.log(erro)
      })

  }



  function cadastrar() {
      aguardar();

      var nomeVar = Inpu_nome.value;
      var apelidoVar = Inpu_apelido.value;
      var usuarioVar = Inpu_usuario.value;
      var senhaVar = Inpu_senha.value;
      var emailVar = Inpu_email.value;
      var cepVar = Inpu_cep.value;
      var idadeVar = Inpu_idade.value;
      var prefeVar = Inpu_prefe.value;

      // aqui fica as validações//


      fetch("/usuarios/cadastrar", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              nome: nomeVar,
              apelido: apelidoVar,
              usuario: usuarioVar,
              senha: senhaVar,
              email: emailVar,
              cep: cepVar,
              idade: idadeVar,
              prefe: prefeVar,
              bairro: bairroVar,
              localidade: localVar,
              logradouro: logradouroVar,
          })
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
  }