function convertTemperature() {


	var fromSelect = document.getElementById('fromSelect');
	var toSelect = document.getElementById('toSelect');
	var temp = document.getElementById('temp');


	var fromUnit = fromSelect.value;
	var toUnit = toSelect.value;
	var temperature = temp.value;


	var convertedTemperature;


	if (fromUnit === 'Celcius') {
		if (toUnit === 'Farenheit') {
			convertedTemperature = (temperature * 9 / 5) + 32;
		} else if (toUnit === 'Kelvin') {
			convertedTemperature = parseFloat(temperature) + 273.15;
		} else if (toUnit === 'Celcius'){
			convertedTemperature = parseFloat(temperature);
		}
		
		else {
			convertedTemperature = temperature;
		}



	} else if (fromUnit === 'Farenheit') {
		if (toUnit === 'Celcius') {
			convertedTemperature = (temperature - 32) * 5 / 9;
		} else if (toUnit === 'Kelvin') {
			convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
		} else {
			convertedTemperature = parseFloat(temperature);
		}



	} else if (fromUnit === 'Kelvin') {
		if (toUnit === 'Celcius') {
			convertedTemperature = temperature - 273.15;
		} else if (toUnit === 'Farenheit') {
			convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
		} else {
			convertedTemperature = parseFloat(temperature);
		}


	} else {
		convertedTemperature = parseFloat(temperature);
	}


	
	

	document.getElementById("resultText").innerHTML = convertedTemperature.toFixed(1) + 'ᴼ';




	


	var body = document.querySelector('body');


	var coldColor1 = 'blue';
	var coldColor2 = 'aquamarine';
	var neutralColor = 'lightsalmon'
	var hotColor1 = 'orange';
	var hotColor2 = 'orangered'
	var hotColor3 = 'red';
	

	
	if (convertedTemperature <= 0){
		body.style.backgroundColor = coldColor1;
	}
	
	else if (convertedTemperature >= 1 && convertedTemperature <=22 ){
		body.style.backgroundColor = coldColor2;
	}

	else if (convertedTemperature >=23 && convertedTemperature <=36) {
		body.style.backgroundColor = neutralColor;
	}

	else if (convertedTemperature >=37 && convertedTemperature <=60){
		body.style.backgroundColor = hotColor1;
	}

	else if (convertedTemperature >=61 && convertedTemperature <=85){
		body.style.backgroundColor = hotColor2;
	}

	else if (convertedTemperature >=86){
		body.style.backgroundColor = hotColor3;
	}



	
	}
	
	
	
	
	
	
	



    


