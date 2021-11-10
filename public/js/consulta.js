function consulta() {
    var cep = input_cep.value;
    var dataJson;
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: "GET",
        mode: "cors"
    }).then(function(resposta) {
        resposta.json().then(function(data) {
            console.log(data)
            dataJson = data;
        })
        console.log(resposta)
    }).catch(function(erro) {
        console.log(erro)
    })
    return dataJson;
}
module.exports = consulta();