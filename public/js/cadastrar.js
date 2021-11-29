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
      var escolha = combo.value;


      // aqui fica as validações//
      // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
      if (nomeVar == "" || apelidoVar == "" || emailVar == "" ||
          senhaVar == "" || usuarioVar == "" || cepVar == "" || idadeVar == "") {

          window.alert("Preencha todos os campos para prosseguir!");
          if (nomeVar == "") {
              console.log('nome está em branco')
          }
          if (apelidoVar == "") {
              console.log('apelido está em branco')
          }
          if (emailVar == "") {
              console.log('email está em branco')
          }
          if (senhaVar == "") {
              console.log('senha está em branco')
          }
          if (cepVar == "") {
              console.log('cep está em branco')
          }
          if (idadeVar == "") {
              console.log('idade está em branco')
          }


          finalizarAguardar();
          return false;
      }

      if (emailVar.indexOf("@gmail.com") == -1 & emailVar.indexOf("@yahoo.com") == -1 & emailVar.indexOf("@hotmail.com") == -1 & emailVar.indexOf("@bandtec.com") == -1) {
          window.alert("Ops, e-mail inválido ,lembre-se de informar um e-mail das paltaformas: google,yahoo,hotmail,bandtec. Verifique e tente novamente.");
          finalizarAguardar();
          return false;
      }
      if (cepVar.length <= 7 || cepVar.length >= 9) {
          window.alert("cep é composto por 8 Digitos!, informe um cep válido!");
          finalizarAguardar();
          return false;
      }


      if (apelidoVar == senhaVar) {
          window.alert("Seu Apelido não pode ser igual a sua senha!");
          finalizarAguardar();
          return false;
      }



      // fim validações //

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
              generoM: escolha,
              bairro: bairroVar,
              localidade: localVar,
              logradouro: logradouroVar,
          })
      }).then(function(resposta) {

          console.log("resposta: ", resposta);

          if (resposta.ok) {
              window.alert("Cadastro realizado com sucesso!");
              window.location = "index.html#loginmodel";
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