var apiData;
var apiHistoryData;
//charts
var pieChartData;
var lineGraphData = [];
var worldIndexCharts =0;
var datesCaptured = [];


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-193.p.rapidapi.com/statistics",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "0615e4d36fmsh66f072fb08410a1p16729ajsn6296c6784032"
	},
	"dataSrc": ""
}

grabDataFromAPI()

function grabDataFromAPI(){
	$.ajax(settings).done( function(data) {
		apiData = data;
		apiData.response.find((item, i) =>{
			if(item.continent == "All"){
				worldIndexCharts = i
				changeTotalCases(worldIndexCharts)
				changeTotalDeaths(worldIndexCharts)
				changeTotalRecovered(worldIndexCharts)
				changeTotalActive(worldIndexCharts)
			}
		})
		console.log(apiData)
		populateDataTable()

		calculatePieChart();
		getHistory();
	})
}

function populateDataTable(){
	$('#table').dataTable( {

		"ordering": true,
		"order": [[ 1, "desc" ]],
		"paging": false,
		"data": apiData.response,
		"searching": true,
		"select": true,
		"columns": [
			{'data': 'country'},
			{'data': 'cases.total'},
			{'data': 'cases.new'},
			{'data': 'deaths.total'},
			{'data': 'deaths.new'},
			{'data': 'cases.active'},
			{'data': 'cases.recovered'},
			{'data': 'tests.total'}
		],
		////
		"rowCallback": function( row, data, index ) {
				if( data.country != null){
					$('td', row).eq(0).addClass('table-country')
				}

				if(data.cases.new != null){

					$('td', row).eq(2).addClass('table-new-cases')
				}

				if ( data.deaths.new != null)
				{
					$('td', row).eq(4).addClass('table-danger')
				}

				if( data.cases.recovered != "0"){
					$('td', row).eq(6).addClass('table-recovered')
				}
		}
		////

	})
}

function calculatePieChart(){
	var totalCases = apiData.response[worldIndexCharts].cases.total;
	var activeCases = apiData.response[worldIndexCharts].cases.active;
	var totalDeaths = apiData.response[worldIndexCharts].deaths.total;
	var totalRecovered = apiData.response[worldIndexCharts].cases.recovered;

	var percentDeath = Math.round(totalDeaths/totalCases * 10000)/100;
	var percentActive = Math.round(activeCases/totalCases* 10000)/100;
	var percentRecovered = Math.round(totalRecovered/totalCases* 10000)/100;

	pieChartData = [percentActive, percentRecovered, percentDeath];
	drawPieChart(pieChartData);


}

function getHistory(){
	var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-193.p.rapidapi.com/history?country=ALL",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "0615e4d36fmsh66f072fb08410a1p16729ajsn6296c6784032"
	}
}

$.ajax(settings).done(function (response) {
	apiHistoryData = response;
	parseHistory();
});
}

function parseHistory(){
	apiHistoryData.response.forEach(element => {
		if(!datesCaptured.includes(element.day)){
			datesCaptured.unshift(element.day);
			lineGraphData.unshift(element.cases.total);
		}
	});
	drawLineChart();
}
