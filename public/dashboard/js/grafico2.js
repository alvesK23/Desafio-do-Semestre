// Inicia uma variável do tipo constante (não pode ser reatribuida)


window.onload = obterDadosGrafico(1);


//verificar_autenticacao();

// altere aqui como os dados serão exibidos
// e como são recuperados do BackEnd
function obterDadosGrafico(idAquario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/usuarios/ultimas/${idAquario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, idAquario);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}

// só altere aqui se souber o que está fazendo!
function plotarGrafico(resposta, idAquario) {
    console.log('iniciando plotagem do gráfico...');

    var dados = {
        labels: [],
        datasets: [
            {
                yAxisID: 'y-umidade',
                label: 'Umidade',
                borderColor: '#32B9CD',
                backgroundColor: '#32b9cd8f',
                fill: true,
                data: []
            },
            {
                yAxisID: 'y-temperatura',
                label: 'Temperatura',
                borderColor: '#FFF',
                backgroundColor: '#32b9cd8f',
                fill: true,
                data: []
            }
        ]
    };

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        dados.labels.push(registro.momento_grafico);
        dados.datasets[0].data.push(registro.umidade);
        dados.datasets[1].data.push(registro.temperatura);
    }

    console.log(JSON.stringify(dados));

    var ctx = canvas_grafico.getContext('2d');
    window.grafico_linha = Chart.Line(ctx, {
        data: dados,
        //Configurações do gráfico
        options: {
            responsive: true,
            animation: { duration: 500 },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Histórico recente de umidade/temperatura'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                        min: 0
                    }
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-umidade',
                    ticks: {
                        beginAtZero: true,
                        max: 100,
                        min: 0
                    },

                    gridLines: {
                        drawOnChartArea: false,
                    },
                }],
            }
        }
    });
}



const config2 = {
    type: "bar", // tipo do gráfico
    data: { // objeto que vai conter os dados do gráfico
        labels: ["Samba", "Rap", "Trap", "Funk", "Eletronica"], // labels (rótulos) que serão identificados os nossos dados 
        datasets: [ // datasets (conjunto de dados)
            {
                label: "gênero musicais mais cadastrados:", // irá conter o rótulo principal do nosso gráfico
                data: [1711, 1539, 2585, 2499, 2498], // os dados referentes aqueles rótulos
                backgroundColor: "#9cf0e1", // cor das "bolinhas" do gráfico
                borderColor: "#e2cb00" // cor da "linha" do gráfico
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