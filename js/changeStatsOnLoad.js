
	function numberWithCommas(x) {
		return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}


	function changeTotalCases(worldIndex){
		var totalCasesWorld = document.getElementById('totalCasesWorld');
		totalCasesWorld.innerHTML = numberWithCommas(apiData.response[worldIndex].cases.total);

	}

	function changeTotalDeaths(worldIndex){
		var totalDeaths = document.getElementById('totalDeathsWorld');
		totalDeaths.innerHTML = numberWithCommas(apiData.response[worldIndex].deaths.total);

	}

	function changeTotalRecovered(worldIndex){
		var totalRecovered = document.getElementById('totalRecoveredWorld');
		totalRecovered.innerHTML = numberWithCommas(apiData.response[worldIndex].cases.recovered);

	}

	function changeTotalActive(worldIndex){
		var totalActive = document.getElementById('totalActiveWorld');
		totalActive.innerHTML = numberWithCommas(apiData.response[worldIndex].cases.active);

	}
