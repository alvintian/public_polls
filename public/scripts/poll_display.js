//adding Js to implement a doughnut graph needs to able to take data from database
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [ ],
    datasets: [{
      backgroundColor: [
        "#0060B2",
        "#FF9C00",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: []
    }]
  }
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
addData(myChart, labels, data);



