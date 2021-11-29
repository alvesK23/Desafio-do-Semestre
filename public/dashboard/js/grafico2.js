// Inicia uma variável do tipo constante (não pode ser reatribuida)


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