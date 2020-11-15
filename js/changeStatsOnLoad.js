
	function numberWithCommas(x) {
		return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	function changeTotalCases(){
		var totalCasesWorld = document.getElementById('totalCasesWorld');
		totalCasesWorld.innerHTML = numberWithCommas(apiData.response[189].cases.total);

	}

	function changeTotalDeaths(){
		var totalDeaths = document.getElementById('totalDeathsWorld');
		totalDeaths.innerHTML = numberWithCommas(apiData.response[189].deaths.total);

	}

	function changeTotalRecovered(){
		var totalRecovered = document.getElementById('totalRecoveredWorld');
		totalRecovered.innerHTML = numberWithCommas(apiData.response[189].cases.recovered);

	}

	function changeTotalActive(){
		var totalActive = document.getElementById('totalActiveWorld');
		totalActive.innerHTML = numberWithCommas(apiData.response[189].cases.active);

	}
