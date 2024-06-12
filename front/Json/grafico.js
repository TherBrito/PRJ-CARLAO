google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);
 
function drawCharts() {
    // Primeiro Gráfico
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'http://192.168.14.102:5000/monitoramento/grafico1', true);
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState == 4 && xhr1.status == 200) {
            var response = JSON.parse(xhr1.responseText);
           
            // Converter os dados para o formato adequado
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            response.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });
 
            var data1 = google.visualization.arrayToDataTable(formattedData);
            var options1 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
            chart1.draw(data1, options1);
        }
    };
    xhr1.send();
 
    // Segundo Gráfico
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'http://192.168.14.102:5000/monitoramento/grafico1', true);
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState == 4 && xhr2.status == 200) {
            var response = JSON.parse(xhr2.responseText);
           
            // Converter os dados para o formato adequado
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            response.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });
 
            var data1 = google.visualization.arrayToDataTable(formattedData);
            var options1 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart1 = new google.visualization.BarChart(document.getElementById('piechart2'));
            chart1.draw(data1, options1);
        }
    };
    xhr2.send();

    // var data2 = google.visualization.arrayToDataTable([
    //     ['Task', 'Hours per Day'],
    //     ['Work',     8],
    //     ['Eat',      3],
    //     ['Commute',  2],
    //     ['Watch TV', 3],
    //     ['Sleep',    8]
    // ]);
 
    // var options2 = {
    //     title: 'Totalização de registro por dispositivo (2)'
    // };
 
    // var chart2 = new google.visualization.BarChart(document.getElementById('piechart2'));
    // chart2.draw(data2, options2);
 
    // Terceiro Gráfico
    var xhr3 = new XMLHttpRequest();
    xhr3.open('GET', 'http://192.168.14.102:5000/monitoramento/grafico1', true);
    xhr3.onreadystatechange = function () {
        if (xhr3.readyState == 4 && xhr3.status == 200) {
            var response = JSON.parse(xhr3.responseText);
           
            // Converter os dados para o formato adequado
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            response.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });
 
            var data1 = google.visualization.arrayToDataTable(formattedData);
            var options1 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart1 = new google.visualization.AreaChart(document.getElementById('piechart3'));
            chart1.draw(data1, options1);
        }
    };
    xhr3.send();

    // var data3 = google.visualization.arrayToDataTable([
    //     ['Task', 'Hours per Day'],
    //     ['Work',     9],
    //     ['Eat',      4],
    //     ['Commute',  1],
    //     ['Watch TV', 3],
    //     ['Sleep',    7]
    // ]);
 
    // var options3 = {
    //     title: 'Totalização de registro por dispositivo (3)'
    // };
 
    // var chart3 = new google.visualization.AreaChart(document.getElementById('piechart3'));
    // chart3.draw(data3, options3);
}
 