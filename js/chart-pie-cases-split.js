// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart
function drawPieChart(percentData){
  var ctx = document.getElementById("casesSplitWorldWide");
  var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Active", "Recovered", "Dead"],
      datasets: [{
        data: percentData,
        backgroundColor: ['#f6c23e', '#1cc88a', '#e74a3b'],
        hoverBackgroundColor: ['#c29627', '#14a873', '#692019'],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
      }],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
              var indice = tooltipItem.index;
              return  data.labels[indice] +': '+data.datasets[0].data[indice] + '%';
          }
        },
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 10,
        yPadding: 10,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false
      },
      cutoutPercentage: 60,
    }

  });
}
