fetch("/usuarios/graficos").then(function(res) {
    res.json().then(function(json) {
        console.log(json);
        var GeneroMusical = []
        var quantia = []
        for (let index = 0; index < json.length; index++) {
            GeneroMusical.push(json[index].GeneroMusical);
            quantia.push(json[index].quantia);
        }

        // Inicia uma variável do tipo constante (não pode ser reatribuida)
        const config2 = {
            type: "bar", // tipo do gráfico
            data: { // objeto que vai conter os dados do gráfico
                labels: GeneroMusical, // labels (rótulos) que serão identificados os nossos dados 
                datasets: [ // datasets (conjunto de dados)
                    {
                        label: "Genero musical mais popular", // irá conter o rótulo principal do nosso gráfico
                        data: quantia, // os dados referentes aqueles rótulos
                        backgroundColor: "#2196F3", // cor das "bolinhas" do gráfico
                        borderColor: "#3F51B5" // cor da "linha" do gráfico
                    }
                ]
            },
            options: {
                maintainAspectRatio: false
                    /* maintainAspectRatio (manter relação de aspecto) 
                      caso true: ele "obdece" a altura e largura que colocamos
                      caso false: ele não "obdece" a altura e largura que colocamos e se ajusta ao componente pai
                    */
            }
        }

        var myChartLine = new Chart(document.getElementById("myChart2"), config2);
        /* aqui obrigatoriamente tem que colocar new Chart() para criar um novo chart 
        e passar dentro dos (parênteses) o elemento canvas que você quer mandar e 
        separado pela virgula o que você quer mandar, no nosso caso a config que fizemos 
        */





    })
}).catch(function(erro) {
    console.log(erro);
})